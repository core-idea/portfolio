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

            {/* Discord Icon */}
            <a 
              href="https://discord.gg/RyeT6Ruz" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
              aria-label="Discord"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;