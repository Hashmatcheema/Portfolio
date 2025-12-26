"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import TechCube from "./TechCube";
import { ArrowDown, Bot } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToClarrie = () => {
    document.getElementById("clarrie")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden border-b-2 border-gray-800/50">
      {/* Enhanced Animated Background - Intense Glows */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none">
        {/* Larger, brighter glowing orbs */}
        <div className="absolute top-10 left-0 md:left-10 w-72 md:w-[500px] h-72 md:h-[500px] bg-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 md:right-10 w-80 md:w-[600px] h-80 md:h-[600px] bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-64 md:w-96 h-64 md:h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        
        {/* Additional intense glow layers */}
        <div className="absolute top-1/2 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-accent/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-56 md:w-80 h-56 md:h-80 bg-secondary/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content - REDESIGNED FOR IMPACT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full order-2 md:order-1"
          >
            {/* Eyebrow Text - Attention Grabber */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-accent text-sm md:text-base font-semibold">AI-Powered Development Studio</span>
              </div>
            </motion.div>

            {/* Massive Impact Headline */}
            <motion.h1
              className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Build Software That{" "}
              <span className="bg-gradient-to-r from-accent via-tertiary to-secondary bg-clip-text text-transparent">
                Actually Ships
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We turn complex ideas into production-ready applications.{" "}
              <span className="text-white font-medium">Fast. Scalable. Reliable.</span>
            </motion.p>

            {/* Social Proof Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GPT-4 Powered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <svg className="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </motion.div>

            {/* Reimagined CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/chat" className="w-full sm:w-auto">
                <motion.div
                  className="group relative bg-gradient-to-r from-accent to-secondary text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Bot className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Meet Clarrie AI</span>
                </motion.div>
              </Link>

              <motion.button
                onClick={scrollToProjects}
                className="group border-2 border-gray-700 hover:border-accent text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-lg hover:bg-accent/5 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>See Our Work</span>
                <ArrowDown className="group-hover:translate-y-1 transition-transform w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cube - Better mobile sizing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[300px] md:h-[500px] flex items-center justify-center w-full order-1 md:order-2 mb-4 md:mb-0" // Cube comes first on mobile
          >
            <TechCube />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - NOW CLICKABLE */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 text-accent hover:text-white transition-colors cursor-pointer group"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
      </motion.button>
    </section>
  );
};

export default Hero;