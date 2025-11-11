import React, { useState, useMemo } from 'react';
import { BIBLE_BOOK_GROUPS, BIBLE_DATA_EN, BIBLE_DATA_TE } from '../services/constants';
import type { BibleChapter, BibleVerse, Page, BibleVersion } from '../types';
import SearchIcon from './icons/SearchIcon';
import ShareIcon from './icons/ShareIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import HighlightIcon from './icons/HighlightIcon';
import NoteIcon from './icons/NoteIcon';
import SharePopover from './SharePopover';
import HomeIcon from './icons/HomeIcon';

const BIBLE_DATA: BibleVersion = {
    'English': BIBLE_DATA_EN,
    'Telugu': BIBLE_DATA_TE,
};

type Language = 'English' | 'Telugu';

// Mapping from English book names to Telugu book names
const BOOK_NAME_MAP: { [key: string]: string } = {
    'Genesis': 'ఆదికాండము',
    'Exodus': 'నిర్గమకాండము',
    'Psalms': 'కీర్తనలు',
    'John': 'యోహాను',
};

const getLocalizedBookName = (book: string, lang: Language): string => {
    if (lang === 'Telugu' && BOOK_NAME_MAP[book]) {
        return BOOK_NAME_MAP[book];
    }
    return book;
};


interface BibleReaderProps {
    setCurrentPage: (page: Page) => void;
}

const BibleReader: React.FC<BibleReaderProps> = ({ setCurrentPage }) => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>('English');
    const [selectedBook, setSelectedBook] = useState('Genesis'); // Default to Genesis
    const [selectedChapter, setSelectedChapter] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedVerse, setSelectedVerse] = useState<BibleVerse | null>(null);
    const [showSharePopover, setShowSharePopover] = useState(false);

    const bibleForLanguage = BIBLE_DATA[selectedLanguage];
    
    const localizedBook = useMemo(() => getLocalizedBookName(selectedBook, selectedLanguage), [selectedBook, selectedLanguage]);

    const chaptersForBook: BibleChapter[] = useMemo(() => {
        return bibleForLanguage[localizedBook] || [];
    }, [bibleForLanguage, localizedBook]);

    const currentChapterContent = useMemo(() => {
        return chaptersForBook.find(c => c.chapter === selectedChapter);
    }, [chaptersForBook, selectedChapter]);

    const handleLanguageChange = (lang: Language) => {
        setSelectedLanguage(lang);

        // Check if current book exists in new language, otherwise default to Genesis
        let bookToSet = selectedBook;
        const localizedCurrentBook = getLocalizedBookName(selectedBook, lang);
        if (!BIBLE_DATA[lang][localizedCurrentBook]) {
            bookToSet = 'Genesis';
        }
        setSelectedBook(bookToSet);
        
        const localizedBookToSet = getLocalizedBookName(bookToSet, lang);
        const firstChapter = BIBLE_DATA[lang][localizedBookToSet]?.[0]?.chapter;
        setSelectedChapter(firstChapter || 1);
        
        setSearchTerm('');
        setSelectedVerse(null);
    };

    const handleBookChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const book = e.target.value;
        setSelectedBook(book);
        const localizedBookName = getLocalizedBookName(book, selectedLanguage);
        const firstChapter = BIBLE_DATA[selectedLanguage][localizedBookName]?.[0]?.chapter;
        setSelectedChapter(firstChapter || 1);
        setSearchTerm('');
        setSelectedVerse(null);
    };

    const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChapter(Number(e.target.value));
        setSearchTerm('');
        setSelectedVerse(null);
    };
    
    const filteredVerses = useMemo(() => {
        if (!searchTerm) return currentChapterContent?.verses || [];
        return currentChapterContent?.verses.filter(v => 
            v.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
            v.verse.toString().includes(searchTerm)
        ) || [];
    }, [currentChapterContent, searchTerm]);
    
    const handleShare = () => {
        const shareText = `Reading ${selectedBook} ${selectedChapter} in ${selectedLanguage} on the True Harvest App.`;
         if (navigator.share) {
            navigator.share({
            title: `True Harvest Bible: ${selectedBook} ${selectedChapter}`,
            text: shareText,
            }).catch(console.error);
        } else {
            navigator.clipboard.writeText(shareText).then(() => {
            alert('Reference copied to clipboard!');
            });
        }
    };
    
    const selectClasses = "w-full pl-3 pr-10 py-2 text-base bg-slate-900/80 border-slate-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition";

    return (
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">Bible Reader</h1>
                <button
                    onClick={() => setCurrentPage('home')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                    aria-label="Back to Home"
                >
                    <HomeIcon className="h-5 w-5" />
                    <span className="font-semibold text-sm hidden md:block">Home</span>
                </button>
            </div>


            {/* Controls Panel */}
            <div className="sticky top-24 z-40 bg-slate-800/80 backdrop-blur-lg p-4 rounded-lg border border-slate-700 mb-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Language Toggle */}
                    <div className="flex-shrink-0 flex justify-center rounded-lg bg-slate-900 p-1 space-x-1 w-full md:w-auto">
                        {(['English', 'Telugu'] as Language[]).map(lang => (
                            <button
                                key={lang}
                                onClick={() => handleLanguageChange(lang)}
                                className={`w-full md:w-auto px-4 py-1.5 text-sm font-bold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                                    selectedLanguage === lang ? 'bg-slate-700 text-amber-300 shadow' : 'text-slate-300 hover:bg-slate-700/50'
                                }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                    {/* Book and Chapter Selectors */}
                    <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="book-select" className="sr-only">Book</label>
                            <select id="book-select" value={selectedBook} onChange={handleBookChange} className={selectClasses}>
                            {BIBLE_BOOK_GROUPS.map(group => (
                                <optgroup key={group.group} label={group.group} className="bg-slate-900">
                                    {group.books.map(book => (
                                        <option key={book} value={book}>{book}</option>
                                    ))}
                                </optgroup>
                            ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="chapter-select" className="sr-only">Chapter</label>
                            <select id="chapter-select" value={selectedChapter} onChange={handleChapterChange} disabled={chaptersForBook.length === 0} className={selectClasses}>
                                {chaptersForBook.map(chap => (
                                    <option key={chap.chapter} value={chap.chapter}>Chapter {chap.chapter}</option>
                                ))}
                                {chaptersForBook.length === 0 && <option>Chapter 1</option>}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mb-8">
                <input
                    type="text"
                    placeholder={`Search in ${selectedBook} ${selectedChapter}...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder:text-slate-400"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-slate-400" />
                </div>
            </div>

            <article>
                <div className="flex justify-between items-center border-b-2 border-amber-400/50 pb-2 mb-4">
                  <h2 className="font-serif text-4xl text-white mb-0">{selectedBook} {selectedChapter}</h2>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                    aria-label="Share chapter"
                  >
                    <ShareIcon className="h-5 w-5" />
                  </button>
                </div>

                {filteredVerses.length > 0 ? (
                    filteredVerses.map(verse => (
                        <div
                            key={verse.verse}
                            className={`relative p-2 -mx-2 rounded-md transition-colors duration-200 cursor-pointer ${
                                selectedVerse?.verse === verse.verse ? 'bg-slate-800' : 'hover:bg-slate-800/50'
                            }`}
                            onClick={() => {
                                if (selectedVerse?.verse === verse.verse) {
                                    setSelectedVerse(null);
                                    setShowSharePopover(false);
                                } else {
                                    setSelectedVerse(verse);
                                    setShowSharePopover(false);
                                }
                            }}
                        >
                            <p className="flex items-start leading-relaxed my-1 text-lg">
                                <sup className="font-bold text-amber-400 mr-3 text-base">{verse.verse}</sup>
                                <span className="text-slate-200">{verse.text}</span>
                            </p>

                            {selectedVerse?.verse === verse.verse && (
                                <div className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center space-x-1 bg-slate-900 p-1 rounded-full shadow-lg border border-slate-700">
                                    <button title="Bookmark" className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"><BookmarkIcon className="h-5 w-5" /></button>
                                    <button title="Highlight" className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"><HighlightIcon className="h-5 w-5" /></button>
                                    <button title="Add Note" className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"><NoteIcon className="h-5 w-5" /></button>
                                    
                                    <div className="relative">
                                        <button 
                                            title="Share"
                                            onClick={(e) => { 
                                                e.stopPropagation(); 
                                                setShowSharePopover(prev => !prev); 
                                            }}
                                            className={`p-2 rounded-full transition-colors ${showSharePopover ? 'bg-amber-500/20 text-amber-300' : 'text-amber-400 hover:bg-slate-700 hover:text-amber-300'}`}
                                        >
                                            <ShareIcon className="h-5 w-5" />
                                        </button>
                                        {showSharePopover && (
                                            <SharePopover 
                                                verseText={selectedVerse.text}
                                                reference={`${selectedBook} ${selectedChapter}:${selectedVerse.verse}`}
                                                onClose={() => setShowSharePopover(false)}
                                            />
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <p className="text-slate-400 italic">
                            {searchTerm ? "No verses found matching your search." : "No content available for this chapter."}
                        </p>
                    </div>
                )}
            </article>
        </div>
    );
};

export default BibleReader;