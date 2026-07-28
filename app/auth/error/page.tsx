'use client'

import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import Image from 'next/image'

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4068-XvCFGAjmIOLA2qsCZmL9vyEJFS8yy3.jpeg"
              alt="Eco Pulse Technology"
              width={120}
              height={120}
              className="h-24 w-auto"
            />
          </div>

          <div className="flex justify-center mb-4">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-2">
            Authentication Error
          </h1>
          <p className="text-slate-400 mb-6">
            Something went wrong during authentication. Please try again.
          </p>

          <div className="space-y-2">
            <Link
              href="/auth/login"
              className="block px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
            >
              Back to Login
            </Link>
            <Link
              href="/auth/sign-up"
              className="block px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
