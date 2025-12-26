"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Users, Zap, Shield, Sparkles } from "lucide-react";

const About = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered", icon: Rocket },
    { value: "100%", label: "Client Satisfaction", icon: Users },
    { value: "24/7", label: "Support Available", icon: Shield },
  ];

  const values = [
    { 
      icon: Code2, 
      title: "Clean Architecture",
      description: "We build scalable, maintainable systems with industry best practices"
    },
    { 
      icon: Zap, 
      title: "Fast Delivery",
      description: "Agile methodology ensures rapid iteration and quick time-to-market"
    },
    { 
      icon: Sparkles, 
      title: "Innovation First",
      description: "Cutting-edge tech stacks and AI-powered solutions"
    },
  ];

  return (
    <section id="about" className="py-32 bg-surface relative overflow-hidden border-b border-gray-800/30">
      {/* Minimal Dark - Clean Professional Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background opacity-60"></div>
        {/* Minimal accent hint at borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-accent">Clarity</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a modern software engineering studio specializing in <span className="text-white font-semibold">full-stack development</span> and <span className="text-white font-semibold">agentic AI systems</span>
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface border-2 border-gray-800 hover:border-accent/50 rounded-2xl p-8 text-center group transition-all hover:shadow-xl hover:shadow-accent/5"
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-surface to-background border border-gray-800 hover:border-accent/50 rounded-2xl p-8 transition-all shadow-lg hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;