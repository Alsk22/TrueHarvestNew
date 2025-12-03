import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BibleReader from './components/BibleReader';
import SongLibrary from './components/SongLibrary';
import EventsCalendar from './components/EventsCalendar';
import VerseOfTheDayPage from './components/VerseOfTheDayPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard';
import type { Page, User } from './types';
import { USERS } from './services/constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isGuestMode, setIsGuestMode] = useState(false);

  // Effect to load users and session from storage on initial load
  useEffect(() => {
    try {
        // Load User Database
        const storedUsers = localStorage.getItem('trueHarvestUsers');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        } else {
            setUsers(USERS);
            localStorage.setItem('trueHarvestUsers', JSON.stringify(USERS));
        }

        // Load Session (Check LocalStorage first for Remember Me, then SessionStorage)
        const storedSession = localStorage.getItem('trueHarvestSession') || sessionStorage.getItem('trueHarvestSession');
        if (storedSession) {
            setCurrentUser(JSON.parse(storedSession));
        }
    } catch (error) {
        console.error("Error loading initial state:", error);
        setUsers(USERS);
    }
  }, []);

  const handleLogin = (email: string, password?: string, rememberMe: boolean = true): { success: boolean; message: string } => {
    const user = users.find(u => u.email === email);
    
    if (user) {
        // Allow login if password matches OR if it's a google-auth simulation (bypassing password check for linked accounts)
        // If the user has a password set, and we are trying to login via Google ('google-auth'), we allow it.
        if (password && password !== 'google-auth' && user.password && user.password !== password) {
            return { success: false, message: "Incorrect password." };
        }
        
        setCurrentUser(user);
        
        // Handle Session Persistence
        if (rememberMe) {
            localStorage.setItem('trueHarvestSession', JSON.stringify(user));
            sessionStorage.removeItem('trueHarvestSession');
        } else {
            sessionStorage.setItem('trueHarvestSession', JSON.stringify(user));
            localStorage.removeItem('trueHarvestSession');
        }

        setIsGuestMode(false);
        setCurrentPage('home');
        return { success: true, message: "Login successful." };
    }
    
    return { success: false, message: "User not found. Please register." };
  };

  const handleRegister = (email: string, password?: string, rememberMe: boolean = true): { success: boolean; message: string } => {
      if (users.some(u => u.email === email)) {
          return { success: false, message: "User already exists. Please login." };
      }

      const newUser: User = { 
          email, 
          role: 'user', 
          password: password || 'google-auth' 
      };
      
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('trueHarvestUsers', JSON.stringify(updatedUsers));
      
      // Auto login after registration
      setCurrentUser(newUser);
      
      if (rememberMe) {
          localStorage.setItem('trueHarvestSession', JSON.stringify(newUser));
          sessionStorage.removeItem('trueHarvestSession');
      } else {
          sessionStorage.setItem('trueHarvestSession', JSON.stringify(newUser));
          localStorage.removeItem('trueHarvestSession');
      }

      setIsGuestMode(false);
      setCurrentPage('home');
      
      return { success: true, message: "Account created successfully." };
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('trueHarvestSession');
    sessionStorage.removeItem('trueHarvestSession');
    setIsGuestMode(false);
    setCurrentPage('home');
  };

  const handleGuestAccess = () => {
    setIsGuestMode(true);
    setCurrentPage('home');
  };

  const handleUpdateUsers = (updatedUsers: User[]) => {
      setUsers(updatedUsers);
      localStorage.setItem('trueHarvestUsers', JSON.stringify(updatedUsers));
      
      // If the current user was modified (e.g., role changed), update session
      if (currentUser) {
          const updatedCurrentUser = updatedUsers.find(u => u.email === currentUser.email);
          if (updatedCurrentUser) {
              setCurrentUser(updatedCurrentUser);
              // Update whichever storage is currently in use
              if (localStorage.getItem('trueHarvestSession')) {
                  localStorage.setItem('trueHarvestSession', JSON.stringify(updatedCurrentUser));
              }
              if (sessionStorage.getItem('trueHarvestSession')) {
                  sessionStorage.setItem('trueHarvestSession', JSON.stringify(updatedCurrentUser));
              }
          }
      }
  };

  // Determine view based on auth state
  if (!currentUser && !isGuestMode) {
    return (
        <LoginPage 
            onLogin={handleLogin} 
            onRegister={handleRegister}
            onGuestAccess={handleGuestAccess} 
        />
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 flex flex-col">
      {/* Background with overlay */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507692049790-de58293a469d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95"></div>
      </div>

      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        currentUser={currentUser} 
        onLogout={handleLogout}
      />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
        {currentPage === 'home' && (
          <HomePage setCurrentPage={setCurrentPage} currentUser={currentUser} />
        )}
        {currentPage === 'verse' && (
          <VerseOfTheDayPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'bible' && (
          <BibleReader setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'songs' && (
          <SongLibrary setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'events' && (
           <EventsCalendar setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'about' && (
           <AboutPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'admin' && currentUser?.role === 'admin' && (
            <AdminDashboard 
                users={users} 
                setUsers={handleUpdateUsers} 
                setCurrentPage={setCurrentPage}
            />
        )}
        {/* Access Control Fallback */}
        {currentPage === 'admin' && currentUser?.role !== 'admin' && (
             <div className="flex flex-col items-center justify-center py-20 bg-slate-800/50 rounded-xl border border-slate-700/50">
                 <h2 className="text-3xl font-bold text-red-400 mb-4 font-serif">Access Restricted</h2>
                 <p className="text-slate-300 mb-6">You do not have permission to view the administrative dashboard.</p>
                 <button 
                    onClick={() => setCurrentPage('home')} 
                    className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-white transition-colors"
                >
                    Return Home
                </button>
             </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;