import React from 'react';
import { motion } from 'framer-motion';

const FinalSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/50 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <div className="text-6xl md:text-8xl font-bold tracking-[0.3em] text-white mb-8 opacity-80">
              OTTO ROTHENBURG
            </div>
            <div className="w-32 h-px bg-zinc-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-zinc-300 font-light tracking-wide max-w-3xl mx-auto">
            <p>The space between code and innovation.</p>
            <p>I create solutions that shape the future.</p>
            <p className="text-white font-normal">Not for everyone. For those who seek.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;