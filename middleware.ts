import { type NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Minimal middleware - just pass through
  // Supabase session management handled client-side
  return NextResponse.next()
}

export const config = {
  // Only apply middleware to specific routes that truly need it
  // Disable for all other routes to avoid performance issues
  matcher: [
    '/api/:path*',
  ],
}
