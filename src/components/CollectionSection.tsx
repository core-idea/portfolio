import React from 'react';
import { motion } from 'framer-motion';

const CollectionSection: React.FC = () => {
  const collection = [
    { name: 'TOKEN 01', subtitle: 'INNOVATION', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop&crop=center' },
    { name: 'TOKEN 02', subtitle: 'VISION', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&crop=center' },
    { name: 'TOKEN 03', subtitle: 'FUTURE', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop&crop=center' },
    { name: 'TOKEN 04', subtitle: 'IMPACT', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=800&fit=crop&crop=center' }
  ];

  return (
    <section id="collection" className="min-h-screen bg-zinc-800 py-20">
      <div className="max-w-7xl mx-auto px-6">
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
              <div className="relative overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-zinc-900/20"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold tracking-[0.15em] text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-sm tracking-[0.1em] text-zinc-400">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;