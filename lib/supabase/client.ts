import { createBrowserClient } from '@supabase/ssr'

let client: any = null

export function createClient() {
  // Return a mock client if env vars are not set
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    // Return a stub client that won't break the app
    return {
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
  }

  if (!client) {
    client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  }

  return client
}
