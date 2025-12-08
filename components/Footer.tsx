
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-slate-400 mt-12 border-t border-slate-700/50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
            <p className="font-serif text-2xl text-white">True Harvest</p>
            <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Christian Community.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-2">
            <p className="text-sm">Building faith and fellowship together.</p>
            <a 
                href="mailto:support@trueharvest.world" 
                className="text-sm text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
                <span>Need Help?</span>
                <span className="underline decoration-dotted">support@trueharvest.world</span>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
