'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  Search,
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
  BookmarkCheck,
} from 'lucide-react'
import Link from 'next/link'

export default function JobSeekerDashboard() {
  const [jobs, setJobs] = useState<any[]>([])
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set())
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)

      const { data: jobsData } = await supabase
        .from('jobs')
        .select(
          `
          *,
          companies:company_id (
            name,
            logo_url
          )
        `
        )
        .eq('status', 'open')
        .order('created_at', { ascending: false })

      setJobs(jobsData || [])

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const { data: savedData } = await supabase
          .from('saved_jobs')
          .select('job_id')
          .eq('user_id', user.id)

        if (savedData) {
          setSavedJobs(new Set(savedData.map((item) => item.job_id)))
        }
      }

      setLoading(false)
    }

    fetchJobs()
  }, [supabase])

  const handleSaveJob = async (jobId: string) => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) return

    if (savedJobs.has(jobId)) {
      await supabase
        .from('saved_jobs')
        .delete()
        .eq('job_id', jobId)
        .eq('user_id', user.id)

      const newSaved = new Set(savedJobs)
      newSaved.delete(jobId)
      setSavedJobs(newSaved)
    } else {
      await supabase.from('saved_jobs').insert({
        job_id: jobId,
        user_id: user.id,
      })

      const newSaved = new Set(savedJobs)
      newSaved.add(jobId)
      setSavedJobs(newSaved)
    }
  }

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Find Your Dream Job</h1>
        <p className="text-slate-400">
          Explore thousands of opportunities from top companies
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
        <input
          type="text"
          placeholder="Search jobs by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
      </div>

      {/* Jobs Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          <p className="text-slate-400 mt-4">Loading jobs...</p>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No jobs found</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-amber-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-amber-400 font-medium">
                    {job.companies?.name}
                  </p>
                </div>
                <button
                  onClick={() => handleSaveJob(job.id)}
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {savedJobs.has(job.id) ? (
                    <BookmarkCheck className="h-6 w-6 fill-amber-400 text-amber-400" />
                  ) : (
                    <Bookmark className="h-6 w-6" />
                  )}
                </button>
              </div>

              <p className="text-slate-400 mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
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

              <div className="flex gap-3">
                <Link
                  href={`/dashboard/jobs/${job.id}`}
                  className="flex-1 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
