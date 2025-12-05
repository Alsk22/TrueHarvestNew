
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { BIBLE_BOOK_GROUPS_EN, BOOK_METADATA_MAP } from '../services/constants';
import { getBibleChapter, generateSpeech } from '../services/geminiService';
import type { Page, BibleLanguage, EnglishVersion, Verse } from '../types';
import HomeIcon from './icons/HomeIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import HighlightIcon from './icons/HighlightIcon';
import NoteIcon from './icons/NoteIcon';
import ShareIcon from './icons/ShareIcon';
import SoundIcon from './icons/SoundIcon';
import PauseIcon from './icons/PauseIcon';
import ViewColumnsIcon from './icons/ViewColumnsIcon';
import XIcon from './icons/XIcon';
import InfoIcon from './icons/InfoIcon';
import SparklesIcon from './icons/SparklesIcon';
import CopyIcon from './icons/CopyIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import BibleSharePopover from './BibleSharePopover';
import NoteModal from './NoteModal';
import VerseSummaryModal from './VerseSummaryModal';

// Keys for localStorage
const BIBLE_READER_PREFS_KEY = 'trueHarvestBibleReaderPrefs';
const BIBLE_BOOKMARKS_KEY = 'trueHarvestBibleBookmarks';
const BIBLE_HIGHLIGHTS_KEY = 'trueHarvestBibleHighlights';
const BIBLE_NOTES_KEY = 'trueHarvestBibleNotes';
const FETCHED_CHAPTERS_CACHE_KEY = 'trueHarvestBibleFetchedCache';

// --- Sub-components for Performance ---

const SkeletonVerseRow: React.FC<{ isParallelMode: boolean }> = ({ isParallelMode }) => (
    <div className="animate-pulse flex items-start p-4 border border-slate-700/50 rounded-lg bg-slate-800/30 mb-3">
        <div className="h-4 w-6 bg-slate-700 rounded mr-4 mt-1 opacity-50"></div>
        <div className={`flex-1 ${isParallelMode ? 'flex flex-col md:grid md:grid-cols-[1fr_1px_1fr] gap-4' : 'space-y-2'}`}>
            <div className="space-y-2">
                 <div className="h-4 bg-slate-700 rounded w-3/4 opacity-60"></div>
                 <div className="h-4 bg-slate-700 rounded w-5/6 opacity-50"></div>
            </div>
            {isParallelMode && (
                <>
                    <div className="hidden md:block w-px h-full bg-slate-700/50"></div>
                    <div className="md:hidden w-full h-px bg-slate-700/50 my-1"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-slate-700 rounded w-2/3 opacity-60"></div>
                        <div className="h-4 bg-slate-700 rounded w-4/5 opacity-50"></div>
                    </div>
                </>
            )}
        </div>
    </div>
);

interface VerseRowProps {
    verseNum: number;
    englishText: string | undefined;
    secondLangText: string | undefined;
    isParallelMode: boolean;
    language: BibleLanguage;
    isSelected: boolean;
    isSpeaking: boolean;
    hasBookmark: boolean;
    hasHighlight: boolean;
    hasNote: boolean;
    onSelect: (e: React.MouseEvent, verseNum: number) => void;
}

// Memoized Row Component
const VerseRow = React.memo(({
    verseNum,
    englishText,
    secondLangText,
    isParallelMode,
    language,
    isSelected,
    isSpeaking,
    hasBookmark,
    hasHighlight,
    hasNote,
    onSelect
}: VerseRowProps) => {
    
    // Determine the text to show in single view
    const mainText = language === 'english' ? englishText : secondLangText;
    
    return (
        <div 
            id={`verse-${verseNum}`}
            onClick={(e) => onSelect(e, verseNum)}
            className={`
                group relative rounded-lg border transition-all duration-200 cursor-text mb-3
                ${isSelected 
                    ? 'bg-amber-900/30 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)] z-10' 
                    : isSpeaking
                        ? 'bg-sky-900/20 border-sky-500/50 ring-1 ring-sky-500/50 z-10'
                        : 'bg-transparent border-transparent hover:bg-slate-800/40 hover:border-slate-700/50'
                }
                ${hasHighlight && !isSelected ? 'bg-yellow-900/20 border-yellow-700/30' : ''}
            `}
        >
            {/* Icons Indicator (Absolute positioned) */}
            {(hasBookmark || hasNote || hasHighlight) && (
                <div className="absolute right-2 top-2 flex space-x-1 opacity-60 pointer-events-none">
                    {hasBookmark && <BookmarkIcon filled className="h-3 w-3 text-red-400" />}
                    {hasNote && <NoteIcon className="h-3 w-3 text-blue-400" />}
                    {hasHighlight && <div className="h-3 w-3 rounded-full bg-yellow-400/50"></div>}
                </div>
            )}

            {isParallelMode ? (
                // --- Parallel View (English + Selected Language) ---
                <div className="flex flex-col md:grid md:grid-cols-[3rem_1fr_1px_1fr] gap-4 p-4 items-start">
                    {/* Verse Number */}
                    <span className={`font-sans text-xs font-bold pt-1.5 opacity-60 select-none cursor-pointer ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                        {verseNum}
                    </span>
                    
                    {/* English Column (Always Left) */}
                    <div className={`text-lg leading-relaxed text-slate-200 ${language === 'english' ? 'font-medium' : 'text-slate-300/90'}`}>
                        {englishText || <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse"></div>}
                    </div>
                    
                    {/* Divider (Desktop) / Separator (Mobile) */}
                    <div className="hidden md:block w-px h-full bg-slate-700/50 self-stretch min-h-[2rem]"></div>
                    <div className="md:hidden w-full h-px bg-slate-700/50 my-1"></div>
                    
                    {/* Second Language Column (Telugu or Tamil) */}
                    <div className={`text-lg leading-relaxed text-slate-200 font-serif ${language !== 'english' ? 'font-medium' : 'text-slate-300/90'}`}>
                        {secondLangText || <div className="h-4 bg-slate-800 rounded w-3/4 animate-pulse"></div>}
                    </div>
                </div>
            ) : (
                // --- Single View ---
                <div className="flex gap-4 p-3 md:p-4 items-start">
                        <span className={`flex-shrink-0 w-8 font-sans text-xs font-bold pt-1.5 opacity-60 text-right select-none cursor-pointer ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                        {verseNum}
                    </span>
                    <p className="text-lg md:text-xl leading-relaxed text-slate-200 font-serif w-full">
                        {mainText || <div className="space-y-2"><div className="h-4 bg-slate-800 rounded w-full animate-pulse"></div><div className="h-4 bg-slate-800 rounded w-2/3 animate-pulse"></div></div>}
                    </p>
                </div>
            )}
        </div>
    );
});


interface BibleReaderProps {
    setCurrentPage: (page: Page) => void;
}

interface ToolbarPosition {
    top: number;
    left: number;
    showBelow?: boolean;
}

const BibleReader: React.FC<BibleReaderProps> = ({ setCurrentPage }) => {
    // State for Bible navigation
    const [language, setLanguage] = useState<BibleLanguage>('english');
    const [version, setVersion] = useState<EnglishVersion>('KJV');
    const [book, setBook] = useState('Genesis');
    const [chapter, setChapter] = useState(1);
    const [isParallelMode, setIsParallelMode] = useState(false);

    // State for dynamic content
    const [fetchedContent, setFetchedContent] = useState<Record<string, Verse>>({});
    const [isLoadingContent, setIsLoadingContent] = useState(false);

    // State for user interactions
    const [selectedVerses, setSelectedVerses] = useState<Set<number>>(new Set());
    // 'verse' means full rows selected, 'text' means partial text selected via drag
    const [selectionMode, setSelectionMode] = useState<'verse' | 'text' | null>(null);
    const [toolbarPosition, setToolbarPosition] = useState<ToolbarPosition | null>(null);
    const [selectedTextContent, setSelectedTextContent] = useState<string>('');

    const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
    const [highlights, setHighlights] = useState<Set<string>>(new Set());
    const [notes, setNotes] = useState<Record<string, string>>({});
    const [showSharePopover, setShowSharePopover] = useState(false);
    const [showSummaryModal, setShowSummaryModal] = useState(false);
    const [noteModalVerseRef, setNoteModalVerseRef] = useState<string | null>(null);

    // State for Read Aloud feature
    const [isReadingAloud, setIsReadingAloud] = useState(false);
    const [currentReadingVerse, setCurrentReadingVerse] = useState<number | null>(null);
    const [autoPageTurn, setAutoPageTurn] = useState(false);
    
    // Audio Context Refs
    const audioContextRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

    // Load initial state from local storage and session storage
    useEffect(() => {
        // 1. Check for navigation intent from Bible Plans (Session Storage)
        const navIntent = sessionStorage.getItem('trueHarvestBibleNav');
        if (navIntent) {
            try {
                const { book: navBook, chapter: navChapter } = JSON.parse(navIntent);
                setBook(navBook);
                setChapter(navChapter);
                sessionStorage.removeItem('trueHarvestBibleNav');
            } catch (e) { console.error("Failed to parse nav intent", e); }
        } else {
             // 2. Otherwise load last read position
            const prefs = localStorage.getItem(BIBLE_READER_PREFS_KEY);
            if (prefs) {
                const { language, version, book, chapter, isParallelMode } = JSON.parse(prefs);
                setLanguage(language);
                setVersion(version);
                setBook(book);
                setChapter(chapter);
                setIsParallelMode(isParallelMode);
            }
        }

        const storedBookmarks = localStorage.getItem(BIBLE_BOOKMARKS_KEY);
        if (storedBookmarks) setBookmarks(new Set(JSON.parse(storedBookmarks)));

        const storedHighlights = localStorage.getItem(BIBLE_HIGHLIGHTS_KEY);
        if (storedHighlights) setHighlights(new Set(JSON.parse(storedHighlights)));

        const storedNotes = localStorage.getItem(BIBLE_NOTES_KEY);
        if (storedNotes) setNotes(JSON.parse(storedNotes));

        const storedCache = localStorage.getItem(FETCHED_CHAPTERS_CACHE_KEY);
        if (storedCache) setFetchedContent(JSON.parse(storedCache));
    }, []);

    // Save preferences
    useEffect(() => {
        localStorage.setItem(BIBLE_READER_PREFS_KEY, JSON.stringify({ language, version, book, chapter, isParallelMode }));
    }, [language, version, book, chapter, isParallelMode]);

    // Handle Global Text Selection (Drag to select)
    useEffect(() => {
        const handleMouseUp = () => {
            const selection = window.getSelection();
            
            // If we have a valid text selection
            if (selection && !selection.isCollapsed && selection.toString().trim().length > 0) {
                // Ensure the selection is within our Bible Reader content
                const anchorNode = selection.anchorNode;
                if (anchorNode && anchorNode.parentElement?.closest('.bible-content-area')) {
                    const range = selection.getRangeAt(0);
                    const rect = range.getBoundingClientRect();
                    
                    // Clear row selection if text is selected to avoid confusion
                    setSelectedVerses(new Set()); 
                    setSelectionMode('text');
                    setSelectedTextContent(selection.toString());
                    
                    // Calculate position
                    const toolbarHeight = 60;
                    const showBelow = rect.top < toolbarHeight + 20;

                    setToolbarPosition({
                        top: showBelow ? rect.bottom + 10 : rect.top - 10,
                        left: rect.left + (rect.width / 2),
                        showBelow
                    });
                }
            } else {
                // If clicked without selection (and not handled by verse click), clear text mode
                // Note: Verse Click handler handles its own clearing/setting
                if (selectionMode === 'text' && (!selection || selection.isCollapsed)) {
                     setSelectionMode(null);
                     setToolbarPosition(null);
                }
            }
        };

        // We listen on the document, but verify target in logic
        document.addEventListener('mouseup', handleMouseUp);
        return () => document.removeEventListener('mouseup', handleMouseUp);
    }, [selectionMode]);


    // Derived State
    const bookMetadata = useMemo(() => BOOK_METADATA_MAP[book] || BOOK_METADATA_MAP['Genesis'], [book]);
    const maxChapters = bookMetadata.chapters;
    const currentChapterKey = (lang: string) => `${lang}-${book}-${chapter}-${lang === 'english' ? version : 'BSI'}`;
    
    // Determine the list of verses to display
    const englishContent = fetchedContent[currentChapterKey('english')];
    const secondLangContent = fetchedContent[currentChapterKey(language)];
    
    const verseList = useMemo(() => {
        const content = englishContent || secondLangContent;
        if (!content) return Array.from({ length: 5 }, (_, i) => i + 1); // Skeleton placeholder count
        return Object.keys(content).map(Number).sort((a, b) => a - b);
    }, [englishContent, secondLangContent]);


    // Data Fetching Logic (Single & Parallel)
    const fetchChapterData = useCallback(async (lang: BibleLanguage, b: string, c: number, v: string) => {
        const key = `${lang}-${b}-${c}-${lang === 'english' ? v : 'BSI'}`;
        if (fetchedContent[key]) return;
        
        const englishBookName = Object.values(BOOK_METADATA_MAP).find(m => m.en === b || m.te === b || m.ta === b)?.en || b;
        const data = await getBibleChapter(lang, englishBookName, c, v);
        
        if (data) {
            setFetchedContent(prev => {
                const newState = { ...prev, [key]: data };
                try {
                    localStorage.setItem(FETCHED_CHAPTERS_CACHE_KEY, JSON.stringify(newState));
                } catch (e) {
                    localStorage.removeItem(FETCHED_CHAPTERS_CACHE_KEY);
                }
                return newState;
            });
        }
    }, [fetchedContent]);

    useEffect(() => {
        const load = async () => {
            setIsLoadingContent(true);
            await fetchChapterData('english', book, chapter, version);
            if (language !== 'english') {
                await fetchChapterData(language, book, chapter, version);
            }
            if (chapter < maxChapters) {
                fetchChapterData('english', book, chapter + 1, version);
                if (language !== 'english') {
                    fetchChapterData(language, book, chapter + 1, version);
                }
            }
            setIsLoadingContent(false);
        };
        load();
    }, [book, chapter, version, language, fetchChapterData, maxChapters]);

    // --- Audio Logic ---
    useEffect(() => {
        if (autoPageTurn && !isLoadingContent && verseList.length > 0) {
            setAutoPageTurn(false);
            startReadingSession(1);
        }
    }, [autoPageTurn, isLoadingContent, verseList]);

    const stopAudio = () => {
        if (audioSourceRef.current) {
            try {
                audioSourceRef.current.stop();
                audioSourceRef.current.disconnect();
            } catch(e) {}
            audioSourceRef.current = null;
        }
        setIsReadingAloud(false);
        setCurrentReadingVerse(null);
    };

    const playVerseAudio = async (verseNum: number) => {
        const key = currentChapterKey(language);
        const content = fetchedContent[key];
        
        if (!content || !content[verseNum]) {
            stopAudio();
            return;
        }

        try {
            setCurrentReadingVerse(verseNum);
            
            // Generate Speech
            const text = content[verseNum];
            
            if (language === 'english') {
                 const utterance = new SpeechSynthesisUtterance(text);
                 utterance.rate = 0.9;
                 utterance.onend = () => {
                     const nextVerse = verseNum + 1;
                     if (content[nextVerse]) {
                         playVerseAudio(nextVerse);
                     } else {
                         handleNextChapterReading();
                     }
                 };
                 window.speechSynthesis.cancel();
                 window.speechSynthesis.speak(utterance);
                 return;
            }

            // AI Audio for Telugu/Tamil
            const base64Audio = await generateSpeech(text);
            if (!base64Audio) throw new Error("Audio generation failed");

            if (!audioContextRef.current) {
                 audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            if (audioContextRef.current.state === 'suspended') {
                 await audioContextRef.current.resume();
            }

            const binaryString = window.atob(base64Audio);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const audioBuffer = await audioContextRef.current.decodeAudioData(bytes.buffer);

            const source = audioContextRef.current.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContextRef.current.destination);
            
            source.onended = () => {
                 const nextVerse = verseNum + 1;
                 if (content[nextVerse]) {
                     playVerseAudio(nextVerse);
                 } else {
                     handleNextChapterReading();
                 }
            };

            audioSourceRef.current = source;
            source.start(0);

        } catch (e) {
            console.error("Playback error", e);
            stopAudio();
        }
    };

    const startReadingSession = (startVerse: number) => {
        setIsReadingAloud(true);
        window.speechSynthesis.cancel();
        playVerseAudio(startVerse);
    };

    const handleReadAloudToggle = () => {
        if (isReadingAloud) {
            stopAudio();
            window.speechSynthesis.cancel();
        } else {
             if (!audioContextRef.current) {
                 audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
            }
            audioContextRef.current.resume().then(() => {
                const startVerse = selectedVerses.size > 0 
                    ? Array.from(selectedVerses).sort((a: number, b: number) => a - b)[0] 
                    : 1;
                startReadingSession(startVerse);
            });
        }
    };
    
    const handleNextChapterReading = () => {
        if (chapter < maxChapters) {
            setAutoPageTurn(true);
            setChapter(c => c + 1);
        } else {
            stopAudio();
        }
    };


    // --- Interaction Handlers ---

    const handleVerseClick = (e: React.MouseEvent, verseNum: number) => {
        // If user is actually selecting text (dragging), do not trigger verse selection
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0) return;

        e.stopPropagation(); // Stop bubbling
        
        // Switch to verse selection mode
        setSelectionMode('verse');
        setSelectedTextContent('');

        // Calculate Position for Toolbar (Relative to clicked verse)
        const rect = e.currentTarget.getBoundingClientRect();
        const toolbarHeight = 60; 
        const showBelow = rect.top < toolbarHeight + 20;
        
        setToolbarPosition({
            top: showBelow ? rect.bottom + 10 : rect.top - 10,
            left: rect.left + (rect.width / 2),
            showBelow
        });

        setSelectedVerses(prev => {
            const newSet = new Set(prev);
            if (newSet.has(verseNum)) {
                newSet.delete(verseNum);
                // If we deselected the last one, close toolbar
                if (newSet.size === 0) {
                    setToolbarPosition(null);
                    setSelectionMode(null);
                }
            } else {
                newSet.add(verseNum);
            }
            return newSet;
        });
    };

    const clearSelection = () => {
        setSelectedVerses(new Set());
        setSelectionMode(null);
        setToolbarPosition(null);
        setSelectedTextContent('');
        if (window.getSelection) {
            window.getSelection()?.removeAllRanges();
        }
    };

    const getRefString = (vSet: Set<number>) => {
        const sorted = Array.from(vSet).sort((a: number, b: number) => a - b);
        if (sorted.length === 0) return `${book} ${chapter}`;
        if (sorted.length === 1) return `${book} ${chapter}:${sorted[0]}`;
        return `${book} ${chapter}:${sorted[0]}-${sorted[sorted.length-1]}`;
    };

    const getSelectedText = () => {
        if (selectionMode === 'text') return selectedTextContent;
        
        const key = currentChapterKey(language);
        const content = fetchedContent[key] || fetchedContent[currentChapterKey('english')];
        if (!content) return "";
        return Array.from(selectedVerses).sort((a: number, b: number) => a - b).map(v => `[${v}] ${content[v]}`).join('\n');
    };

    const toggleBookmark = () => {
        const ref = getRefString(selectedVerses);
        setBookmarks(prev => {
            const next = new Set(prev);
            if (next.has(ref)) next.delete(ref);
            else next.add(ref);
            localStorage.setItem(BIBLE_BOOKMARKS_KEY, JSON.stringify(Array.from(next)));
            return next;
        });
        clearSelection();
    };

    const toggleHighlight = () => {
        setHighlights(prev => {
            const next = new Set(prev);
            selectedVerses.forEach(v => {
                const ref = `${book} ${chapter}:${v}`;
                if (next.has(ref)) next.delete(ref);
                else next.add(ref);
            });
            localStorage.setItem(BIBLE_HIGHLIGHTS_KEY, JSON.stringify(Array.from(next)));
            return next;
        });
        clearSelection();
    };

    const handleCopy = () => {
        const text = getSelectedText();
        // Add reference only if verse mode, otherwise just copy text
        const clipboardText = selectionMode === 'verse' 
            ? `${text}\n\n${getRefString(selectedVerses)} (${version})`
            : text;
            
        navigator.clipboard.writeText(clipboardText);
        clearSelection();
    };

    const handleNextChapter = () => {
        if (chapter < maxChapters) {
            setChapter(c => c + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevChapter = () => {
        if (chapter > 1) {
            setChapter(c => c - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };


    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl min-h-[80vh] flex flex-col relative overflow-hidden">
            
            {/* --- Sticky Header --- */}
            <div className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
                    {/* Navigation Controls */}
                    <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
                        <select 
                            value={book} 
                            onChange={(e) => { setBook(e.target.value); setChapter(1); }}
                            className="bg-slate-800 text-white text-sm font-bold py-2 px-4 rounded-lg border border-slate-700 focus:ring-2 focus:ring-amber-500 outline-none"
                        >
                            {Object.keys(BIBLE_BOOK_GROUPS_EN).map(group => (
                                <optgroup key={group} label={group}>
                                    {BIBLE_BOOK_GROUPS_EN[group].map(b => (
                                        <option key={b} value={b}>{bookMetadata.ta === b || bookMetadata.te === b ? bookMetadata.en : b}</option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>

                        <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700">
                             <button 
                                onClick={handlePrevChapter} 
                                disabled={chapter <= 1}
                                className="p-2 text-slate-400 hover:text-white disabled:opacity-30"
                             >
                                <ChevronDownIcon className="h-4 w-4 rotate-90" />
                             </button>
                             <select 
                                value={chapter} 
                                onChange={(e) => setChapter(Number(e.target.value))}
                                className="bg-transparent text-white font-bold py-2 px-2 text-center outline-none appearance-none"
                            >
                                {Array.from({ length: maxChapters }, (_, i) => i + 1).map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                            </select>
                            <button 
                                onClick={handleNextChapter} 
                                disabled={chapter >= maxChapters}
                                className="p-2 text-slate-400 hover:text-white disabled:opacity-30"
                            >
                                <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                            </button>
                        </div>

                         <select 
                            value={version} 
                            onChange={(e) => setVersion(e.target.value as EnglishVersion)}
                            className="bg-slate-800 text-amber-500 text-sm font-bold py-2 px-3 rounded-lg border border-slate-700 outline-none"
                        >
                            <option value="KJV">KJV</option>
                            <option value="NKJV">NKJV</option>
                            <option value="ESV">ESV</option>
                            <option value="NASB">NASB</option>
                        </select>
                    </div>

                     {/* Toolbar Controls */}
                     <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                        <div className="flex bg-slate-800 rounded-lg p-1 border border-slate-700">
                            {(['english', 'telugu', 'tamil'] as const).map(l => (
                                <button
                                    key={l}
                                    onClick={() => setLanguage(l)}
                                    className={`px-3 py-1.5 text-xs font-bold uppercase rounded-md transition-all ${
                                        language === l ? 'bg-slate-600 text-white shadow' : 'text-slate-400 hover:text-slate-200'
                                    }`}
                                >
                                    {l.slice(0,3)}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsParallelMode(!isParallelMode)}
                                className={`p-2.5 rounded-lg border transition-all ${isParallelMode ? 'bg-amber-500/20 text-amber-400 border-amber-500/50' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'}`}
                                title="Toggle Parallel View"
                            >
                                <ViewColumnsIcon className="h-5 w-5" />
                            </button>
                             <button
                                onClick={handleReadAloudToggle}
                                className={`p-2.5 rounded-lg border transition-all ${isReadingAloud ? 'bg-sky-500/20 text-sky-400 border-sky-500/50 animate-pulse' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'}`}
                                title={isReadingAloud ? "Stop Reading" : "Read Aloud"}
                            >
                                {isReadingAloud ? <PauseIcon className="h-5 w-5" /> : <SoundIcon className="h-5 w-5" />}
                            </button>
                            <button
                                onClick={() => setCurrentPage('home')}
                                className="p-2.5 rounded-lg bg-slate-800 text-slate-400 border border-slate-700 hover:text-white hover:border-slate-500"
                            >
                                <HomeIcon className="h-5 w-5" />
                            </button>
                        </div>
                     </div>
                </div>
            </div>

            {/* --- Content Area --- */}
            <div className="flex-grow p-4 md:p-8 overflow-y-auto bible-content-area" onScroll={() => {
                // Hide toolbar on scroll to prevent misalignment
                if (toolbarPosition && selectionMode === 'text') {
                    // Optional: could update position on scroll, but hiding is cleaner UX for text selection
                    // For verse selection, we might want to keep it? Let's just close text selection on scroll.
                    if (selectionMode === 'text') clearSelection();
                }
            }}>
                <div className="max-w-4xl mx-auto">
                    {/* Chapter Title */}
                    <div className="text-center mb-10 mt-4">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{bookMetadata[language === 'english' ? 'en' : language === 'telugu' ? 'te' : 'ta']} {chapter}</h2>
                        <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">{version} • {language}</p>
                    </div>

                    {/* Verses List */}
                    <div className="space-y-1">
                        {isLoadingContent && !englishContent && !secondLangContent ? (
                             Array.from({ length: 6 }).map((_, i) => (
                                <SkeletonVerseRow key={i} isParallelMode={isParallelMode} />
                             ))
                        ) : (
                             verseList.map(vNum => {
                                 const keyEn = currentChapterKey('english');
                                 const keyLang = currentChapterKey(language);
                                 const enText = fetchedContent[keyEn]?.[vNum];
                                 const langText = fetchedContent[keyLang]?.[vNum];
                                 const ref = `${book} ${chapter}:${vNum}`;
                                 
                                 return (
                                     <VerseRow 
                                        key={vNum}
                                        verseNum={vNum}
                                        englishText={enText}
                                        secondLangText={langText}
                                        isParallelMode={isParallelMode}
                                        language={language}
                                        isSelected={selectedVerses.has(vNum)}
                                        isSpeaking={currentReadingVerse === vNum}
                                        hasBookmark={bookmarks.has(getRefString(new Set([vNum])))}
                                        hasHighlight={highlights.has(ref)}
                                        hasNote={!!notes[ref]}
                                        onSelect={handleVerseClick}
                                     />
                                 );
                             })
                        )}
                    </div>
                     
                    {/* Footer Nav */}
                    <div className="flex justify-between mt-12 pt-8 border-t border-slate-800">
                        <button onClick={handlePrevChapter} disabled={chapter <= 1} className="flex items-center text-slate-400 hover:text-white disabled:opacity-30 transition-colors">
                            <ChevronDownIcon className="h-5 w-5 rotate-90 mr-2" /> Previous Chapter
                        </button>
                        <button onClick={handleNextChapter} disabled={chapter >= maxChapters} className="flex items-center text-slate-400 hover:text-white disabled:opacity-30 transition-colors">
                            Next Chapter <ChevronDownIcon className="h-5 w-5 -rotate-90 ml-2" />
                        </button>
                    </div>
                     <div className="text-center mt-8 pb-4 text-xs text-slate-600">
                        AI-Generated Content. Please verify with a physical Bible for critical study.
                    </div>
                </div>
            </div>

            {/* --- Contextual Toolbar (Near Selection) --- */}
            {selectionMode && toolbarPosition && (
                <div 
                    className="fixed z-50 animate-fadeInUp flex items-center justify-center pointer-events-none"
                    style={{
                        top: toolbarPosition.showBelow ? toolbarPosition.top : undefined,
                        bottom: !toolbarPosition.showBelow ? (window.innerHeight - toolbarPosition.top) : undefined,
                        left: toolbarPosition.left,
                        transform: 'translateX(-50%)'
                    }}
                >
                    <div className="pointer-events-auto bg-slate-900/95 backdrop-blur-xl border border-slate-600/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-full px-4 py-2 flex items-center space-x-2 sm:space-x-4">
                        
                        {/* --- Text Selection Mode Actions --- */}
                        {selectionMode === 'text' && (
                            <>
                                <button onClick={handleCopy} className="flex flex-col items-center group px-2" title="Copy Selected Text">
                                    <CopyIcon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                                    <span className="text-[10px] text-slate-500 mt-1">Copy</span>
                                </button>
                                <div className="w-px h-6 bg-slate-700"></div>
                                <button onClick={() => setShowSummaryModal(true)} className="flex flex-col items-center group px-2" title="Explain Selection">
                                    <SparklesIcon className="h-5 w-5 text-amber-500 group-hover:text-amber-300 transition-colors" />
                                    <span className="text-[10px] text-amber-500 mt-1">Explain</span>
                                </button>
                            </>
                        )}

                        {/* --- Verse Selection Mode Actions --- */}
                        {selectionMode === 'verse' && (
                            <>
                                <span className="text-xs font-bold text-slate-300 border-r border-slate-700 pr-3 mr-1 hidden sm:block">
                                    {selectedVerses.size} Selected
                                </span>
                                
                                <button onClick={handleCopy} className="flex flex-col items-center group" title="Copy Text">
                                    <CopyIcon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                                </button>

                                <button onClick={toggleBookmark} className="flex flex-col items-center group" title="Bookmark">
                                    <BookmarkIcon filled={bookmarks.has(getRefString(selectedVerses))} className="h-5 w-5 text-slate-400 group-hover:text-red-400 transition-colors" />
                                </button>

                                <button onClick={toggleHighlight} className="flex flex-col items-center group" title="Highlight">
                                    <HighlightIcon filled className="h-5 w-5 text-slate-400 group-hover:text-yellow-400 transition-colors" />
                                </button>

                                <button onClick={() => setNoteModalVerseRef(getRefString(selectedVerses))} className="flex flex-col items-center group" title="Add Note">
                                    <NoteIcon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                                </button>
                                
                                <button onClick={() => setShowSummaryModal(true)} className="flex flex-col items-center group" title="AI Summary">
                                    <SparklesIcon className="h-5 w-5 text-amber-500 group-hover:text-amber-300 transition-colors" />
                                </button>

                                <button onClick={() => setShowSharePopover(true)} className="flex flex-col items-center group" title="Share">
                                    <ShareIcon className="h-5 w-5 text-slate-400 group-hover:text-green-400 transition-colors" />
                                </button>
                            </>
                        )}

                        <div className="w-px h-6 bg-slate-700 mx-1"></div>

                        <button onClick={clearSelection} className="flex flex-col items-center group" title="Close">
                            <XIcon className="h-5 w-5 text-slate-500 group-hover:text-red-500 transition-colors" />
                        </button>
                    </div>

                    {/* Arrow for popover feel */}
                    <div 
                        className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent ${toolbarPosition.showBelow ? 'border-b-[8px] border-b-slate-900/95 -top-2' : 'border-t-[8px] border-t-slate-900/95 -bottom-2'}`}
                    ></div>
                    
                    {/* Popovers */}
                    {showSharePopover && selectionMode === 'verse' && (
                        <BibleSharePopover
                            verses={Array.from(selectedVerses).map(v => ({ 
                                num: v, 
                                text: fetchedContent[currentChapterKey(language)]?.[v] || fetchedContent[currentChapterKey('english')]?.[v] || ''
                            }))}
                            book={book}
                            chapter={chapter}
                            version={version}
                            onClose={() => setShowSharePopover(false)}
                            position={toolbarPosition.showBelow ? 'bottom' : 'top'}
                        />
                    )}
                </div>
            )}

            {/* Modals */}
            {noteModalVerseRef && (
                <NoteModal
                    verseRef={noteModalVerseRef}
                    initialNote={notes[noteModalVerseRef] || ''}
                    onSave={(ref, text) => {
                        setNotes(prev => {
                            const next = { ...prev, [ref]: text };
                            localStorage.setItem(BIBLE_NOTES_KEY, JSON.stringify(next));
                            return next;
                        });
                        setNoteModalVerseRef(null);
                        clearSelection();
                    }}
                    onClose={() => setNoteModalVerseRef(null)}
                />
            )}
            
            {showSummaryModal && (
                <VerseSummaryModal 
                    verseText={getSelectedText()}
                    reference={selectionMode === 'verse' ? getRefString(selectedVerses) : `${book} ${chapter} (Excerpt)`}
                    onClose={() => { setShowSummaryModal(false); clearSelection(); }}
                />
            )}

        </div>
    );
};

export default BibleReader;
