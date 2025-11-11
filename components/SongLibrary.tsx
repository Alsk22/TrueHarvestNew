import React, { useState, useMemo } from 'react';
import { SONG_DATA } from '../constants';
import type { Song } from '../types';
import SongCard from './SongCard';
import SearchIcon from './icons/SearchIcon';
import MusicIcon from './icons/MusicIcon';

const SongLibrary: React.FC = () => {
    const categories = useMemo(() => Object.keys(SONG_DATA), []);
    const languages = useMemo(() => {
        const langSet = new Set<string>();
        Object.values(SONG_DATA).forEach(langMap => {
            Object.keys(langMap).forEach(lang => langSet.add(lang));
        });
        return ['All', ...Array.from(langSet).sort()];
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSongs = useMemo(() => {
        let songs: Song[] = [];
        const songsByCategory = SONG_DATA[selectedCategory];
        if (!songsByCategory) return [];

        if (selectedLanguage === 'All') {
            Object.values(songsByCategory).forEach(langSongs => {
                songs.push(...langSongs);
            });
        } else {
            songs = songsByCategory[selectedLanguage] || [];
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
    }, [selectedCategory, selectedLanguage, searchTerm]);

    const selectClasses = "w-full pl-3 pr-10 py-2.5 text-base bg-slate-800/80 border border-slate-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition";

    return (
        <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl shadow-xl p-6 md:p-8 max-w-5xl mx-auto">
            <div className="flex items-center mb-8">
                <div className="text-amber-400"><MusicIcon className="h-10 w-10" /></div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white ml-4 tracking-tight">Song Library</h1>
            </div>

            {/* Filters Panel */}
            <div className="sticky top-24 z-40 bg-slate-800/80 backdrop-blur-lg p-4 rounded-lg border border-slate-700 mb-8 shadow-lg space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="category-select" className="block text-md font-medium text-slate-300 mb-2">Category</label>
                        <select id="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className={selectClasses}>
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="language-select" className="block text-md font-medium text-slate-300 mb-2">Language</label>
                        <select id="language-select" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)} className={selectClasses}>
                            {languages.map(lang => <option key={lang} value={lang}>{lang}</option>)}
                        </select>
                    </div>
                </div>
                <div className="relative">
                     <label htmlFor="search-songs" className="sr-only">Search Songs</label>
                    <input
                        id="search-songs"
                        type="text"
                        placeholder="Search by title, artist, or lyrics..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder:text-slate-400"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-slate-400" />
                    </div>
                </div>
            </div>

            {/* Song List */}
            <div className="space-y-6">
                {filteredSongs.length > 0 ? (
                    filteredSongs.map(song => <SongCard key={`${song.title}-${song.artist}`} song={song} />)
                ) : (
                    <div className="text-center py-10">
                        <p className="text-slate-400 italic text-lg">No songs found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongLibrary;
