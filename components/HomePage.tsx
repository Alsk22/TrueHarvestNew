
import React from 'react';
import type { Page, User } from '../types';
import BibleIcon from './icons/BibleIcon';
import MusicIcon from './icons/MusicIcon';
import CalendarIcon from './icons/CalendarIcon';
import InspirationIcon from './icons/InspirationIcon';
import InfoIcon from './icons/InfoIcon';
import CreateIcon from './icons/CreateIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import SearchIcon from './icons/SearchIcon';
import Logo from './Logo';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  currentUser: User | null;
}

const NavCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ReactElement<{ className?: string }>; 
  onClick: () => void;
  imageUrl: string;
  isLocked?: boolean;
}> = ({ title, description, icon, onClick, imageUrl, isLocked = false }) => (
  <button
    onClick={onClick}
    disabled={isLocked}
    className={`relative group w-full h-56 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 text-left border border-slate-800 
        ${isLocked ? 'cursor-not-allowed opacity-80' : 'hover:border-amber-400/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transform hover:-translate-y-1'}
    `}
    aria-label={`Navigate to ${title}`}
  >
    {/* Background Image */}
    <div
      className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out ${isLocked ? 'grayscale opacity-30' : 'group-hover:scale-110 opacity-60 group-hover:opacity-40'}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="presentation"
    ></div>
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/20 group-hover:via-slate-900/90 transition-all duration-500"></div>
    
    {/* Accent Glow on Hover */}
    {!isLocked && <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>}

    {/* Content */}
    <div className="relative h-full flex flex-col justify-end p-8 z-10">
      <div className={`absolute top-6 right-6 p-3 rounded-2xl border transition-all duration-300 shadow-lg ${
          isLocked 
            ? 'bg-slate-900/80 border-slate-700 text-slate-500' 
            : 'bg-slate-800/50 backdrop-blur-md border-slate-700 group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:border-amber-400 text-slate-300'
      }`}>
        {isLocked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ) : (
            React.cloneElement(icon, { className: "h-8 w-8" })
        )}
      </div>
      
      <div className={`transform transition-transform duration-300 ${!isLocked && 'group-hover:translate-x-2'}`}>
        <h3 className={`text-3xl font-bold font-serif tracking-tight mb-2 transition-colors ${isLocked ? 'text-slate-500' : 'text-white group-hover:text-amber-200'}`}>{title}</h3>
        <p className="text-slate-300 text-md font-medium leading-relaxed max-w-[90%] opacity-90 group-hover:opacity-100">
            {isLocked ? "Join community to access." : description}
        </p>
      </div>
    </div>
  </button>
);


const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, currentUser }) => {
  const isRegistered = !!currentUser;

  return (
    <div className="space-y-20 pb-12">
      {/* Hero Section */}
      <section className="text-center pt-16 md:pt-24 relative">
        {/* Glow effect behind logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="flex justify-center mb-10 animate-fadeInUp">
            <div className="relative">
                <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 animate-pulse"></div>
                <Logo showText={false} svgClassName="w-32 h-32 md:w-40 md:h-40 text-amber-300 relative z-10 drop-shadow-2xl" />
            </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 tracking-tighter drop-shadow-sm animate-fadeInUp" style={{animationDelay: '0.1s'}}>
          True Harvest
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6 mb-6 rounded-full opacity-80"></div>
        <p className="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto font-serif font-light leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          A digital sanctuary for spiritual growth,<br className="hidden md:block"/> rooted in the Word and cultivated in community.
        </p>
      </section>

      <section className="px-4">
        <div className="flex items-center justify-center space-x-4 mb-12">
             <div className="h-px w-12 bg-slate-700"></div>
             <h2 className="text-center text-2xl md:text-3xl font-serif text-amber-200/80 tracking-widest uppercase">Explore The Sanctuary</h2>
             <div className="h-px w-12 bg-slate-700"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
           {/* Public Cards */}
           <NavCard 
            title="Daily Inspiration"
            description="Start your day with a powerful, AI-explained Verse of the Day."
            icon={<InspirationIcon />}
            onClick={() => setCurrentPage('verse')}
            imageUrl="https://images.unsplash.com/photo-1489549132488-d00b7d80e422?q=80&w=2574&auto=format&fit=crop"
          />
           <NavCard 
            title="Read the Bible"
            description="Explore the scriptures in multiple languages with parallel views."
            icon={<BibleIcon />}
            onClick={() => setCurrentPage('bible')}
            imageUrl="https://images.unsplash.com/photo-1506462945848-ac8ea624570a?q=80&w=2670&auto=format&fit=crop"
          />
          
          {/* Restricted Cards */}
          <NavCard 
            title="Scripture Art"
            description="Create stunning AI imagery inspired by Bible verses."
            icon={<CreateIcon />}
            onClick={() => setCurrentPage('create')}
            imageUrl="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2680&auto=format&fit=crop"
            isLocked={!isRegistered}
          />
           <NavCard 
            title="Case Studies"
            description="Deep dive into biblical characters and major events."
            icon={<BookOpenIcon />}
            onClick={() => setCurrentPage('casestudies')}
            imageUrl="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000&auto=format&fit=crop"
            isLocked={!isRegistered}
          />
          <NavCard 
            title="Worship Songs"
            description="A curated library of praise, worship, and classic hymns."
            icon={<MusicIcon />}
            onClick={() => setCurrentPage('songs')}
            imageUrl="https://images.unsplash.com/photo-1517230878791-4d28214057c2?q=80&w=2670&auto=format&fit=crop"
            isLocked={!isRegistered}
          />
          <NavCard 
            title="Community Events"
            description="Join upcoming services, studies, and gatherings."
            icon={<CalendarIcon />}
            onClick={() => setCurrentPage('events')}
            imageUrl="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2669&auto=format&fit=crop"
            isLocked={!isRegistered}
          />
          <NavCard 
            title="About Us"
            description="Our mission, vision, and the heart behind this community."
            icon={<InfoIcon />}
            onClick={() => setCurrentPage('about')}
            imageUrl="https://images.unsplash.com/photo-1563004943-579545585144?q=80&w=2574&auto=format&fit=crop"
            isLocked={!isRegistered}
          />
           <NavCard 
            title="Your Query"
            description="Ask detailed questions and get biblical insights powered by AI."
            icon={<SearchIcon />}
            onClick={() => setCurrentPage('study')}
            imageUrl="https://images.unsplash.com/photo-1531346878377-a513bc95ba0d?q=80&w=2670&auto=format&fit=crop"
            isLocked={!isRegistered}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;