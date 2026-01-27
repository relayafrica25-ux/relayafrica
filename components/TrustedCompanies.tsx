import React from 'react';

const COMPANIES = [
  { name: 'TechCrunch', color: 'hover:text-[#00ff00]' },
  { name: 'Techpoint', color: 'hover:text-[#0081ff]' },
  { name: 'Techpression', color: 'hover:text-relay-accent' },
  { name: 'TechCabal', color: 'hover:text-[#ff0000]' },
  { name: 'Google for Startups', color: 'hover:text-[#4285F4]' },
  { name: 'Microsoft', color: 'hover:text-[#00A4EF]' },
  { name: 'Paystack', color: 'hover:text-[#011b33]' },
  { name: 'Y Combinator', color: 'hover:text-[#ff6600]' },
  { name: 'Ventures Africa', color: 'hover:text-relay-purple' },
];

const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-12 bg-[#0a0a12] border-y border-white/5 relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-relay-accent/5 via-transparent to-relay-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-500">
            Trusted by global teams & featured on
          </span>
        </div>

        {/* Infinite Scroll Container */}
        <div className="flex overflow-hidden select-none">
          <div className="flex space-x-12 sm:space-x-24 animate-marquee whitespace-nowrap py-4 items-center">
            {/* First Set */}
            {COMPANIES.map((company, idx) => (
              <LogoItem key={`logo-1-${idx}`} company={company} />
            ))}
            {/* Second Set (for seamless loop) */}
            {COMPANIES.map((company, idx) => (
              <LogoItem key={`logo-2-${idx}`} company={company} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const LogoItem: React.FC<{ company: { name: string; color: string } }> = ({ company }) => (
  <div className={`flex items-center gap-2 transition-all duration-500 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 cursor-default ${company.color}`}>
    <div className="w-1.5 h-1.5 rounded-full bg-current opacity-0 group-hover:opacity-100"></div>
    <span className="text-xl sm:text-2xl font-display font-bold tracking-tight">
      {company.name}
    </span>
  </div>
);

export default TrustedCompanies;