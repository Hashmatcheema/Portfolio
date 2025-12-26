'use client'

import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Sparkles } from 'lucide-react'
import ChatMessage from './ChatMessage'
import SuggestedActions from './SuggestedActions'
import LeadCaptureForm from './LeadCaptureForm'
import { sendMessage, ChatMessage as ChatMessageType } from '@/lib/api'

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [suggestedActions, setSuggestedActions] = useState<string[]>([])
  const [showLeadForm, setShowLeadForm] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestedPrompts = [
    "Tell me about your AI projects and capabilities",
    "Show me examples of full-stack applications you've built",
    "What technologies and stacks do you specialize in?",
    "How can Clarity help with my project idea?",
  ]

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: ChatMessageType = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)
    setSuggestedActions([])

    try {
      const response = await sendMessage(input, messages)
      
      const assistantMessage: ChatMessageType = {
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
      
      if (response.suggested_actions) {
        setSuggestedActions(response.suggested_actions)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      
      const errorMessage: ChatMessageType = {
        role: 'assistant',
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleSuggestedAction = (action: string) => {
    setInput(action)
    inputRef.current?.focus()
  }

  // Empty state with greeting
  const isEmptyChat = messages.length === 0 && !isLoading

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Header Bar */}
      <header className="border-b border-gray-800 bg-surface px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Chat with Clarrie AI</h2>
          <p className="text-sm text-gray-400">Your AI guide to Clarity's portfolio</p>
        </div>
        <button
          onClick={() => setShowLeadForm(true)}
          className="px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg transition-colors font-medium shadow-lg"
        >
          Book a Call
        </button>
      </header>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Greeting Screen */}
        {isEmptyChat ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
            <div className="text-center max-w-3xl">
              <h1 className="text-5xl font-bold mb-2">
                <span className="text-white">Hey, it's </span>
                <span className="text-accent">Clarrie AI</span>
                <span className="ml-2">👋</span>
              </h1>
              <h2 className="text-4xl font-bold text-white mb-12">How can I help?</h2>

              {/* Suggested Prompts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInput(prompt)
                      inputRef.current?.focus()
                    }}
                    className="p-6 bg-surface hover:bg-accent border-2 border-gray-700 hover:border-accent rounded-xl text-left transition-all group shadow-md hover:shadow-xl"
                  >
                    <p className="text-gray-300 group-hover:text-white transition-colors font-medium">
                      {prompt}
                    </p>
                  </button>
                ))}
              </div>

              {/* Quick tip */}
              <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                <Sparkles className="w-4 h-4" />
                <p>Or type your own question below</p>
              </div>
            </div>
          </div>
        ) : (
          /* Chat Messages Area */
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface border border-gray-700 rounded-2xl px-4 py-3 max-w-[80%] shadow-lg">
                  <Loader2 className="w-5 h-5 text-accent animate-spin drop-shadow-lg" />
                </div>
              </div>
            )}
            
            {/* Suggested actions - inside scrollable area */}
            {suggestedActions.length > 0 && !isLoading && (
              <div className="mt-4">
                <SuggestedActions 
                  actions={suggestedActions} 
                  onActionClick={handleSuggestedAction}
                />
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input area */}
        <div className="border-t border-gray-800 bg-background p-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface border border-gray-700 rounded-xl shadow-2xl p-4">
              <div className="flex items-center space-x-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about Clarity's work..."
                  disabled={isLoading}
                  className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none disabled:opacity-50 focus:outline-none font-normal text-base"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-accent hover:bg-accent/90 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg transition-colors shadow-lg"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lead Capture Form */}
      {showLeadForm && <LeadCaptureForm onClose={() => setShowLeadForm(false)} />}
    </div>
  )
}



