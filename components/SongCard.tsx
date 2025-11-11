import React, { useState } from 'react';
import type { Song } from '../types';
import YoutubeIcon from './icons/YoutubeIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import ShareIcon from './icons/ShareIcon';
import HeartIcon from './icons/HeartIcon';
import SongSharePopover from './SongSharePopover';
import CopyIcon from './icons/CopyIcon';

interface SongCardProps {
  song: Song;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [showSharePopover, setShowSharePopover] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const handleShareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSharePopover(prev => !prev);
  }
  
  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const copyText = `Now playing: "${song.title}" by ${song.artist}.\nListen here: ${song.youtubeUrl}`;
    navigator.clipboard.writeText(copyText).then(() => {
        alert('Song info copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy song info: ', err);
        alert('Could not copy song info.');
    });
  };

  const handleCopyLyrics = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(song.lyrics)
      .then(() => {
        alert('Lyrics copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy lyrics:', err);
        alert('Failed to copy lyrics.');
      });
  };

  return (
    <div 
        className="relative group border border-slate-700 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:border-amber-400/50 overflow-hidden"
    >
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${song.imageUrl})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/80 to-slate-800/40" />
      
      {/* Content Wrapper */}
      <div className="relative">
        {/* Collapsed View */}
        <div 
          className="p-5 flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex-grow">
            <h3 className="text-xl font-bold font-serif text-white">{song.title}</h3>
            <p className="text-md text-slate-300">{song.artist}</p>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-2 ml-4">
              <a href={song.youtubeUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 text-red-500 rounded-full hover:bg-slate-700 transition-colors" title="Watch on YouTube"><YoutubeIcon /></a>
              <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 text-green-500 rounded-full hover:bg-slate-700 transition-colors" title="Listen on Spotify"><SpotifyIcon /></a>
              <button onClick={handleCopy} className="flex items-center space-x-2 px-3 py-2 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-colors" title="Copy Song Info">
                  <CopyIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Copy</span>
              </button>
              <div className="relative">
                  <button onClick={handleShareClick} className="p-2 text-slate-400 rounded-full hover:bg-slate-700 hover:text-white transition-colors" title="Share Song">
                      <ShareIcon className="h-6 w-6" />
                  </button>
                  {showSharePopover && <SongSharePopover song={song} onClose={() => setShowSharePopover(false)} />}
              </div>
              <button onClick={toggleFavorite} className={`p-2 rounded-full hover:bg-slate-700 transition-colors ${isFavorited ? 'text-pink-500' : 'text-slate-400'}`} title="Favorite">
                  <HeartIcon filled={isFavorited} className="h-6 w-6" />
              </button>
          </div>
        </div>
        
        {/* Expanded View */}
        {isExpanded && (
          <div className="p-5 border-t border-slate-700/50 animate-fadeInUp space-y-6 bg-slate-900/80 backdrop-blur-sm">
            
            {/* Summary & Theme Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-bold text-lg text-amber-300 mb-2 font-serif">Summary</h4>
                <blockquote className="border-l-4 border-slate-600 pl-4 italic text-slate-300 text-sm">
                  {song.summary}
                </blockquote>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="font-bold text-lg text-amber-300 mb-2 font-serif">Theme</h4>
                <p className="text-slate-300 text-sm">{song.theme}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h4 className="font-bold text-lg text-amber-300 mb-2 font-serif">Details</h4>
                <p><span className="font-semibold text-slate-400">Album:</span> {song.album}</p>
                <p><span className="font-semibold text-slate-400">Year:</span> {song.year}</p>
                <p><span className="font-semibold text-slate-400">Lyricist:</span> {song.lyricist}</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-300 mb-2 font-serif">Background</h4>
                <p className="text-sm leading-relaxed">{song.background}</p>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-lg text-amber-300 font-serif">Lyrics</h4>
                <button
                  onClick={handleCopyLyrics}
                  className="flex items-center space-x-2 px-3 py-1 text-sm text-slate-400 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
                  title="Copy Lyrics"
                >
                  <CopyIcon className="h-4 w-4" />
                  <span className="font-semibold">Copy</span>
                </button>
              </div>
              <pre className="text-slate-200 text-sm whitespace-pre-wrap font-sans leading-relaxed bg-slate-900/50 p-4 rounded-lg max-h-60 overflow-y-auto">{song.lyrics}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongCard;