"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 bg-surface relative overflow-hidden border-b border-gray-800/30">
      {/* Minimal Dark - Trust & Credibility Focus */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-surface to-background/50 opacity-70"></div>
        {/* Minimal border accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/15 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What our clients say about working with Clarity
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-surface to-background border-2 border-gray-800 p-10 md:p-14 rounded-3xl relative shadow-2xl"
            >
              <Quote className="absolute top-8 left-8 text-accent/20" size={56} />
              
              <p className="text-gray-200 text-xl md:text-2xl mb-10 italic relative z-10 leading-relaxed font-light">
                "{testimonials[current].text}"
              </p>
              
              <div className="flex items-center gap-5 pt-6 border-t border-gray-800">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-accent/30">
                  {testimonials[current].name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-xl">
                    {testimonials[current].name}
                  </p>
                  <p className="text-accent font-medium">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-surface border-2 border-gray-800 hover:border-accent text-gray-400 hover:text-white transition-all hover:bg-background shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all rounded-full ${
                    index === current
                      ? "bg-accent w-10 h-3 shadow-lg shadow-accent/30"
                      : "bg-gray-700 w-3 h-3 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl bg-surface border-2 border-gray-800 hover:border-accent text-gray-400 hover:text-white transition-all hover:bg-background shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;