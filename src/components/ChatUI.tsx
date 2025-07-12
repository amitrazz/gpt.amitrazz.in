'use client'

import { Button } from '@/components/ui/button'
import { SendHorizonal } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'

export default function ChatUI() {
  const [messages, setMessages] = useState<
    { sender: 'user' | 'bot'; text: string }[]
  >([{ sender: 'bot', text: 'Hello! How can I help you today?' }])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement | null>(null)

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMessage: { sender: 'user'; text: string } = {
      sender: 'user',
      text: trimmed,
    }
    const botReply: { sender: 'bot'; text: string } = {
      sender: 'bot',
      text: `You said: "${trimmed}"`,
    }

    setMessages((prev) => [...prev, userMessage, botReply])
    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="bg-background text-foreground flex h-full w-full flex-col">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} sender={msg.sender} text={msg.text} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSend()
        }}
        className="bg-background sticky bottom-0 w-full border-t px-4 py-3 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-3xl items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Send a message..."
            rows={1}
            className="bg-muted focus:ring-ring w-full resize-none rounded-md border p-2 text-sm focus:ring-2 focus:outline-none"
          />
          <Button type="submit" size="icon" className="h-10 w-10">
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  )
}
