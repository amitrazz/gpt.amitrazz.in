'use client'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { LogOut, Moon, Plus, Settings, Sun } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'

const chatHistory = [
  { id: '1', title: 'React useEffect' },
  { id: '2', title: 'System Design Interview' },
  { id: '3', title: 'JavaScript Closures' },
]

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const handleNewChat = () => {
    router.push('/dashboard') // can route to new chat
  }

  return (
    <aside className="bg-muted text-foreground hidden h-full w-64 flex-col border-r md:flex">
      {/* Top Section */}
      <div className="border-b p-4">
        <h2 className="text-xl font-semibold">GPT Assistant</h2>
        <Button
          variant="secondary"
          className="mt-4 w-full justify-start"
          onClick={handleNewChat}
        >
          <Plus className="mr-2 h-4 w-4" />
          New Chat
        </Button>
      </div>

      {/* Chat History Scroll Area */}
      <ScrollArea className="flex-1 px-2 py-4">
        <div className="space-y-1">
          {chatHistory.map((chat) => (
            <Button
              key={chat.id}
              variant={pathname.includes(chat.id) ? 'secondary' : 'ghost'}
              className="w-full justify-start truncate"
              onClick={() => router.push(`/dashboard/chat/${chat.id}`)}
            >
              {chat.title}
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* Footer Section */}
      <div className="flex flex-col gap-2 border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <>
              <Sun className="mr-2 h-4 w-4" /> Light Mode
            </>
          ) : (
            <>
              <Moon className="mr-2 h-4 w-4" /> Dark Mode
            </>
          )}
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => router.push('/dashboard/settings')}
        >
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  )
}
