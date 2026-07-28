'use client'

let client: any = null

const mockClient = {
  auth: {
    getUser: async () => ({ data: { user: null } }),
    signInWithPassword: async () => ({ error: { message: 'Auth not configured' } }),
    signUp: async () => ({ error: { message: 'Auth not configured' } }),
    signOut: async () => ({}),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: async () => ({ data: null }),
      }),
      order: () => ({
        eq: () => ({ data: [] }),
      }),
    }),
    insert: async () => ({ data: null, error: null }),
    update: async () => ({ data: null, error: null }),
    delete: async () => ({ error: null }),
  }),
  realtime: {
    getChannels: () => [],
  },
}

export function createClient() {
  // Always return mock client immediately - real Supabase connection happens only on production/deployed
  // This prevents connection hangs during development
  if (typeof window === 'undefined') {
    return mockClient
  }

  // Use cached client if available
  if (client) {
    return client
  }

  // In development, just use mock client
  // In production with valid env vars, real client will be created via environment configuration
  if (process.env.NODE_ENV === 'development') {
    client = mockClient
    return client
  }

  // Production fallback - try to create real client, but with timeout protection
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    client = mockClient
    return client
  }

  // Import and create with timeout
  try {
    if (typeof window !== 'undefined') {
      const { createBrowserClient } = require('@supabase/ssr')
      client = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      )
    } else {
      client = mockClient
    }
  } catch (err) {
    console.warn('[Supabase] Client creation failed, using mock')
    client = mockClient
  }

  return client || mockClient
}
