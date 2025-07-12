'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Topbar({ user }: { user: any }) {
  return (
    <header className="bg-background flex items-center justify-between border-b p-4">
      <div className="text-lg font-bold">ChatGPT UI</div>
      <div className="flex items-center gap-4">
        <span className="text-muted-foreground text-sm">{user.email}</span>
        <Button size="sm" variant="outline" onClick={() => signOut()}>
          Logout
        </Button>
      </div>
    </header>
  )
}
