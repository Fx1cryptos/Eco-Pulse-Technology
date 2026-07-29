'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  TrendingUp,
  Globe,
  Zap,
  CheckCircle,
  Star,
  Search,
  MessageSquare,
  Award,
  Target,
  Leaf,
  Heart
} from 'lucide-react'

export default function LandingPage() {
  const stats = [
    { number: '5,000+', label: 'Active Jobs' },
    { number: '2,000+', label: 'Companies' },
    { number: '50K+', label: 'Job Seekers' }
  ]

  const features = [
    {
      icon: Search,
      title: 'Smart Job Matching',
      description: 'AI-powered recommendations based on skills and career goals'
    },
    {
      icon: Globe,
      title: 'Sustainable Focus',
      description: 'Discover companies committed to environmental and social responsibility'
    },
    {
      icon: MessageSquare,
      title: 'Direct Messaging',
      description: 'Connect directly with recruiters and hiring managers'
    },
    {
      icon: Award,
      title: 'Skill Verification',
      description: 'Showcase verified skills to increase your visibility'
    },
    {
      icon: Target,
      title: 'Career Path Planning',
      description: 'Get personalized career development recommendations'
    },
    {
      icon: Zap,
      title: 'Job Alerts',
      description: 'Never miss an opportunity with real-time notifications'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Environmental Engineer',
      company: 'GreenTech Solutions',
      text: 'Found my dream job through Eco Pulse. The quality of matches was incredible!'
    },
    {
      name: 'Marcus Johnson',
      role: 'Sustainability Manager',
      company: 'EcoVentures Inc',
      text: 'As an employer, the platform made finding qualified candidates seamless.'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Climate Tech Lead',
      company: 'Future Earth',
      text: 'The community aspect really sets this platform apart. Love connecting with like-minded professionals.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
              alt="Eco Pulse Technology"
              width={45}
              height={45}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-white text-sm">Eco Pulse</p>
              <p className="text-xs text-amber-400">Career Platform</p>
            </div>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              href="#features"
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/auth/login"
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Login
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-lg transition-colors text-sm"
            >
              Join Now
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <p className="text-amber-400 text-sm font-semibold">The Future of Sustainable Careers</p>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Purpose in <span className="text-amber-400">Your Career</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Connect with leading companies committed to environmental sustainability and social impact. Grow your career while making a difference in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/auth/sign-up"
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/auth/login"
                className="px-8 py-4 border border-slate-600 text-white hover:bg-slate-800/50 font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" /> Browse Jobs
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm">
              <div>
                <p className="text-amber-400 font-bold text-2xl">98%</p>
                <p className="text-slate-400">Placement Rate</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold text-2xl">4.9★</p>
                <p className="text-slate-400">User Rating</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold text-2xl">24h</p>
                <p className="text-slate-400">Avg. Response</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
                alt="Eco Pulse Career Platform"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-bold text-amber-400 mb-2">{stat.number}</p>
                <p className="text-slate-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Powerful Features for Your Success</h2>
          <p className="text-lg text-slate-300">Everything you need to find and land your ideal sustainable career</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/10"
              >
                <div className="p-3 bg-amber-500/10 rounded-lg w-fit mb-4">
                  <Icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Loved by Professionals</h2>
            <p className="text-lg text-slate-300">Join thousands who found their perfect sustainable career</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-amber-400">{testimonial.role}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { num: '1', title: 'Create Profile', desc: 'Sign up and build your professional profile' },
            { num: '2', title: 'Discover Jobs', desc: 'Browse curated sustainable opportunities' },
            { num: '3', title: 'Apply & Connect', desc: 'Apply to jobs and message recruiters' },
            { num: '4', title: 'Get Hired', desc: 'Land your dream sustainable career' }
          ].map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 bg-amber-500 text-slate-950 font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Employers */}
      <section className="bg-gradient-to-r from-blue-950/20 to-amber-950/20 border-y border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">For Employers</h2>
              <p className="text-lg text-slate-300 mb-8">
                Find talented professionals passionate about sustainability and social impact.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400" />
                  <span className="text-slate-300">Access pre-screened candidates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400" />
                  <span className="text-slate-300">Post unlimited job listings</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400" />
                  <span className="text-slate-300">Build your employer brand</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-400" />
                  <span className="text-slate-300">Analytics and insights</span>
                </li>
              </ul>
              <Link
                href="/auth/sign-up"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors inline-block"
              >
                Post a Job
              </Link>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-2xl border border-slate-700">
              <Briefcase className="h-24 w-24 text-amber-400 mb-6" />
              <p className="text-2xl font-bold text-white">Build Your Dream Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-500/30 rounded-2xl p-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the Eco Pulse Technology community and find meaningful work that aligns with your values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/sign-up"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/20"
            >
              Get Started Today
            </Link>
            <Link
              href="https://ecopulse-career.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 font-bold rounded-lg transition-all"
            >
              Visit ecopulse-career.lovable.app
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 py-12">
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
                <span className="font-bold text-white">Eco Pulse</span>
              </Link>
              <p className="text-slate-400 text-sm">Sustainable careers for a better future.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Platform</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/auth/sign-up" className="hover:text-white transition">For Job Seekers</Link></li>
                <li><Link href="/auth/sign-up" className="hover:text-white transition">For Employers</Link></li>
                <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Company</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Legal</p>
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
  )
}
