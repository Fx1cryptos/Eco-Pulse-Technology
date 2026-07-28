'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { Plus, Briefcase, Users, TrendingUp } from 'lucide-react'

export default function EmployerDashboard() {
  const [user, setUser] = useState<any>(null)
  const [company, setCompany] = useState<any>(null)
  const [jobs, setJobs] = useState<any[]>([])
  const [applications, setApplications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      setUser(user)

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (profile?.user_type !== 'employer') {
        router.push('/dashboard')
        return
      }

      const { data: companyData } = await supabase
        .from('companies')
        .select('*')
        .eq('employer_id', user.id)
        .single()

      if (companyData) {
        setCompany(companyData)

        const { data: jobsData } = await supabase
          .from('jobs')
          .select('*')
          .eq('company_id', companyData.id)
          .order('created_at', { ascending: false })

        setJobs(jobsData || [])

        const { data: applicationsData } = await supabase
          .from('applications')
          .select(
            `
            *,
            jobs:job_id (
              title
            ),
            profiles:user_id (
              first_name,
              last_name,
              email
            )
          `
          )
          .in('job_id', (jobsData || []).map((j) => j.id))

        setApplications(applicationsData || [])
      }

      setLoading(false)
    }

    fetchData()
  }, [supabase, router])

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
        <p className="text-slate-400 mt-4">Loading...</p>
      </div>
    )
  }

  if (!company) {
    return (
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Create Your Company</h2>
        <p className="text-slate-400 mb-6">
          Set up your company profile to start posting jobs
        </p>
        <Link
          href="/dashboard/employer/company/new"
          className="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
        >
          Create Company
        </Link>
      </div>
    )
  }

  const stats = [
    {
      label: 'Active Jobs',
      value: jobs.filter((j) => j.status === 'open').length,
      icon: Briefcase,
    },
    {
      label: 'Applications',
      value: applications.length,
      icon: Users,
    },
    {
      label: 'Profile Views',
      value: '1,234',
      icon: TrendingUp,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {company.name}
          </h1>
          <p className="text-slate-400">Manage your jobs and applications</p>
        </div>
        <Link
          href="/dashboard/employer/jobs/new"
          className="flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
        >
          <Plus className="h-5 w-5" />
          Post Job
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-400 font-medium">{stat.label}</h3>
                <Icon className="h-6 w-6 text-amber-400" />
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Jobs List */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Your Job Postings</h2>
        {jobs.length === 0 ? (
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8 text-center">
            <p className="text-slate-400 mb-4">No jobs posted yet</p>
            <Link
              href="/dashboard/employer/jobs/new"
              className="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors"
            >
              Post Your First Job
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/dashboard/employer/jobs/${job.id}`}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 transition-colors block"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {job.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-2">
                      Posted{' '}
                      {new Date(job.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      job.status === 'open'
                        ? 'bg-green-500/20 text-green-400'
                        : job.status === 'closed'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {job.status.charAt(0).toUpperCase() +
                      job.status.slice(1)}
                  </span>
                </div>
                <div className="text-slate-400 text-sm">
                  {applications.filter((a) => a.job_id === job.id).length}{' '}
                  applications
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
