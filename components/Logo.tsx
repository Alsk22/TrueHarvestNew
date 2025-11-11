import React from 'react';

interface LogoProps {
  showText?: boolean;
  svgClassName?: string;
  rootClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ showText = true, svgClassName = "w-10 h-10", rootClassName = "" }) => {
  return (
    <div className={`flex items-center ${rootClassName}`} aria-label="True Harvest - Reap the Word Home">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-amber-400 ${svgClassName} ${showText ? 'mr-3' : ''} transition-transform duration-300 group-hover:scale-105`}
        role="img"
        aria-label="True Harvest Logo: A cross, formed from a stalk of wheat, rising from an open Bible."
      >
        <path 
          d="M4 19c0-1.87 3.58-3.38 8-3.38s8 1.5 8 3.38M5 18.5h14M12 15.12V4M10 7H5.5c-1.5 0-2.5-1-2.5-2.5S4 2 5.5 2h0c1.5 0 2.5 1 2.5 2.5M14 7h4.5c1.5 0 2.5-1 2.5-2.5S20 2 18.5 2h0c-1.5 0-2.5 1-2.5 2.5M12 4L12 2M10.5 12c-1.5 0-2.5-.5-3.5-1.5M13.5 12c1.5 0 2.5-.5 3.5-1.5"
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showText && (
        <div className="hidden sm:block">
          <span className="font-serif text-2xl font-bold text-white tracking-tight leading-none">True Harvest</span>
          <span className="block text-xs font-semibold text-amber-300/80 tracking-[0.2em] uppercase">Reap the Word</span>
        </div>
      )}
    </div>
  );
};

export default Logo;