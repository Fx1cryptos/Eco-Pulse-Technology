'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  Clock,
  User,
  MessageSquare,
  CheckCircle,
  Loader2,
} from 'lucide-react'

export default function JobManagementPage() {
  const { id } = useParams()
  const router = useRouter()
  const [job, setJob] = useState<any>(null)
  const [applications, setApplications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      // Fetch job
      const { data: jobData } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single()

      if (!jobData) {
        router.push('/dashboard/employer')
        return
      }

      setJob(jobData)

      // Verify ownership
      const { data: company } = await supabase
        .from('companies')
        .select('*')
        .eq('id', jobData.company_id)
        .eq('employer_id', user.id)
        .single()

      if (!company) {
        router.push('/dashboard/employer')
        return
      }

      // Fetch applications
      const { data: applicationsData } = await supabase
        .from('applications')
        .select(
          `
          *,
          profiles:user_id (
            first_name,
            last_name,
            email,
            phone,
            location,
            bio
          )
        `
        )
        .eq('job_id', id)
        .order('created_at', { ascending: false })

      setApplications(applicationsData || [])
      setLoading(false)
    }

    if (id) {
      fetchData()
    }
  }, [id, supabase, router])

  const handleStatusChange = async (
    applicationId: string,
    newStatus: string
  ) => {
    setUpdating(true)

    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', applicationId)

      if (!error) {
        setApplications(
          applications.map((app) =>
            app.id === applicationId ? { ...app, status: newStatus } : app
          )
        )
      }
    } finally {
      setUpdating(false)
    }
  }

  const handleCloseJob = async () => {
    if (!confirm('Are you sure you want to close this job?')) return

    setUpdating(true)

    try {
      const { error } = await supabase
        .from('jobs')
        .update({ status: 'closed' })
        .eq('id', id)

      if (!error) {
        router.push('/dashboard/employer')
      }
    } finally {
      setUpdating(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
        <p className="text-slate-400 mt-4">Loading job details...</p>
      </div>
    )
  }

  if (!job) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400 mb-4">Job not found</p>
        <Link
          href="/dashboard/employer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-blue-500/20 text-blue-400'
      case 'reviewing':
        return 'bg-purple-500/20 text-purple-400'
      case 'shortlisted':
        return 'bg-amber-500/20 text-amber-400'
      case 'accepted':
        return 'bg-green-500/20 text-green-400'
      case 'rejected':
        return 'bg-red-500/20 text-red-400'
      default:
        return 'bg-slate-700 text-slate-400'
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <Link
        href="/dashboard/employer"
        className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>

      {/* Job Header */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-slate-400">
              {job.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
              )}
              {job.job_type && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{job.job_type}</span>
                </div>
              )}
              {job.salary_min && job.salary_max && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>
                    ${job.salary_min.toLocaleString()} - $
                    {job.salary_max.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleCloseJob}
              disabled={updating || job.status === 'closed'}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-slate-600 text-white rounded-lg transition-colors font-semibold disabled:cursor-not-allowed"
            >
              Close Job
            </button>
            <span
              className={`px-4 py-2 rounded-lg font-semibold ${
                job.status === 'open'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-red-500/20 text-red-400'
              }`}
            >
              {job.status === 'open' ? 'Active' : 'Closed'}
            </span>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
          <p className="text-slate-300 whitespace-pre-line mb-8">
            {job.description}
          </p>

          {job.requirements && (
            <>
              <h2 className="text-2xl font-bold text-white mb-4">
                Requirements
              </h2>
              <p className="text-slate-300 whitespace-pre-line">
                {job.requirements}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Applications */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-white mb-6">
          Applications ({applications.length})
        </h2>

        {applications.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No applications yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-slate-700/50 border border-slate-600 rounded-lg p-6 hover:border-slate-500 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {app.profiles?.first_name} {app.profiles?.last_name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm mt-2">
                      {app.profiles?.email && (
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{app.profiles.email}</span>
                        </div>
                      )}
                      {app.profiles?.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{app.profiles.location}</span>
                        </div>
                      )}
                      {app.profiles?.phone && (
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{app.profiles.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                      app.status
                    )}`}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </div>

                {app.cover_letter && (
                  <div className="mb-4 p-4 bg-slate-800 rounded-lg border border-slate-600">
                    <p className="text-slate-300 text-sm">{app.cover_letter}</p>
                  </div>
                )}

                <div className="flex gap-2 flex-wrap">
                  {app.status !== 'accepted' && (
                    <button
                      onClick={() => handleStatusChange(app.id, 'accepted')}
                      disabled={updating}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-slate-600 text-white rounded-lg transition-colors text-sm font-semibold disabled:cursor-not-allowed"
                    >
                      {updating && <Loader2 className="h-4 w-4 animate-spin" />}
                      <CheckCircle className="h-4 w-4" />
                      Accept
                    </button>
                  )}
                  {app.status !== 'shortlisted' && app.status !== 'rejected' && (
                    <button
                      onClick={() => handleStatusChange(app.id, 'shortlisted')}
                      disabled={updating}
                      className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-600 text-white rounded-lg transition-colors text-sm font-semibold disabled:cursor-not-allowed"
                    >
                      Shortlist
                    </button>
                  )}
                  {app.status !== 'rejected' && (
                    <button
                      onClick={() => handleStatusChange(app.id, 'rejected')}
                      disabled={updating}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-slate-600 text-white rounded-lg transition-colors text-sm font-semibold disabled:cursor-not-allowed"
                    >
                      Reject
                    </button>
                  )}
                </div>

                <p className="text-slate-500 text-xs mt-4">
                  Applied on{' '}
                  {new Date(app.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
