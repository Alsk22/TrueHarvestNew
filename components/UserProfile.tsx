
import React, { useState, useEffect } from 'react';
import type { User, Page } from '../types';
import UserIcon from './icons/UserIcon';
import HomeIcon from './icons/HomeIcon';
import CheckIcon from './icons/CheckIcon';

interface UserProfileProps {
    user: User;
    onUpdateUser: (updatedUser: User) => void;
    setCurrentPage: (page: Page) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onUpdateUser, setCurrentPage }) => {
    const [displayName, setDisplayName] = useState(user.profile?.displayName || '');
    const [bio, setBio] = useState(user.profile?.bio || '');
    const [notificationsEnabled, setNotificationsEnabled] = useState(user.profile?.notificationsEnabled || false);
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        const updatedProfile = {
            ...user.profile,
            displayName,
            bio,
            notificationsEnabled,
            streak: user.profile?.streak || 0,
            versesRead: user.profile?.versesRead || 0
        };

        onUpdateUser({ ...user, profile: updatedProfile });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);

        if (notificationsEnabled) {
             Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification("True Harvest", {
                        body: "Daily verse notifications are now enabled! We will remind you to read the Word."
                    });
                }
            });
        }
    };

    return (
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto relative overflow-hidden animate-fadeInUp">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>

            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <div className="p-3 bg-slate-800 rounded-2xl border border-slate-700 text-amber-400">
                        <UserIcon className="h-8 w-8" />
                    </div>
                    <div className="ml-4">
                        <h1 className="text-3xl font-serif font-bold text-white">Your Profile</h1>
                        <p className="text-slate-400 text-sm">Manage your account and preferences.</p>
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

            <div className="grid md:grid-cols-3 gap-8">
                {/* Stats Column */}
                <div className="md:col-span-1 space-y-4">
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center">
                        <div className="text-4xl font-bold text-amber-400 font-serif mb-1">{user.profile?.streak || 0}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Day Streak</div>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center">
                        <div className="text-4xl font-bold text-blue-400 font-serif mb-1">{user.profile?.versesRead || 0}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Verses Read</div>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 text-center">
                        <div className="text-lg font-bold text-slate-300 mb-1">{user.role.toUpperCase()}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Account Role</div>
                    </div>
                </div>

                {/* Edit Form */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Display Name</label>
                        <input
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition placeholder:text-slate-500"
                            placeholder="Enter your name"
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                        <input
                            type="text"
                            value={user.email}
                            disabled
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 text-slate-400 rounded-xl cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Bio / Spiritual Goals</label>
                        <textarea
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition placeholder:text-slate-500 resize-none"
                            placeholder="Share a bit about your journey..."
                        />
                    </div>
                    
                    <div className="flex items-center justify-between bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
                        <div>
                            <h3 className="font-bold text-white">Daily Verse Notifications</h3>
                            <p className="text-sm text-slate-400">Get inspired with a new verse every morning.</p>
                        </div>
                         <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="sr-only peer"
                                checked={notificationsEnabled}
                                onChange={(e) => setNotificationsEnabled(e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                        </label>
                    </div>

                    <div className="pt-4 flex items-center space-x-4">
                        <button
                            onClick={handleSave}
                            className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                        >
                            Save Changes
                        </button>
                        {isSaved && (
                            <span className="flex items-center text-green-400 animate-fadeIn">
                                <CheckIcon className="h-5 w-5 mr-2" /> Saved successfully
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
