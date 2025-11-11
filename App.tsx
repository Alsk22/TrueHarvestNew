import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BibleReader from './components/BibleReader';
import SongLibrary from './components/SongLibrary';
import EventsCalendar from './components/EventsCalendar';
import VerseOfTheDayPage from './components/VerseOfTheDayPage';
import AboutPage from './components/AboutPage';
import type { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

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
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2671&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
      </div>
      
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main key={currentPage} className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 page-enter">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;