
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
import WelcomePage from './components/WelcomePage';
import UserProfileComponent from './components/UserProfile';
import BiblePlans from './components/BiblePlans';
import BibleStudy from './components/BibleStudy';
import VerseImageGenerator from './components/VerseImageGenerator';
import CaseStudies from './components/CaseStudies';
import AdminDashboard from './components/AdminDashboard';
import IntrospectionPage from './components/IntrospectionPage';
import type { Page, User, UserProfile } from './types';
import { USERS } from './services/constants';
import Logo from './components/Logo';
import { getVerseOfTheDay } from './services/geminiService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isGuestMode, setIsGuestMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isSessionLoading, setIsSessionLoading] = useState(true);

  // Effect to load users and session from storage on initial load
  useEffect(() => {
    const initializeApp = async () => {
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
                const sessionUser = JSON.parse(storedSession);
                setCurrentUser(sessionUser);
                setShowWelcome(false); // Skip welcome if logged in
            }
        } catch (error) {
            console.error("Error loading initial state:", error);
            setUsers(USERS);
        } finally {
            // Simulate a slight delay for smooth aesthetic or just finish immediately
            setIsSessionLoading(false);
        }
    };

    initializeApp();
  }, []);

  // Daily Notification Logic
  useEffect(() => {
      const checkDailyNotification = async () => {
          if (!currentUser || !currentUser.profile?.notificationsEnabled) return;

          const lastDate = currentUser.profile.lastNotificationDate;
          const today = new Date().toDateString();

          // If last notification wasn't today
          if (lastDate !== today) {
              // Check browser permission
              if (Notification.permission === 'granted') {
                  try {
                      // Fetch verse for notification
                      const verseData = await getVerseOfTheDay();
                      const verse = verseData.english;
                      
                      // Trigger Notification
                      const notif = new Notification("True Harvest: Daily Verse", {
                          body: `"${verse.verse}" - ${verse.reference}`,
                          icon: '/vite.svg', // Fallback icon
                          tag: 'daily-verse'
                      });
                      
                      notif.onclick = () => {
                          window.focus();
                          setCurrentPage('verse');
                      };

                      // Update user's lastNotificationDate to today
                      const updatedProfile = { 
                          ...currentUser.profile, 
                          lastNotificationDate: today 
                      };
                      const updatedUser = { ...currentUser, profile: updatedProfile };
                      
                      // Update State & Storage handled by helper
                      handleUpdateProfile(updatedUser);

                  } catch (e) {
                      console.error("Failed to send notification:", e);
                  }
              }
          }
      };

      if (!isSessionLoading && currentUser) {
          checkDailyNotification();
      }
  }, [currentUser, isSessionLoading]);


  const handleLogin = (email: string, password?: string, rememberMe: boolean = true): { success: boolean; message: string } => {
    const user = users.find(u => u.email === email);
    
    if (user) {
        if (password && user.password && user.password !== password) {
            return { success: false, message: "Incorrect password." };
        }
        
        setCurrentUser(user);
        setShowWelcome(false); // Ensure welcome screen is hidden
        
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

  const handleRegister = (email: string, password?: string, rememberMe: boolean = true, profileData?: Partial<UserProfile>): { success: boolean; message: string } => {
      if (users.some(u => u.email === email)) {
          return { success: false, message: "User already exists. Please login." };
      }

      const newUser: User = { 
          email, 
          role: 'user', 
          password: password,
          profile: {
              displayName: profileData?.displayName || email.split('@')[0],
              notificationsEnabled: profileData?.notificationsEnabled || false,
              streak: 0,
              versesRead: 0,
              bio: profileData?.bio || '',
              avatar: profileData?.avatar || 'bg-slate-700'
          }
      };
      
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem('trueHarvestUsers', JSON.stringify(updatedUsers));
      
      // Auto login after registration
      setCurrentUser(newUser);
      setShowWelcome(false); // Ensure welcome screen is hidden
      
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
    setShowWelcome(true);
  };

  const handleGuestAccess = () => {
    setIsGuestMode(true);
    setCurrentPage('home');
  };

  const handleUpdateUsers = (updatedUsers: User[]) => {
      setUsers(updatedUsers);
      localStorage.setItem('trueHarvestUsers', JSON.stringify(updatedUsers));
      
      // If the current user was modified, update session
      if (currentUser) {
          const updatedCurrentUser = updatedUsers.find(u => u.email === currentUser.email);
          if (updatedCurrentUser) {
              setCurrentUser(updatedCurrentUser);
              if (localStorage.getItem('trueHarvestSession')) {
                  localStorage.setItem('trueHarvestSession', JSON.stringify(updatedCurrentUser));
              }
              if (sessionStorage.getItem('trueHarvestSession')) {
                  sessionStorage.setItem('trueHarvestSession', JSON.stringify(updatedCurrentUser));
              }
          }
      }
  };

  const handleUpdateProfile = (updatedUser: User) => {
      const updatedUsers = users.map(u => u.email === updatedUser.email ? updatedUser : u);
      handleUpdateUsers(updatedUsers);
  };

  // 1. Session Loading State
  if (isSessionLoading) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-slate-950">
              <div className="flex flex-col items-center">
                  <div className="relative mb-6">
                      <div className="absolute inset-0 bg-amber-500 blur-xl opacity-20 rounded-full animate-pulse"></div>
                      <Logo svgClassName="w-16 h-16 text-amber-400 relative z-10" showText={false} />
                  </div>
                  <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
              </div>
          </div>
      );
  }

  // 2. View Routing Logic
  if (!currentUser && !isGuestMode) {
      if (showWelcome) {
          return <WelcomePage onEnter={() => setShowWelcome(false)} />;
      }
      return (
        <LoginPage 
            onLogin={handleLogin} 
            onRegister={handleRegister}
            onGuestAccess={handleGuestAccess}
            onBack={() => setShowWelcome(true)}
        />
    );
  }

  // Permission Logic
  const canAccessFullContent = !!currentUser; // Only registered users access everything

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 flex flex-col relative overflow-x-hidden">
      {/* Premium Ambient Background */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-slate-950"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90"></div>
      </div>

      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        currentUser={currentUser} 
        onLogout={handleLogout}
      />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn relative z-10">
        
        {/* Publicly Accessible Pages (Guest + User) */}
        {currentPage === 'home' && (
          <HomePage setCurrentPage={setCurrentPage} currentUser={currentUser} />
        )}
        {currentPage === 'verse' && (
          <VerseOfTheDayPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'bible' && (
          <BibleReader setCurrentPage={setCurrentPage} />
        )}

        {/* Restricted Pages (User Only) */}
        {canAccessFullContent ? (
            <>
                {currentPage === 'create' && <VerseImageGenerator setCurrentPage={setCurrentPage} />}
                {currentPage === 'songs' && <SongLibrary setCurrentPage={setCurrentPage} />}
                {currentPage === 'events' && <EventsCalendar setCurrentPage={setCurrentPage} />}
                {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
                {currentPage === 'plans' && <BiblePlans setCurrentPage={setCurrentPage} />}
                {currentPage === 'casestudies' && <CaseStudies setCurrentPage={setCurrentPage} />}
                {currentPage === 'study' && <BibleStudy setCurrentPage={setCurrentPage} />}
                {currentPage === 'introspection' && <IntrospectionPage setCurrentPage={setCurrentPage} />}
                
                {currentPage === 'profile' && currentUser && (
                    <UserProfileComponent 
                            user={currentUser} 
                            onUpdateUser={handleUpdateProfile} 
                            setCurrentPage={setCurrentPage}
                    />
                )}

                {/* Admin Dashboard */}
                {currentPage === 'admin' && currentUser?.role === 'admin' && (
                    <AdminDashboard 
                        users={users} 
                        setUsers={handleUpdateUsers} 
                        setCurrentPage={setCurrentPage} 
                    />
                )}
            </>
        ) : (
            // Access Denied View for Guests clicking restricted links directly (edge case)
            !['home', 'verse', 'bible'].includes(currentPage) && (
                <div className="flex flex-col items-center justify-center py-20 bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-2xl">
                     <div className="bg-slate-700/50 p-4 rounded-full mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                         </svg>
                     </div>
                     <h2 className="text-3xl font-bold text-white mb-2 font-serif">Member Exclusive</h2>
                     <p className="text-slate-400 mb-6 text-center max-w-md px-4">
                         Join the True Harvest community to access Songs, Events, Bible Study, Case Studies, and more.
                     </p>
                     <button 
                        onClick={() => handleLogout()} // Log out to go to login screen
                        className="px-6 py-3 bg-amber-500 hover:bg-amber-400 rounded-lg text-slate-900 font-bold transition-colors"
                    >
                        Create Account
                    </button>
                 </div>
            )
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
