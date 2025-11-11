import React, { useState, useMemo, useEffect } from 'react';
import { SONG_DATA } from '../services/constants';
import type { Song, Page } from '../types';
import SongCard from './SongCard';
import SearchIcon from './icons/SearchIcon';
import MusicIcon from './icons/MusicIcon';
import HomeIcon from './icons/HomeIcon';
import HeartIcon from './icons/HeartIcon';

const LIKED_SONGS_KEY = 'trueHarvestLikedSongIds';

interface SongLibraryProps {
    setCurrentPage: (page: Page) => void;
}

const SongLibrary: React.FC<SongLibraryProps> = ({ setCurrentPage }) => {
    const categories = useMemo(() => Object.keys(SONG_DATA), []);
    const languages = useMemo(() => {
        const langSet = new Set<string>();
        Object.values(SONG_DATA).forEach(langMap => {
            Object.keys(langMap).forEach(lang => langSet.add(lang));
        });
        return ['All', ...Array.from(langSet).sort()];
    }, []);

    const [activeTab, setActiveTab] = useState(categories[0]);
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        try {
            const storedLikes = localStorage.getItem(LIKED_SONGS_KEY);
            if (storedLikes) {
                // Fix: Add type-checking for data parsed from localStorage. `JSON.parse` can return `unknown`, which is not iterable.
                // This ensures we only try to create a Set if the parsed data is an array, preventing a type error.
                const parsedData = JSON.parse(storedLikes);
                if (Array.isArray(parsedData)) {
                    setLikedIds(new Set(parsedData));
                }
            }
        } catch (error) {
            console.error("Could not load liked songs from localStorage", error);
        }
    }, []);
    
    useEffect(() => {
        try {
            localStorage.setItem(LIKED_SONGS_KEY, JSON.stringify(Array.from(likedIds)));
        } catch (error) {
            console.error("Could not save liked songs to localStorage", error);
        }
    }, [likedIds]);

    const handleToggleLike = (song: Song) => {
        const songId = `${song.title}-${song.artist}`;
        setLikedIds(prevIds => {
            const newIds = new Set(prevIds);
            if (newIds.has(songId)) {
                newIds.delete(songId);
            } else {
                newIds.add(songId);
            }
            return newIds;
        });
    };

    const filteredSongs = useMemo(() => {
        let songs: Song[] = [];

        if (activeTab === 'Liked') {
            const allSongs: Song[] = Object.values(SONG_DATA).flatMap(cat => Object.values(cat).flat());
            songs = allSongs.filter(song => likedIds.has(`${song.title}-${song.artist}`));
        } else {
            const songsByCategory = SONG_DATA[activeTab];
            if (songsByCategory) {
                 if (selectedLanguage === 'All') {
                    Object.values(songsByCategory).forEach(langSongs => {
                        songs.push(...langSongs);
                    });
                } else {
                    songs = songsByCategory[selectedLanguage] || [];
                }
            }
        }
        
        if (searchTerm) {
            const lowercasedTerm = searchTerm.toLowerCase();
            return songs.filter(song => 
                song.title.toLowerCase().includes(lowercasedTerm) ||
                song.artist.toLowerCase().includes(lowercasedTerm) ||
                song.lyrics.toLowerCase().includes(lowercasedTerm) ||
                song.album.toLowerCase().includes(lowercasedTerm)
            );
        }

        return songs;
    }, [activeTab, selectedLanguage, searchTerm, likedIds]);

    const selectClasses = "w-full pl-3 pr-10 py-2.5 text-base bg-slate-800/80 border border-slate-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition";
    
    const tabButtonClasses = (tabName: string) => `flex items-center justify-center space-x-2 w-full md:w-auto px-4 py-2 text-sm font-bold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-800 ${
        activeTab === tabName ? 'bg-slate-600 text-amber-300 shadow' : 'text-slate-300 hover:bg-slate-700/50'
    }`;


    return (
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <div className="text-amber-400"><MusicIcon className="h-10 w-10" /></div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white ml-4 tracking-tight">Song Library</h1>
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

            {/* Filters Panel */}
            <div className="sticky top-24 z-40 bg-slate-800/80 backdrop-blur-lg p-4 rounded-lg border border-slate-700 mb-8 shadow-lg space-y-4">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2 p-1 bg-slate-900 rounded-lg">
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActiveTab(cat)} className={tabButtonClasses(cat)}>
                            <span>{cat}</span>
                        </button>
                    ))}
                    <button onClick={() => setActiveTab('Liked')} className={tabButtonClasses('Liked')}>
                        <HeartIcon className="h-5 w-5" />
                        <span>Liked</span>
                    </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="language-select" className="block text-md font-medium text-slate-300 mb-2">Language</label>
                        <select id="language-select" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className={selectClasses}>
                            {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                        </select>
                    </div>
                    <div className="relative">
                        <label htmlFor="search-songs" className="block text-md font-medium text-slate-300 mb-2">Search</label>
                        <input
                            id="search-songs"
                            type="text"
                            placeholder="Find by title, artist, or lyrics..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder:text-slate-400"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-9">
                            <SearchIcon className="h-5 w-5 text-slate-400" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Song List */}
            <div className="space-y-6">
                {filteredSongs.length > 0 ? (
                    filteredSongs.map(song => (
                        <SongCard 
                            key={`${song.title}-${song.artist}`} 
                            song={song}
                            isLiked={likedIds.has(`${song.title}-${song.artist}`)}
                            onToggleLike={() => handleToggleLike(song)}
                        />
                    ))
                ) : (
                    <div className="text-center py-10">
                        <p className="text-slate-400 italic text-lg">
                            {activeTab === 'Liked' ? "You haven't liked any songs yet. Click the heart icon on a song to add it here!" : "No songs found matching your criteria."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongLibrary;