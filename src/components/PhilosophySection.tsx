import React from 'react';
import { motion } from 'framer-motion';

const PhilosophySection: React.FC = () => {
  return (
    <section className="min-h-screen bg-zinc-800 flex items-center justify-center relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920&h=1080&fit=crop&crop=center"
          alt="Minimalist fabric texture"
          className="w-full h-full object-cover opacity-20 grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-zinc-800/70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-12">
            PHILOSOPHY
          </h2>
          <div className="w-24 h-px bg-zinc-400 mx-auto mb-12"></div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-zinc-300 font-light tracking-wide">
            <p>I do not create code. I design solutions.</p>
            <p>Development is a process of searching. Searching for architecture that speaks through functionality. Searching for technology that can convey vision.</p>
            <p>Searching for projects ready to transform ideas into reality.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;