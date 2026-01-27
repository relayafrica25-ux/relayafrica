import React, { useState } from 'react';
import { Linkedin, Mail, Lock, Building2, Code, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface AuthProps {
  mode: 'login' | 'signup';
  onSwitchMode: () => void;
  onNavigateToEngineers: () => void;
  onNavigateToApply: () => void;
  onAuthSuccess?: (role: UserRole) => void;
  defaultRole?: UserRole;
  hideRoleToggle?: boolean;
}

export type UserRole = 'company' | 'engineer';

const Auth: React.FC<AuthProps> = ({ 
  mode, 
  onSwitchMode, 
  onNavigateToEngineers, 
  onNavigateToApply,
  onAuthSuccess,
  defaultRole = 'company',
  hideRoleToggle = false
}) => {
  const isLogin = mode === 'login';
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<UserRole>(defaultRole);
  
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Mock Authentication Logic
    setTimeout(() => {
      setLoading(false);
      
      // Basic validation mock
      if (email.length < 5 || password.length < 6) {
        setError("Invalid credentials. Password must be at least 6 chars.");
        return;
      }

      // Store pseudo-session
      localStorage.setItem('relay_user', JSON.stringify({ email, role }));

      // Success Callback
      if (onAuthSuccess) {
        onAuthSuccess(role);
      } else {
        if (role === 'engineer') onNavigateToApply();
        else onNavigateToEngineers();
      }
    }, 1500);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    
    // Mock Google Sign In
    setTimeout(() => {
        setLoading(false);
        localStorage.setItem('relay_user', JSON.stringify({ email: 'google-user@example.com', role }));
        
        if (onAuthSuccess) {
            onAuthSuccess(role);
        } else {
            if (role === 'engineer') onNavigateToApply();
            else onNavigateToEngineers();
        }
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none animate-pulse-slow transition-colors duration-1000 ${role === 'company' ? 'bg-relay-accent/20' : 'bg-relay-purple/20'}`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 ${role === 'company' ? 'bg-blue-500/10' : 'bg-relay-accent/10'}`}></div>

      <div className="w-full max-w-md relative z-10 animate-fade-in-up">
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* Role Switcher */}
          {!hideRoleToggle && (
            <div className="flex bg-white/5 p-1 rounded-xl mb-8 border border-white/10 relative">
               <button
                  onClick={() => setRole('company')}
                  type="button"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                      role === 'company' 
                      ? 'bg-relay-accent text-black shadow-lg shadow-relay-accent/20' 
                      : 'text-gray-400 hover:text-white'
                  }`}
               >
                  <Building2 className="w-4 h-4" />
                  Employer
               </button>
               <button
                  onClick={() => setRole('engineer')}
                  type="button"
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${
                      role === 'engineer' 
                      ? 'bg-relay-purple text-white shadow-lg shadow-relay-purple/20' 
                      : 'text-gray-400 hover:text-white'
                  }`}
               >
                  <Code className="w-4 h-4" />
                  Talent
               </button>
            </div>
          )}

          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold mb-2">
              {isLogin 
                ? 'Welcome Back' 
                : (role === 'engineer' ? 'Create a Talent Account' : 'Create an Employer Account')
              }
            </h2>
            <p className="text-gray-400">
              {role === 'company' 
                ? (isLogin ? 'Log in to manage your hiring pipeline.' : 'Enter your details to get started.')
                : (isLogin ? 'Log in to your talent profile.' : 'Enter your details to get started.')
              }
              {!isLogin && (
                <span className="block mt-1 text-sm text-gray-500">
                  Are you {role === 'company' ? 'Talent' : 'Employer'}?{' '}
                  <button type="button" onClick={() => setRole(role === 'company' ? 'engineer' : 'company')} className="text-white hover:underline font-medium">
                    {role === 'company' ? 'Apply here' : 'Click here'}
                  </button>
                </span>
              )}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1">
                {!isLogin && <label className="text-xs font-medium text-gray-400 ml-1">Email</label>}
                <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-relay-accent transition-colors" />
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={isLogin ? "Work Email" : "test@email.com"}
                    className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-relay-accent focus:ring-1 focus:ring-relay-accent transition-all"
                />
                </div>
            </div>

            <div className="space-y-1">
                {!isLogin && <label className="text-xs font-medium text-gray-400 ml-1">Password</label>}
                <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-relay-accent transition-colors" />
                <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Password"
                    className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-relay-accent focus:ring-1 focus:ring-relay-accent transition-all"
                />
                </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-200">{error}</p>
              </div>
            )}

            {isLogin && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Forgot Password?</a>
              </div>
            )}

            <button 
              type="submit"
              disabled={loading}
              className={`w-full text-white font-bold py-3.5 rounded-xl mt-2 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all transform active:scale-95
                ${role === 'company' ? 'bg-relay-accent text-black hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]' : 'bg-relay-purple hover:shadow-[0_0_20px_rgba(112,0,255,0.3)]'}
              `}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isLogin ? 'Log In' : 'Sign Up'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="relative flex items-center gap-4 my-8">
            <div className="h-px bg-white/10 flex-grow"></div>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Or continue with</span>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="space-y-3">
             {/* Google Button */}
            <button 
                onClick={handleGoogleSignIn}
                type="button"
                className="w-full bg-white hover:bg-gray-100 text-gray-900 font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 shadow-lg"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335" />
                </svg>
                <span>Google</span>
            </button>

            {/* LinkedIn Button */}
            <button type="button" className="w-full bg-[#0077b5] hover:bg-[#006396] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 shadow-lg shadow-blue-900/20">
                <Linkedin className="w-5 h-5 fill-current" />
                <span>LinkedIn</span>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button 
                type="button"
                onClick={onSwitchMode}
                className={`font-bold hover:underline ml-1 ${role === 'company' ? 'text-relay-accent' : 'text-relay-purple'}`}
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Auth;