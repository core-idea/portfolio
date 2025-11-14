import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-zinc-400 text-sm tracking-wide">
            © 2025 OTTO ROTHENBURG
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://x.com/OttoRothenburg" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm tracking-wide"
            >
              X (TWITTER)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;