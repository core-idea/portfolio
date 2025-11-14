import React from 'react';
import { motion } from 'framer-motion';

const CollectionSection: React.FC = () => {
  const collection = [
    { name: 'TOKEN 01', subtitle: 'INNOVATION' },
    { name: 'TOKEN 02', subtitle: 'VISION' },
    { name: 'TOKEN 03', subtitle: 'FUTURE' },
    { name: 'TOKEN 04', subtitle: 'IMPACT' }
  ];

  return (
    <section id="collection" className="min-h-screen bg-zinc-800 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white mb-8">
            TOKEN
          </h2>
          <div className="w-24 h-px bg-zinc-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collection.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden mb-6 bg-zinc-900 border border-zinc-700 h-96 flex items-center justify-center">
                <div className="text-center font-mono text-2xl md:text-3xl text-green-500 tracking-wider">
                  NO INFO
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300" aria-label="X">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300" aria-label="Website">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-300" aria-label="DexScreener">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10"/>
                      <line x1="18" y1="20" x2="18" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="16"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;