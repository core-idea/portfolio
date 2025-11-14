import React from 'react';
import { motion } from 'framer-motion';

const MatterSection: React.FC = () => {
  return (
    <section id="matter" className="min-h-screen bg-zinc-800 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/39jf.avif"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-zinc-800/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-8">
              MEME TOKENS
            </h2>
            <div className="w-24 h-px bg-zinc-400 mb-8"></div>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-zinc-300 font-light tracking-wide">
              <p>From meme tokens, I expect a fast and cheap way to advertise my products.</p>
              <p>My target audience is exactly the people who want to earn. I create products that may help you with something or simplify your routine.</p>
              <p>Sometimes I just want to do something fun, entertaining, and large-scale.</p>
              <p>From meme tokens, I only gain as a creator.</p>
              <div className="pt-4 border-t border-zinc-700">
                <p className="text-xs text-zinc-500 italic">
                  Disclaimer: This is your money. You are not obligated to buy these tokens. Invest responsibly.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/images/revards.png"
              alt="Rewards"
              className="w-full max-w-md object-contain"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MatterSection;