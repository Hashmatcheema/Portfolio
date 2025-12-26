'use client'

import { Bot, User } from 'lucide-react'
import { ChatMessage as ChatMessageType } from '@/lib/api'

interface ChatMessageProps {
  message: ChatMessageType
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in px-2`}>
      <div className={`flex ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start gap-3 ${
        isUser ? 'max-w-[70%]' : 'max-w-[85%]'
      }`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser 
            ? 'bg-accent' 
            : 'bg-gradient-to-br from-accent to-secondary'
        }`}>
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Bot className="w-5 h-5 text-white" />
          )}
        </div>

        {/* Message bubble */}
        <div>
          <div className={`rounded-2xl px-5 py-4 shadow-lg inline-block ${
            isUser 
              ? 'bg-accent text-white font-medium' 
              : 'bg-surface border-2 border-gray-700 text-gray-200'
          }`}>
            <p className="whitespace-pre-wrap">{message.content}</p>
          </div>
          
          {/* Timestamp */}
          <p className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : ''}`}>
            {message.timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </div>
  )
}



