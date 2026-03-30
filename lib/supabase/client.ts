import { createBrowserClient } from '@supabase/ssr'

// TODO: This function creates a Supabase client for use in the browser (Client Components).
//
// Steps:
// 1. Make sure you have a .env.local file with your Supabase URL and anon key
//    (copy .env.local.example and fill in your values)
// 2. Uncomment the createBrowserClient call below and remove the placeholder
// 3. The client will automatically use cookies for session management
//
// Documentation: https://supabase.com/docs/guides/auth/server-side/nextjs

export function createClient() {
  // TODO: Replace this placeholder with the real Supabase browser client:
  //
  // return createBrowserClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  // )

  throw new Error(
    'Supabase client not configured. Complete the TODO in lib/supabase/client.ts'
  )
}
