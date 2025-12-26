'use client'

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-background">
      {/* Subtle animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse-slow"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 animate-pulse-slow animation-delay-4000"></div>
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(88, 166, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88, 166, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
    </div>
  )
}



