'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Briefcase,
  FileText,
  Settings,
  Users,
  BarChart3,
  MessageSquare,
  Heart,
  Home,
} from 'lucide-react'

interface NavItem {
  href: string
  label: string
  icon: React.ReactNode
  badge?: string
}

interface SidebarNavProps {
  userType: 'job_seeker' | 'employer' | 'admin'
}

export function SidebarNav({ userType }: SidebarNavProps) {
  const pathname = usePathname()

  const getNavItems = (): NavItem[] => {
    const commonItems: NavItem[] = [
      { href: '/dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
      { href: '/dashboard/messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
    ]

    if (userType === 'job_seeker') {
      return [
        ...commonItems,
        { href: '/dashboard/jobs', label: 'Browse Jobs', icon: <Briefcase className="w-5 h-5" /> },
        { href: '/dashboard/applications', label: 'My Applications', icon: <FileText className="w-5 h-5" /> },
        { href: '/dashboard/saved-jobs', label: 'Saved Jobs', icon: <Heart className="w-5 h-5" /> },
        { href: '/dashboard/profile', label: 'Profile', icon: <Settings className="w-5 h-5" /> },
      ]
    } else if (userType === 'employer') {
      return [
        ...commonItems,
        { href: '/dashboard/employer', label: 'Employer Hub', icon: <Home className="w-5 h-5" /> },
        { href: '/dashboard/employer/company/new', label: 'Create Company', icon: <Users className="w-5 h-5" /> },
        { href: '/dashboard/employer/jobs/new', label: 'Post Job', icon: <Briefcase className="w-5 h-5" /> },
        { href: '/dashboard/employer/jobs', label: 'My Jobs', icon: <FileText className="w-5 h-5" /> },
      ]
    } else if (userType === 'admin') {
      return [
        ...commonItems,
        { href: '/dashboard/admin', label: 'Admin Dashboard', icon: <BarChart3 className="w-5 h-5" /> },
        { href: '/dashboard/admin/users', label: 'Users', icon: <Users className="w-5 h-5" /> },
        { href: '/dashboard/admin/jobs', label: 'Jobs', icon: <Briefcase className="w-5 h-5" /> },
        { href: '/dashboard/admin/settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
      ]
    }

    return commonItems
  }

  const navItems = getNavItems()

  return (
    <nav className="space-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-amber-600/20 text-amber-400 font-semibold'
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
