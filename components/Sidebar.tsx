'use client'

import { Plus, History, Code, Briefcase, Sparkles, MessageSquare, Home } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface SidebarProps {
  onNewChat: () => void
  onFilterChange?: (filter: string) => void
}

export default function Sidebar({ onNewChat, onFilterChange }: SidebarProps) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Projects', icon: MessageSquare },
    { id: 'ai', label: 'AI Systems', icon: Sparkles },
    { id: 'fullstack', label: 'Full-Stack', icon: Code },
    { id: 'business', label: 'Business', icon: Briefcase },
  ]

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange?.(filterId)
  }

  return (
    <aside className="w-80 bg-gradient-to-b from-surface via-[#1c2128] to-surface border-r border-gray-800 flex flex-col h-screen overflow-hidden">
      {/* Header with Logo */}
      <div className="p-6 border-b border-gray-800 bg-gradient-to-b from-[#1c2128] to-surface">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-[50%] overflow-hidden border-2 border-accent/30 flex-shrink-0">
            <img 
              src="/Screenshot 2025-11-06 200546.png" 
              alt="Clarrie AI" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Clarrie AI</h1>
          </div>
        </div>
        
        {/* Subtitle */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">AI Receptionist</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Clarity's intelligent assistant
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="p-4 space-y-2">
        <Link
          href="/"
          className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium flex items-center justify-center space-x-2 transition-all"
        >
          <Home className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </Link>
        
        <button
          onClick={onNewChat}
          className="w-full py-3 bg-accent hover:bg-accent/90 text-white rounded-xl font-medium flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          <span>New Chat</span>
        </button>
      </div>

      {/* Explore Section */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Explore</h3>
        </div>
        <div className="space-y-2">
          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className={`w-full px-4 py-2.5 rounded-lg flex items-center space-x-3 transition-all ${
                  isActive
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{filter.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-4 mt-2">
        <h3 className="text-sm font-semibold text-white mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="aspect-square rounded-xl bg-gradient-to-br from-accent to-blue-600 hover:from-accent/90 hover:to-blue-700 flex flex-col items-center justify-center space-y-2 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <Code className="w-6 h-6 text-white" />
            <span className="text-xs text-white font-semibold">Tech Stack</span>
          </button>
          <button className="aspect-square rounded-xl bg-gradient-to-br from-secondary to-green-600 hover:from-secondary/90 hover:to-green-700 flex flex-col items-center justify-center space-y-2 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <Briefcase className="w-6 h-6 text-white" />
            <span className="text-xs text-white font-semibold">Portfolio</span>
          </button>
        </div>
      </div>

      {/* History */}
      <div className="flex-1 px-4 py-4 overflow-y-auto custom-scrollbar">
        <div className="flex items-center space-x-2 mb-3">
          <History className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-semibold text-white">History</h3>
        </div>
        <div className="space-y-2">
          <div className="text-sm text-gray-400 italic">No chat history</div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 bg-background">
        <Link
          href="/"
          className="text-xs text-gray-400 hover:text-accent transition-colors"
        >
          Built by Clarity Inc.
        </Link>
      </div>
    </aside>
  )
}

