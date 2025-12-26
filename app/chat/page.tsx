'use client'

import { useState, useEffect } from 'react'
import ChatInterface from '@/components/ChatInterface'
import Sidebar from '@/components/Sidebar'
import Background from '@/components/Background'

export default function ChatPage() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNewChat = () => {
    // Reload the page to start fresh
    window.location.reload()
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-background flex overflow-hidden">
      <Background />
      <div className="relative z-10 flex w-full h-screen">
        <Sidebar onNewChat={handleNewChat} onFilterChange={setFilter} />
        <div className="flex-1 flex flex-col">
          <ChatInterface />
        </div>
      </div>
    </main>
  )
}



