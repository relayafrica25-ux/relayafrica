
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn, UserPlus, Info } from 'lucide-react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 2.66663C8.63618 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63618 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663ZM10.6667 16C10.6667 13.0544 13.0545 10.6666 16 10.6666C18.9455 10.6666 21.3333 13.0544 21.3333 16C21.3333 18.9454 18.9455 21.3333 16 21.3333C13.0545 21.3333 10.6667 18.9454 10.6667 16ZM5.33332 16C5.33332 10.1089 10.1089 5.33329 16 5.33329C21.8911 5.33329 26.6667 10.1089 26.6667 16C26.6667 21.891 21.8911 26.6666 16 26.6666C10.1089 26.6666 5.33332 21.891 5.33332 16Z" fill="#00ff9d"/>
    <path d="M18 9.5L24 16L18 22.5" stroke="#00ff9d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 22.5L8 16L14 9.5" stroke="#00ff9d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAuthDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAuthNavigation = (view: View) => {
    setCurrentView(view);
    setIsAuthDropdownOpen(false);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a12]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-3"
            onClick={() => setCurrentView(View.HOME)}
          >
            <Logo />
            <span className="font-display font-bold text-xl tracking-wide">relay.africa</span>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button 
                onClick={() => setCurrentView(View.FOR_COMPANIES)}
                className={`text-sm font-medium transition-colors hover:text-relay-accent ${currentView === View.FOR_COMPANIES ? 'text-relay-accent' : 'text-gray-300'}`}
              >
                For Companies
              </button>
              <button 
                onClick={() => setCurrentView(View.FOR_TALENT)}
                className={`text-sm font-medium transition-colors hover:text-relay-accent ${currentView === View.FOR_TALENT ? 'text-relay-accent' : 'text-gray-300'}`}
              >
                For Talent
              </button>
              <button 
                onClick={() => setCurrentView(View.ENGINEERS)}
                className={`text-sm font-medium transition-colors hover:text-relay-accent ${currentView === View.ENGINEERS ? 'text-relay-accent' : 'text-gray-300'}`}
              >
                Browse Engineers
              </button>
              <button 
                onClick={() => setCurrentView(View.VETTING)}
                className={`text-sm font-medium transition-colors hover:text-relay-accent ${currentView === View.VETTING ? 'text-relay-accent' : 'text-gray-300'}`}
              >
                Vetting
              </button>
              <button 
                onClick={() => setCurrentView(View.PRICING)}
                className={`text-sm font-medium transition-colors hover:text-relay-accent ${currentView === View.PRICING ? 'text-relay-accent' : 'text-gray-300'}`}
              >
                Pricing
              </button>
              <button 
                onClick={() => setCurrentView(View.ABOUT)}
                className={`text-sm font-medium transition-colors hover:text-relay-accent ${currentView === View.ABOUT ? 'text-relay-accent' : 'text-gray-300'}`}
              >
                About
              </button>

              {/* Modern Auth Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsAuthDropdownOpen(!isAuthDropdownOpen)}
                  className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl transition-all border ${
                    isAuthDropdownOpen || currentView === View.LOGIN || currentView === View.SIGNUP
                      ? 'bg-relay-accent/10 border-relay-accent/30 text-relay-accent' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Account
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAuthDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isAuthDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 glass-card border border-white/10 rounded-2xl shadow-2xl py-2 overflow-hidden animate-fade-in-up">
                    <button 
                      onClick={() => handleAuthNavigation(View.LOGIN)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 hover:text-relay-accent hover:bg-white/5 transition-all text-left"
                    >
                      <LogIn className="w-4 h-4" />
                      Log In
                    </button>
                    <div className="h-px bg-white/5 mx-2"></div>
                    <button 
                      onClick={() => handleAuthNavigation(View.SIGNUP)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-300 hover:text-relay-accent hover:bg-white/5 transition-all text-left"
                    >
                      <UserPlus className="w-4 h-4" />
                      Sign Up
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => setCurrentView(View.ENGINEERS)}
                className="bg-relay-accent hover:bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(0,255,157,0.5)] active:scale-95"
              >
                Start Hiring
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a12] border-b border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => { setCurrentView(View.FOR_COMPANIES); setIsOpen(false); }}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 w-full text-left"
            >
              For Companies
            </button>
            <button
              onClick={() => { setCurrentView(View.FOR_TALENT); setIsOpen(false); }}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 w-full text-left"
            >
              For Talent
            </button>
            <button
              onClick={() => { setCurrentView(View.ENGINEERS); setIsOpen(false); }}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 w-full text-left"
            >
              Browse Talent
            </button>
            <button
              onClick={() => { setCurrentView(View.VETTING); setIsOpen(false); }}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 w-full text-left"
            >
              Vetting
            </button>
            <button
              onClick={() => { setCurrentView(View.PRICING); setIsOpen(false); }}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => { setCurrentView(View.ABOUT); setIsOpen(false); }}
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 w-full text-left"
            >
              About
            </button>
            
            <div className="h-px bg-white/5 my-2 mx-4"></div>
            
            <button
               onClick={() => { setCurrentView(View.LOGIN); setIsOpen(false); }}
               className="block w-full text-left px-4 py-3 text-base font-bold text-relay-accent flex items-center gap-3"
            >
              <LogIn className="w-5 h-5" />
              Log In
            </button>
            <button
               onClick={() => { setCurrentView(View.SIGNUP); setIsOpen(false); }}
               className="block w-full text-left px-4 py-3 text-base font-bold text-relay-accent flex items-center gap-3"
            >
              <UserPlus className="w-5 h-5" />
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
