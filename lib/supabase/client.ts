import { createBrowserClient } from '@supabase/ssr'

let client: any = null

const mockClient = {
  auth: {
    getUser: async () => ({ data: { user: null } }),
    signInWithPassword: async () => ({ error: { message: 'Auth not configured' } }),
    signUp: async () => ({ error: { message: 'Auth not configured' } }),
    signOut: async () => ({}),
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
    insert: async () => ({}),
    delete: async () => ({}),
  }),
}

export function createClient() {
  // Return mock client if env vars are not set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return mockClient
  }

  // Use cached client if available
  if (client) {
    return client
  }

  try {
    // Try to create real Supabase client with fallback
    client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        global: {
          headers: {
            'x-client-info': 'supabase-js-web',
          },
        },
      }
    )
  } catch (err) {
    console.warn('[Supabase] Failed to initialize client, using mock:', err)
    return mockClient
  }

  return client || mockClient
}
