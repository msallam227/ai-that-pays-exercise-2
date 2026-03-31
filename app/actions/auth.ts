'use server'

import { redirect } from 'next/navigation'

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Please fill in all fields.' }
  }

  // TODO: Replace with your own auth logic
  console.log('Sign in:', email)

  redirect('/checklist')
}

export async function signUp(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!name || !email || !password) {
    return { error: 'Please fill in all fields.' }
  }

  if (password.length < 6) {
    return { error: 'Password must be at least 6 characters.' }
  }

  // TODO: Replace with your own auth logic
  console.log('Sign up:', name, email)

  redirect('/checklist')
}

export async function signOut() {
  redirect('/login')
}
