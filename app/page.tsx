'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { 
  ArrowRight, 
  Briefcase, 
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
  const jobs = [
    { title: 'Senior Software Engineer (Frontend)', company: 'Tekmetric', location: 'Remote USA', mode: 'Remote', type: 'Full-time', salary: '$125,000–$165,000/year', description: 'Build polished product experiences for a modern automotive software platform.', experience: 'Senior' },
    { title: 'Customer Service Representative', company: 'ibex', location: 'New Mexico residents', mode: 'Remote', type: 'Full-time', salary: '$16.50/hour', description: 'Support customers through thoughtful, reliable service from home.', experience: 'Entry level' },
    { title: 'Inpatient Coding Specialist', company: 'e4health', location: 'Remote USA', mode: 'Remote', type: 'Full-time', salary: 'From $35/hour', description: 'Apply clinical coding expertise to accurate inpatient documentation.', experience: 'Experienced' },
    { title: 'Strategic Finance Associate', company: 'Pepper', location: 'Remote USA', mode: 'Remote', type: 'Full-time', salary: '$95,000–$115,000/year', description: 'Partner with teams on planning, analysis and strategic financial decisions.', experience: 'Associate' },
    { title: 'Operations Associate', company: 'Stash', location: 'Remote USA', mode: 'Remote', type: 'Full-time', salary: '$70,000–$80,000/year', description: 'Improve operational processes for a customer-first financial platform.', experience: 'Associate' },
    { title: 'FP&A Manager', company: 'Robert Half Client', location: 'Glen Rock, NJ', mode: 'Hybrid', type: 'Contract / Temp-to-Hire', salary: '$76–$88/hour', description: 'Lead forecasting, budgeting and reporting for a growing organization.', experience: 'Manager' },
    { title: 'Hybrid Cloud Engineer', company: 'TEGNA Inc.', location: 'Virginia, IL', mode: 'Hybrid', type: 'Full-time', salary: 'Competitive', description: 'Design, support and improve cloud infrastructure and enterprise systems.', experience: 'Experienced' },
    { title: 'Board Certified Behavior Analyst (BCBA)', company: 'Smilestones ABA', location: 'Houston, TX', mode: 'Hybrid', type: 'Full-time', salary: '$60–$80/hour', description: 'Lead individualized behavior support programs for children and families.', experience: 'Certified' },
    { title: 'Psychologist', company: 'Greenlife Healthcare Staffing', location: 'Bronx, NY', mode: 'Hybrid', type: 'Full-time', salary: '$115,000–$125,000/year', description: 'Deliver patient-centered psychological services within a collaborative care team.', experience: 'Licensed' },
    { title: 'Data Engineer (GenAI & AWS)', company: 'Tech / Consulting Partner', location: 'Jacksonville, FL', mode: 'Hybrid', type: 'Full-time', salary: '$110,000–$145,000/year', description: 'Build reliable data systems and generative AI solutions on AWS.', experience: 'Experienced' },
    { title: 'General Warehouse Associate', company: 'Randstad Staffing', location: 'Tracy, CA', mode: 'On-site', type: 'Full-time', salary: '$18–$23/hour', description: 'Support receiving, picking, packing and shipping operations.', experience: 'Entry level' },
    { title: 'Production Associate', company: 'Randstad Staffing', location: 'Bowie, MD', mode: 'On-site', type: 'Full-time', salary: '$17/hour', description: 'Join a production team focused on quality, safety and dependable output.', experience: 'Entry level' },
    { title: 'Mid-Level Designer', company: 'Brand & Visual Systems', location: 'San Francisco, CA', mode: 'On-site', type: 'Full-time', salary: '$85,000–$115,000/year', description: 'Create brand systems and visual experiences across digital and print.', experience: 'Mid-level' },
    { title: 'IT Technician', company: 'Robert Half Staffing', location: 'Austin, TX', mode: 'On-site', type: 'Full-time', salary: '$18.21–$21.09/hour', description: 'Provide hands-on technical support across workplace devices and systems.', experience: 'Experienced' },
    { title: 'Neuroradiologist Physician', company: 'UC Health System', location: 'Sacramento, CA', mode: 'On-site', type: 'Full-time', salary: '$350,000+/year', description: 'Join a physician-led team providing specialized neuroradiology care.', experience: 'Physician' },
    { title: 'Real Estate Acquisition Specialist', company: 'Estate Solutions Group', location: 'Atlanta, GA', mode: 'On-site', type: 'Full-time', salary: '$80,000–$150,000/year', description: 'Source and evaluate acquisition opportunities while building client relationships.', experience: 'Experienced' },
    { title: 'Journeyman Electrician', company: 'Holland Electrical Systems', location: 'Holland, MI', mode: 'On-site', type: 'Full-time', salary: '$77,000–$82,000/year', description: 'Install, maintain and troubleshoot electrical systems on active job sites.', experience: 'Journeyman' },
    { title: 'Commercial & Residential Electrician', company: 'Standtech Electric', location: 'Port Washington, NY', mode: 'On-site', type: 'Full-time', salary: '$80,000–$120,000/year', description: 'Deliver safe electrical installations and service for residential and commercial customers.', experience: 'Experienced' },
    { title: 'Solar Installation Electrician', company: 'SunPower', location: 'Raleigh, NC', mode: 'On-site', type: 'Full-time', salary: '$80,000–$100,000/year', description: 'Install and commission solar energy systems with a safety-first team.', experience: 'Experienced' },
    { title: 'Facilities Handyman / Maintenance Technician', company: 'Mr. Handyman', location: 'Dallas, TX', mode: 'On-site', type: 'Full-time', salary: '$25–$35/hour', description: 'Keep homes and facilities safe, functional and well maintained.', experience: 'Experienced' },
    { title: 'In-Home Caregiver for Seniors', company: 'Home Instead', location: 'Sequim, WA', mode: 'On-site', type: 'Part-time / Full-time', salary: '$20–$23/hour', description: 'Provide compassionate daily support and companionship to older adults.', experience: 'Caregiving' },
    { title: 'Direct Support Professional', company: 'Creative Positive Environments', location: 'La Verne, CA', mode: 'On-site', type: 'Full-time', salary: '$17.50–$18/hour', description: 'Support individuals with developmental disabilities in daily living and community activities.', experience: 'Entry level' },
    { title: 'Certified Nursing Assistant / Home Health Aide', company: 'BrightStar Care', location: 'Stillwater, MN', mode: 'On-site', type: 'Part-time / Full-time', salary: '$21–$23/hour', description: 'Deliver respectful, dependable care in clients’ homes.', experience: 'Certified' },
    { title: 'Senior Care Aide', company: 'Visiting Angels', location: 'Nashua, NH', mode: 'On-site', type: 'Part-time / Full-time', salary: '$18–$25/hour', description: 'Help seniors remain independent with personalized in-home support.', experience: 'Caregiving' }
  ]

  const [jobMode, setJobMode] = useState('All')
  const [jobQuery, setJobQuery] = useState('')
  const filteredJobs = useMemo(() => jobs.filter((job) => {
    const matchesMode = jobMode === 'All' || job.mode === jobMode
    const query = jobQuery.trim().toLowerCase()
    return matchesMode && (!query || `${job.title} ${job.company} ${job.location}`.toLowerCase().includes(query))
  }), [jobMode, jobQuery])

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

        {/* Main platform banner */}
        <section className="bg-amber-50 border-y border-amber-100 py-6">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div><p className="font-bold text-slate-900">Looking for more opportunities?</p><p className="text-sm text-slate-600 mt-1">Explore additional career resources and opportunities on our main platform.</p></div>
            <Link href="https://eco-pulse-technology.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-5 py-3 text-sm font-bold text-white hover:bg-amber-700 transition-colors">Visit Eco Pulse Main Site <ArrowRight className="h-4 w-4" /></Link>
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

        {/* Jobs Directory */}
        <section id="jobs" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-600 mb-3">Current opportunities</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Find work that fits your life</h2>
                <p className="text-lg text-slate-600 max-w-2xl">Browse the latest openings across remote, hybrid and on-site teams. Confirm availability and application details with the employer before applying.</p>
              </div>
              <Link href="https://eco-pulse-technology.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">Visit main platform <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="flex flex-col md:flex-row gap-3 mb-8">
              <label className="flex-1 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3">
                <Search className="h-4 w-4 text-slate-400" />
                <span className="sr-only">Filter jobs</span>
                <input value={jobQuery} onChange={(event) => setJobQuery(event.target.value)} placeholder="Search title, company or location" className="w-full text-sm text-slate-900 outline-none" />
              </label>
              <div className="flex gap-2 overflow-x-auto">
                {['All', 'Remote', 'Hybrid', 'On-site'].map((mode) => (
                  <button key={mode} type="button" onClick={() => setJobMode(mode)} className={`whitespace-nowrap rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${jobMode === mode ? 'bg-amber-500 text-white' : 'bg-white border border-slate-200 text-slate-700 hover:border-amber-400'}`}>{mode}</button>
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-500 mb-5">Showing {filteredJobs.length} of {jobs.length} opportunities</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredJobs.map((job) => (
                <article key={`${job.title}-${job.company}`} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-400 hover:shadow-lg transition-all flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${job.mode === 'Remote' ? 'bg-emerald-100 text-emerald-700' : job.mode === 'Hybrid' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'}`}>{job.mode}</span>
                    <Briefcase className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{job.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-amber-700">{job.company}</p>
                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />{job.location}</p>
                    <p className="flex gap-2"><Award className="h-4 w-4 shrink-0" />{job.experience} · {job.type}</p>
                    <p className="font-bold text-slate-900">{job.salary}</p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600 flex-1">{job.description}</p>
                  <Link href="https://eco-pulse-technology.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-white hover:bg-amber-600 transition-colors">View details <ArrowRight className="h-4 w-4" /></Link>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-slate-500">Job information was supplied for this directory and should be verified with the listed employer. Eco Pulse Technology does not guarantee availability, compensation or hiring outcomes.</p>
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
                  <li><a href="https://nextdoor.com/page/eco-pulse-technology?share_platform=10&utm_campaign=1793623090650&share_action_id=ed9c787a-5f48-482d-8cd1-6e7fad92bcbc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Nextdoor community</a></li>
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
