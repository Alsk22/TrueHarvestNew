import React, { useState, useMemo } from 'react';
import { BIBLE_DATA, BIBLE_BOOK_GROUPS_EN, BIBLE_BOOK_GROUPS_TE } from '../services/constants';
import type { Page, EnglishVersion, Verse } from '../types';
import BibleIcon from './icons/BibleIcon';
import HomeIcon from './icons/HomeIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface BibleReaderProps {
    setCurrentPage: (page: Page) => void;
}

const BibleReader: React.FC<BibleReaderProps> = ({ setCurrentPage }) => {
    const [activeTab, setActiveTab] = useState<'english' | 'telugu'>('english');
    
    // English state
    const [selectedVersion, setSelectedVersion] = useState<EnglishVersion>('KJV');
    const [selectedBookEn, setSelectedBookEn] = useState<string>('');
    const [selectedChapterEn, setSelectedChapterEn] = useState<string>('');

    // Telugu state
    const [selectedBookTe, setSelectedBookTe] = useState<string>('');
    const [selectedChapterTe, setSelectedChapterTe] = useState<string>('');

    const englishBooks = useMemo(() => Object.values(BIBLE_BOOK_GROUPS_EN).flat(), []);
    const teluguBooks = useMemo(() => Object.values(BIBLE_BOOK_GROUPS_TE).flat(), []);

    const chaptersEn = useMemo(() => {
        if (selectedBookEn && BIBLE_DATA.english[selectedVersion]?.[selectedBookEn]) {
            return Object.keys(BIBLE_DATA.english[selectedVersion][selectedBookEn]);
        }
        return [];
    }, [selectedBookEn, selectedVersion]);

    const chaptersTe = useMemo(() => {
        if (selectedBookTe && BIBLE_DATA.telugu[selectedBookTe]) {
            return Object.keys(BIBLE_DATA.telugu[selectedBookTe]);
        }
        return [];
    }, [selectedBookTe]);

    const chapterContentEn = useMemo<Verse | null>(() => {
        if (selectedBookEn && selectedChapterEn && BIBLE_DATA.english[selectedVersion]?.[selectedBookEn]?.[selectedChapterEn]) {
            return BIBLE_DATA.english[selectedVersion][selectedBookEn][selectedChapterEn];
        }
        return null;
    }, [selectedBookEn, selectedVersion, selectedChapterEn]);

    const chapterContentTe = useMemo<Verse | null>(() => {
        if (selectedBookTe && selectedChapterTe && BIBLE_DATA.telugu[selectedBookTe]?.[selectedChapterTe]) {
            return BIBLE_DATA.telugu[selectedBookTe][selectedChapterTe];
        }
        return null;
    }, [selectedBookTe, selectedChapterTe]);
    
    const handleVersionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedVersion(e.target.value as EnglishVersion);
        setSelectedBookEn('');
        setSelectedChapterEn('');
    };

    const handleBookEnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const book = e.target.value;
        setSelectedBookEn(book);
        setSelectedChapterEn('');
    };

    const handleBookTeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const book = e.target.value;
        setSelectedBookTe(book);
        setSelectedChapterTe('');
    };

    const selectWrapperClass = "relative w-full";
    const selectClass = "w-full pl-4 pr-10 py-3 text-base bg-slate-800 border-2 border-slate-600 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition appearance-none font-semibold";
    const selectIconClass = "absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400";
    const tabButtonClasses = (tabName: 'english' | 'telugu') => `flex-1 py-3 text-lg font-bold rounded-t-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        activeTab === tabName ? 'bg-slate-800 text-amber-300' : 'bg-slate-900/50 text-slate-400 hover:bg-slate-800/70 hover:text-white'
    }`;
    const verseContainerClass = "text-slate-200 text-lg leading-loose space-y-4 max-h-[50vh] overflow-y-auto pr-4 mt-8 bg-slate-900/50 p-6 rounded-lg border-2 border-slate-700 custom-scrollbar";
    const labelClass = "block text-md font-medium text-slate-300 mb-2";

    const renderVerses = (content: Verse | null) => {
        if (!content) {
             return (
                <div className="flex items-center justify-center h-48">
                    <p className="text-slate-500 italic">Please select a book and chapter to read.</p>
                </div>
            );
        }
        return Object.entries(content).map(([verseNum, verseText]) => (
            <p key={verseNum} className="flex">
                <sup className="text-amber-400 font-bold pr-3 text-sm opacity-80 w-8 text-right flex-shrink-0">{verseNum}</sup>
                <span className="flex-1">{verseText}</span>
            </p>
        ));
    }

    return (
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <div className="text-amber-400"><BibleIcon className="h-10 w-10" /></div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white ml-4 tracking-tight">Read the Bible</h1>
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
            
            <div className="flex border-b-2 border-slate-700">
                <button onClick={() => setActiveTab('english')} className={tabButtonClasses('english')}>English</button>
                <button onClick={() => setActiveTab('telugu')} className={tabButtonClasses('telugu')}>Telugu</button>
            </div>
            
            {activeTab === 'english' && (
                <div className="bg-slate-800 p-6 rounded-b-lg animate-fadeInUp">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label htmlFor="version-select" className={labelClass}>Version</label>
                            <div className={selectWrapperClass}>
                                <select id="version-select" value={selectedVersion} onChange={handleVersionChange} className={selectClass}>
                                    <option value="KJV">KJV</option>
                                    <option value="NKJV">NKJV</option>
                                    <option value="ESV">ESV</option>
                                </select>
                                <div className={selectIconClass}><ChevronDownIcon /></div>
                            </div>
                        </div>
                        <div>
                             <label htmlFor="book-select-en" className={labelClass}>Book</label>
                            <div className={selectWrapperClass}>
                                <select id="book-select-en" value={selectedBookEn} onChange={handleBookEnChange} className={selectClass}>
                                    <option value="" disabled>Select a book</option>
                                    {englishBooks.map(book => <option key={book} value={book}>{book}</option>)}
                                </select>
                                <div className={selectIconClass}><ChevronDownIcon /></div>
                            </div>
                        </div>
                        <div>
                             <label htmlFor="chapter-select-en" className={labelClass}>Chapter</label>
                            <div className={selectWrapperClass}>
                                <select id="chapter-select-en" value={selectedChapterEn} onChange={e => setSelectedChapterEn(e.target.value)} disabled={!selectedBookEn} className={selectClass}>
                                    <option value="" disabled>Select chapter</option>
                                    {chaptersEn.map(chap => <option key={chap} value={chap}>{chap}</option>)}
                                </select>
                                <div className={selectIconClass}><ChevronDownIcon /></div>
                            </div>
                        </div>
                    </div>
                    <div className={verseContainerClass}>
                        {renderVerses(chapterContentEn)}
                    </div>
                </div>
            )}
            
            {activeTab === 'telugu' && (
                 <div className="bg-slate-800 p-6 rounded-b-lg animate-fadeInUp">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                             <label htmlFor="book-select-te" className={labelClass}>Book (పుస్తకం)</label>
                            <div className={selectWrapperClass}>
                                <select id="book-select-te" value={selectedBookTe} onChange={handleBookTeChange} className={selectClass}>
                                    <option value="" disabled>పుస్తకాన్ని ఎంచుకోండి</option>
                                    {teluguBooks.map(book => <option key={book} value={book}>{book}</option>)}
                                </select>
                                <div className={selectIconClass}><ChevronDownIcon /></div>
                            </div>
                        </div>
                        <div>
                             <label htmlFor="chapter-select-te" className={labelClass}>Chapter (అధ్యాయం)</label>
                            <div className={selectWrapperClass}>
                                <select id="chapter-select-te" value={selectedChapterTe} onChange={e => setSelectedChapterTe(e.target.value)} disabled={!selectedBookTe} className={selectClass}>
                                    <option value="" disabled>అధ్యాయాన్ని ఎంచుకోండి</option>
                                    {chaptersTe.map(chap => <option key={chap} value={chap}>{chap}</option>)}
                                </select>
                                <div className={selectIconClass}><ChevronDownIcon /></div>
                            </div>
                        </div>
                    </div>
                     <div className={verseContainerClass}>
                        {renderVerses(chapterContentTe)}
                    </div>
                 </div>
            )}
            
        </div>
    );
};

export default BibleReader;
