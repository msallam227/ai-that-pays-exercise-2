'use server'

import { redirect } from 'next/navigation'
// import { createClient } from '@/lib/supabase/server'

// TODO: Sign In with email and password
//
// Steps:
// 1. Uncomment the createClient import above
// 2. Create a Supabase client: const supabase = await createClient()
// 3. Call supabase.auth.signInWithPassword({ email, password })
// 4. Handle errors (return them so the form can display them)
// 5. On success, redirect to '/'
//
// Docs: https://supabase.com/docs/reference/javascript/auth-signinwithpassword

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // TODO: Implement sign in with Supabase
  // const supabase = await createClient()
  // const { error } = await supabase.auth.signInWithPassword({ email, password })
  // if (error) {
  //   return { error: error.message }
  // }
  // redirect('/')

  console.log('Sign in attempted with:', email)
  return { error: 'Supabase not configured yet. Complete the TODO in app/actions/auth.ts' }
}

// TODO: Sign Up with email and password
//
// Steps:
// 1. Create a Supabase client: const supabase = await createClient()
// 2. Call supabase.auth.signUp({ email, password })
// 3. Handle errors (return them so the form can display them)
// 4. On success, redirect to '/' (or show a "check your email" message)
//
// Docs: https://supabase.com/docs/reference/javascript/auth-signup

export async function signUp(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // TODO: Implement sign up with Supabase
  // const supabase = await createClient()
  // const { error } = await supabase.auth.signUp({ email, password })
  // if (error) {
  //   return { error: error.message }
  // }
  // redirect('/')

  console.log('Sign up attempted with:', email)
  return { error: 'Supabase not configured yet. Complete the TODO in app/actions/auth.ts' }
}

// TODO: Sign Out
//
// Steps:
// 1. Create a Supabase client: const supabase = await createClient()
// 2. Call supabase.auth.signOut()
// 3. Redirect to '/login'
//
// Docs: https://supabase.com/docs/reference/javascript/auth-signout

export async function signOut() {
  // TODO: Implement sign out with Supabase
  // const supabase = await createClient()
  // await supabase.auth.signOut()

  redirect('/login')
}
