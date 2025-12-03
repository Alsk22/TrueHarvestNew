
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { BIBLE_DATA, BIBLE_BOOK_GROUPS_EN, BIBLE_BOOK_GROUPS_TE, BOOK_METADATA_MAP } from '../services/constants';
import { getBibleChapter, generateSpeech } from '../services/geminiService';
import type { Page, BibleLanguage, EnglishVersion, Verse } from '../types';
import HomeIcon from './icons/HomeIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import HighlightIcon from './icons/HighlightIcon';
import NoteIcon from './icons/NoteIcon';
import ShareIcon from './icons/ShareIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import SoundIcon from './icons/SoundIcon';
import PauseIcon from './icons/PauseIcon';
import ViewColumnsIcon from './icons/ViewColumnsIcon';
import XIcon from './icons/XIcon';
import BibleSharePopover from './BibleSharePopover';
import NoteModal from './NoteModal';

// Keys for localStorage
const BIBLE_READER_PREFS_KEY = 'trueHarvestBibleReaderPrefs';
const BIBLE_BOOKMARKS_KEY = 'trueHarvestBibleBookmarks';
const BIBLE_HIGHLIGHTS_KEY = 'trueHarvestBibleHighlights';
const BIBLE_NOTES_KEY = 'trueHarvestBibleNotes';
const FETCHED_CHAPTERS_CACHE_KEY = 'trueHarvestBibleFetchedCache';

// --- Sub-components for Performance ---

const SkeletonVerseRow = ({ isParallelMode }: { isParallelMode: boolean }) => (
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
    teluguText: string | undefined;
    isParallelMode: boolean;
    language: BibleLanguage;
    isSelected: boolean;
    isSpeaking: boolean;
    hasBookmark: boolean;
    hasHighlight: boolean;
    hasNote: boolean;
    onSelect: (verseNum: number) => void;
}

// Memoized Row Component to prevent re-rendering the whole list on selection changes
const VerseRow = React.memo(({
    verseNum,
    englishText,
    teluguText,
    isParallelMode,
    language,
    isSelected,
    isSpeaking,
    hasBookmark,
    hasHighlight,
    hasNote,
    onSelect
}: VerseRowProps) => {
    return (
        <div 
            id={`verse-${verseNum}`}
            onClick={() => onSelect(verseNum)}
            className={`
                group relative rounded-lg border transition-all duration-200 cursor-pointer select-none mb-3
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
                <div className="absolute right-2 top-2 flex space-x-1 opacity-60">
                    {hasBookmark && <BookmarkIcon filled className="h-3 w-3 text-red-400" />}
                    {hasNote && <NoteIcon className="h-3 w-3 text-blue-400" />}
                    {hasHighlight && <div className="h-3 w-3 rounded-full bg-yellow-400/50"></div>}
                </div>
            )}

            {isParallelMode ? (
                // --- Parallel View ---
                <div className="flex flex-col md:grid md:grid-cols-[3rem_1fr_1px_1fr] gap-4 p-4 items-start">
                    {/* Verse Number */}
                    <span className={`font-sans text-xs font-bold pt-1.5 opacity-60 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                        {verseNum}
                    </span>
                    
                    {/* English Column */}
                    <div className={`text-lg leading-relaxed text-slate-200 ${language === 'english' ? 'font-medium' : 'text-slate-300/90'}`}>
                        {englishText || <span className="text-slate-600 italic text-sm">Loading English...</span>}
                    </div>
                    
                    {/* Divider (Desktop) / Separator (Mobile) */}
                    <div className="hidden md:block w-px h-full bg-slate-700/50 self-stretch min-h-[2rem]"></div>
                    <div className="md:hidden w-full h-px bg-slate-700/50 my-1"></div>
                    
                    {/* Telugu Column */}
                    <div className={`text-lg leading-relaxed text-slate-200 font-serif ${language === 'telugu' ? 'font-medium' : 'text-slate-300/90'}`}>
                        {teluguText || <span className="text-slate-600 italic text-sm">Loading Telugu...</span>}
                    </div>
                </div>
            ) : (
                // --- Single View ---
                <div className="flex gap-4 p-3 md:p-4 items-start">
                        <span className={`flex-shrink-0 w-8 font-sans text-xs font-bold pt-1.5 opacity-60 text-right ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                        {verseNum}
                    </span>
                    <p className="text-lg md:text-xl leading-relaxed text-slate-200 font-serif w-full">
                        {language === 'english' 
                            ? (englishText || <span className="text-slate-600 italic text-sm">Loading...</span>)
                            : (teluguText || <span className="text-slate-600 italic text-sm">Loading...</span>)
                        }
                    </p>
                </div>
            )}
        </div>
    );
});


interface BibleReaderProps {
    setCurrentPage: (page: Page) => void;
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
    
    // Scroll state
    const [shouldScrollToVerse, setShouldScrollToVerse] = useState(false);
    
    // Refs for Native Speech (English)
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
    
    // Refs for AI Speech (Telugu)
    const audioContextRef = useRef<AudioContext | null>(null);
    const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
    const isAiReadingRef = useRef(false);

    const isSpeechSupported = 'speechSynthesis' in window;

    // Load preferences and user data from localStorage or URL params on mount
    useEffect(() => {
        try {
            // Priority: URL Params (Deep Linking)
            const params = new URLSearchParams(window.location.search);
            const urlBook = params.get('book');
            const urlChapter = params.get('chapter');
            const urlVersion = params.get('version');
            const urlVerses = params.get('verses'); // format: "1,2,3"
            const urlLang = params.get('lang');

            let initializedFromUrl = false;

            if (urlBook && urlChapter) {
                setBook(decodeURIComponent(urlBook));
                setChapter(parseInt(urlChapter, 10));
                if (urlVersion) setVersion(urlVersion as EnglishVersion);
                if (urlLang) setLanguage(urlLang as BibleLanguage);
                
                if (urlVerses) {
                    const verseList = urlVerses.split(',').map(v => parseInt(v, 10)).filter(n => !isNaN(n));
                    if (verseList.length > 0) {
                        setSelectedVerses(new Set(verseList));
                        setShouldScrollToVerse(true);
                    }
                }
                initializedFromUrl = true;
            } 
            
            if (!initializedFromUrl) {
                 // Fallback: LocalStorage Preferences
                const prefs = localStorage.getItem(BIBLE_READER_PREFS_KEY);
                if (prefs) {
                    const { lang, ver, bk, ch, parallel } = JSON.parse(prefs);
                    setLanguage(lang || 'english');
                    setVersion(ver || 'KJV');
                    setBook(bk || 'Genesis');
                    setChapter(ch || 1);
                    setIsParallelMode(parallel || false);
                }
            }

            const storedBookmarks = localStorage.getItem(BIBLE_BOOKMARKS_KEY);
            if (storedBookmarks) setBookmarks(new Set(JSON.parse(storedBookmarks)));

            const storedHighlights = localStorage.getItem(BIBLE_HIGHLIGHTS_KEY);
            if (storedHighlights) setHighlights(new Set(JSON.parse(storedHighlights)));

            const storedNotes = localStorage.getItem(BIBLE_NOTES_KEY);
            if (storedNotes) setNotes(JSON.parse(storedNotes));
            
            // Load cached fetched chapters
            const storedCache = localStorage.getItem(FETCHED_CHAPTERS_CACHE_KEY);
            if (storedCache) setFetchedContent(JSON.parse(storedCache));

        } catch (error) {
            console.error("Error loading user data:", error);
        }
         // Cancel speech synthesis on unmount
        return () => {
            stopAnyAudio();
        };
    }, []);
    
    // Save fetched content to local storage periodically or on change
    useEffect(() => {
        try {
             localStorage.setItem(FETCHED_CHAPTERS_CACHE_KEY, JSON.stringify(fetchedContent));
        } catch (e) {
            console.warn("LocalStorage full, cannot save fetched chapters cache");
        }
    }, [fetchedContent]);

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
            const prefs = { lang: language, ver: version, bk: book, ch: chapter, parallel: isParallelMode };
            localStorage.setItem(BIBLE_READER_PREFS_KEY, JSON.stringify(prefs));
            localStorage.setItem(BIBLE_BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarks)));
            localStorage.setItem(BIBLE_HIGHLIGHTS_KEY, JSON.stringify(Array.from(highlights)));
            localStorage.setItem(BIBLE_NOTES_KEY, JSON.stringify(notes));
        } catch (error) {
            console.error("Error saving user data to localStorage:", error);
        }
    }, [language, version, book, chapter, isParallelMode, bookmarks, highlights, notes]);

    // Cleanup speech synthesis on navigation
    useEffect(() => {
        stopAnyAudio();
        setIsReading(false);
        setIsPaused(false);
        setCurrentVerseSpeaking(null);
    }, [language, version, book, chapter]);

    // --- Content Resolution Logic ---

    // Identify standard names regardless of current language selection
    const currentMeta = BOOK_METADATA_MAP[book];
    const englishBookName = currentMeta?.en || (language === 'english' ? book : 'Genesis');
    const teluguBookName = currentMeta?.te || (language === 'telugu' ? book : 'ఆదికాండము');

    // Construct cache keys
    const englishKey = `english-${version}-${englishBookName}-${chapter}`;
    const teluguKey = `telugu-${version}-${teluguBookName}-${chapter}`;

    // Resolve content for both languages
    const resolvedEnglishContent = useMemo(() => 
        BIBLE_DATA.english[version]?.[englishBookName]?.[chapter] || fetchedContent[englishKey], 
    [version, englishBookName, chapter, fetchedContent, englishKey]);
    
    const resolvedTeluguContent = useMemo(() => 
        BIBLE_DATA.telugu?.[teluguBookName]?.[chapter] || fetchedContent[teluguKey],
    [teluguBookName, chapter, fetchedContent, teluguKey]);

    // Determine what is currently "primary" for logic (like read aloud)
    const currentChapterContent = language === 'english' ? resolvedEnglishContent : resolvedTeluguContent;


    // --- Dual Fetching Effect ---
    useEffect(() => {
        // Debounce or check logic to ensure we don't over-fetch
        const needsEnglish = isParallelMode || language === 'english';
        const needsTelugu = isParallelMode || language === 'telugu';

        let shouldFetchEnglish = false;
        let shouldFetchTelugu = false;

        if (needsEnglish && !resolvedEnglishContent) shouldFetchEnglish = true;
        if (needsTelugu && !resolvedTeluguContent) shouldFetchTelugu = true;

        if (!shouldFetchEnglish && !shouldFetchTelugu) return;

        let isMounted = true;
        setIsLoadingContent(true);

        const fetchData = async () => {
            try {
                // Fetch English if needed
                if (shouldFetchEnglish) {
                     const data = await getBibleChapter('english', englishBookName, chapter, version);
                     if (isMounted && data) {
                         setFetchedContent(prev => ({ ...prev, [englishKey]: data }));
                     }
                }
                
                // Fetch Telugu if needed
                if (shouldFetchTelugu) {
                    const data = await getBibleChapter('telugu', englishBookName, chapter, version);
                    if (isMounted && data) {
                        setFetchedContent(prev => ({ ...prev, [teluguKey]: data }));
                    }
                }
            } catch (err) {
                console.error("Error fetching chapters:", err);
            } finally {
                if (isMounted) setIsLoadingContent(false);
            }
        };

        fetchData();

        return () => { isMounted = false; };

    }, [
        isParallelMode, 
        language, 
        englishBookName, 
        chapter, 
        version, 
        englishKey, 
        teluguKey, 
        // Only trigger if content is missing. Relying on resolved content props to be stable.
        !!resolvedEnglishContent,
        !!resolvedTeluguContent
    ]);


    // Metadata for dropdowns
    const bookGroups = language === 'english' ? BIBLE_BOOK_GROUPS_EN : BIBLE_BOOK_GROUPS_TE;
    const currentBookMetadata = BOOK_METADATA_MAP[book];
    const maxChapters = currentBookMetadata ? currentBookMetadata.chapters : 50; // Default fallback
    // This list is ONLY for the chapter dropdown
    const chapterDropdownOptions = useMemo(() => Array.from({ length: maxChapters }, (_, i) => i + 1), [maxChapters]);


    // Handlers for changing selections
    const handleLanguageChange = (lang: BibleLanguage) => {
        setLanguage(lang);
        const currentMeta = BOOK_METADATA_MAP[book];
        const newBookName = lang === 'english' ? currentMeta?.en || 'Genesis' : currentMeta?.te || 'ఆదికాండము';
        setBook(newBookName);
        setSelectedVerses(new Set());
    };

    const handleVersionChange = (ver: EnglishVersion) => {
        setVersion(ver);
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
    
    const handleNextChapter = () => {
        if (chapter < maxChapters) {
            setChapter(chapter + 1);
        }
        setSelectedVerses(new Set());
    };

    const handlePrevChapter = () => {
        if (chapter > 1) {
            setChapter(chapter - 1);
        }
        setSelectedVerses(new Set());
    };

    // Verse selection handler (Callback for Memoized Component)
    const handleVerseClick = useCallback((verseNumber: number) => {
        setSelectedVerses(prev => {
            const newSet = new Set(prev);
            if (newSet.has(verseNumber)) {
                newSet.delete(verseNumber);
            } else {
                newSet.add(verseNumber);
            }
            return newSet;
        });
    }, []);
    
    // We use the Primary Language for bookmark references to keep them consistent in local storage
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
        setSelectedVerses(new Set()); // Auto deselect after action
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
        setSelectedVerses(new Set());
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
        setSelectedVerses(new Set());
    };

    // --- Audio Logic ---

    const stopAnyAudio = () => {
        if (isSpeechSupported) speechSynthesis.cancel();
        if (audioSourceRef.current) {
            try {
                audioSourceRef.current.stop();
                audioSourceRef.current.disconnect();
            } catch (e) { /* ignore */ }
            audioSourceRef.current = null;
        }
        isAiReadingRef.current = false;
    };

    const playAiVerse = async (verseNumbers: number[], index: number) => {
        if (index >= verseNumbers.length || !isAiReadingRef.current) {
            setIsReading(false);
            setCurrentVerseSpeaking(null);
            isAiReadingRef.current = false;
            return;
        }

        const verseNum = verseNumbers[index];
        const text = currentChapterContent?.[verseNum];

        if (!text) {
            playAiVerse(verseNumbers, index + 1);
            return;
        }

        setCurrentVerseSpeaking(verseNum);

        try {
            const base64Audio = await generateSpeech(text);
            
            if (!base64Audio || !isAiReadingRef.current) {
                if (isAiReadingRef.current) playAiVerse(verseNumbers, index + 1);
                return;
            }

            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            }
            
            const ctx = audioContextRef.current;
            if (ctx.state === 'suspended') await ctx.resume();

            const binaryString = window.atob(base64Audio);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            
            const audioBuffer = await ctx.decodeAudioData(bytes.buffer);
            
            if (!isAiReadingRef.current) return;

            const source = ctx.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(ctx.destination);
            
            source.onended = () => {
                if (isAiReadingRef.current) {
                    playAiVerse(verseNumbers, index + 1);
                }
            };

            audioSourceRef.current = source;
            source.start(0);

        } catch (error) {
            console.error("Error playing AI audio:", error);
            setIsReading(false);
            isAiReadingRef.current = false;
        }
    };


    const handleReadAloudToggle = () => {
        if (!currentChapterContent) return;

        if (isReading) {
            stopAnyAudio();
            setIsReading(false);
            setIsPaused(false);
            setCurrentVerseSpeaking(null);
            return; 
        }

        setIsReading(true);
        setIsPaused(false);
        
        if (language === 'telugu') {
            isAiReadingRef.current = true;
            const verseNumbers = Object.keys(currentChapterContent).map(Number).sort((a, b) => a - b);
            let startIndex = 0;
            if (selectedVerses.size > 0) {
                 const firstSelected = Math.min(...Array.from(selectedVerses));
                 startIndex = verseNumbers.indexOf(firstSelected);
                 if (startIndex === -1) startIndex = 0;
            }
            playAiVerse(verseNumbers, startIndex);
            return;
        }

        if (!isSpeechSupported) {
             alert("Speech synthesis is not supported in this browser.");
             setIsReading(false);
             return;
        }

        const verseStartIndices: { verse: number; index: number }[] = [];
        let currentIndex = 0;

        const fullText = Object.entries(currentChapterContent)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([vNum, vText]) => {
                const textToSpeak = `${vText} `;
                verseStartIndices.push({ verse: Number(vNum), index: currentIndex });
                currentIndex += textToSpeak.length;
                return textToSpeak;
            })
            .join(' ');

        const utterance = new SpeechSynthesisUtterance(fullText);
        utterance.lang = 'en-US'; 
        utteranceRef.current = utterance;

        const preferredVoices = voices.filter(v => v.lang.startsWith('en'));
        if (preferredVoices.length > 0) {
            const googleVoice = preferredVoices.find(v => v.name.includes('Google'));
            utterance.voice = googleVoice || preferredVoices[0];
        }

        utterance.onboundary = (event) => {
            if (event.name === 'word') {
                const charIndex = event.charIndex;
                const verseInfo = [...verseStartIndices].reverse().find(v => charIndex >= v.index);
                if (verseInfo) {
                    setCurrentVerseSpeaking(verseInfo.verse);
                }
            }
        };

        utterance.onend = () => {
            setIsReading(false);
            setCurrentVerseSpeaking(null);
        };
        
        utterance.onerror = () => {
            setIsReading(false);
        };

        speechSynthesis.speak(utterance);
    };

    // --- Data Preparation for Rendering ---

    // Calculate the list of verses to render based on available content, not just chapter count
    const visibleVerseNumbers = useMemo(() => {
        const verses = new Set<number>();
        
        if (resolvedEnglishContent) {
            Object.keys(resolvedEnglishContent).forEach(k => verses.add(Number(k)));
        }
        if (resolvedTeluguContent) {
            Object.keys(resolvedTeluguContent).forEach(k => verses.add(Number(k)));
        }
        
        const sorted = Array.from(verses).sort((a, b) => a - b);
        
        // If no content is loaded yet but we are loading, return empty to show skeletons
        if (sorted.length === 0 && isLoadingContent) {
            return []; 
        }
        
        return sorted;
    }, [resolvedEnglishContent, resolvedTeluguContent, isLoadingContent]);

    // Auto-scroll effect
    useEffect(() => {
        if (shouldScrollToVerse && visibleVerseNumbers.length > 0) {
            const firstSelected = Math.min(...Array.from(selectedVerses));
            if (isFinite(firstSelected)) {
                // Short delay to ensure rendering is complete
                setTimeout(() => {
                    const element = document.getElementById(`verse-${firstSelected}`);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 300);
            }
            setShouldScrollToVerse(false);
        }
    }, [visibleVerseNumbers, shouldScrollToVerse, selectedVerses]);

    const showToolbar = selectedVerses.size > 0;
    
    return (
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] max-w-7xl mx-auto overflow-hidden relative">
            
            {/* --- Sticky Header --- */}
            <div className="flex-shrink-0 border-b border-slate-700 bg-slate-800/90 backdrop-blur-md p-3 md:p-4 z-20">
                <div className="flex flex-col gap-3">
                    {/* Top Row: Title & Action Buttons */}
                    <div className="flex items-center justify-between">
                         {/* Breadcrumb / Title (Desktop) */}
                        <div className="hidden md:flex items-center space-x-2 text-slate-300">
                             <span className="font-serif font-bold text-xl text-white">{book} {chapter}</span>
                             <span className="text-slate-500">|</span>
                             <span className="text-sm font-semibold text-amber-400 uppercase tracking-wide">{version}</span>
                             {isParallelMode && (
                                <>
                                    <span className="text-slate-500">|</span>
                                    <span className="text-sm font-semibold text-amber-400 uppercase tracking-wide">TELUGU</span>
                                </>
                             )}
                        </div>
                        
                         {/* Mobile Title */}
                         <div className="md:hidden flex items-center space-x-2">
                             <span className="font-serif font-bold text-lg text-white">{book} {chapter}</span>
                         </div>

                        <div className="flex items-center space-x-2">
                             {/* Parallel Toggle */}
                            <button 
                                onClick={() => setIsParallelMode(!isParallelMode)}
                                className={`p-2 rounded-lg transition-all duration-200 border ${isParallelMode ? 'bg-amber-500/10 border-amber-500/50 text-amber-400' : 'bg-slate-700 border-slate-600 text-slate-400 hover:text-white hover:border-slate-500'}`}
                                title={isParallelMode ? "Switch to Single View" : "Switch to Parallel View"}
                            >
                                <ViewColumnsIcon className="h-5 w-5" />
                            </button>
                            
                            {/* Read Aloud Toggle */}
                            <button 
                                onClick={handleReadAloudToggle}
                                className={`p-2 rounded-lg transition-all duration-200 border ${isReading ? 'bg-sky-500/10 border-sky-500/50 text-sky-400 animate-pulse' : 'bg-slate-700 border-slate-600 text-slate-400 hover:text-white hover:border-slate-500'}`}
                                title={isReading ? "Stop Reading" : "Read Aloud"}
                            >
                                {isReading ? <PauseIcon className="h-5 w-5" /> : <SoundIcon className="h-5 w-5" />}
                            </button>
                             
                            {/* Home Button */}
                             <button
                                onClick={() => setCurrentPage('home')}
                                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-slate-300 bg-slate-700/50 border border-slate-600 hover:bg-slate-600 hover:text-white transition-colors"
                            >
                                <HomeIcon className="h-4 w-4" />
                                <span className="text-xs font-semibold hidden md:inline">Home</span>
                            </button>
                        </div>
                    </div>

                    {/* Controls Row: Dropdowns */}
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Language Select */}
                        <div className="relative">
                            <select
                                value={language}
                                onChange={(e) => handleLanguageChange(e.target.value as BibleLanguage)}
                                className="appearance-none pl-3 pr-8 py-1.5 bg-slate-900 border border-slate-600 text-slate-200 text-sm rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
                            >
                                <option value="english">English</option>
                                <option value="telugu">Telugu</option>
                            </select>
                            <ChevronDownIcon className="absolute right-2 top-2 h-4 w-4 text-slate-500 pointer-events-none" />
                        </div>

                         {/* Version Select (Only if English or Parallel) */}
                        {(language === 'english' || isParallelMode) && (
                            <div className="relative">
                                <select
                                    value={version}
                                    onChange={(e) => handleVersionChange(e.target.value as EnglishVersion)}
                                    className="appearance-none pl-3 pr-8 py-1.5 bg-slate-900 border border-slate-600 text-slate-200 text-sm rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
                                >
                                    <option value="KJV">KJV</option>
                                    <option value="NKJV">NKJV</option>
                                    <option value="ESV">ESV</option>
                                    <option value="NASB">NASB</option>
                                </select>
                                <ChevronDownIcon className="absolute right-2 top-2 h-4 w-4 text-slate-500 pointer-events-none" />
                            </div>
                        )}

                        {/* Book Select */}
                        <div className="relative flex-grow min-w-[140px] max-w-xs">
                             <select
                                value={book}
                                onChange={(e) => handleBookChange(e.target.value)}
                                className="w-full appearance-none pl-3 pr-8 py-1.5 bg-slate-900 border border-slate-600 text-slate-200 text-sm rounded-md focus:ring-1 focus:ring-amber-500 focus:border-amber-500 cursor-pointer"
                            >
                                {Object.keys(bookGroups).map(group => (
                                    <optgroup key={group} label={group} className="bg-slate-800 text-slate-400 font-semibold">
                                        {bookGroups[group].map(b => (
                                            <option key={b} value={b} className="text-white">{b}</option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                             <ChevronDownIcon className="absolute right-2 top-2 h-4 w-4 text-slate-500 pointer-events-none" />
                        </div>
                        
                        {/* Chapter Navigation */}
                        <div className="flex items-center bg-slate-900 border border-slate-600 rounded-md">
                            <button onClick={handlePrevChapter} disabled={chapter <= 1} className="px-2 py-1.5 text-slate-400 hover:text-white disabled:opacity-30 border-r border-slate-700">
                                <ChevronDownIcon className="h-4 w-4 rotate-90" />
                            </button>
                             <div className="relative">
                                <select
                                    value={chapter}
                                    onChange={(e) => handleChapterChange(Number(e.target.value))}
                                    className="appearance-none pl-3 pr-7 py-1.5 bg-transparent text-slate-200 text-sm font-semibold focus:outline-none cursor-pointer w-[4.5rem] text-center"
                                >
                                    {chapterDropdownOptions.map(c => <option key={c} value={c} className="bg-slate-800">{c}</option>)}
                                </select>
                             </div>
                             <button onClick={handleNextChapter} disabled={chapter >= maxChapters} className="px-2 py-1.5 text-slate-400 hover:text-white disabled:opacity-30 border-l border-slate-700">
                                <ChevronDownIcon className="h-4 w-4 -rotate-90" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Main Content Area --- */}
            <div className="flex-grow overflow-y-auto custom-scrollbar p-4 md:p-6 bg-slate-900/50 scroll-smooth">
                {isLoadingContent && visibleVerseNumbers.length === 0 ? (
                    // Skeleton Loading
                    <div className="max-w-4xl mx-auto space-y-4">
                        <div className="flex justify-center mb-6">
                            <span className="bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold animate-pulse border border-amber-500/20">
                                Retrieving chapter content using AI...
                            </span>
                        </div>
                        {[1, 2, 3, 4, 5].map(i => <SkeletonVerseRow key={i} isParallelMode={isParallelMode} />)}
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto pb-24">
                        {visibleVerseNumbers.length > 0 ? (
                            visibleVerseNumbers.map(vNum => {
                                const verseKey = getVerseRef(vNum);
                                return (
                                    <VerseRow
                                        key={vNum}
                                        verseNum={vNum}
                                        englishText={resolvedEnglishContent?.[vNum]}
                                        teluguText={resolvedTeluguContent?.[vNum]}
                                        isParallelMode={isParallelMode}
                                        language={language}
                                        isSelected={selectedVerses.has(vNum)}
                                        isSpeaking={currentVerseSpeaking === vNum}
                                        hasBookmark={bookmarks.has(verseKey)}
                                        hasHighlight={highlights.has(verseKey)}
                                        hasNote={!!notes[verseKey]}
                                        onSelect={handleVerseClick}
                                    />
                                );
                            })
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-slate-400 text-lg">Select a chapter to begin reading.</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* --- Floating Action Toolbar (Bottom) --- */}
            {showToolbar && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 animate-fadeInUp">
                    <div className="flex items-center space-x-1 bg-slate-800 border border-slate-600 rounded-full shadow-2xl px-4 py-2 ring-1 ring-black/50">
                        <span className="text-xs font-bold text-slate-400 mr-2 border-r border-slate-600 pr-3 py-1">
                            {selectedVerses.size} Selected
                        </span>
                        
                        <button onClick={handleBookmark} className="p-2 text-slate-300 hover:text-red-400 hover:bg-slate-700 rounded-full transition-colors" title="Bookmark">
                            <BookmarkIcon className="h-5 w-5" />
                        </button>
                        
                        <button onClick={handleHighlight} className="p-2 text-slate-300 hover:text-yellow-400 hover:bg-slate-700 rounded-full transition-colors" title="Highlight">
                            <HighlightIcon className="h-5 w-5" />
                        </button>
                        
                        <button onClick={handleNote} className="p-2 text-slate-300 hover:text-blue-400 hover:bg-slate-700 rounded-full transition-colors" title="Add Note">
                            <NoteIcon className="h-5 w-5" />
                        </button>
                        
                        <div className="w-px h-4 bg-slate-600 mx-1"></div>

                        <button 
                            onClick={() => setShowSharePopover(true)} 
                            className="p-2 text-slate-300 hover:text-green-400 hover:bg-slate-700 rounded-full transition-colors relative" 
                            title="Share"
                        >
                            <ShareIcon className="h-5 w-5" />
                             {showSharePopover && (
                                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2">
                                     <BibleSharePopover
                                        verses={Array.from(selectedVerses).sort((a,b) => a-b).map(v => ({
                                            num: v,
                                            text: currentChapterContent?.[v] || ''
                                        }))}
                                        book={language === 'telugu' && !isParallelMode ? teluguBookName : englishBookName}
                                        chapter={chapter}
                                        version={version}
                                        onClose={() => {
                                            setShowSharePopover(false);
                                            setSelectedVerses(new Set());
                                        }}
                                    />
                                </div>
                            )}
                        </button>
                        
                        <button onClick={() => setSelectedVerses(new Set())} className="ml-2 p-1 text-slate-500 hover:text-slate-200 rounded-full">
                            <XIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
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
