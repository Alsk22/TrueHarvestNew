import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BIBLE_DATA, BIBLE_BOOK_GROUPS_EN, BIBLE_BOOK_GROUPS_TE } from '../services/constants';
import type { Page, BibleLanguage, EnglishVersion, Verse, BibleBook } from '../types';
import HomeIcon from './icons/HomeIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import HighlightIcon from './icons/HighlightIcon';
import NoteIcon from './icons/NoteIcon';
import ShareIcon from './icons/ShareIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import SoundIcon from './icons/SoundIcon';
import PauseIcon from './icons/PauseIcon';
import PlayIcon from './icons/PlayIcon';
import BibleSharePopover from './BibleSharePopover';
import NoteModal from './NoteModal';

// Keys for localStorage
const BIBLE_READER_PREFS_KEY = 'trueHarvestBibleReaderPrefs';
const BIBLE_BOOKMARKS_KEY = 'trueHarvestBibleBookmarks';
const BIBLE_HIGHLIGHTS_KEY = 'trueHarvestBibleHighlights';
const BIBLE_NOTES_KEY = 'trueHarvestBibleNotes';

interface BibleReaderProps {
    setCurrentPage: (page: Page) => void;
}

const BibleReader: React.FC<BibleReaderProps> = ({ setCurrentPage }) => {
    // State for Bible navigation
    const [language, setLanguage] = useState<BibleLanguage>('english');
    const [version, setVersion] = useState<EnglishVersion>('KJV');
    const [book, setBook] = useState('Genesis');
    const [chapter, setChapter] = useState(1);

    // State for user interactions
    const [selectedVerses, setSelectedVerses] = useState<Set<number>>(new Set());
    const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
    const [highlights, setHighlights] = useState<Set<string>>(new Set());
    const [notes, setNotes] = useState<Record<string, string>>({});
    const [showSharePopover, setShowSharePopover] = useState(false);
    const [noteModalVerseRef, setNoteModalVerseRef] = useState<string | null>(null);

    // State for Read Aloud feature
    const [isReading, setIsReading] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentVerseSpeaking, setCurrentVerseSpeaking] = useState<number | null>(null);
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    const isSpeechSupported = 'speechSynthesis' in window;

    // Load preferences and user data from localStorage on mount
    useEffect(() => {
        try {
            const prefs = localStorage.getItem(BIBLE_READER_PREFS_KEY);
            if (prefs) {
                const { lang, ver, bk, ch } = JSON.parse(prefs);
                setLanguage(lang || 'english');
                setVersion(ver || 'KJV');
                setBook(bk || 'Genesis');
                setChapter(ch || 1);
            }

            const storedBookmarks = localStorage.getItem(BIBLE_BOOKMARKS_KEY);
            if (storedBookmarks) setBookmarks(new Set(JSON.parse(storedBookmarks)));

            const storedHighlights = localStorage.getItem(BIBLE_HIGHLIGHTS_KEY);
            if (storedHighlights) setHighlights(new Set(JSON.parse(storedHighlights)));

            const storedNotes = localStorage.getItem(BIBLE_NOTES_KEY);
            if (storedNotes) setNotes(JSON.parse(storedNotes));
        } catch (error) {
            console.error("Error loading user data from localStorage:", error);
        }
         // Cancel speech synthesis on unmount
        return () => {
            if (isSpeechSupported) {
                speechSynthesis.cancel();
            }
        };
    }, [isSpeechSupported]);
    
    // Effect to load speech synthesis voices
    useEffect(() => {
        if (!isSpeechSupported) return;

        const loadVoices = () => {
            const availableVoices = speechSynthesis.getVoices();
            setVoices(availableVoices);
        };

        // Load voices initially and on change
        loadVoices();
        speechSynthesis.onvoiceschanged = loadVoices;

        return () => {
            speechSynthesis.onvoiceschanged = null;
        };
    }, [isSpeechSupported]);


    // Save preferences and user data to localStorage when they change
    useEffect(() => {
        try {
            const prefs = { lang: language, ver: version, bk: book, ch: chapter };
            localStorage.setItem(BIBLE_READER_PREFS_KEY, JSON.stringify(prefs));
            localStorage.setItem(BIBLE_BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarks)));
            localStorage.setItem(BIBLE_HIGHLIGHTS_KEY, JSON.stringify(Array.from(highlights)));
            localStorage.setItem(BIBLE_NOTES_KEY, JSON.stringify(notes));
        } catch (error) {
            console.error("Error saving user data to localStorage:", error);
        }
    }, [language, version, book, chapter, bookmarks, highlights, notes]);

    // Cleanup speech synthesis on navigation
    useEffect(() => {
        if (isSpeechSupported) {
            speechSynthesis.cancel();
        }
        setIsReading(false);
        setIsPaused(false);
        setCurrentVerseSpeaking(null);
    }, [language, version, book, chapter, isSpeechSupported]);
    
    // Memoized values for current Bible data based on selections
    const currentBookData: BibleBook | undefined = useMemo(() => {
        return language === 'english' ? BIBLE_DATA.english[version] : BIBLE_DATA.telugu;
    }, [language, version]);

    const currentBookList = useMemo(() => Object.keys(currentBookData || {}), [currentBookData]);
    const currentChapterList = useMemo(() => Object.keys(currentBookData?.[book] || {}).map(Number), [currentBookData, book]);
    const currentChapterContent: Verse | undefined = useMemo(() => currentBookData?.[book]?.[chapter], [currentBookData, book, chapter]);

    // Handlers for changing selections
    const handleLanguageChange = (lang: BibleLanguage) => {
        setLanguage(lang);
        const newBookData = lang === 'english' ? BIBLE_DATA.english[version] : BIBLE_DATA.telugu;
        const firstBook = Object.keys(newBookData)[0];
        setBook(firstBook);
        setChapter(1);
        setSelectedVerses(new Set());
    };

    const handleVersionChange = (ver: EnglishVersion) => {
        setVersion(ver);
        const newBookData = BIBLE_DATA.english[ver];
        const firstBook = Object.keys(newBookData)[0];
        setBook(firstBook);
        setChapter(1);
        setSelectedVerses(new Set());
    };
    
    const handleBookChange = (bk: string) => {
        setBook(bk);
        setChapter(1);
        setSelectedVerses(new Set());
    };

    const handleChapterChange = (ch: number) => {
        setChapter(ch);
        setSelectedVerses(new Set());
    };

    // Verse selection handler
    const handleVerseClick = (verseNumber: number) => {
        setSelectedVerses(prev => {
            const newSet = new Set(prev);
            if (newSet.has(verseNumber)) {
                newSet.delete(verseNumber);
            } else {
                newSet.add(verseNumber);
            }
            return newSet;
        });
    };
    
    const getVerseRef = (verseNum: number) => `${language}:${version}:${book}:${chapter}:${verseNum}`;

    // Action handlers for the toolbar
    const handleBookmark = () => {
        setBookmarks(prev => {
            const newSet = new Set(prev);
            selectedVerses.forEach(v => {
                const ref = getVerseRef(v);
                newSet.has(ref) ? newSet.delete(ref) : newSet.add(ref);
            });
            return newSet;
        });
    };

    const handleHighlight = () => {
        setHighlights(prev => {
            const newSet = new Set(prev);
            selectedVerses.forEach(v => {
                const ref = getVerseRef(v);
                newSet.has(ref) ? newSet.delete(ref) : newSet.add(ref);
            });
            return newSet;
        });
    };
    
    const handleNote = () => {
        if (selectedVerses.size > 0) {
            const firstVerse = Math.min(...Array.from(selectedVerses));
            setNoteModalVerseRef(getVerseRef(firstVerse));
        }
    };
    
    const handleSaveNote = (ref: string, text: string) => {
        setNotes(prev => {
            const newNotes = { ...prev };
            if (text.trim()) {
                newNotes[ref] = text;
            } else {
                delete newNotes[ref];
            }
            return newNotes;
        });
        setNoteModalVerseRef(null);
    };

    const handleReadAloudToggle = () => {
        if (!isSpeechSupported || !currentChapterContent) return;

        if (isReading && !isPaused) { // Reading -> Pause
            speechSynthesis.pause();
            setIsPaused(true);
        } else if (isReading && isPaused) { // Paused -> Resume
            speechSynthesis.resume();
            setIsPaused(false);
        } else { // Not reading -> Start
            const verseStartIndices: { verse: number; index: number }[] = [];
            let currentIndex = 0;

            const fullText = Object.entries(currentChapterContent)
                .map(([vNum, vText]) => {
                    const textToSpeak = `${vText} `;
                    verseStartIndices.push({ verse: Number(vNum), index: currentIndex });
                    currentIndex += textToSpeak.length;
                    return textToSpeak;
                })
                .join(' ');

            const utterance = new SpeechSynthesisUtterance(fullText);
            utterance.lang = language === 'telugu' ? 'te-IN' : 'en-US';
            utteranceRef.current = utterance;

            if (language === 'telugu') {
                const teluguVoice = voices.find(voice => voice.lang === 'te-IN');
                if (teluguVoice) {
                    utterance.voice = teluguVoice;
                } else {
                    console.warn("Telugu (te-IN) voice not available. The browser will use a default voice which may not be accurate.");
                }
            }

            utterance.onboundary = (event) => {
                if (event.name === 'word') {
                    // Fix: Replaced findLast with a compatible alternative for broader browser/environment support.
                    const currentVerse = [...verseStartIndices].reverse().find(v => event.charIndex >= v.index);
                    if (currentVerse) {
                        setCurrentVerseSpeaking(currentVerse.verse);
                    }
                }
            };

            utterance.onend = () => {
                setIsReading(false);
                setIsPaused(false);
                setCurrentVerseSpeaking(null);
                utteranceRef.current = null;
            };

            utterance.onerror = (event) => {
                // The 'interrupted' error is expected when we manually cancel speech,
                // for example, when changing chapters or starting a new read-aloud.
                // We can safely ignore it to prevent incorrect state changes.
                if (event.error === 'interrupted') {
                    return;
                }
                console.error("Speech synthesis error:", event.error);
                setIsReading(false);
                setIsPaused(false);
                setCurrentVerseSpeaking(null);
                utteranceRef.current = null;
            };

            speechSynthesis.cancel();
            speechSynthesis.speak(utterance);
            setIsReading(true);
            setIsPaused(false);
        }
    };


    // UI Styles
    const selectClasses = "w-full pl-3 pr-8 py-2 text-sm bg-slate-800 border border-slate-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition appearance-none";
    const bookGroups = language === 'english' ? BIBLE_BOOK_GROUPS_EN : BIBLE_BOOK_GROUPS_TE;

    const getReadAloudButtonContent = () => {
        if (isReading && !isPaused) {
            return { icon: <PauseIcon className="h-4 w-4" />, text: 'Pause' };
        }
        if (isReading && isPaused) {
            return { icon: <PlayIcon className="h-4 w-4" />, text: 'Resume' };
        }
        return { icon: <SoundIcon className="h-4 w-4" />, text: 'Read Aloud' };
    };
    
    const { icon: readAloudIcon, text: readAloudText } = getReadAloudButtonContent();

    return (
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl max-w-5xl mx-auto">
             {/* Sticky Header and Nav */}
            <div className="sticky top-20 z-30 bg-slate-900/80 backdrop-blur-sm rounded-t-2xl">
                <header className="p-4 md:p-6 border-b border-slate-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-serif font-bold text-white tracking-tight">Bible Reader</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handleReadAloudToggle}
                            disabled={!isSpeechSupported}
                            className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            aria-label={readAloudText}
                            title={isSpeechSupported ? readAloudText : "Speech synthesis not supported by your browser"}
                        >
                            {readAloudIcon}
                            <span className="font-semibold text-xs">{readAloudText}</span>
                        </button>
                        <button
                            onClick={() => setCurrentPage('home')}
                            className="flex items-center space-x-2 px-3 py-1.5 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors duration-300"
                            aria-label="Back to Home"
                        >
                            <HomeIcon className="h-4 w-4" />
                            <span className="font-semibold text-xs">Home</span>
                        </button>
                    </div>
                </header>

                {/* Navigation Controls */}
                <nav className="p-4 grid grid-cols-2 lg:grid-cols-4 gap-4 border-b border-slate-700">
                    <div className="relative">
                        <select value={language} onChange={(e) => handleLanguageChange(e.target.value as BibleLanguage)} className={selectClasses}>
                            <option value="english">English</option>
                            <option value="telugu">Telugu</option>
                        </select>
                        <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                    {language === 'english' && (
                        <div className="relative">
                            <select value={version} onChange={(e) => handleVersionChange(e.target.value as EnglishVersion)} className={selectClasses}>
                                <option value="KJV">KJV</option>
                                <option value="NKJV">NKJV</option>
                                <option value="ESV">ESV</option>
                            </select>
                            <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        </div>
                    )}
                    <div className="relative">
                        <select value={book} onChange={(e) => handleBookChange(e.target.value)} className={selectClasses}>
                            {Object.entries(bookGroups).map(([groupName, books]) => (
                                <optgroup key={groupName} label={groupName}>
                                    {books.filter(b => currentBookList.includes(b)).map(b => <option key={b} value={b}>{b}</option>)}
                                </optgroup>
                            ))}
                        </select>
                        <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                        <select value={chapter} onChange={(e) => handleChapterChange(Number(e.target.value))} className={selectClasses}>
                            {currentChapterList.map(ch => <option key={ch} value={ch}>Chapter {ch}</option>)}
                        </select>
                        <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                    </div>
                </nav>
            </div>

            {/* Bible Content */}
            <main className="p-6 md:p-8 text-slate-200 text-lg leading-relaxed">
                {currentChapterContent ? (
                    Object.entries(currentChapterContent).map(([verseNum, verseText]) => {
                        const verseNumber = Number(verseNum);
                        const ref = getVerseRef(verseNumber);
                        const isSelected = selectedVerses.has(verseNumber);
                        const isBookmarked = bookmarks.has(ref);
                        const isHighlighted = highlights.has(ref);
                        const hasNote = !!notes[ref];
                        const isSpeaking = currentVerseSpeaking === verseNumber;

                        let verseClasses = "flex items-start mb-4 cursor-pointer rounded-md p-2 -ml-2 transition-all duration-200";
                        if(isSpeaking) {
                            verseClasses += " bg-sky-500/20 ring-2 ring-sky-400";
                        } else if (isSelected) {
                            verseClasses += " bg-amber-500/20";
                        } else if (isHighlighted) {
                            verseClasses += " bg-yellow-500/20";
                        } else {
                            verseClasses += " hover:bg-slate-800/50";
                        }
                        
                        return (
                            <div key={verseNumber} className={verseClasses} onClick={() => handleVerseClick(verseNumber)}>
                                <sup className="text-xs text-slate-400 font-bold mr-2 mt-1 w-6 text-right">{verseNumber}</sup>
                                <p className="flex-1">{verseText}</p>
                                <div className="flex items-center space-x-1 ml-2">
                                    {hasNote && <NoteIcon className="h-4 w-4 text-blue-400" />}
                                    {isBookmarked && <BookmarkIcon filled={true} className="h-4 w-4 text-pink-400" />}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-slate-400 italic">Could not load chapter. Please check your selections.</p>
                )}
            </main>

            {/* Action Toolbar */}
            {selectedVerses.size > 0 && (
                <footer className="sticky bottom-0 z-30 bg-slate-800/90 backdrop-blur-sm border-t border-slate-700 p-3 flex justify-center items-center space-x-2 animate-fadeInUp">
                    <span className="text-sm font-semibold text-slate-300 mr-4">{selectedVerses.size} verse{selectedVerses.size > 1 && 's'} selected</span>
                    <button onClick={handleBookmark} className="p-2 rounded-full text-pink-400 hover:bg-slate-700 transition-colors" title="Bookmark">
                        <BookmarkIcon filled={Array.from(selectedVerses).some(v => bookmarks.has(getVerseRef(v)))} />
                    </button>
                    <button onClick={handleHighlight} className="p-2 rounded-full text-yellow-400 hover:bg-slate-700 transition-colors" title="Highlight">
                        <HighlightIcon filled={Array.from(selectedVerses).some(v => highlights.has(getVerseRef(v)))} />
                    </button>
                    <button onClick={handleNote} className="p-2 rounded-full text-blue-400 hover:bg-slate-700 transition-colors" title="Add Note">
                        <NoteIcon />
                    </button>
                    <div className="relative">
                        <button onClick={() => setShowSharePopover(p => !p)} className="p-2 rounded-full text-green-400 hover:bg-slate-700 transition-colors" title="Share">
                            <ShareIcon />
                        </button>
                        {showSharePopover && currentChapterContent && (
                            <BibleSharePopover
                                verses={
                                    Array.from(selectedVerses)
                                        .sort((a, b) => a - b)
                                        .map(v => ({ num: v, text: currentChapterContent[v] }))
                                }
                                book={book}
                                chapter={chapter}
                                onClose={() => setShowSharePopover(false)}
                            />
                        )}
                    </div>
                </footer>
            )}
            
            {/* Note Modal */}
            {noteModalVerseRef && (
                <NoteModal 
                    verseRef={noteModalVerseRef}
                    initialNote={notes[noteModalVerseRef] || ''}
                    onSave={handleSaveNote}
                    onClose={() => setNoteModalVerseRef(null)}
                />
            )}
        </div>
    );
};

export default BibleReader;