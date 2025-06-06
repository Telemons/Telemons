'use client'
import { LoginForm } from '@/components/auth/LoginForm'
import { PublicRoute } from '@/components/auth/PublicRoute'

export default function LoginPage() {
  return (
    <PublicRoute>
      <LoginForm />
    </PublicRoute>
  )
}
