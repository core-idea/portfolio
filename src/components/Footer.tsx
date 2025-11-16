import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showWallet, setShowWallet] = useState(false);
  const [copied, setCopied] = useState(false);
  const walletAddress = '2eRarYVDHruN7sDBH1QsUL96A9KEsBZxqtAQxYgak4jh';

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-black border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-zinc-400 text-sm tracking-wide">
            © 2025 OTTO ROTHENBURG
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Donate Button */}
            <div className="relative">
              <button
                onClick={() => setShowWallet(!showWallet)}
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm tracking-wide uppercase font-medium"
              >
                Donate
              </button>
              
              {showWallet && (
                <div className="absolute bottom-full right-0 mb-2 bg-zinc-900 border border-zinc-700 rounded-lg p-4 shadow-xl min-w-[320px]">
                  <div className="text-xs text-zinc-400 mb-2">Solana Wallet:</div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-white font-mono bg-zinc-800 px-3 py-2 rounded break-all flex-1">
                      {walletAddress}
                    </div>
                    <button
                      onClick={handleCopy}
                      className="bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-2 rounded text-xs transition-colors duration-300"
                    >
                      {copied ? '✓' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* X Icon */}
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