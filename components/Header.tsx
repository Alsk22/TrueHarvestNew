
import React, { useState } from 'react';
import type { Page, User } from '../types';
import HomeIcon from './icons/HomeIcon';
import BibleIcon from './icons/BibleIcon';
import MusicIcon from './icons/MusicIcon';
import CalendarIcon from './icons/CalendarIcon';
import InspirationIcon from './icons/InspirationIcon';
import UserIcon from './icons/UserIcon';
import LogoutIcon from './icons/LogoutIcon';
import CreateIcon from './icons/CreateIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import SearchIcon from './icons/SearchIcon';
import Logo from './Logo';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  currentUser: User | null;
  onLogout: () => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onClick: () => void;
  icon: React.ReactElement<{ className?: string }>;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, onClick, icon, children, isMobile = false }) => {
  const isActive = currentPage === page;
  
  // Desktop Styles
  const desktopBase = "relative flex items-center space-x-2 px-4 py-2 text-sm font-bold tracking-wide transition-all duration-300 rounded-full group";
  const desktopActive = "text-amber-300 bg-slate-800/80 shadow-[0_0_15px_rgba(245,158,11,0.2)]";
  const desktopInactive = "text-slate-400 hover:text-white hover:bg-slate-800/40";
  
  // Mobile Styles
  const mobileClasses = `w-full flex items-center space-x-4 p-4 text-lg rounded-xl transition-all ${
      isActive ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' : 'text-slate-300 hover:bg-slate-800/50'
  }`;
  
  if (isMobile) {
      return (
        <button onClick={onClick} className={mobileClasses}>
            {React.cloneElement(icon, { className: "h-6 w-6" })}
            <span>{children}</span>
        </button>
      );
  }

  return (
    <button
      onClick={onClick}
      className={`${desktopBase} ${isActive ? desktopActive : desktopInactive}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {React.cloneElement(icon, { className: `h-4 w-4 ${isActive ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'}` })}
      <span>{children}</span>
    </button>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, currentUser, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  // Base items visible to everyone (Guest & User)
  let navItems = [
    { page: 'home' as Page, icon: <HomeIcon />, label: 'Home' },
    { page: 'verse' as Page, icon: <InspirationIcon />, label: 'Verse' },
    { page: 'bible' as Page, icon: <BibleIcon />, label: 'Bible' },
  ];

  // Items for registered users only
  if (currentUser) {
    navItems = [
      ...navItems,
      { page: 'plans' as Page, icon: <CalendarIcon />, label: 'Plans' },
      { page: 'casestudies' as Page, icon: <BookOpenIcon />, label: 'Case Studies' },
      { page: 'songs' as Page, icon: <MusicIcon />, label: 'Songs' },
      { page: 'create' as Page, icon: <CreateIcon />, label: 'Create' },
      { page: 'events' as Page, icon: <CalendarIcon />, label: 'Events' },
      { page: 'study' as Page, icon: <SearchIcon />, label: 'Query' },
    ];
    
    // Admin Link
    if (currentUser.role === 'admin') {
        navItems.push({ 
            page: 'admin' as Page, 
            icon: <UserIcon />, 
            label: 'Admin' 
        });
    }
  }

  return (
    <header className="bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <button onClick={() => handleNavClick('home')} className="flex items-center group focus:outline-none">
              <div className="relative">
                  <div className="absolute inset-0 bg-amber-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
                  <Logo svgClassName="w-10 h-10 text-amber-400 relative z-10" />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center">
            <nav className="flex space-x-1 p-1 bg-slate-900/50 rounded-full border border-slate-800/50">
              {navItems.map(item => (
                <NavLink 
                  key={item.page} 
                  page={item.page} 
                  currentPage={currentPage} 
                  onClick={() => handleNavClick(item.page)}
                  icon={item.icon}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            
            <div className="ml-8 pl-8 border-l border-slate-800 flex items-center">
                {currentUser ? (
                   <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => setCurrentPage('profile')}
                        className="flex items-center group"
                      >
                         <div className="text-right hidden xl:block mr-3">
                            <span className="block text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{currentUser.profile?.displayName || currentUser.email.split('@')[0]}</span>
                            <span className="block text-[10px] text-amber-400 uppercase tracking-widest font-bold">
                                {currentUser.role === 'admin' ? 'Administrator' : 'Member'}
                            </span>
                         </div>
                         <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 group-hover:border-amber-400/50 transition-all">
                             <UserIcon className="h-5 w-5" />
                         </div>
                      </button>
                       <button 
                            onClick={onLogout} 
                            title="Logout" 
                            className="p-2.5 rounded-full text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-all border border-transparent hover:border-slate-700"
                        >
                           <LogoutIcon className="h-5 w-5" />
                       </button>
                   </div>
                ) : (
                    <div className="flex items-center space-x-3">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Guest Mode</span>
                        <button 
                            onClick={onLogout} // Triggers login screen
                            className="px-6 py-2.5 text-sm font-bold text-slate-900 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
                        >
                            Join Community
                        </button>
                    </div>
                )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl animate-fadeIn">
          <div className="px-4 py-6 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {navItems.map(item => (
              <NavLink 
                key={item.page} 
                page={item.page} 
                currentPage={currentPage} 
                onClick={() => handleNavClick(item.page)}
                icon={item.icon}
                isMobile={true}
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="pt-6 mt-6 border-t border-slate-800">
                 {currentUser ? (
                   <div className="flex flex-col space-y-4 px-2">
                     <button 
                        onClick={() => { setCurrentPage('profile'); setIsMenuOpen(false); }}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-900/50"
                     >
                       <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400">
                             <UserIcon className="h-5 w-5" />
                       </div>
                       <div className="text-left">
                         <p className="text-base font-medium text-white">{currentUser.profile?.displayName || currentUser.email}</p>
                         <p className="text-xs font-bold text-amber-500 uppercase tracking-widest">{currentUser.role === 'admin' ? 'Admin' : 'Member'}</p>
                       </div>
                     </button>
                      <button 
                        onClick={() => { onLogout(); setIsMenuOpen(false); }} 
                        className="flex items-center space-x-2 px-4 py-2 text-red-400 bg-slate-900 rounded-lg border border-slate-800 justify-center"
                      >
                          <LogoutIcon className="h-5 w-5" />
                          <span className="font-bold text-sm">Logout</span>
                      </button>
                   </div>
                ) : (
                    <button 
                        onClick={() => { onLogout(); setIsMenuOpen(false); }}
                        className="w-full py-4 text-center text-slate-900 bg-amber-500 rounded-xl font-bold text-lg hover:bg-amber-400 transition-colors"
                    >
                        Join Community
                    </button>
                )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
