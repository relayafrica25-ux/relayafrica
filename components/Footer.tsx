
import React from 'react';
import { Twitter, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { View } from '../types';

interface FooterProps {
  setCurrentView: (view: View) => void;
}

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 2.66663C8.63618 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63618 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663ZM10.6667 16C10.6667 13.0544 13.0545 10.6666 16 10.6666C18.9455 10.6666 21.3333 13.0544 21.3333 16C21.3333 18.9454 18.9455 21.3333 16 21.3333C13.0545 21.3333 10.6667 18.9454 10.6667 16ZM5.33332 16C5.33332 10.1089 10.1089 5.33329 16 5.33329C21.8911 5.33329 26.6667 10.1089 26.6667 16C26.6667 21.891 21.8911 26.6666 16 26.6666C10.1089 26.6666 5.33332 21.891 5.33332 16Z" fill="#00ff9d"/>
    <path d="M18 9.5L24 16L18 22.5" stroke="#00ff9d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 22.5L8 16L14 9.5" stroke="#00ff9d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navigate = (view: View) => {
    setCurrentView(view);
    scrollToTop();
  };

  return (
    <footer className="bg-[#050508] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Relay */}
          <div className="space-y-6">
            <div 
              className="flex items-center gap-3 cursor-pointer group w-fit"
              onClick={() => navigate(View.HOME)}
            >
              <Logo />
              <span className="font-display font-bold text-2xl tracking-wide text-white group-hover:text-relay-accent transition-colors">relay.africa</span>
            </div>
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Transparent African Talent. Bridge the gap with pre-vetted, world-class engineers.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-relay-accent hover:text-black transition-all group">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-relay-accent hover:text-black transition-all group">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: For Companies */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-[10px]">For Companies</h4>
            <ul className="space-y-4">
              <FooterLink onClick={() => navigate(View.ENGINEERS)}>Browse Engineers</FooterLink>
              <FooterLink onClick={() => navigate(View.PRICING)}>Pricing</FooterLink>
              <FooterLink onClick={() => navigate(View.HOW_IT_WORKS)}>How It Works</FooterLink>
              <FooterLink onClick={() => alert("Request Demo feature coming soon!")}>
                Request Demo
                <ArrowUpRight className="w-3 h-3 ml-1 inline opacity-0 group-hover:opacity-100 transition-opacity" />
              </FooterLink>
            </ul>
          </div>

          {/* Column 3: For Engineers */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-[10px]">For Engineers</h4>
            <ul className="space-y-4">
              <FooterLink onClick={() => navigate(View.APPLY)}>Apply to Join</FooterLink>
              <FooterLink onClick={() => navigate(View.VETTING)}>Vetting Process</FooterLink>
              <FooterLink onClick={() => {}}>Success Stories</FooterLink>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-[10px]">Company</h4>
            <ul className="space-y-4">
              <FooterLink onClick={() => navigate(View.ABOUT)}>About Us</FooterLink>
              <FooterLink onClick={() => navigate(View.ABOUT)}>Contact</FooterLink>
              <FooterLink onClick={() => {}}>Terms & Privacy</FooterLink>
              <FooterLink onClick={() => {}} className="opacity-50 pointer-events-none">
                Blog <span className="text-[8px] ml-1 bg-white/10 px-1 rounded uppercase">Future</span>
              </FooterLink>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <p className="text-gray-500 text-sm">© 2025 Relay. All rights reserved.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <a href="mailto:hello@relay.africa" className="flex items-center gap-2 text-sm text-gray-400 hover:text-relay-accent transition-colors">
              <Mail className="w-4 h-4" />
              hello@relay.africa
            </a>
            <a href="tel:+2348148475033" className="flex items-center gap-2 text-sm text-gray-400 hover:text-relay-accent transition-colors">
              <Phone className="w-4 h-4" />
              +234 814 847 5033
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-relay-accent animate-pulse"></div>
            <span className="text-[10px] font-mono text-relay-accent uppercase tracking-widest">Network Live</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ 
  children: React.ReactNode; 
  onClick: () => void;
  className?: string;
}> = ({ children, onClick, className = "" }) => (
  <li>
    <button 
      onClick={onClick}
      className={`text-gray-400 hover:text-relay-accent text-sm font-medium transition-all group flex items-center ${className}`}
    >
      {children}
    </button>
  </li>
);

export default Footer;
