import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen bg-zinc-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/desd.avif"
          alt="Background"
          className="w-full h-full object-cover opacity-30 grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/80"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-[0.2em] text-white mb-8 leading-tight">
            <div>OTTO</div>
            <div>ROTHENBURG</div>
          </h1>
          <div className="w-24 h-px bg-zinc-400 mx-auto mb-8"></div>
          <h2 className="text-xl md:text-2xl tracking-[0.15em] text-zinc-300 mb-12 font-light">
            DEVELOPER & TOKEN CREATOR
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl leading-relaxed text-zinc-300 font-light tracking-wide">
            Code created not for decoration, but for impact. Each line, each function subordinated to one idea — the architecture of innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;