'use client';

import { useEffect, useRef } from 'react';

interface MarshmallowClarrieProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

export default function MarshmallowClarrie({ size = 'md', animate = true }: MarshmallowClarrieProps) {
  const sizes = {
    sm: 100,
    md: 140,
    lg: 200,
    xl: 280
  };

  const cubeRef = useRef<HTMLDivElement>(null);
  const s = sizes[size];
  const cubeSize = s * 0.6;

  // No rotation animation - cube stays fixed facing forward

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: s * 1.8, height: s * 1.8 }}
    >
      {/* Orbital Arcs - Background */}
      {animate && (
        <svg
          className="absolute inset-0 z-0"
          width={s * 1.8}
          height={s * 1.8}
          viewBox="0 0 400 400"
          style={{ animation: 'rotate 8s linear infinite' }}
        >
          <defs>
            <filter id="arcGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Cyan arc */}
          <path
            d="M 100 150 Q 140 80 250 100"
            stroke="#00e5ff"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#arcGlow)"
            opacity="0.7"
          />
          
          {/* Pink/Magenta arc */}
          <path
            d="M 300 250 Q 260 320 150 300"
            stroke="#ff00ff"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            filter="url(#arcGlow)"
            opacity="0.7"
          />
        </svg>
      )}

      {/* Floating Particles */}
      {animate && (
        <div className="absolute inset-0 z-0">
          {[
            { color: '#00e5ff', size: 6, top: '20%', left: '10%', duration: '3s' },
            { color: '#ff00ff', size: 5, top: '70%', left: '15%', duration: '4s' },
            { color: '#ffd700', size: 6, top: '15%', right: '15%', duration: '3.5s' },
            { color: '#00e5ff', size: 4, top: '60%', right: '10%', duration: '3.8s' },
            { color: '#ff00ff', size: 5, bottom: '15%', right: '20%', duration: '4.2s' },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: particle.color,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: particle.top,
                left: particle.left,
                right: particle.right,
                bottom: particle.bottom,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                animation: `float-particle ${particle.duration} ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      )}

      {/* 3D Marshmallow Cube Container */}
      <div className="marshmallow-cube-perspective" style={{ width: cubeSize, height: cubeSize }}>
        <div
          ref={cubeRef}
          className="marshmallow-cube"
          style={{ 
            width: cubeSize, 
            height: cubeSize,
            transform: `rotateX(-15deg) rotateY(20deg)`
          }}
        >
          {/* Front Face - with eyes and mouth */}
          <div
            className="cube-face"
            style={{
              transform: `translateZ(${cubeSize / 2}px)`,
              background: `
                radial-gradient(circle at 30% 20%, rgba(147, 197, 253, 0.3), transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(196, 181, 253, 0.2), transparent 50%),
                linear-gradient(135deg, #dbeafe 0%, #e0e7ff 40%, #ddd6fe 100%)
              `,
              boxShadow: 'inset 0 0 30px rgba(147, 197, 253, 0.2), 0 0 20px rgba(147, 197, 253, 0.15)'
            }}
          >
            {/* Eyes - Professional robotic optical sensors */}
            <div className="absolute top-[35%] left-1/2 -translate-x-1/2 flex gap-8">
              {/* Left Eye */}
              <div className="relative w-14 h-14">
                {/* Subtle outer glow */}
                <div className="absolute -inset-1 bg-[#4a9eff] opacity-10 rounded-full blur-md"></div>
                
                {/* Outer technical ring */}
                <div className="absolute inset-0 border-[1.5px] border-[#6b7280] rounded-full opacity-80"></div>
                <div className="absolute inset-[3px] border-[1px] border-[#4a9eff] rounded-full opacity-50"></div>
                
                {/* Inner sensor area - darker, more technical */}
                <div className="absolute inset-[6px] rounded-full" style={{ 
                  background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5)'
                }}></div>
                
                {/* Central optical lens */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full" style={{
                  background: 'radial-gradient(circle at 30% 30%, #3b82f6 0%, #1e3a8a 70%, #0a1628 100%)',
                  boxShadow: 'inset 0 -1px 3px rgba(0,0,0,0.7), 0 0 8px rgba(74,158,255,0.4)'
                }}></div>
                
                {/* Subtle technical highlight */}
                <div className="absolute top-[30%] left-[30%] w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
                
                {/* Small scanning indicator */}
                <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[#4a9eff] rounded-full opacity-60"></div>
              </div>
              
              {/* Right Eye */}
              <div className="relative w-14 h-14">
                {/* Subtle outer glow */}
                <div className="absolute -inset-1 bg-[#4a9eff] opacity-10 rounded-full blur-md"></div>
                
                {/* Outer technical ring */}
                <div className="absolute inset-0 border-[1.5px] border-[#6b7280] rounded-full opacity-80"></div>
                <div className="absolute inset-[3px] border-[1px] border-[#4a9eff] rounded-full opacity-50"></div>
                
                {/* Inner sensor area - darker, more technical */}
                <div className="absolute inset-[6px] rounded-full" style={{ 
                  background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
                  boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5)'
                }}></div>
                
                {/* Central optical lens */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full" style={{
                  background: 'radial-gradient(circle at 30% 30%, #3b82f6 0%, #1e3a8a 70%, #0a1628 100%)',
                  boxShadow: 'inset 0 -1px 3px rgba(0,0,0,0.7), 0 0 8px rgba(74,158,255,0.4)'
                }}></div>
                
                {/* Subtle technical highlight */}
                <div className="absolute top-[30%] left-[30%] w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
                
                {/* Small scanning indicator */}
                <div className="absolute top-[65%] left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[#4a9eff] rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Smile - Subtle peaceful expression */}
            <svg className="absolute top-[62%] left-1/2 -translate-x-1/2" width="50" height="20" viewBox="0 0 50 20">
              <path
                d="M 12 10 Q 25 16 38 10"
                stroke="#6b7280"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 12 10 Q 25 16 38 10"
                stroke="#4a9eff"
                strokeWidth="1"
                strokeLinecap="round"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Back Face */}
          <div
            className="cube-face"
            style={{ 
              transform: `rotateY(180deg) translateZ(${cubeSize / 2}px)`,
              background: `
                radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.25), transparent 60%),
                linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 50%, #ddd6fe 100%)
              `,
              boxShadow: 'inset 0 0 25px rgba(167, 139, 250, 0.15)'
            }}
          />

          {/* Right Face - Circuit panel */}
          <div
            className="cube-face"
            style={{ 
              transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)`,
              background: `
                radial-gradient(circle at 50% 50%, rgba(129, 140, 248, 0.2), transparent 60%),
                linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #c7d2fe 100%)
              `,
              boxShadow: 'inset 0 0 20px rgba(129, 140, 248, 0.15)'
            }}
          >
            {/* Circuit pattern */}
            <div className="absolute inset-4 bg-[#1a1a2e] rounded-lg border border-[#7c3aed] p-2">
              <svg width="100%" height="100%" viewBox="0 0 60 100">
                <circle cx="10" cy="15" r="3" fill="#b794f6" opacity="0.8"/>
                <circle cx="30" cy="25" r="2" fill="#b794f6" opacity="0.6"/>
                <circle cx="20" cy="35" r="2.5" fill="#b794f6" opacity="0.7"/>
                <circle cx="45" cy="50" r="2" fill="#b794f6" opacity="0.8"/>
                <circle cx="15" cy="60" r="2.5" fill="#b794f6" opacity="0.7"/>
                <circle cx="40" cy="75" r="2" fill="#b794f6" opacity="0.6"/>
                <line x1="10" y1="15" x2="30" y2="25" stroke="#b794f6" strokeWidth="1" opacity="0.5"/>
                <line x1="30" y1="25" x2="20" y2="35" stroke="#b794f6" strokeWidth="1" opacity="0.5"/>
                <line x1="20" y1="35" x2="45" y2="50" stroke="#b794f6" strokeWidth="1" opacity="0.5"/>
                <line x1="45" y1="50" x2="15" y2="60" stroke="#b794f6" strokeWidth="1" opacity="0.5"/>
                <line x1="15" y1="60" x2="40" y2="75" stroke="#b794f6" strokeWidth="1" opacity="0.5"/>
              </svg>
            </div>
          </div>

          {/* Left Face */}
          <div
            className="cube-face"
            style={{ 
              transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)`,
              background: `
                radial-gradient(circle at 30% 70%, rgba(196, 181, 253, 0.3), transparent 60%),
                linear-gradient(135deg, #e0e7ff 0%, #ddd6fe 50%, #c7d2fe 100%)
              `,
              boxShadow: 'inset 0 0 20px rgba(196, 181, 253, 0.2)'
            }}
          />

          {/* Top Face */}
          <div
            className="cube-face"
            style={{ 
              transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)`,
              background: `
                radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.35), transparent 65%),
                linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #ede9fe 100%)
              `,
              boxShadow: 'inset 0 0 30px rgba(147, 197, 253, 0.25), 0 0 15px rgba(147, 197, 253, 0.1)'
            }}
          />

          {/* Bottom Face */}
          <div
            className="cube-face"
            style={{ 
              transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)`,
              background: `
                radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.2), transparent 60%),
                linear-gradient(135deg, #c7d2fe 0%, #ddd6fe 50%, #e0e7ff 100%)
              `,
              boxShadow: 'inset 0 0 20px rgba(167, 139, 250, 0.15)'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .marshmallow-cube-perspective {
          perspective: 1200px;
          position: relative;
          z-index: 10;
        }
        
        .marshmallow-cube {
          position: relative;
          transform-style: preserve-3d;
        }
        
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(255, 255, 255, 0.4);
          border-radius: 20px;
          box-shadow: 
            0 0 30px rgba(168, 213, 255, 0.3),
            inset 0 0 40px rgba(255, 255, 255, 0.2),
            inset -10px -10px 30px rgba(180, 197, 255, 0.15);
          backdrop-filter: blur(2px);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-15px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
