'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Briefcase, Users, TrendingUp } from 'lucide-react'

export default function LandingPage() {
  // User state removed - static page loads faster
  const user = null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
              alt="Eco Pulse Technology"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-white font-bold text-xl">Eco Pulse</span>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors font-semibold"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="text-slate-300 hover:text-white transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors font-semibold"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Empowering{' '}
                <span className="text-amber-400">Careers Through</span>{' '}
                Innovation
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Connect with top talent and find your dream job. Experience
                smarter hiring and better careers at Eco Pulse Technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      Go to Dashboard
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/sign-up"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/auth/login"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
                    >
                      Sign In
                    </Link>
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
                alt="Eco Pulse Technology"
                width={400}
                height={400}
                className="max-w-full h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Eco Pulse?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-lg mb-4">
                <Briefcase className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Find Your Dream Job
              </h3>
              <p className="text-slate-400">
                Browse thousands of job opportunities from leading companies
                worldwide.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-lg mb-4">
                <Users className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Connect with Talent
              </h3>
              <p className="text-slate-400">
                Find the perfect candidates for your organization and build your
                dream team.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-lg mb-4">
                <TrendingUp className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Grow Your Career
              </h3>
              <p className="text-slate-400">
                Access resources and opportunities to advance your professional
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join thousands of professionals and employers on Eco Pulse
            Technology.
          </p>

          {!user && (
            <Link
              href="/auth/sign-up"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Create Your Account
              <ArrowRight className="h-6 w-6" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
