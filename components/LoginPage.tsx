import React, { useState } from 'react';
import Logo from './Logo';

interface LoginPageProps {
  onLogin: (email: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid Gmail address.');
      return;
    }
    setError('');
    onLogin(email);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl p-8 text-center">
        <div className="mb-8">
            <Logo />
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-white mb-2">Welcome</h1>
        <p className="text-slate-300 mb-8">Sign in or create an account with your email to continue.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-600 text-white rounded-md shadow-sm focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition placeholder:text-slate-400"
              placeholder="Enter your email address"
            />
             {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-amber-500 transition-colors"
            >
              Sign In / Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;