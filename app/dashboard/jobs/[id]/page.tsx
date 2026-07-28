'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import {
  MapPin,
  DollarSign,
  Clock,
  Briefcase,
  ArrowLeft,
  Send,
  Loader2,
} from 'lucide-react'

export default function JobDetailPage() {
  const { id } = useParams()
  const [job, setJob] = useState<any>(null)
  const [company, setCompany] = useState<any>(null)
  const [user, setUser] = useState<any>(null)
  const [applied, setApplied] = useState(false)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [coverLetter, setCoverLetter] = useState('')
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const { data: jobData } = await supabase
        .from('jobs')
        .select('*')
        .eq('id', id)
        .single()

      if (jobData) {
        setJob(jobData)

        const { data: companyData } = await supabase
          .from('companies')
          .select('*')
          .eq('id', jobData.company_id)
          .single()

        setCompany(companyData)
      }

      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const { data: applicationData } = await supabase
          .from('applications')
          .select('*')
          .eq('job_id', id)
          .eq('user_id', user.id)
          .single()

        setApplied(!!applicationData)
      }

      setLoading(false)
    }

    if (id) {
      fetchData()
    }
  }, [id, supabase])

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    setSubmitting(true)

    try {
      const { error } = await supabase.from('applications').insert({
        job_id: id,
        user_id: user.id,
        cover_letter: coverLetter,
      })

      if (!error) {
        setApplied(true)
        setCoverLetter('')
      }
    } finally {
      setSubmitting(false)
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
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Jobs
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Jobs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-white mb-2">{job.title}</h1>
            <p className="text-amber-400 text-lg font-semibold mb-6">
              {company?.name}
            </p>

            <div className="flex flex-wrap gap-6 mb-8 text-slate-300">
              {job.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>{job.location}</span>
                </div>
              )}
              {job.job_type && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-amber-400" />
                  <span>{job.job_type}</span>
                </div>
              )}
              {job.employment_type && (
                <div className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-amber-400" />
                  <span>{job.employment_type}</span>
                </div>
              )}
              {job.salary_min && job.salary_max && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-amber-400" />
                  <span>
                    ${job.salary_min.toLocaleString()} - $
                    {job.salary_max.toLocaleString()}
                  </span>
                </div>
              )}
            </div>

            <div className="border-t border-slate-700 pt-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Job Description
              </h2>
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
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 sticky top-24">
            {applied ? (
              <div className="text-center">
                <div className="inline-block p-3 bg-green-500/20 rounded-full mb-4">
                  <Send className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Application Sent
                </h3>
                <p className="text-slate-400 text-sm">
                  Your application has been submitted. The employer will review
                  it shortly.
                </p>
              </div>
            ) : user ? (
              <form onSubmit={handleApply} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Tell the employer why you&apos;re interested in this role..."
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-4 py-3 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Applying...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Apply Now
                    </>
                  )}
                </button>
              </form>
            ) : (
              <Link
                href="/auth/login"
                className="block w-full px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors text-center"
              >
                Sign In to Apply
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
