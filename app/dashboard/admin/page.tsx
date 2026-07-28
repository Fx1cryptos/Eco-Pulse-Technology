'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import {
  Users,
  Briefcase,
  TrendingUp,
  AlertCircle,
  Filter,
  Search,
} from 'lucide-react'

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalJobs: 0,
    totalApplications: 0,
    activeCompanies: 0,
  })
  const [users, setUsers] = useState<any[]>([])
  const [jobs, setJobs] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'jobs'>(
    'overview'
  )
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchAdminData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      setUser(user)

      // Check if user is admin
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (profile?.user_type !== 'admin') {
        router.push('/dashboard')
        return
      }

      // Fetch stats
      const { data: usersData } = await supabase.from('profiles').select('*')

      const { data: jobsData } = await supabase.from('jobs').select('*')

      const { data: applicationsData } = await supabase
        .from('applications')
        .select('*')

      const { data: companiesData } = await supabase.from('companies').select(
        '*'
      )

      setStats({
        totalUsers: usersData?.length || 0,
        totalJobs: jobsData?.length || 0,
        totalApplications: applicationsData?.length || 0,
        activeCompanies: companiesData?.length || 0,
      })

      setUsers(usersData || [])
      setJobs(jobsData || [])
      setLoading(false)
    }

    fetchAdminData()
  }, [supabase, router])

  const filteredUsers = users.filter(
    (u) =>
      u.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredJobs = jobs.filter((j) =>
    j.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
        <p className="text-slate-400 mt-4">Loading admin panel...</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-slate-400">Platform management and analytics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Total Users</h3>
            <Users className="h-6 w-6 text-blue-400" />
          </div>
          <p className="text-3xl font-bold text-white">{stats.totalUsers}</p>
          <p className="text-slate-500 text-sm mt-2">Job seekers & employers</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Active Jobs</h3>
            <Briefcase className="h-6 w-6 text-amber-400" />
          </div>
          <p className="text-3xl font-bold text-white">{stats.totalJobs}</p>
          <p className="text-slate-500 text-sm mt-2">Job listings posted</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Applications</h3>
            <TrendingUp className="h-6 w-6 text-green-400" />
          </div>
          <p className="text-3xl font-bold text-white">
            {stats.totalApplications}
          </p>
          <p className="text-slate-500 text-sm mt-2">Total applications</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-400 font-medium">Companies</h3>
            <AlertCircle className="h-6 w-6 text-purple-400" />
          </div>
          <p className="text-3xl font-bold text-white">
            {stats.activeCompanies}
          </p>
          <p className="text-slate-500 text-sm mt-2">Registered companies</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-700">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'overview'
              ? 'border-b-2 border-amber-500 text-amber-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'users'
              ? 'border-b-2 border-amber-500 text-amber-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === 'jobs'
              ? 'border-b-2 border-amber-500 text-amber-400'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Jobs
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Users */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Users</h2>
            <div className="space-y-3">
              {users.slice(0, 5).map((u) => (
                <div
                  key={u.id}
                  className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium">
                      {u.first_name} {u.last_name}
                    </p>
                    <p className="text-slate-400 text-sm capitalize">
                      {u.user_type.replace('_', ' ')}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-amber-600/20 text-amber-400 text-xs rounded-full">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Jobs */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Recent Jobs</h2>
            <div className="space-y-3">
              {jobs.slice(0, 5).map((j) => (
                <div
                  key={j.id}
                  className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium">{j.title}</p>
                    <p className="text-slate-400 text-sm">{j.location}</p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${
                      j.status === 'open'
                        ? 'bg-green-500/20 text-green-400'
                        : j.status === 'closed'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-slate-700 text-slate-400'
                    }`}
                  >
                    {j.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Name
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Type
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Location
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u) => (
                  <tr key={u.id} className="border-b border-slate-700">
                    <td className="px-4 py-3 text-white">
                      {u.first_name} {u.last_name}
                    </td>
                    <td className="px-4 py-3 text-slate-400 capitalize">
                      {u.user_type.replace('_', ' ')}
                    </td>
                    <td className="px-4 py-3 text-slate-400">
                      {u.location || '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                        Active
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Jobs Tab */}
      {activeTab === 'jobs' && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Title
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Location
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Type
                  </th>
                  <th className="px-4 py-3 font-semibold text-slate-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((j) => (
                  <tr key={j.id} className="border-b border-slate-700">
                    <td className="px-4 py-3 text-white">{j.title}</td>
                    <td className="px-4 py-3 text-slate-400">{j.location}</td>
                    <td className="px-4 py-3 text-slate-400">{j.job_type}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          j.status === 'open'
                            ? 'bg-green-500/20 text-green-400'
                            : j.status === 'closed'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {j.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
