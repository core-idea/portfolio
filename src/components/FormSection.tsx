import React from 'react';
import { motion } from 'framer-motion';

const FormSection: React.FC = () => {
  return (
    <section id="form" className="min-h-screen bg-zinc-900 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-8">
              PROJECTS
            </h2>
            <div className="w-24 h-px bg-zinc-400 mb-8"></div>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-zinc-300 font-light tracking-wide">
              <p>Code that became products.</p>
              <p>Projects are created according to architectural principles: scalability, balance, performance, innovation.</p>
              <p>Not design determines success, but architecture.</p>
              <p>This is not just code — it is a digital structure assembled around a vision.</p>
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
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&crop=center"
              alt="Hoodie sleeve detail"
              className="w-full h-64 object-cover grayscale"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&crop=center"
              alt="Hood silhouette"
              className="w-full h-64 object-cover grayscale mt-8"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;