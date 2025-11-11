import React from 'react';
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
}> = ({ title, description, icon, onClick, imageUrl }) => (
  <button
    onClick={onClick}
    className="relative group w-full h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 text-left border-2 border-slate-700/50 hover:border-amber-400 hover:shadow-amber-400/20"
    aria-label={`Navigate to ${title}`}
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
  return (
    <div className="space-y-16">
      <section className="text-center pt-8 pb-12 md:pt-12 md:pb-16">
        
        {/* New Grand Logo Display */}
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center justify-center w-40 h-40 bg-slate-900/60 rounded-full border-2 border-amber-400/30 shadow-2xl shadow-amber-500/10 backdrop-blur-sm">
            <Logo showText={false} svgClassName="w-28 h-28 text-amber-300" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold font-serif text-white tracking-tight" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
          Food for your <span className="text-amber-400">Spiritual Life</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          True Harvest is your daily bread, providing spiritual nourishment for a vibrant life in Christ. Here, you'll find resources designed to deepen your faith, enrich your worship, and connect you with a loving community of believers.
        </p>
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
          />
           <NavCard 
            title="Read the Bible"
            description="Explore the scriptures in multiple languages with organized sections."
            icon={<BibleIcon />}
            onClick={() => setCurrentPage('bible')}
            imageUrl="https://images.unsplash.com/photo-1506462945848-ac8ea624570a?q=80&w=2670&auto=format&fit=crop"
          />
          <NavCard 
            title="Worship Songs"
            description="Listen to a curated library of praise, worship, and classic hymns."
            icon={<MusicIcon />}
            onClick={() => setCurrentPage('songs')}
            imageUrl="https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2670&auto=format&fit=crop"
          />
          <NavCard 
            title="Community Events"
            description="Find and join upcoming services, studies, and gatherings."
            icon={<CalendarIcon />}
            onClick={() => setCurrentPage('events')}
            imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop"
          />
           <NavCard 
            title="About Us"
            description="Learn about our mission, vision, and the heart behind this community."
            icon={<InfoIcon />}
            onClick={() => setCurrentPage('about')}
            imageUrl="https://images.unsplash.com/photo-1563004943-579545585144?q=80&w=2574&auto=format&fit=crop"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;