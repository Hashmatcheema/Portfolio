'use client'

import { Sparkles } from 'lucide-react'

interface SuggestedActionsProps {
  actions: string[]
  onActionClick: (action: string) => void
}

export default function SuggestedActions({ actions, onActionClick }: SuggestedActionsProps) {
  return (
    <div className="mb-4 animate-slide-up">
      <div className="flex items-center space-x-2 mb-3">
        <Sparkles className="w-4 h-4 text-secondary drop-shadow-lg" />
        <p className="text-sm text-white font-semibold">Suggested actions:</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => onActionClick(action)}
            className="px-5 py-3 bg-surface hover:bg-accent border-2 border-gray-700 hover:border-accent text-gray-300 hover:text-white rounded-xl text-sm transition-all duration-200 hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  )
}



