import React from 'react';
import { ArrowRight, Globe2 } from 'lucide-react';
import { View } from '../types';

interface HeroProps {
  onBrowse: () => void;
  onApply: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowse, onApply }) => {
  return (
    <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-relay-purple/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-relay-accent/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-relay-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-relay-accent"></span>
          </span>
          <span className="text-sm font-medium text-gray-300">Accepting new partners for Q1 2025</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight mb-8">
          Pre-Vetted <span className="accent-text">African Talent</span><br />
          for <span className="text-white">Fast-Growing Companies</span>
        </h1>

        <p className="mt-4 max-w-2xl text-xl text-gray-400 mb-10 leading-relaxed">
          Hire world-class Nigerian engineers in weeks, not months. 
          <span className="text-white font-semibold"> 50-60% less than traditional rates. </span>
          Zero risk, fully compliant.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onBrowse}
            className="group relative flex items-center justify-center gap-2 bg-relay-accent text-black px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(0,255,157,0.4)] hover:-translate-y-1"
          >
            Browse Talent
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={onApply}
            className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Apply as Talent
          </button>
        </div>

        {/* Abstract Map Graphic */}
        <div className="mt-20 relative w-full max-w-4xl h-64 sm:h-96 opacity-90 animate-float">
            <div className="absolute inset-0 flex items-center justify-center">
                 {/* Rotating Rings for effect */}
                <div className="absolute w-[120%] h-[120%] border border-relay-purple/20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-[90%] h-[90%] border border-relay-accent/10 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                
                {/* Main Globe */}
                <Globe2 className="w-full h-full text-relay-surface stroke-[0.5] drop-shadow-[0_0_30px_rgba(112,0,255,0.3)]" />
            </div>
            
            {/* Connecting lines animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                 <div className="w-[80%] h-[1px] bg-gradient-to-r from-transparent via-relay-accent to-transparent opacity-30"></div>
                 <div className="absolute w-3 h-3 bg-relay-accent rounded-full shadow-[0_0_15px_#00ff9d] animate-[ping_3s_linear_infinite]"></div>
            </div>
            
             {/* Tech Hub Nodes */}
            <div className="absolute top-[40%] left-[45%] w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]"></div>
            <div className="absolute top-[60%] left-[52%] w-2 h-2 bg-relay-purple rounded-full animate-pulse shadow-[0_0_10px_#7000ff]" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;