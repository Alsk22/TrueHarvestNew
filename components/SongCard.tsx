import React, { useState } from 'react';
import type { Song } from '../types';
import YoutubeIcon from './icons/YoutubeIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import ShareIcon from './icons/ShareIcon';
import HeartIcon from './icons/HeartIcon';
import SongSharePopover from './SongSharePopover';
import CopyIcon from './icons/CopyIcon';
import DownloadIcon from './icons/DownloadIcon';

interface SongCardProps {
  song: Song;
  isLiked: boolean;
  onToggleLike: () => void;
}

const SongCard: React.FC<SongCardProps> = ({ song, isLiked, onToggleLike }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSharePopover, setShowSharePopover] = useState(false);

  const handleToggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleLike();
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

  const handleDownloadLyrics = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Format the content for the text file
    const fileContent = `Title: ${song.title}\nArtist: ${song.artist}\n\n---\n\n${song.lyrics}`;
    
    // Create a Blob from the content
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    
    // Sanitize the title to create a valid filename
    const fileName = `${song.title} - Lyrics.txt`.replace(/[/\\?%*:|"<>]/g, '-');
    link.download = fileName;
    
    // Append to the DOM, click, and then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
  };

  return (
    <div 
        className="relative group border border-slate-700/50 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:border-amber-500/30 overflow-hidden bg-slate-900/40"
    >
        {/* Background Image with Parallax-like effect */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-30 group-hover:opacity-20"
            style={{ backgroundImage: `url(${song.imageUrl})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60 transition-opacity duration-300" />
      
      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Collapsed View */}
        <div 
          className="p-5 md:p-6 flex items-center justify-between cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex-grow pr-4">
            <h3 className="text-2xl font-bold font-serif text-slate-100 group-hover:text-amber-200 transition-colors tracking-tight">{song.title}</h3>
            <p className="text-sm font-medium text-amber-500/80 uppercase tracking-widest mt-1">{song.artist}</p>
          </div>
          
          <div className="flex-shrink-0 flex items-center space-x-1 md:space-x-2">
              <a href={song.youtubeUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-slate-800/80 rounded-full transition-all" title="Watch on YouTube"><YoutubeIcon /></a>
              <a href={song.spotifyUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 text-slate-400 hover:text-green-500 hover:bg-slate-800/80 rounded-full transition-all" title="Listen on Spotify"><SpotifyIcon /></a>
              
              <div className="relative">
                  <button onClick={handleShareClick} className="p-2.5 text-slate-400 rounded-full hover:bg-slate-800/80 hover:text-blue-400 transition-colors" title="Share Song">
                      <ShareIcon className="h-6 w-6" />
                  </button>
                  {showSharePopover && <SongSharePopover song={song} onClose={() => setShowSharePopover(false)} />}
              </div>
              
              <button onClick={handleToggleLike} className={`p-2.5 rounded-full hover:bg-slate-800/80 transition-colors ${isLiked ? 'text-pink-500' : 'text-slate-400 hover:text-pink-400'}`} title="Like">
                  <HeartIcon filled={isLiked} className="h-6 w-6" />
              </button>
          </div>
        </div>
        
        {/* Expanded View */}
        {isExpanded && (
          <div className="border-t border-slate-800/50 animate-fadeInUp">
            <div className="bg-slate-950/40 backdrop-blur-xl p-6 md:p-8 space-y-8">
                
                {/* Summary & Theme Section */}
                <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700/50 shadow-inner">
                    <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">Summary</h4>
                    <blockquote className="border-l-2 border-slate-600 pl-4 italic text-slate-300 text-sm leading-relaxed">
                    "{song.summary}"
                    </blockquote>
                </div>
                <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-700/50 shadow-inner">
                    <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">Theme</h4>
                    <p className="text-slate-300 text-sm font-medium">{song.theme}</p>
                </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 text-slate-300">
                <div className="space-y-3">
                    <h4 className="text-lg font-serif font-bold text-white border-b border-slate-800 pb-2 mb-4">Metadata</h4>
                    <div className="flex justify-between border-b border-slate-800/50 pb-2">
                        <span className="text-slate-500 text-sm">Album</span>
                        <span className="text-slate-200 font-medium">{song.album}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/50 pb-2">
                        <span className="text-slate-500 text-sm">Year</span>
                        <span className="text-slate-200 font-medium">{song.year}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/50 pb-2">
                        <span className="text-slate-500 text-sm">Lyricist</span>
                        <span className="text-slate-200 font-medium">{song.lyricist}</span>
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-serif font-bold text-white border-b border-slate-800 pb-2 mb-4">Background Story</h4>
                    <p className="text-sm leading-loose text-slate-400">{song.background}</p>
                </div>
                </div>
                
                <div>
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold text-white font-serif">Lyrics</h4>
                    <div className="flex items-center space-x-2">
                    <button
                        onClick={handleCopyLyrics}
                        className="flex items-center space-x-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-800/50 rounded-lg hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
                        title="Copy Lyrics"
                    >
                        <CopyIcon className="h-4 w-4" />
                        <span>Copy</span>
                    </button>
                    <button
                        onClick={handleDownloadLyrics}
                        className="flex items-center space-x-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-800/50 rounded-lg hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
                        title="Download Lyrics as .txt"
                    >
                        <DownloadIcon className="h-4 w-4" />
                        <span>Download</span>
                    </button>
                    </div>
                </div>
                <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 shadow-inner max-h-80 overflow-y-auto custom-scrollbar">
                    <pre className="text-slate-300 text-sm whitespace-pre-wrap font-sans leading-relaxed text-center">{song.lyrics}</pre>
                </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongCard;