
import React from 'react';
import type { Page } from '../types';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-slate-400 mt-12 border-t border-slate-700/50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
            <p className="font-serif text-2xl text-white">True Harvest</p>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Christian Community.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-sm">Building faith and fellowship together.</p>
            <div className="flex space-x-6 text-sm">
                <button 
                    onClick={() => setCurrentPage('about')}
                    className="text-amber-500 hover:text-amber-400 transition-colors font-bold"
                >
                    About Us & Source Data
                </button>
                <a 
                    href="mailto:support@trueharvest.world" 
                    className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                    <span>Need Help?</span>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;