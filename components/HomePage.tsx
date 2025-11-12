import React, { useState } from 'react';
import type { Page } from '../types';
import BibleIcon from './icons/BibleIcon';
import MusicIcon from './icons/MusicIcon';
import CalendarIcon from './icons/CalendarIcon';
import InspirationIcon from './icons/InspirationIcon';
import InfoIcon from './icons/InfoIcon';
import Logo from './Logo';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

// Fix: Updated the `icon` prop type to be more specific (`React.ReactElement<{ className?: string }>`).
// This allows `React.cloneElement` to correctly type-check the `className` prop, resolving the error.
const NavCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactElement<{ className?: string }>; 
  onClick: () => void;
  imageUrl: string;
  style: React.CSSProperties;
}> = ({ title, description, icon, onClick, imageUrl, style }) => (
  <button
    onClick={onClick}
    className="relative group w-full h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-left border hover:border-amber-400 hover:shadow-amber-400/20"
    aria-label={`Navigate to ${title}`}
    style={style}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="presentation"
    ></div>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent"></div>
    
    {/* Content */}
    <div className="relative h-full flex items-center p-6 md:p-8">
      <div className="flex-shrink-0 mr-6 text-amber-400/90 group-hover:text-amber-300 transition-colors duration-300">
        {React.cloneElement(icon, { className: "h-14 w-14" })}
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-bold font-serif text-white tracking-tight">{title}</h3>
        <p className="text-slate-200 mt-1 text-md md:text-lg max-w-md">{description}</p>
      </div>
    </div>
  </button>
);


const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderColor, setBorderColor] = useState('#334155'); // slate-700

  const selectClasses = "w-full pl-3 pr-10 py-2.5 text-base bg-slate-900 border border-slate-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition";

  const customCardStyle: React.CSSProperties = {
    borderStyle: borderStyle as React.CSSProperties['borderStyle'],
    borderWidth: `${borderWidth}px`,
    borderColor: borderColor
  };

  return (
    <div className="space-y-16">
      <section className="text-center pt-10 pb-12 md:pt-16 md:pb-20">
        
        <div className="flex justify-center mb-8">
            <Logo showText={false} svgClassName="w-36 h-36 text-amber-300" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold font-serif text-white tracking-tight" style={{textShadow: '2px 2px 10px rgba(0,0,0,0.8)'}}>
          True Harvest
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-serif">
          A digital sanctuary for spiritual growth, rooted in the Word and cultivated in community.
        </p>
      </section>

      <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-serif text-amber-300 mb-4 text-center">Customize Card Borders</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                  <label htmlFor="border-style" className="block text-sm font-medium text-slate-300 mb-2">Style</label>
                  <select id="border-style" value={borderStyle} onChange={(e) => setBorderStyle(e.target.value)} className={selectClasses}>
                      <option value="solid">Solid</option>
                      <option value="dashed">Dashed</option>
                      <option value="dotted">Dotted</option>
                      <option value="double">Double</option>
                      <option value="none">None</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="border-width" className="block text-sm font-medium text-slate-300 mb-2">Width: {borderWidth}px</label>
                  <input id="border-width" type="range" min="0" max="10" value={borderWidth} onChange={(e) => setBorderWidth(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500" />
              </div>
              <div>
                  <label htmlFor="border-color" className="block text-sm font-medium text-slate-300 mb-2">Color</label>
                  <input id="border-color" type="color" value={borderColor} onChange={(e) => setBorderColor(e.target.value)} className="w-full h-11 p-1 bg-slate-700 border border-slate-600 rounded-md cursor-pointer" />
              </div>
          </div>
      </section>

      <section>
        <h2 className="text-center text-3xl font-serif text-slate-300 mb-10 tracking-wider">Explore Our Sanctuary</h2>
        <div className="flex flex-col items-center max-w-4xl mx-auto space-y-6">
           <NavCard 
            title="Daily Inspiration"
            description="Start your day with a powerful, AI-explained Verse of the Day."
            icon={<InspirationIcon />}
            onClick={() => setCurrentPage('verse')}
            imageUrl="https://images.unsplash.com/photo-1489549132488-d00b7d80e422?q=80&w=2574&auto=format&fit=crop"
            style={customCardStyle}
          />
           <NavCard 
            title="Read the Bible"
            description="Explore the scriptures in multiple languages with organized sections."
            icon={<BibleIcon />}
            onClick={() => setCurrentPage('bible')}
            imageUrl="https://images.unsplash.com/photo-1506462945848-ac8ea624570a?q=80&w=2670&auto=format&fit=crop"
            style={customCardStyle}
          />
          <NavCard 
            title="Worship Songs"
            description="Listen to a curated library of praise, worship, and classic hymns."
            icon={<MusicIcon />}
            onClick={() => setCurrentPage('songs')}
            imageUrl="https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2670&auto=format&fit=crop"
            style={customCardStyle}
          />
          <NavCard 
            title="Community Events"
            description="Find and join upcoming services, studies, and gatherings."
            icon={<CalendarIcon />}
            onClick={() => setCurrentPage('events')}
            imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop"
            style={customCardStyle}
          />
           <NavCard 
            title="About Us"
            description="Learn about our mission, vision, and the heart behind this community."
            icon={<InfoIcon />}
            onClick={() => setCurrentPage('about')}
            imageUrl="https://images.unsplash.com/photo-1563004943-579545585144?q=80&w=2574&auto=format&fit=crop"
            style={customCardStyle}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;