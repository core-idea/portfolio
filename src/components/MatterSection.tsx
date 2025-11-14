import React from 'react';
import { motion } from 'framer-motion';

const MatterSection: React.FC = () => {
  return (
    <section id="matter" className="min-h-screen bg-zinc-800 flex items-center justify-center relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1586281380614-a1c859f8ec03?w=1920&h=1080&fit=crop&crop=center"
          alt="Dense cotton macro texture"
          className="w-full h-full object-cover opacity-25 grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-zinc-800/60"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-12">
            TECH STACK
          </h2>
          <div className="w-24 h-px bg-zinc-400 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-zinc-400 tracking-wide">QUALITY</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-zinc-400 tracking-wide">COMMITMENT</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">0%</div>
              <div className="text-zinc-400 tracking-wide">COMPROMISES</div>
            </div>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-300 font-light tracking-wide">
            <p>Modern tech stack — the foundation from which performance and reliability are built.</p>
            <p>It scales efficiently, handles complexity, and creates that solid architecture from which trust and innovation are born.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MatterSection;