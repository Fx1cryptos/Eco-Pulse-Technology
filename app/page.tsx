'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Briefcase, 
  Users,
  Globe,
  Search,
  MessageSquare,
  Award,
  CheckCircle,
  MapPin,
  Bell,
  TrendingUp
} from 'lucide-react'

export default function LandingPage() {
  const categories = [
    { title: 'Skilled Trades & Construction', detail: 'Electricians, HVAC, plumbing, solar, carpentry and more', icon: Briefcase },
    { title: 'Healthcare & Caregiving', detail: 'Caregivers, CNAs, RNs, disability support and home health', icon: Users },
    { title: 'Transportation & Logistics', detail: 'CDL drivers, delivery, warehouse and fleet operations', icon: TrendingUp },
    { title: 'Technology & Engineering', detail: 'Software, IT, cybersecurity, data and engineering roles', icon: Globe },
    { title: 'Administrative & Office', detail: 'Support, operations, HR, customer service and remote work', icon: MessageSquare },
    { title: 'Hospitality & General Employment', detail: 'Hotels, restaurants, retail, security and event work', icon: Award }
  ]

  const features = [
    {
      icon: Search,
      title: 'Smart Job Matching',
      description: 'AI-powered recommendations based on your skills and values'
    },
    {
      icon: Globe,
      title: 'Verified Green Companies',
      description: 'All employers meet strict sustainability standards'
    },
    {
      icon: MessageSquare,
      title: 'Direct Messaging',
      description: 'Connect instantly with recruiters and hiring managers'
    },
    {
      icon: Award,
      title: 'Skill Verification',
      description: 'Showcase verified certifications and credentials'
    },
    {
      icon: Bell,
      title: 'Real-Time Alerts',
      description: 'Never miss opportunities matching your preferences'
    },
    {
      icon: TrendingUp,
      title: 'Career Development',
      description: 'Access resources for professional growth'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white border-b border-slate-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
              alt="Eco Pulse"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <p className="font-bold text-slate-900 text-sm">Eco Pulse</p>
              <p className="text-xs text-amber-600">Career Hub</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Features</a>
            <a href="#jobs" className="text-slate-600 hover:text-slate-900 text-sm font-medium">Browse Jobs</a>
            <a href="#employers" className="text-slate-600 hover:text-slate-900 text-sm font-medium">For Employers</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/login"
              className="hidden sm:block px-4 py-2 text-slate-700 hover:text-slate-900 font-medium text-sm"
            >
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-amber-500/20 border border-amber-500/50 rounded-full mb-6">
                  <p className="text-amber-300 text-sm font-semibold">Sustainable Careers Platform</p>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Find Your <span className="text-amber-400">Purpose-Driven</span> Career
                </h1>
                <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                  Discover meaningful employment opportunities with companies committed to environmental sustainability and social impact. Connect with employers who share your values.
                </p>
                <form action="/dashboard" className="bg-white rounded-xl p-3 shadow-xl max-w-2xl">
                  <div className="grid sm:grid-cols-[1fr_1fr_auto] gap-2">
                    <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                      <Search className="h-4 w-4 text-slate-400" />
                      <span className="sr-only">Job title or keyword</span>
                      <input name="q" placeholder="Job title or keyword" className="w-full text-sm text-slate-900 outline-none" />
                    </label>
                    <label className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span className="sr-only">Location</span>
                      <input name="location" placeholder="City, state or ZIP" className="w-full text-sm text-slate-900 outline-none" />
                    </label>
                    <button type="submit" className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                      Search <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-200">
                  <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-400" />Browse without an account</span>
                  <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-amber-400" />Apply on the original employer site</span>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
                    alt="Eco Pulse Career Platform"
                    width={350}
                    height={350}
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform capabilities banner */}
        <section className="bg-white border-y border-slate-200 py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Nationwide discovery', text: 'Search across all 50 states, cities, ZIP codes and remote roles.' },
                { title: 'Multiple work styles', text: 'Compare full-time, part-time, contract, temporary and freelance options.' },
                { title: 'Built for real applications', text: 'Keep the original source and direct application path visible.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
                  <div><p className="font-bold text-slate-900">{item.title}</p><p className="text-sm text-slate-600 mt-1">{item.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Jobs Directory Banner */}
        <section id="jobs" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3">Live opportunities</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Search jobs by category</h2>
                <p className="text-lg text-slate-600 max-w-2xl">Eco Pulse Technology is built to surface current listings with source, posting date and direct application details. Connect a live feed to publish verified openings here.</p>
              </div>
              <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">Open job directory <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <Link key={category.title} href={`/dashboard?q=${encodeURIComponent(category.title)}`} className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div className="p-3 bg-amber-100 rounded-lg"><Icon className="h-6 w-6 text-amber-700" /></div>
                      <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{category.title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{category.detail}</p>
                  </Link>
                )
              })}
            </div>
            <p className="mt-8 text-center text-xs text-slate-500">Listings should be displayed only after an authorized job feed or employer submission confirms availability. No sample vacancies are presented as real jobs.</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features</h2>
              <p className="text-lg text-slate-600">Everything you need to find your ideal sustainable career</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div key={idx} className="p-8 bg-slate-50 rounded-lg border border-slate-200 hover:border-amber-300 transition-colors">
                    <div className="p-3 bg-amber-100 rounded-lg w-fit mb-4">
                      <Icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Trust and transparency banner */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3">Trust by design</p>
              <h2 className="text-4xl font-bold mb-4">A clearer way to find work</h2>
              <p className="text-lg text-slate-300">Every published vacancy should show where it came from, when it was posted and where the application goes. Eco Pulse Technology keeps the job seeker in control.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Original source links', text: 'Apply through the employer or authorized job provider—not an unknown intermediary.' },
                { title: 'Freshness signals', text: 'Show posting dates, deadlines and availability status when the source provides them.' },
                { title: 'Privacy-conscious tools', text: 'Save jobs, manage alerts and build a profile without exposing private information publicly.' }
              ].map((item) => (
                <div key={item.title} className="p-7 bg-slate-800 rounded-xl border border-slate-700">
                  <CheckCircle className="h-6 w-6 text-amber-400 mb-5" />
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900">How It Works</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: '1', title: 'Create Profile', desc: 'Sign up and build your professional profile' },
                { num: '2', title: 'Discover Jobs', desc: 'Browse curated sustainable opportunities' },
                { num: '3', title: 'Apply & Connect', desc: 'Apply to jobs and message recruiters' },
                { num: '4', title: 'Get Hired', desc: 'Land your dream sustainable career' }
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="w-16 h-16 bg-amber-500 text-white font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Employers */}
        <section id="employers" className="bg-gradient-to-r from-blue-50 to-amber-50 border-y border-slate-200 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">For Employers</h2>
                <p className="text-lg text-slate-700 mb-8">
                  Find talented professionals passionate about sustainability and social impact.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    <span className="text-slate-700">Access pre-screened candidates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    <span className="text-slate-700">Post unlimited job listings</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    <span className="text-slate-700">Build your employer brand</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-amber-600" />
                    <span className="text-slate-700">Analytics and insights</span>
                  </li>
                </ul>
                <Link
                  href="/auth/sign-up"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors inline-block"
                >
                  Post a Job
                </Link>
              </div>
              <div className="bg-white p-12 rounded-2xl border border-slate-200 shadow-lg">
                <Briefcase className="h-24 w-24 text-amber-600 mb-6" />
                <p className="text-2xl font-bold text-slate-900">Build Your Dream Team</p>
                <p className="text-slate-600 mt-3">Connect with vetted sustainability professionals ready to make an impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-amber-500 to-blue-600 rounded-2xl p-12 text-white text-center">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join the Eco Pulse Technology community and find meaningful work that aligns with your values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/auth/sign-up"
                  className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link
                  href="https://ecopulse-career.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white/20 font-bold rounded-lg transition-all"
                >
                  Visit ecopulse-career.lovable.app
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
                    alt="Eco Pulse"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                  <span className="font-bold">Eco Pulse</span>
                </Link>
                <p className="text-slate-400 text-sm">Sustainable careers for a better future.</p>
              </div>
              <div>
                <p className="font-semibold mb-4">Platform</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="/auth/sign-up" className="hover:text-white transition">For Job Seekers</Link></li>
                  <li><Link href="/auth/sign-up" className="hover:text-white transition">For Employers</Link></li>
                  <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-4">Company</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                  <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                  <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-4">Legal</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
                  <li><Link href="#" className="hover:text-white transition">Terms</Link></li>
                  <li><Link href="#" className="hover:text-white transition">Cookies</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400">
              <p>&copy; 2024 Eco Pulse Technology. All rights reserved.</p>
              <Link href="https://ecopulse-career.lovable.app" className="text-amber-400 hover:text-amber-300 transition">
                ecopulse-career.lovable.app
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
