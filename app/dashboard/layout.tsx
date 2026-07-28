'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { LogOut, Menu, X, Bell } from 'lucide-react'
import { NotificationsDropdown } from '@/components/notifications'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push('/auth/login')
        return
      }

      setUser(user)

      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      setProfile(profileData)
    }

    checkAuth()
  }, [supabase, router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const getDashboardLink = (type: string) => {
    if (type === 'job_seeker') return '/dashboard'
    if (type === 'employer') return '/dashboard/employer'
    if (type === 'admin') return '/dashboard/admin'
    return '/dashboard'
  }

  if (!user || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mb-4"></div>
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  const dashboardLink = getDashboardLink(profile.user_type)

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href={dashboardLink} className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
                alt="Eco Pulse Technology"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-white font-bold text-xl hidden sm:inline">
                Eco Pulse
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/dashboard/messages"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <Bell className="h-5 w-5" />
                <span className="text-sm">Messages</span>
              </Link>
              <NotificationsDropdown />
              <div className="flex items-center gap-3">
                <span className="text-slate-300 text-sm">
                  {profile.first_name} {profile.last_name}
                </span>
                <span className="inline-block px-3 py-1 bg-amber-600/20 text-amber-400 text-xs font-semibold rounded-full">
                  {profile.user_type === 'job_seeker'
                    ? 'Job Seeker'
                    : profile.user_type === 'employer'
                      ? 'Employer'
                      : 'Admin'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-slate-300 text-sm">
                  {profile.first_name} {profile.last_name}
                </span>
                <span className="inline-block px-3 py-1 bg-amber-600/20 text-amber-400 text-xs font-semibold rounded-full">
                  {profile.user_type === 'job_seeker'
                    ? 'Job Seeker'
                    : profile.user_type === 'employer'
                      ? 'Employer'
                      : 'Admin'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
