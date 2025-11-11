import React from 'react';

interface LogoProps {
  showText?: boolean;
  svgClassName?: string;
  rootClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ showText = true, svgClassName = "w-10 h-10", rootClassName = "" }) => {
  return (
    <div className={`flex items-center ${rootClassName}`} aria-label="True Harvest Home">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-amber-400 ${svgClassName} ${showText ? 'mr-3' : ''}`}
        role="img"
        aria-hidden="true"
      >
        <path d="M12 2V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 12H7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C15.866 22 19 18.866 19 15C19 11.134 12 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C8.13401 22 5 18.866 5 15C5 11.134 12 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 17C15 17 12 14 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 17C9 17 12 14 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {showText && <span className="font-serif text-3xl font-bold text-white hidden sm:block tracking-tight">True Harvest</span>}
    </div>
  );
};

export default Logo;