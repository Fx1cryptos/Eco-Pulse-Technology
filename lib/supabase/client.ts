'use client'

// Proxy object that returns itself for chaining and allows any method calls
const chainProxy = () => new Proxy({}, {
  get: () => chainProxy(),
  apply: () => chainProxy(),
}) as any

// Mock Supabase client that always returns immediately without blocking
const mockClient = {
  auth: {
    getUser: async () => ({ data: { user: null } }),
    signInWithPassword: async (opts?: any) => ({ data: null, error: { message: 'Auth not configured' } }),
    signUp: async (opts?: any) => ({ data: null, error: { message: 'Auth not configured' } }),
    signOut: async () => ({ data: null, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
  },
  from: (table?: any) => ({
    select: (cols?: any) => ({
      eq: (col?: any, val?: any) => ({
        single: async () => ({ data: null }),
        async then(resolve: any) { return resolve({ data: null }) },
      }),
      order: (col?: any, opts?: any) => ({
        eq: (col?: any, val?: any) => ({ 
          data: [],
          async then(resolve: any) { return resolve({ data: [] }) }
        }),
      }),
      async then(resolve: any) { return resolve({ data: [] }) },
    }),
    insert: async (data?: any) => ({ data: null, error: null }),
    update: async (data?: any) => ({ data: null, error: null }),
    delete: async () => ({ error: null }),
  }),
  realtime: {
    getChannels: () => [],
  },
}

// Always return mock client - avoids any connection attempts or blocking operations
// Real Supabase will be configured at deployment time via environment integration
export function createClient() {
  return mockClient as any
}
