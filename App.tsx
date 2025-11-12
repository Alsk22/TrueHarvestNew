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

  // Effect to load users and session from localStorage on initial load
  useEffect(() => {
    try {
      // Load users from storage, or seed with initial data
      const storedUsers = localStorage.getItem('trueHarvestUsers');
      const initialUsers = storedUsers ? JSON.parse(storedUsers) : USERS;
      setUsers(initialUsers);
      localStorage.setItem('trueHarvestUsers', JSON.stringify(initialUsers));

      // Check for a logged-in user session
      const storedUserEmail = localStorage.getItem('trueHarvestCurrentUser');
      if (storedUserEmail) {
        const user = initialUsers.find((u: User) => u.email === storedUserEmail);
        if (user) {
          setCurrentUser(user);
        }
      }
    } catch (error) {
      console.error("Error loading data from localStorage:", error);
      // Fallback to initial constants if storage is corrupted
      setUsers(USERS);
    }
  }, []);

  const handleLogin = (email: string) => {
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      // Auto-register new user
      user = { email, role: 'user' };
      const newUsers = [...users, user];
      setUsers(newUsers);
      localStorage.setItem('trueHarvestUsers', JSON.stringify(newUsers));
    }

    setCurrentUser(user);
    localStorage.setItem('trueHarvestCurrentUser', user.email);
    setCurrentPage('home'); // Redirect to home after login
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('trueHarvestCurrentUser');
    setCurrentPage('home'); // Redirect to home after logout
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'verse':
        return <VerseOfTheDayPage setCurrentPage={setCurrentPage} />;
      case 'bible':
        return <BibleReader setCurrentPage={setCurrentPage} />;
      case 'songs':
        return <SongLibrary setCurrentPage={setCurrentPage} />;
      case 'events':
        return <EventsCalendar setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'admin':
        // Secure the admin route
        return currentUser?.role === 'admin' ? <AdminDashboard users={users} setCurrentPage={setCurrentPage} /> : <HomePage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  if (!currentUser) {
    return (
      <div className="relative min-h-screen flex flex-col">
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2671&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
        </div>
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2671&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
      </div>
      
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} currentUser={currentUser} onLogout={handleLogout} />
      <main key={currentPage} className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 page-enter">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;