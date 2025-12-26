'use client';

interface ClarrieAvatarProps {
  size?: number;
}

export default function ClarrieAvatar({ size = 48 }: ClarrieAvatarProps) {
  return (
    <div 
      className="relative rounded-full overflow-hidden border-2 border-accent/30"
      style={{ width: size, height: size }}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(147, 197, 253, 0.3), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(196, 181, 253, 0.2), transparent 50%),
            linear-gradient(135deg, #dbeafe 0%, #e0e7ff 40%, #ddd6fe 100%)
          `
        }}
      />
      
      {/* Eyes */}
      <div 
        className="absolute flex gap-2"
        style={{
          top: `${size * 0.35}px`,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      >
        {/* Left Eye */}
        <div 
          className="relative rounded-full border border-gray-400"
          style={{ 
            width: size * 0.22, 
            height: size * 0.22,
            background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: size * 0.12,
              height: size * 0.12,
              background: 'radial-gradient(circle at 30% 30%, #3b82f6 0%, #1e3a8a 70%, #0a1628 100%)'
            }}
          />
          <div 
            className="absolute bg-white rounded-full opacity-40"
            style={{
              top: '30%',
              left: '30%',
              width: size * 0.04,
              height: size * 0.04
            }}
          />
        </div>
        
        {/* Right Eye */}
        <div 
          className="relative rounded-full border border-gray-400"
          style={{ 
            width: size * 0.22, 
            height: size * 0.22,
            background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: size * 0.12,
              height: size * 0.12,
              background: 'radial-gradient(circle at 30% 30%, #3b82f6 0%, #1e3a8a 70%, #0a1628 100%)'
            }}
          />
          <div 
            className="absolute bg-white rounded-full opacity-40"
            style={{
              top: '30%',
              left: '30%',
              width: size * 0.04,
              height: size * 0.04
            }}
          />
        </div>
      </div>
      
      {/* Smile */}
      <svg 
        className="absolute"
        style={{
          top: `${size * 0.62}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          width: size * 0.5,
          height: size * 0.2
        }}
        viewBox="0 0 50 20"
      >
        <path
          d="M 12 10 Q 25 16 38 10"
          stroke="#6b7280"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
