import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-zinc-400 text-sm tracking-wide">
            © 2025 OTTO ROTHENBURG
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-zinc-400 text-sm tracking-wide">
              Подписывайтесь
            </span>
            <a 
              href="https://x.com/OttoRothenburg" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;