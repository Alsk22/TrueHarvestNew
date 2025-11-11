
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-slate-400 mt-12 border-t border-slate-700/50">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-2xl text-white">True Harvest</p>
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Christian Community. Building faith and fellowship together.</p>
      </div>
    </footer>
  );
};

export default Footer;