"use client";

import { Heart, Code2, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow for smooth transition */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/8 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Clarity Inc<span className="text-accent">.</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Engineering excellence meets innovation. Building the future, one line of code at a time.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">Software Engineering Studio</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-accent transition-colors font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-accent transition-colors cursor-pointer">
                hello@clarity.com
              </li>
              <li>Islamabad, PK</li>
              <li className="text-accent font-medium">
                Available for new projects
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-semibold">Clarity Inc.</span> All rights reserved.
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            Built with Next.js, TypeScript, & 
            <Heart className="text-accent" size={16} fill="currentColor" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;