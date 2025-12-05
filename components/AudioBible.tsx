
import React, { useState, useEffect, useRef } from 'react';
import { getBibleChapter, generateSpeech } from '../services/geminiService';
import type { Page, BibleLanguage, EnglishVersion, Verse } from '../types';
import { BIBLE_BOOK_GROUPS_EN } from '../services/constants';
import HomeIcon from './icons/HomeIcon';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';
import HeadphonesIcon from './icons/HeadphonesIcon';

interface AudioBibleProps {
    setCurrentPage: (page: Page) => void;
}

const AudioBible: React.FC<AudioBibleProps> = ({ setCurrentPage }) => {
    const [book, setBook] = useState('Psalms');
    const [chapter, setChapter] = useState(23);
    const [version, setVersion] = useState<EnglishVersion>('KJV');
    const [language, setLanguage] = useState<BibleLanguage>('english');
    
    const [chapterContent, setChapterContent] = useState<Verse | null>(null);
    const [isLoadingText, setIsLoadingText] = useState(false);
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVerse, setCurrentVerse] = useState<number>(1);
    const [totalVerses, setTotalVerses] = useState(0);

    const audioContextRef = useRef<AudioContext | null>(null);
    const sourceRef = useRef<AudioBufferSourceNode | null>(null);

    // Fetch Text Content whenever Book/Chapter changes
    useEffect(() => {
        const fetchText = async () => {
            setIsLoadingText(true);
            stopAudio();
            setChapterContent(null);
            
            const data = await getBibleChapter(language, book, chapter, version);
            
            if (data) {
                setChapterContent(data);
                const vNums = Object.keys(data).map(Number).sort((a,b) => a-b);
                setTotalVerses(vNums.length);
                setCurrentVerse(vNums[0] || 1);
            }
            setIsLoadingText(false);
        };
        fetchText();
        
        return () => stopAudio();
    }, [book, chapter, version, language]);

    const stopAudio = () => {
        if (sourceRef.current) {
            try {
                sourceRef.current.stop();
                sourceRef.current.disconnect();
            } catch(e) {}
            sourceRef.current = null;
        }
        setIsPlaying(false);
    };

    const playVerse = async (verseNum: number) => {
        if (!chapterContent || !chapterContent[verseNum]) {
            setIsPlaying(false);
            return;
        }

        try {
            // Check if audio context exists/is suspended
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
            }
            if (audioContextRef.current.state === 'suspended') {
                await audioContextRef.current.resume();
            }

            const text = chapterContent[verseNum];
            // Fetch audio bytes from Gemini TTS
            const base64Audio = await generateSpeech(text);
            
            if (!base64Audio) throw new Error("No audio returned");

            // Decode
            const binaryString = window.atob(base64Audio);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const audioBuffer = await audioContextRef.current.decodeAudioData(bytes.buffer);

            // Play
            const source = audioContextRef.current.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContextRef.current.destination);
            
            source.onended = () => {
                if (verseNum < totalVerses) {
                    setCurrentVerse(verseNum + 1);
                    playVerse(verseNum + 1);
                } else {
                    setIsPlaying(false);
                    setCurrentVerse(1);
                }
            };
            
            sourceRef.current = source;
            source.start(0);

        } catch (error) {
            console.error("Audio Playback Error:", error);
            setIsPlaying(false);
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            stopAudio();
        } else {
            setIsPlaying(true);
            playVerse(currentVerse);
        }
    };

    const handleNext = () => {
        stopAudio();
        if (currentVerse < totalVerses) {
            setCurrentVerse(prev => prev + 1);
            if (isPlaying) playVerse(currentVerse + 1); // Logic handled in effect really, but explicit here
        } else {
             // Go to next chapter
             setChapter(prev => prev + 1);
        }
    };

    const handlePrev = () => {
         stopAudio();
         if (currentVerse > 1) {
             setCurrentVerse(prev => prev - 1);
         } else if (chapter > 1) {
             setChapter(prev => prev - 1);
         }
    };

    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto relative overflow-hidden h-[calc(100vh-8rem)] flex flex-col">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8 flex-shrink-0">
                <div className="flex items-center">
                    <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 text-amber-400">
                        <HeadphonesIcon className="h-8 w-8" />
                    </div>
                    <div className="ml-4">
                        <h1 className="text-3xl font-serif font-bold text-white">Audio Bible</h1>
                        <p className="text-slate-400 text-sm">Listen to the Word.</p>
                    </div>
                </div>
                 <button
                    onClick={() => { stopAudio(); setCurrentPage('home'); }}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
                >
                    <HomeIcon className="h-5 w-5" />
                    <span className="font-semibold text-sm hidden md:block">Home</span>
                </button>
            </div>

            {/* Controls Selection */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center bg-slate-800/40 p-4 rounded-2xl border border-slate-700/30">
                 <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as any)}
                    className="bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2"
                >
                    <option value="english">English</option>
                    <option value="telugu">Telugu</option>
                    <option value="tamil">Tamil</option>
                </select>

                <select 
                    value={book}
                    onChange={(e) => { setBook(e.target.value); setChapter(1); }}
                    className="bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2"
                >
                    {Object.keys(BIBLE_BOOK_GROUPS_EN).map(group => (
                        <optgroup key={group} label={group}>
                            {BIBLE_BOOK_GROUPS_EN[group].map(b => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </optgroup>
                    ))}
                </select>

                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-lg">
                    <button onClick={() => setChapter(c => Math.max(1, c-1))} className="px-3 py-2 hover:bg-slate-800 text-slate-300">-</button>
                    <span className="px-3 py-2 text-white font-bold min-w-[3rem] text-center">{chapter}</span>
                    <button onClick={() => setChapter(c => c+1)} className="px-3 py-2 hover:bg-slate-800 text-slate-300">+</button>
                </div>
            </div>

            {/* Player Interface */}
            <div className="flex-grow flex flex-col items-center justify-center space-y-8 relative">
                {isLoadingText ? (
                     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500"></div>
                ) : (
                    <>
                        {/* Now Playing Text */}
                        <div className="text-center space-y-4 max-w-2xl px-4">
                            <h2 className="text-4xl font-serif font-bold text-white">{book} {chapter}</h2>
                            <div className="h-48 overflow-y-auto custom-scrollbar p-4 bg-slate-800/30 rounded-xl border border-slate-700/30">
                                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-serif italic transition-all duration-300">
                                    "{chapterContent?.[currentVerse] || "Loading..."}"
                                </p>
                                <p className="text-sm text-amber-500 font-bold mt-4 tracking-widest uppercase">Verse {currentVerse}</p>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full max-w-lg space-y-2">
                             <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                 <div 
                                    className="h-full bg-amber-500 transition-all duration-300" 
                                    style={{ width: `${(currentVerse / totalVerses) * 100}%`}}
                                ></div>
                             </div>
                             <div className="flex justify-between text-xs text-slate-500 font-bold uppercase">
                                 <span>Verse 1</span>
                                 <span>Verse {totalVerses}</span>
                             </div>
                        </div>

                        {/* Playback Controls */}
                        <div className="flex items-center space-x-8">
                             <button onClick={handlePrev} className="p-4 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                                 <ChevronDownIcon className="h-8 w-8 rotate-90" />
                             </button>

                             <button 
                                onClick={togglePlay}
                                className="p-6 rounded-full bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                             >
                                 {isPlaying ? <PauseIcon className="h-10 w-10" /> : <PlayIcon className="h-10 w-10 ml-1" />}
                             </button>

                             <button onClick={handleNext} className="p-4 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                                 <ChevronDownIcon className="h-8 w-8 -rotate-90" />
                             </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AudioBible;
