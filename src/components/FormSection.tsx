import React from 'react';
import { motion } from 'framer-motion';

const FormSection: React.FC = () => {
  return (
    <section id="form" className="min-h-screen bg-zinc-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/5tt5.avif"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-zinc-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-8">
              UPCOMING PROJECTS
            </h2>
            <div className="w-24 h-px bg-zinc-400 mb-8"></div>
            
            <div className="space-y-8 text-base md:text-lg leading-relaxed text-zinc-300 font-light tracking-wide">
              <div className="border-l-2 border-zinc-600 pl-6 space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">ARG Game Launch</h3>
                <p className="text-zinc-400 text-sm">Launch Date: November 20, 2025</p>
                <p>An immersive alternate reality game where I'm recruiting a team of two specialists to develop a world-class application.</p>
                <p>Looking for talent in OSINT, reverse engineering, and scripting. This is more than a game — it's a gateway to building something extraordinary.</p>
              </div>

              <div className="border-l-2 border-zinc-600 pl-6 space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">Unrestricted LLM Service</h3>
                <p className="text-zinc-400 text-sm">Launch Date: December 24, 2025</p>
                <p>A cutting-edge AI service powered by an LLM with absolutely no restrictions.</p>
                <p>No boundaries. No limitations. Pure intelligence unleashed.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="/images/22.863.jpg"
              alt="ARG Game Launch"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src="/images/20.212.jpg"
              alt="Unrestricted LLM Service"
              className="w-full h-64 object-cover mt-8"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;