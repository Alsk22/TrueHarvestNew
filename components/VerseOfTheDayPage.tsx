import React, { useState, useEffect } from 'react';
import { getVerseOfTheDay } from '../services/geminiService';
import type { VerseData, VerseContent, Page } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import ShareIcon from './icons/ShareIcon';
import SharePopover from './SharePopover';
import HomeIcon from './icons/HomeIcon';

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-full py-16">
    <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-amber-400"></div>
  </div>
);

interface VerseOfTheDayPageProps {
    setCurrentPage: (page: Page) => void;
}

const VerseOfTheDayPage: React.FC<VerseOfTheDayPageProps> = ({ setCurrentPage }) => {
  const [verseData, setVerseData] = useState<VerseData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLang, setSelectedLang] = useState<'english' | 'telugu' | 'tamil'>('english');
  const [showSharePopover, setShowSharePopover] = useState(false);

  useEffect(() => {
    const fetchVerse = async () => {
      try {
        setLoading(true);
        const data = await getVerseOfTheDay();
        setVerseData(data);
      } catch (err) {
        setError('Failed to fetch the verse of the day. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVerse();
  }, []);

  const currentVerse: VerseContent | undefined = verseData?.[selectedLang];
  
  const containerClasses = "bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-10 max-w-5xl mx-auto";

  if (loading) {
    return (
      <div className={containerClasses}>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center tracking-tight">Verse of the Day</h1>
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !verseData) {
    return <div className="text-center p-8 text-red-300 bg-red-900/50 border border-red-700 rounded-lg max-w-5xl mx-auto shadow-lg">{error || 'An unexpected error occurred.'}</div>;
  }

  return (
    <div className={containerClasses}>
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">Verse of the Day</h1>
        <div className="flex items-center space-x-2">
            <div className="flex-shrink-0 flex justify-center rounded-lg bg-slate-800 p-1 space-x-1">
                {(['english', 'telugu', 'tamil'] as const).map(lang => (
                    <button
                        key={lang}
                        onClick={() => setSelectedLang(lang)}
                        className={`px-3 py-1.5 text-sm font-bold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
                            selectedLang === lang ? 'bg-slate-600 text-amber-300 shadow' : 'text-slate-300 hover:bg-slate-700/50'
                        }`}
                    >
                        {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                ))}
            </div>
             <button
                onClick={() => setCurrentPage('home')}
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                aria-label="Back to Home"
            >
                <HomeIcon className="h-5 w-5" />
                <span className="font-semibold text-sm hidden md:block">Home</span>
            </button>
        </div>
      </div>
      
      {currentVerse && (
        <div key={selectedLang} className="animate-fadeInUp">
            <div className="flex justify-between items-baseline mb-8">
                <p className="text-2xl md:text-3xl text-slate-400 font-serif">{currentVerse.reference}</p>
                 <div className="relative">
                    <button
                        onClick={() => setShowSharePopover(prev => !prev)}
                        className="flex items-center space-x-2 px-4 py-2 -my-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                        aria-label="Share verse"
                    >
                        <ShareIcon className="h-5 w-5" />
                        <span className="font-semibold text-sm">Share</span>
                    </button>
                    {showSharePopover && currentVerse && (
                        <SharePopover
                            verseText={currentVerse.verse}
                            reference={currentVerse.reference}
                            onClose={() => setShowSharePopover(false)}
                            position="bottom"
                        />
                    )}
                </div>
            </div>

            <blockquote className="bg-slate-800/50 border-l-8 border-amber-400 py-8 px-10 rounded-r-lg shadow-2xl shadow-black/30">
                <p className="text-3xl md:text-5xl font-medium italic text-white leading-relaxed tracking-wide">
                “{currentVerse.verse}”
                </p>
            </blockquote>

            <div className="mt-16 space-y-14">
                <div>
                <h2 className="text-4xl font-bold font-serif text-white border-b-2 border-amber-400/50 pb-4 mb-6">Explanation</h2>
                <p className="text-slate-200 text-xl leading-loose">{currentVerse.explanation}</p>
                </div>
                <div>
                <h2 className="text-4xl font-bold font-serif text-white border-b-2 border-amber-400/50 pb-4 mb-6">Daily Application</h2>
                <p className="text-slate-200 text-xl leading-loose">{currentVerse.application}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div className="bg-green-900/40 rounded-lg p-6 border border-green-700">
                    <h3 className="text-2xl font-bold font-serif text-green-300 mb-4">Do's</h3>
                    <ul className="space-y-3">
                    {currentVerse.dos.map((item, index) => (
                        <li key={index} className="flex items-start bg-green-900/30 p-3 rounded-lg border border-green-600/30 transition-colors hover:bg-green-900/50">
                            <CheckIcon className="h-5 w-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-green-100 text-base leading-snug">{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="bg-red-900/40 rounded-lg p-6 border border-red-700">
                    <h3 className="text-2xl font-bold font-serif text-red-300 mb-4">Don'ts</h3>
                    <ul className="space-y-3">
                    {currentVerse.donts.map((item, index) => (
                        <li key={index} className="flex items-start bg-red-900/30 p-3 rounded-lg border border-red-600/30 transition-colors hover:bg-red-900/50">
                            <XIcon className="h-5 w-5 text-red-300 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-red-100 text-base leading-snug">{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default VerseOfTheDayPage;