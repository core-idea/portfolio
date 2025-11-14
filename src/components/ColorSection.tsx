import React from 'react';
import { motion } from 'framer-motion';

const ColorSection: React.FC = () => {
  const colors = [
    { name: 'FRONTEND', code: '01', description: 'REACT & MODERN UI', bg: 'bg-white', text: 'text-zinc-900' },
    { name: 'BACKEND', code: '02', description: 'APIS & DATABASES', bg: 'bg-zinc-900', text: 'text-white' },
    { name: 'BLOCKCHAIN', code: '03', description: 'TOKENS & SMART CONTRACTS', bg: 'bg-rose-300', text: 'text-zinc-900' },
    { name: 'DEVOPS', code: '04', description: 'DEPLOYMENT & SCALING', bg: 'bg-zinc-500', text: 'text-white' }
  ];

  return (
    <section id="color" className="min-h-screen bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-8">
            SKILLS
          </h2>
          <div className="w-24 h-px bg-zinc-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-zinc-300 font-light tracking-wide max-w-3xl mx-auto">
            Skills are not decoration, but a manifesto of expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${color.bg} aspect-square flex flex-col justify-center items-center p-8 text-center`}
            >
              <div className={`${color.text} mb-4`}>
                <div className="text-2xl font-bold tracking-[0.2em] mb-2">{color.name}</div>
                <div className="text-sm tracking-[0.15em] opacity-70">{color.code}</div>
              </div>
              <div className={`${color.text} text-xs tracking-[0.1em] opacity-60 leading-relaxed`}>
                {color.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;