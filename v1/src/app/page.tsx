import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to CardDemo
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        A modern implementation of a credit card management system
      </p>
      <div className="flex gap-4">
        <Link href="/login" className="btn-primary">
          Login
        </Link>
        <Link href="/about" className="btn-secondary">
          Learn More
        </Link>
      </div>
    </div>
  )
}