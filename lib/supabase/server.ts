import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// TODO: This function creates a Supabase client for use on the server (Server Components, Server Actions, Route Handlers).
//
// Steps:
// 1. Make sure you have a .env.local file with your Supabase URL and anon key
// 2. Uncomment the createServerClient call below and remove the placeholder
// 3. The cookie handlers below read/write the auth session via HTTP cookies
//
// Documentation: https://supabase.com/docs/guides/auth/server-side/nextjs

export async function createClient() {
  const cookieStore = await cookies()

  // TODO: Replace this placeholder with the real Supabase server client:
  //
  // return createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       getAll() {
  //         return cookieStore.getAll()
  //       },
  //       setAll(cookiesToSet) {
  //         try {
  //           cookiesToSet.forEach(({ name, value, options }) =>
  //             cookieStore.set(name, value, options)
  //           )
  //         } catch {
  //           // The `setAll` method is called from a Server Component.
  //           // This can be ignored if you have middleware refreshing user sessions.
  //         }
  //       },
  //     },
  //   }
  // )

  throw new Error(
    'Supabase server client not configured. Complete the TODO in lib/supabase/server.ts'
  )
}
