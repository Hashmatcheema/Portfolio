'use client';

import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import MarshmallowClarrie from './MarshmallowClarrie';
import Link from 'next/link';

const ClarrieShowcase = () => {
  return (
    <section id="clarrie" className="relative min-h-[700px] flex items-center justify-center overflow-hidden bg-background border-b-2 border-gray-800/50">
      {/* Animated Background - Matching Hero Section Vibrancy */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs - same intensity as Hero section */}
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        
        {/* Additional glow layers */}
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </div>

      {/* Starfield Container */}
      <div className="absolute inset-0">
        {/* Dense starfield */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => {
            const size = Math.random() * 2.5 + 0.5
            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.random() * 0.5 + 0.4,
                  boxShadow: `0 0 ${size * 2}px rgba(224, 255, 255, 0.6)`
                }}
              />
            )
          })}
        </div>

        {/* Larger star shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-white/20 text-2xl"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center flex flex-col justify-between min-h-[700px] py-16">
        {/* Headline - positioned in upper section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold"
        >
          <span className="text-white">Your AI Guide to </span>
          <span className="bg-gradient-to-r from-accent via-tertiary to-secondary bg-clip-text text-transparent">
            Everything Clarity
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Marshmallow Mascot with Float Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center mascot-float"
          >
            <MarshmallowClarrie size="xl" />
          </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Chat with Clarrie to explore our portfolio, discover projects, and learn how we can bring your ideas to life
        </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/chat">
              <motion.div
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-accent/30 hover:shadow-3xl hover:shadow-accent/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-6 h-6" />
                <span>Start Chatting with Clarrie</span>
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </Link>
          </motion.div>

        {/* Fun tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center justify-center gap-2 text-gray-500"
        >
          <Sparkles className="w-4 h-4 text-accent" />
          <p className="text-sm italic">Available 24/7 • Powered by GPT-4 • Infinitely Patient</p>
          <Sparkles className="w-4 h-4 text-secondary" />
        </motion.div>
      </motion.div>

        
        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(15px) rotate(-5deg); }
          }
          @keyframes mascot-float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 7s ease-in-out infinite;
          }
          .mascot-float {
            animation: mascot-float 5s ease-in-out infinite;
            filter: drop-shadow(0 0 25px rgba(88, 166, 255, 0.5));
          }
        `}</style>
      </div>
    </section>
  );
};

export default ClarrieShowcase;
