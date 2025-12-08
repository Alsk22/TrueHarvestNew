
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
    <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
      
      {/* Cinematic Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none blur-[2px]">
          <Logo svgClassName="w-[500px] h-[500px]" showText={false} />
      </div>

      <div className="relative z-10 p-8 md:p-14">
        <button
            onClick={() => setCurrentPage('home')}
            className="absolute top-8 right-8 flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300 z-20 group"
            aria-label="Back to Home"
        >
            <HomeIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm hidden md:block">Home</span>
        </button>

        <div className="text-center mb-12">
            <div className="inline-block relative">
                <div className="absolute inset-0 bg-amber-500 blur-2xl opacity-20 rounded-full"></div>
                <Logo svgClassName="w-20 h-20 relative z-10 text-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-400 tracking-tight mt-6">True Harvest</h1>
            <div className="flex items-center justify-center space-x-3 mt-4">
                <div className="h-px w-8 bg-slate-600"></div>
                <p className="text-xl text-slate-300 font-serif italic">A Digital Sanctuary for Faith</p>
                <div className="h-px w-8 bg-slate-600"></div>
            </div>
        </div>
        
        <div className="text-lg text-slate-300 leading-relaxed space-y-10">
            <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/30">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-amber-400 first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                True Harvest was born from a simple yet profound vision: to create a welcoming digital space where Christians from all walks of life can gather to grow in their faith. In a world that's constantly moving, we believe it's more important than ever to have a sanctuary—a place to pause, reflect, and connect with God and with a community of believers.
                </p>
            </div>
            
            <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center">
                    <span className="w-2 h-8 bg-amber-500 rounded-full mr-4"></span>
                    Our Mission
                </h2>
                <p className="text-slate-400">
                Our mission is to equip and encourage believers by providing accessible, high-quality spiritual resources. We aim to break down barriers of language and location, offering the timeless truth of the Bible, the soul-lifting power of worship music, and the strength of community fellowship to anyone, anywhere.
                </p>
            </div>
            
            <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6 flex items-center">
                    <span className="w-2 h-8 bg-amber-500 rounded-full mr-4"></span>
                    What We Offer
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Multi-Lingual Bible", desc: "Explore God's Word in English, Telugu, & Tamil." },
                        { title: "Curated Worship", desc: "A rich library of praise songs and hymns." },
                        { title: "Daily Inspiration", desc: "AI-powered Verse of the Day with deep insights." },
                        { title: "Community Events", desc: "Connect with believers in your city." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-amber-500/30 transition-colors">
                            <div className="bg-amber-500/10 p-2 rounded-lg mr-4">
                                <CheckIcon className="h-5 w-5 text-amber-400" />
                            </div>
                            <div>
                                <strong className="block text-slate-200 mb-1">{item.title}</strong>
                                <span className="text-sm text-slate-500">{item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section using new domain */}
            <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50 text-center">
                <h2 className="text-2xl font-serif font-bold text-white mb-4">Connect With Us</h2>
                <p className="text-slate-400 mb-6">
                    Have questions about the community or need prayer? Reach out to our team directly through our official channels.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="mailto:info@trueharvest.world" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-white font-bold transition-colors">
                        info@trueharvest.world
                    </a>
                    <a href="mailto:prayer@trueharvest.world" className="px-6 py-3 bg-amber-500 hover:bg-amber-400 rounded-xl text-slate-900 font-bold transition-colors">
                        prayer@trueharvest.world
                    </a>
                </div>
            </div>
            
            <p className="pt-8 text-center text-slate-400 italic font-serif text-xl border-t border-slate-800">
            "We are a field ripe for harvest, where seeds of faith are sown, nurtured, and grown together."
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
