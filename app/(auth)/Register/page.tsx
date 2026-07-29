import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import RegisterForm from '../_components/Register-Form/RegisterForm'
import Link from 'next/link'


const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md bg-transparent text-white">
        <CardHeader>
          <CardTitle>Create your account</CardTitle>

          <CardDescription>
            Fill in the information below to create your account.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>

        <div className='flex items-center justify-center text-center'>
          <div className='flex'>
            <p>Already have a account?</p>
            <Link href="/login" className='text-[#C93C3F] ps-2'>
              Login
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default RegisterPage
