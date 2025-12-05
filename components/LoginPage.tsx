
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

  const REQUIRED_DOMAIN = '@trueharvest.world';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Basic Validation
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    
    // Domain Check
    if (!email.toLowerCase().endsWith(REQUIRED_DOMAIN)) {
        setError(`Access restricted. Email must end with ${REQUIRED_DOMAIN}`);
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
            notificationsEnabled: true
        };

        const result = onRegister(email, password, rememberMe, profileData);
        if (!result.success) {
            setError(result.message);
        } else {
            setSuccess(result.message);
        }
    }
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
        <div className="mb-8 flex flex-col items-center">
            <Logo svgClassName="w-16 h-16 text-amber-400 mb-4" showText={false} />
            <h1 className="text-3xl font-serif font-bold text-white tracking-wide">
                Sanctuary Login
            </h1>
            <p className="text-slate-400 text-sm mt-2">Access requires a valid community ID.</p>
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
                Create Account
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
              Email Address ({REQUIRED_DOMAIN})
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
                className={`w-full px-4 py-3 bg-slate-950/50 border text-white rounded-xl focus:ring-2 focus:outline-none transition-all placeholder:text-slate-600 ${
                    email && !email.toLowerCase().endsWith(REQUIRED_DOMAIN) 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                    : 'border-slate-700 focus:ring-amber-500/50 focus:border-amber-500'
                }`}
                placeholder={`name${REQUIRED_DOMAIN}`}
                />
            </div>
            {activeTab === 'signup' && (
                 <p className="text-[10px] text-slate-500 mt-1 text-right">Must end in {REQUIRED_DOMAIN}</p>
            )}
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

          <div className="pt-4 border-t border-slate-800">
                <p className="text-center text-xs text-slate-500 mb-3">Limited access for visitors</p>
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
