import React from 'react'
import LoginForm from '../_components/Login-Form/LoginForm'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 p-8">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-sm text-gray-400">
          Login to continue to FixitNow.
        </p>

        <LoginForm />

        <div className='text-center pt-4'>
          <p className='text-white'>Do not have an account? 
            <span>
              <Link href="/register" className='text-[#C93C3F]'>
                Register
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
