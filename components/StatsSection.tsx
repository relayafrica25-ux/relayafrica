import React from 'react';

const STATS = [
  { value: '50+', label: 'Engineers Vetted', sub: 'Top-tier technical talent' },
  { value: '3%', label: 'Acceptance Rate', sub: 'Rigorous selection process' },
  { value: '15+', label: 'Companies Hiring', sub: 'Global startups & scaleups' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0a0a12] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-relay-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {STATS.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center px-8 ${
                idx !== STATS.length - 1 ? 'md:border-r border-white/5' : ''
              }`}
            >
              <div className="relative group mb-2">
                <div className="absolute -inset-4 bg-relay-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter relative">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-relay-accent font-bold uppercase tracking-[0.2em] text-xs mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Futuristic line accents */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default StatsSection;