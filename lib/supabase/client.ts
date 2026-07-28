'use client'

// Mock Supabase client that always returns immediately without blocking
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

// Always return mock client - avoids any connection attempts or blocking operations
// Real Supabase will be configured at deployment time via environment integration
export function createClient() {
  return mockClient
}
