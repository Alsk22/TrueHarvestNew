
import React, { useState, useEffect, useMemo } from 'react';
import type { Page, DailyLog } from '../types';
import HomeIcon from './icons/HomeIcon';
import CheckIcon from './icons/CheckIcon';
import BibleIcon from './icons/BibleIcon';
import InspirationIcon from './icons/InspirationIcon';
import MusicIcon from './icons/MusicIcon';
import GraphIcon from './icons/GraphIcon';
import ChevronDownIcon from './icons/ChevronDownIcon';

interface IntrospectionPageProps {
    setCurrentPage: (page: Page) => void;
}

const STORAGE_KEY = 'trueHarvestDailyLogs';

const IntrospectionPage: React.FC<IntrospectionPageProps> = ({ setCurrentPage }) => {
    // Current date for default selection and "Today" calculations
    const todayStr = useMemo(() => new Date().toISOString().split('T')[0], []);
    
    // State for all logs
    const [logs, setLogs] = useState<Record<string, DailyLog>>({});
    
    // State for Calendar Navigation (Year/Month view)
    const [viewDate, setViewDate] = useState(new Date());
    
    // State for the currently selected date to edit/view
    const [selectedDate, setSelectedDate] = useState<string>(todayStr);

    // Load data
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setLogs(JSON.parse(stored));
        }
    }, []);

    // Derived state: The log for the selected date (or default empty one)
    const currentLog: DailyLog = logs[selectedDate] || {
        date: selectedDate,
        readBible: false,
        readVerse: false,
        prayed: false,
        worship: false,
        peaceScore: 5 // Default middle value
    };

    const saveLog = (updatedLog: DailyLog) => {
        const updatedLogs = { ...logs, [updatedLog.date]: updatedLog };
        setLogs(updatedLogs);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLogs));
    };

    const toggleHabit = (habit: keyof Omit<DailyLog, 'date' | 'peaceScore'>) => {
        saveLog({ ...currentLog, [habit]: !currentLog[habit] });
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        saveLog({ ...currentLog, peaceScore: parseInt(e.target.value) });
    };

    // --- Calendar Logic ---
    const getCalendarDays = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        
        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        // 0 = Sunday, 1 = Monday, etc.
        const startDayOfWeek = firstDayOfMonth.getDay(); 
        
        const days = [];
        
        // Padding days from previous month
        for (let i = 0; i < startDayOfWeek; i++) {
            days.push(null);
        }
        
        // Actual days
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            // Handle timezone offset issue by manually formatting
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            days.push(dateStr);
        }
        
        return days;
    };

    const changeMonth = (offset: number) => {
        const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1);
        setViewDate(newDate);
    };

    // --- Visualization Data (Last 30 Days Trend) ---
    const trendData = useMemo(() => {
        const data = [];
        // Show trend ending at today, looking back 30 days
        const endDate = new Date(); 
        for (let i = 29; i >= 0; i--) {
            const d = new Date(endDate);
            d.setDate(d.getDate() - i);
            const dStr = d.toISOString().split('T')[0];
            data.push({
                date: dStr,
                score: logs[dStr]?.peaceScore || null
            });
        }
        return data;
    }, [logs]);

    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-4 md:p-10 max-w-6xl mx-auto relative overflow-hidden animate-fadeInUp min-h-[85vh]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 text-amber-400">
                        <GraphIcon className="h-8 w-8" />
                    </div>
                    <div className="ml-4">
                        <h1 className="text-3xl font-serif font-bold text-white">Introspect</h1>
                        <p className="text-slate-400 text-sm">Track your spiritual journey & consistency.</p>
                    </div>
                </div>
                <button
                    onClick={() => setCurrentPage('home')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-full text-slate-300 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
                >
                    <HomeIcon className="h-5 w-5" />
                    <span className="font-semibold text-sm hidden md:block">Home</span>
                </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Left Column: Calendar & Trend (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                    
                    {/* Calendar Widget */}
                    <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-white font-serif">
                                {viewDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                            </h2>
                            <div className="flex space-x-2">
                                <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 transition-colors">
                                    <ChevronDownIcon className="h-5 w-5 rotate-90" />
                                </button>
                                <button onClick={() => setViewDate(new Date())} className="text-xs font-bold text-amber-500 uppercase tracking-wider px-2 hover:text-amber-400">
                                    Today
                                </button>
                                <button onClick={() => changeMonth(1)} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 transition-colors">
                                    <ChevronDownIcon className="h-5 w-5 -rotate-90" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-2 mb-2">
                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                <div key={day} className="text-center text-xs font-bold text-slate-500 uppercase">{day}</div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-2">
                            {getCalendarDays().map((dateStr, index) => {
                                if (!dateStr) return <div key={`empty-${index}`} className="aspect-square"></div>;
                                
                                const dayNum = parseInt(dateStr.split('-')[2]);
                                const isSelected = dateStr === selectedDate;
                                const isToday = dateStr === todayStr;
                                const log = logs[dateStr];
                                
                                return (
                                    <button
                                        key={dateStr}
                                        onClick={() => setSelectedDate(dateStr)}
                                        className={`
                                            relative aspect-square rounded-xl flex flex-col items-center justify-center transition-all duration-200 border
                                            ${isSelected 
                                                ? 'bg-amber-500/20 border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.2)]' 
                                                : 'bg-slate-900/30 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600'
                                            }
                                        `}
                                    >
                                        <span className={`text-sm font-medium ${isToday ? 'text-amber-400 font-bold' : isSelected ? 'text-white' : 'text-slate-400'}`}>
                                            {dayNum}
                                        </span>
                                        
                                        {/* Activity Dots */}
                                        {log && (
                                            <div className="absolute bottom-2 flex space-x-1">
                                                {log.readVerse && <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>}
                                                {log.readBible && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>}
                                                {log.prayed && <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>}
                                                {log.worship && <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>}
                                            </div>
                                        )}
                                        {isToday && !log && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-amber-500/50"></div>}
                                    </button>
                                );
                            })}
                        </div>
                        
                        <div className="flex justify-center gap-4 mt-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                            <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>Verse</div>
                            <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-emerald-400 mr-2"></div>Bible</div>
                            <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>Prayer</div>
                            <div className="flex items-center"><div className="w-2 h-2 rounded-full bg-pink-400 mr-2"></div>Worship</div>
                        </div>
                    </div>

                    {/* Trend Line Chart */}
                    <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 h-56 flex flex-col">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Peace Trend (Last 30 Days)</h3>
                        <div className="flex-grow relative px-2">
                            {/* Chart Area */}
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                {/* Grid Lines */}
                                <line x1="0" y1="0" x2="100" y2="0" stroke="#334155" strokeWidth="0.5" strokeDasharray="2" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="#334155" strokeWidth="0.5" strokeDasharray="2" />
                                <line x1="0" y1="100" x2="100" y2="100" stroke="#334155" strokeWidth="0.5" strokeDasharray="2" />

                                {/* Trend Line */}
                                <polyline 
                                    fill="none" 
                                    stroke="#fbbf24" 
                                    strokeWidth="1.5" 
                                    points={trendData.map((d, i) => {
                                        const x = (i / (trendData.length - 1)) * 100;
                                        // Score 1-10 mapped to 100-0. Default 0 (bottom) if no score.
                                        const score = d.score || 0;
                                        // Avoid drawing line to 0 if no data? Let's just draw to 0 for missing days to show gaps, or skip?
                                        // Better: Interpolate or break. For simplicity, 0 is fine, shows "low/no" peace.
                                        const y = d.score ? 100 - (d.score * 10) : 100; 
                                        return `${x},${y}`;
                                    }).join(' ')}
                                    className="drop-shadow-lg"
                                    strokeLinejoin="round"
                                />
                                
                                {/* Data Points (Only for logged days) */}
                                {trendData.map((d, i) => {
                                    if(!d.score) return null;
                                    const x = (i / (trendData.length - 1)) * 100;
                                    const y = 100 - (d.score * 10);
                                    return (
                                        <circle key={i} cx={x} cy={y} r="1.5" fill="#fff" />
                                    );
                                })}
                            </svg>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                            <span>30 Days Ago</span>
                            <span>Today</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Logging Form (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-700/50 sticky top-24">
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700/50">
                            <div>
                                <h2 className="text-2xl font-bold text-white font-serif">
                                    {selectedDate === todayStr ? "Today's Log" : "Daily Log"}
                                </h2>
                                <p className="text-slate-400 text-sm mt-1">
                                    {new Date(selectedDate).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                                </p>
                            </div>
                            {selectedDate === todayStr && <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => toggleHabit('readVerse')}
                                className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center space-y-2 relative overflow-hidden group ${currentLog.readVerse ? 'bg-blue-500/20 text-blue-300 border-blue-500/50' : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500'}`}
                            >
                                <div className={`absolute inset-0 bg-blue-500/10 transition-transform origin-bottom duration-300 ${currentLog.readVerse ? 'scale-y-100' : 'scale-y-0'}`}></div>
                                <InspirationIcon className="h-6 w-6 relative z-10" />
                                <span className="font-bold text-sm relative z-10">Verse of Day</span>
                                {currentLog.readVerse && <div className="absolute top-2 right-2 text-blue-400 z-10"><CheckIcon className="h-4 w-4"/></div>}
                            </button>

                            <button 
                                onClick={() => toggleHabit('readBible')}
                                className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center space-y-2 relative overflow-hidden group ${currentLog.readBible ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50' : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500'}`}
                            >
                                <div className={`absolute inset-0 bg-emerald-500/10 transition-transform origin-bottom duration-300 ${currentLog.readBible ? 'scale-y-100' : 'scale-y-0'}`}></div>
                                <BibleIcon className="h-6 w-6 relative z-10" />
                                <span className="font-bold text-sm relative z-10">Read Bible</span>
                                {currentLog.readBible && <div className="absolute top-2 right-2 text-emerald-400 z-10"><CheckIcon className="h-4 w-4"/></div>}
                            </button>

                            <button 
                                onClick={() => toggleHabit('worship')}
                                className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center space-y-2 relative overflow-hidden group ${currentLog.worship ? 'bg-pink-500/20 text-pink-300 border-pink-500/50' : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500'}`}
                            >
                                <div className={`absolute inset-0 bg-pink-500/10 transition-transform origin-bottom duration-300 ${currentLog.worship ? 'scale-y-100' : 'scale-y-0'}`}></div>
                                <MusicIcon className="h-6 w-6 relative z-10" />
                                <span className="font-bold text-sm relative z-10">Worship</span>
                                {currentLog.worship && <div className="absolute top-2 right-2 text-pink-400 z-10"><CheckIcon className="h-4 w-4"/></div>}
                            </button>

                            <button 
                                onClick={() => toggleHabit('prayed')}
                                className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center space-y-2 relative overflow-hidden group ${currentLog.prayed ? 'bg-purple-500/20 text-purple-300 border-purple-500/50' : 'bg-slate-900/50 text-slate-400 border-slate-700 hover:border-slate-500'}`}
                            >
                                <div className={`absolute inset-0 bg-purple-500/10 transition-transform origin-bottom duration-300 ${currentLog.prayed ? 'scale-y-100' : 'scale-y-0'}`}></div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-bold text-sm relative z-10">Prayer</span>
                                {currentLog.prayed && <div className="absolute top-2 right-2 text-purple-400 z-10"><CheckIcon className="h-4 w-4"/></div>}
                            </button>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <div className="flex justify-between mb-4">
                                <label className="text-sm font-bold text-slate-300 uppercase tracking-widest">Spiritual Peace</label>
                                <span className="text-lg font-bold text-amber-400 font-serif">{currentLog.peaceScore}/10</span>
                            </div>
                            <div className="relative h-6 flex items-center">
                                {/* Track */}
                                <div className="absolute w-full h-2 bg-slate-700 rounded-lg"></div>
                                {/* Progress */}
                                <div className="absolute h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg" style={{ width: `${currentLog.peaceScore * 10}%` }}></div>
                                {/* Slider Input */}
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="10" 
                                    value={currentLog.peaceScore} 
                                    onChange={handleSliderChange}
                                    className="absolute w-full h-2 opacity-0 cursor-pointer z-10"
                                />
                                {/* Thumb (Visual Only) */}
                                <div 
                                    className="absolute w-6 h-6 bg-white border-2 border-slate-900 rounded-full shadow-lg pointer-events-none transition-all duration-75"
                                    style={{ left: `calc(${currentLog.peaceScore * 10}% - 12px)` }}
                                ></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-500 mt-3 font-bold uppercase">
                                <span>Troubled</span>
                                <span>Neutral</span>
                                <span>At Peace</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntrospectionPage;
