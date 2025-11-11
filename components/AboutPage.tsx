import React from 'react';
import Logo from './Logo';
import CheckIcon from './icons/CheckIcon';
import HomeIcon from './icons/HomeIcon';
import type { Page } from '../types';

interface AboutPageProps {
    setCurrentPage: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="relative bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto">
      <button
        onClick={() => setCurrentPage('home')}
        className="absolute top-6 right-6 flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300 z-10"
        aria-label="Back to Home"
      >
        <HomeIcon className="h-5 w-5" />
        <span className="font-semibold text-sm hidden md:block">Home</span>
      </button>

      <div className="text-center mb-10">
         <div className="inline-block">
            <Logo />
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight mt-4">About True Harvest</h1>
        <p className="mt-3 text-xl text-slate-300 font-serif">A Digital Sanctuary for Faith and Fellowship</p>
      </div>
      
      <div className="text-lg text-slate-200 leading-relaxed space-y-8">
        <p>
          <strong>True Harvest</strong> was born from a simple yet profound vision: to create a welcoming digital space where Christians from all walks of life can gather to grow in their faith. In a world that's constantly moving, we believe it's more important than ever to have a sanctuary—a place to pause, reflect, and connect with God and with a community of believers.
        </p>
        
        <h2 className="text-3xl font-serif font-bold text-white border-b-2 border-amber-400/50 pb-3 !mt-12">Our Mission</h2>
        <p>
          Our mission is to equip and encourage believers by providing accessible, high-quality spiritual resources. We aim to break down barriers of language and location, offering the timeless truth of the Bible, the soul-lifting power of worship music, and the strength of community fellowship to anyone, anywhere.
        </p>
        
        <h2 className="text-3xl font-serif font-bold text-white border-b-2 border-amber-400/50 pb-3 !mt-12">What We Offer</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-amber-400 mr-4 mt-1 flex-shrink-0" />
            <span><strong>Multi-Lingual Bible Access:</strong> Explore the richness of God's Word in various languages.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-amber-400 mr-4 mt-1 flex-shrink-0" />
            <span><strong>Curated Worship Library:</strong> Find songs that speak to your heart for every season of your faith journey.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-amber-400 mr-4 mt-1 flex-shrink-0" />
            <span><strong>AI-Powered Daily Inspiration:</strong> Receive a fresh, insightful, and applicable Verse of the Day to guide you.</span>
          </li>
          <li className="flex items-start">
            <CheckIcon className="h-6 w-6 text-amber-400 mr-4 mt-1 flex-shrink-0" />
            <span><strong>Community Events Calendar:</strong> Stay connected with local and online events that foster fellowship and growth.</span>
          </li>
        </ul>
        
        <p className="!mt-12">
          We are more than just an app; we are a community. We are a field ripe for harvest, where seeds of faith are sown, nurtured, and grown together. Thank you for joining us on this journey.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;