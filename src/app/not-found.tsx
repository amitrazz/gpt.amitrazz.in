// app/not-found.tsx

'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-4xl font-bold">404</h1>
      <p className="text-muted-foreground mb-6 text-lg">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button onClick={() => router.push('/dashboard')}>Go to Dashboard</Button>
    </div>
  )
}
