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
  Star,
  MapPin,
  DollarSign,
  Clock,
  Bell,
  TrendingUp
} from 'lucide-react'

export default function LandingPage() {
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

  const jobs = [
    {
      title: 'Senior Environmental Engineer',
      company: 'GreenTech Solutions',
      location: 'San Francisco, CA',
      salary: '$120K - $160K',
      type: 'Full-time'
    },
    {
      title: 'Sustainability Manager',
      company: 'EcoVentures Inc',
      location: 'New York, NY',
      salary: '$90K - $130K',
      type: 'Full-time'
    },
    {
      title: 'Climate Tech Developer',
      company: 'Future Earth',
      location: 'Remote',
      salary: '$100K - $150K',
      type: 'Remote'
    }
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/auth/sign-up"
                    className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Search Jobs <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://ecopulse-career.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    Visit Career Portal
                  </Link>
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

        {/* Stats Banner */}
        <section className="bg-white border-y border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">5,000+</p>
                <p className="text-sm text-slate-600 mt-1">Active Jobs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">2,000+</p>
                <p className="text-sm text-slate-600 mt-1">Companies</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">50K+</p>
                <p className="text-sm text-slate-600 mt-1">Job Seekers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">98%</p>
                <p className="text-sm text-slate-600 mt-1">Match Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">4.9★</p>
                <p className="text-sm text-slate-600 mt-1">Avg Rating</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">24h</p>
                <p className="text-sm text-slate-600 mt-1">Response Time</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section id="jobs" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Opportunities</h2>
              <p className="text-lg text-slate-600">Explore curated positions from leading sustainable companies</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{job.title}</h3>
                      <p className="text-sm text-amber-600 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>
                  <Link
                    href="/auth/sign-up"
                    className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors text-sm text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/auth/login"
                className="inline-block px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-bold rounded-lg transition-colors"
              >
                View All Jobs →
              </Link>
            </div>
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

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Loved by Professionals</h2>
              <p className="text-lg text-slate-300">Join thousands who found their perfect sustainable career</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-8 bg-slate-800 rounded-lg border border-slate-700"
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
