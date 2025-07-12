export default function ChatMessage({
  sender,
  text,
}: {
  sender: 'user' | 'bot'
  text: string
}) {
  const isUser = sender === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-2 whitespace-pre-wrap ${
          isUser
            ? 'bg-primary rounded-br-none text-white'
            : 'bg-muted text-foreground rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  )
}
