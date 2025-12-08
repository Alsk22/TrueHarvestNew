
import React, { useState } from 'react';
import Logo from './Logo';
import type { UserProfile } from '../types';

interface LoginPageProps {
  onLogin: (email: string, password?: string, rememberMe?: boolean) => { success: boolean; message: string };
  onRegister: (email: string, password?: string, rememberMe?: boolean, profile?: Partial<UserProfile>) => { success: boolean; message: string };
  onGuestAccess: () => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onRegister, onGuestAccess, onBack }) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic Validation
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    
    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setError('Please enter a valid email address (e.g., name@gmail.com).');
        return;
    }

    if (!password) {
        setError('Please enter a password.');
        return;
    }

    if (activeTab === 'signin') {
        const result = onLogin(email, password, rememberMe);
        if (!result.success) {
            setError(result.message);
        }
    } else {
        // Registration Logic
        if (!fullName) {
            setError('Please enter your full name for your profile.');
            return;
        }

        const profileData = {
            displayName: fullName,
            bio: bio,
            notificationsEnabled: true,
            avatar: 'bg-slate-700' // Default avatar color
        };

        const result = onRegister(email, password, rememberMe, profileData);
        if (!result.success) {
            setError(result.message);
        } else {
            setSuccess(result.message);
        }
    }
  };

  const handleGoogleSimulation = () => {
      // In a real app, this would trigger Firebase Auth
      // Here we simulate a user signing up/in with a random gmail
      const mockGoogleUser = "believer" + Math.floor(Math.random() * 1000) + "@gmail.com";
      const mockPass = "google-oauth-token";
      
      // Try to login first
      const loginRes = onLogin(mockGoogleUser, mockPass, true);
      if (loginRes.success) return;

      // If not found, register them
      const profile = {
          displayName: "Google User",
          bio: "Joined via Google",
          notificationsEnabled: true,
          avatar: 'bg-blue-500'
      };
      onRegister(mockGoogleUser, mockPass, true, profile);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-950 relative overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

       {/* Back Button */}
       <button 
          onClick={onBack}
          className="absolute top-8 left-8 flex items-center space-x-2 text-slate-400 hover:text-white transition-colors z-20 group"
       >
          <div className="p-2 rounded-full bg-slate-800/50 group-hover:bg-amber-500 group-hover:text-slate-900 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <span className="text-sm font-bold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">Back</span>
       </button>

      <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl p-8 md:p-10 relative z-10 animate-fadeInUp">
        <div className="mb-8 flex flex-col items-center text-center">
            <Logo svgClassName="w-16 h-16 text-amber-400 mb-4" showText={false} />
            <h1 className="text-3xl font-serif font-bold text-white tracking-wide">
                Welcome Home
            </h1>
            <p className="text-slate-400 mt-2">Join the True Harvest community.</p>
        </div>

        {/* Custom Tabs */}
        <div className="flex bg-slate-950/50 p-1 rounded-xl mb-8 relative">
            <button
                onClick={() => { setActiveTab('signin'); setError(''); setSuccess(''); }}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === 'signin' 
                    ? 'bg-slate-800 text-amber-400 shadow-lg' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
            >
                Sign In
            </button>
            <button
                onClick={() => { setActiveTab('signup'); setError(''); setSuccess(''); }}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                    activeTab === 'signup' 
                    ? 'bg-slate-800 text-amber-400 shadow-lg' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
            >
                Sign Up
            </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Sign Up Fields: Name & Bio */}
          {activeTab === 'signup' && (
              <>
                <div className="animate-fadeIn">
                    <label htmlFor="fullname" className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Display Name
                    </label>
                    <input
                    id="fullname"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:outline-none transition-all placeholder:text-slate-600"
                    placeholder="e.g. John Doe"
                    />
                </div>
                <div className="animate-fadeIn">
                    <label htmlFor="bio" className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Bio (Optional)
                    </label>
                    <input
                    id="bio"
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:outline-none transition-all placeholder:text-slate-600"
                    placeholder="Spiritual goals or favorite verse..."
                    />
                </div>
              </>
          )}

          <div>
            <label htmlFor="email" className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:outline-none transition-all placeholder:text-slate-600"
                placeholder="name@gmail.com"
                />
            </div>
          </div>
          
           <div>
            <label htmlFor="password" className="block text-left text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={activeTab === 'signin' ? "current-password" : "new-password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 focus:outline-none transition-all placeholder:text-slate-600"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-amber-500 focus:ring-amber-400 border-slate-600 rounded bg-slate-900/50 cursor-pointer accent-amber-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-300 cursor-pointer select-none">
                  Remember me
              </label>
          </div>

          {error && <div className="text-sm text-red-200 bg-red-900/30 p-3 rounded-lg border border-red-800/50 flex items-center animate-pulse"><span className="mr-2">⚠️</span>{error}</div>}
          {success && <div className="text-sm text-green-200 bg-green-900/30 p-3 rounded-lg border border-green-800/50 flex items-center"><span className="mr-2">✅</span>{success}</div>}

          <button
            type="submit"
            className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {activeTab === 'signin' ? 'Sign In' : 'Join Community'}
          </button>

          <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-slate-900/40 px-2 text-slate-500 font-bold backdrop-blur-sm">Or continue with</span>
              </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleSimulation}
            className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-slate-900 font-bold rounded-xl shadow transition-all flex items-center justify-center gap-3"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          <div className="pt-4 mt-2">
                <p className="text-center text-xs text-slate-500 mb-3">Just browsing?</p>
                <button
                    type="button"
                    onClick={onGuestAccess}
                    className="block w-full text-center text-sm font-bold text-slate-400 hover:text-amber-400 transition-colors py-2 rounded-lg hover:bg-slate-800/50 border border-transparent hover:border-slate-700"
                >
                    Continue as Guest
                </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
