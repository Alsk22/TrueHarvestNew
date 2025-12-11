
import React, { useRef } from 'react';
import type { Page, User } from '../types';
import BibleIcon from './icons/BibleIcon';
import MusicIcon from './icons/MusicIcon';
import CalendarIcon from './icons/CalendarIcon';
import InspirationIcon from './icons/InspirationIcon';
import CreateIcon from './icons/CreateIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import SearchIcon from './icons/SearchIcon';
import LeafIcon from './icons/LeafIcon';
import VideoIcon from './icons/VideoIcon';
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
    className={`relative group w-full h-64 rounded-3xl overflow-hidden shadow-xl transition-all duration-500 text-left border border-slate-800 
        ${isLocked ? 'cursor-not-allowed opacity-70' : 'hover:border-amber-500/50 hover:shadow-[0_20px_50px_-15px_rgba(245,158,11,0.2)] transform hover:-translate-y-2'}
    `}
  >
    <div
      className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out ${isLocked ? 'grayscale' : 'group-hover:scale-110 opacity-70 group-hover:opacity-50'}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
    
    <div className="relative h-full flex flex-col justify-end p-8 z-10">
      <div className={`absolute top-6 right-6 p-3 rounded-2xl backdrop-blur-md border transition-all duration-300 ${
          isLocked 
            ? 'bg-slate-900/80 border-slate-700 text-slate-500' 
            : 'bg-amber-500/20 border-amber-500/30 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-900'
      }`}>
        {isLocked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ) : (
            React.cloneElement(icon, { className: "h-6 w-6" })
        )}
      </div>
      
      <h3 className={`text-2xl font-bold font-serif tracking-tight mb-2 transition-colors ${isLocked ? 'text-slate-500' : 'text-white group-hover:text-amber-200'}`}>{title}</h3>
      <p className="text-slate-400 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          {isLocked ? "Join community to access." : description}
      </p>
    </div>
  </button>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, currentUser }) => {
  const isRegistered = !!currentUser;
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="-mt-8 -mx-4 sm:-mx-6 lg:-mx-8 font-sans text-gray-200">
      
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[700px] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop" 
                alt="Cinematic Nature Background" 
                className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]" 
                style={{ animationDuration: '30s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-950"></div>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fadeInUp">
            <div className="mb-8 p-6 rounded-full bg-slate-950/30 backdrop-blur-xl border border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Logo svgClassName="w-20 h-20 text-[#fcd34d]" showText={false} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#fcd34d] tracking-tight mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                True Harvest
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 font-medium tracking-[0.2em] uppercase mb-10 drop-shadow-md border-b border-[#fcd34d]/50 pb-4">
                A Garden of Biblical Faith
            </p>

            <p className="text-xl md:text-2xl text-slate-100 max-w-3xl leading-relaxed mb-12 drop-shadow-md font-serif opacity-90">
                Journey through a cinematic sanctuary of spiritual resources. Uncover stories, 
                strength, and legacies, brought to life with detailed narratives and AI-generated insights.
            </p>

            <button 
                onClick={scrollToContent}
                className="px-12 py-4 bg-[#fcd34d] hover:bg-[#fbbf24] text-slate-900 font-bold text-lg rounded-xl shadow-[0_0_40px_rgba(252,211,77,0.3)] hover:shadow-[0_0_60px_rgba(252,211,77,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
                Enter the Garden
            </button>
        </div>

        {/* Bottom Feature Card - "Witness Pivotal Moments" */}
        <div className="absolute bottom-8 w-full max-w-5xl px-4 z-20 hidden lg:block animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <div className="text-center text-[#fcd34d] font-bold tracking-[0.25em] text-xs mb-4 uppercase drop-shadow-md">
                Witness Pivotal Moments From Scripture
            </div>
            
            <div className="relative h-48 w-full bg-slate-900/80 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl group cursor-pointer" onClick={() => setCurrentPage('create')}>
                <div className="absolute inset-0 flex">
                    <div className="w-1/3 relative h-full">
                         <img 
                            src="https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=2564&auto=format&fit=crop" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                            alt="Sea"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/90"></div>
                    </div>
                    <div className="w-2/3 p-10 flex flex-col justify-center relative">
                        <div className="flex items-center space-x-3 mb-2">
                            <span className="text-[#fcd34d] text-xs font-bold uppercase tracking-wider">Matthew 14</span>
                            <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Visual Imagination</span>
                        </div>
                        <h3 className="text-4xl font-serif font-bold text-white mb-2 group-hover:text-[#fcd34d] transition-colors">Walking on Water</h3>
                        <p className="text-slate-400 text-sm max-w-lg">Visualize the miraculous moment when faith defied the laws of nature.</p>
                        
                        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-slate-600 group-hover:border-[#fcd34d] flex items-center justify-center transition-colors">
                             <svg className="w-5 h-5 text-white group-hover:text-[#fcd34d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                             </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce lg:hidden opacity-70">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Navigation Grid Section */}
      <section ref={contentRef} className="relative z-10 bg-slate-950 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 text-center">
                <LeafIcon className="h-10 w-10 text-emerald-500 mb-4" />
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Explore the Sanctuary</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#fcd34d] to-transparent rounded-full opacity-60"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <NavCard 
                    title="Verse of the Day"
                    description="Start your day with AI-powered spiritual insights."
                    icon={<InspirationIcon />}
                    onClick={() => setCurrentPage('verse')}
                    imageUrl="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop"
                />
                <NavCard 
                    title="Bible Reader"
                    description="Read scripture in English, Telugu, & Tamil."
                    icon={<BibleIcon />}
                    onClick={() => setCurrentPage('bible')}
                    imageUrl="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1920&auto=format&fit=crop"
                />
                <NavCard 
                    title="Botanica"
                    description="Grow profiles of biblical characters."
                    icon={<LeafIcon />}
                    onClick={() => setCurrentPage('botanica')}
                    imageUrl="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=2000&auto=format&fit=crop"
                    isLocked={!isRegistered}
                />
                <NavCard 
                    title="Scripture Art"
                    description="Create AI imagery from verses."
                    icon={<CreateIcon />}
                    onClick={() => setCurrentPage('create')}
                    imageUrl="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2680&auto=format&fit=crop"
                    isLocked={!isRegistered}
                />
                 <NavCard 
                    title="Video Generator"
                    description="Turn images into cinematic moments."
                    icon={<VideoIcon />}
                    onClick={() => setCurrentPage('video')}
                    imageUrl="https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop"
                    isLocked={!isRegistered}
                />
                <NavCard 
                    title="Worship Songs"
                    description="A library of hymns and praise."
                    icon={<MusicIcon />}
                    onClick={() => setCurrentPage('songs')}
                    imageUrl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop"
                    isLocked={!isRegistered}
                />
                <NavCard 
                    title="Case Studies"
                    description="Deep dive into biblical events."
                    icon={<BookOpenIcon />}
                    onClick={() => setCurrentPage('casestudies')}
                    imageUrl="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1920&auto=format&fit=crop"
                    isLocked={!isRegistered}
                />
                <NavCard 
                    title="Events"
                    description="Community gatherings and fellowship."
                    icon={<CalendarIcon />}
                    onClick={() => setCurrentPage('events')}
                    imageUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2000&auto=format&fit=crop"
                    isLocked={!isRegistered}
                />
                <NavCard 
                    title="AI Query"
                    description="Ask difficult theological questions."
                    icon={<SearchIcon />}
                    onClick={() => setCurrentPage('study')}
                    imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop"
                    isLocked={!isRegistered}
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
