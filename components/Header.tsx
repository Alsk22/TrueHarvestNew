
import React, { useState } from 'react';
import type { Page, User } from '../types';
import HomeIcon from './icons/HomeIcon';
import BibleIcon from './icons/BibleIcon';
import MusicIcon from './icons/MusicIcon';
import CalendarIcon from './icons/CalendarIcon';
import InspirationIcon from './icons/InspirationIcon';
import InfoIcon from './icons/InfoIcon';
import UserIcon from './icons/UserIcon';
import LogoutIcon from './icons/LogoutIcon';
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
  const baseClasses = "flex items-center space-x-3 transition-all duration-300";
  const desktopClasses = `px-3 py-2 text-base font-semibold rounded-t-sm border-b-2 ${isActive ? 'text-white border-amber-400' : 'text-slate-300 border-transparent hover:text-white hover:border-amber-400/50'}`;
  const mobileClasses = `w-full text-left p-4 text-lg rounded-md ${isActive ? 'bg-slate-700 text-amber-300' : 'text-slate-200 hover:bg-slate-700/50'}`;
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {React.cloneElement(icon, { className: "h-5 w-5" })}
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

  // Items for any registered user (including Admin)
  if (currentUser) {
    navItems = [
      ...navItems,
      { page: 'songs' as Page, icon: <MusicIcon />, label: 'Songs' },
      { page: 'events' as Page, icon: <CalendarIcon />, label: 'Events' },
      { page: 'about' as Page, icon: <InfoIcon />, label: 'About' },
    ];
  }

  // Admin-only items
  if (currentUser?.role === 'admin') {
    navItems.push({ page: 'admin' as Page, icon: <UserIcon />, label: 'Admin' });
  }

  return (
    <header className="bg-slate-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => handleNavClick('home')} className="group focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md">
              <Logo />
            </button>
          </div>
          <div className="hidden lg:flex items-center">
            <nav className="ml-10 flex items-baseline space-x-1">
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
            {currentUser ? (
               <div className="ml-6 pl-6 border-l border-slate-700 flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-sm text-slate-300 font-semibold">{currentUser.email}</span>
                    <span className="block text-xs text-amber-400 uppercase tracking-wider">{currentUser.role}</span>
                  </div>
                   <button onClick={onLogout} title="Logout" className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
                       <LogoutIcon className="h-6 w-6" />
                   </button>
               </div>
            ) : (
                <div className="ml-6 pl-6 border-l border-slate-700">
                    <button 
                        onClick={onLogout} // Reusing onLogout to trigger the login screen state reset
                        className="px-4 py-2 text-sm font-bold text-slate-900 bg-amber-500 rounded-md hover:bg-amber-400 transition-colors"
                    >
                        Sign In
                    </button>
                </div>
            )}
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
             {currentUser ? (
               <div className="px-4 pt-4 mt-2 border-t border-slate-700">
                   <div className="flex items-center justify-between">
                     <div>
                       <p className="text-base font-medium text-white">{currentUser.email}</p>
                       <p className="text-sm text-amber-400">{currentUser.role}</p>
                     </div>
                      <button onClick={onLogout} title="Logout" className="flex items-center space-x-2 p-2 text-slate-300 rounded-md hover:bg-slate-700">
                          <LogoutIcon className="h-5 w-5" />
                          <span>Logout</span>
                      </button>
                   </div>
               </div>
            ) : (
                <div className="px-4 pt-4 mt-2 border-t border-slate-700">
                    <button 
                        onClick={() => { onLogout(); setIsMenuOpen(false); }}
                        className="w-full py-3 text-center text-slate-900 bg-amber-500 rounded-md font-bold hover:bg-amber-400"
                    >
                        Sign In
                    </button>
                </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
