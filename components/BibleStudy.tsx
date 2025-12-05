
import React, { useState } from 'react';
import { generateBibleStudy } from '../services/geminiService';
import type { Page } from '../types';
import InspirationIcon from './icons/InspirationIcon';
import HomeIcon from './icons/HomeIcon';
import SearchIcon from './icons/SearchIcon';

interface BibleStudyProps {
    setCurrentPage: (page: Page) => void;
}

const BibleStudy: React.FC<BibleStudyProps> = ({ setCurrentPage }) => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleStudy = async () => {
        if (!query.trim()) return;
        setIsLoading(true);
        setResult('');
        const response = await generateBibleStudy(query);
        setResult(response);
        setIsLoading(false);
    };

    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto relative overflow-hidden h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex items-center justify-between mb-6 flex-shrink-0">
                <div className="flex items-center">
                    <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 text-amber-400">
                        <SearchIcon className="h-8 w-8" />
                    </div>
                    <div className="ml-4">
                        <h1 className="text-3xl font-serif font-bold text-white">Your Query</h1>
                        <p className="text-slate-400 text-sm">Ask any question, get biblical insights.</p>
                    </div>
                </div>
                <button
                    onClick={() => setCurrentPage('home')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
                >
                    <HomeIcon className="h-5 w-5" />
                    <span className="font-semibold text-sm hidden md:block">Home</span>
                </button>
            </div>

            <div className="flex-grow flex flex-col space-y-4 overflow-hidden">
                {/* Result Area */}
                <div className="flex-grow bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50 overflow-y-auto custom-scrollbar">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500">
                             <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-amber-500 mb-4"></div>
                             <p>Analyzing scripture...</p>
                        </div>
                    ) : result ? (
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="whitespace-pre-wrap leading-relaxed text-slate-300">{result}</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500 opacity-60">
                            <InspirationIcon className="h-16 w-16 mb-4" />
                            <p className="text-lg">What's on your mind today?</p>
                            <p className="text-sm">Try: "What does the Bible say about anxiety?" or "Who was Melchizedek?"</p>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="flex-shrink-0 relative">
                    <div className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleStudy()}
                            placeholder="Type your question here..."
                            className="w-full pl-6 pr-32 py-4 bg-slate-800 border border-slate-600 text-white rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition placeholder:text-slate-500 text-lg"
                        />
                        <button
                            onClick={handleStudy}
                            disabled={isLoading || !query}
                            className="absolute right-2 top-2 bottom-2 px-6 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Ask AI
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BibleStudy;
