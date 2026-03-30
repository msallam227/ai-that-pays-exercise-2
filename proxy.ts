import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { createServerClient } from '@supabase/ssr'

// TODO: Protect routes by checking the user's Supabase session
//
// Steps:
// 1. Uncomment the createServerClient import above
// 2. Create a Supabase client inside the proxy function (see commented code below)
// 3. Call supabase.auth.getUser() to check if the user is logged in
// 4. If no user, redirect to /login
// 5. If user exists, call NextResponse.next() to allow the request through
//
// Important: The proxy must refresh the session cookie on every request
// to keep the user's session alive. The commented code below handles this.
//
// Docs: https://supabase.com/docs/guides/auth/server-side/nextjs

export function proxy(request: NextRequest) {
  // TODO: Replace this pass-through with Supabase session checking:
  //
  // const response = NextResponse.next({ request })
  //
  // const supabase = createServerClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  //   {
  //     cookies: {
  //       getAll() {
  //         return request.cookies.getAll()
  //       },
  //       setAll(cookiesToSet) {
  //         cookiesToSet.forEach(({ name, value, options }) => {
  //           request.cookies.set(name, value)
  //           response.cookies.set(name, value, options)
  //         })
  //       },
  //     },
  //   }
  // )
  //
  // const { data: { user } } = await supabase.auth.getUser()
  //
  // if (!user && !request.nextUrl.pathname.startsWith('/login')) {
  //   const url = request.nextUrl.clone()
  //   url.pathname = '/login'
  //   return NextResponse.redirect(url)
  // }
  //
  // return response

  // Pass-through: allows all requests until Supabase is configured
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all routes except static files and login
    '/((?!_next/static|_next/image|favicon.ico|login).*)',
  ],
}
