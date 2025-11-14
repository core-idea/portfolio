import React from 'react';
import { motion } from 'framer-motion';

const ProductionSection: React.FC = () => {
  return (
    <section id="production" className="min-h-screen bg-zinc-900 flex items-center justify-center relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&crop=center"
          alt="Workshop and sewing process"
          className="w-full h-full object-cover opacity-20 grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-zinc-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-12">
            DEVELOPMENT
          </h2>
          <div className="w-24 h-px bg-zinc-400 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-2 tracking-[0.15em]">FULL CONTROL</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-2 tracking-[0.15em]">ABSOLUTE QUALITY</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white mb-2 tracking-[0.15em]">OWN CODEBASE</div>
            </div>
          </div>
          
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-300 font-light tracking-wide">
            <p>Manual control of every detail. No intermediaries, no compromises.</p>
            <p>Each project goes from concept to finished product under one supervision — mine.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductionSection;