import React from 'react';
import { 
  Check, 
  X, 
  Users, 
  Briefcase, 
  Globe, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Quote, 
  TrendingUp, 
  ShieldAlert,
  Building2,
  Rocket
} from 'lucide-react';

interface ForCompaniesProps {
  onBrowse: () => void;
  onSeePricing: () => void;
}

const ForCompanies: React.FC<ForCompaniesProps> = ({ onBrowse, onSeePricing }) => {
  return (
    <div className="pt-20 bg-[#0a0a12] text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-relay-accent/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-relay-purple/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-relay-accent/10 border border-relay-accent/20 text-relay-accent font-bold text-xs uppercase tracking-[0.3em] mb-8 animate-fade-in">
            Employers Only
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight tracking-tighter">
            Hire World-Class Engineers.<br />
            <span className="accent-text">Save 50-60%.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Pre-vetted African talent, transparent pricing, and zero compliance risk. Build your offshore hub with the same quality, for half the cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onBrowse}
              className="bg-relay-accent hover:bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(0,255,157,0.3)] flex items-center gap-3"
            >
              Browse Engineers
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onSeePricing}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              View Pricing Model
            </button>
          </div>
        </div>
      </section>

      {/* 2 & 3. PROBLEM & SOLUTION (The "Aha" Moment) */}
      <section className="py-24 bg-[#0d0d17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">The High Cost of <span className="text-gray-500">Traditional Hiring</span></h2>
            <p className="text-gray-400 text-lg">Stop fighting for over-saturated local talent. Start leveraging the African Advantage.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* The Problem */}
            <div className="glass-card p-10 rounded-[40px] border border-red-500/10 bg-gradient-to-br from-red-500/5 to-transparent">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-500/80">
                <ShieldAlert className="w-6 h-6" />
                The Problem
              </h3>
              <ul className="space-y-6">
                <ProblemRow text="Hiring takes 6-8 weeks (you need engineers now)" />
                <ProblemRow text="EU/US engineers cost €80K-120K (your budget is tight)" />
                <ProblemRow text="90% of applicants are unqualified (you waste time screening)" />
                <ProblemRow text="Remote hiring is risky (cultural fit, infra, compliance)" />
              </ul>
            </div>

            {/* The Relay Solution */}
            <div className="glass-card p-10 rounded-[40px] border border-relay-accent/20 bg-gradient-to-br from-relay-accent/5 to-transparent shadow-[0_0_40px_rgba(0,255,157,0.05)]">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-relay-accent">
                <BadgeCheck className="w-6 h-6" />
                The Relay Solution
              </h3>
              <ul className="space-y-6">
                <SolutionRow text="Hire in 2-3 weeks (pre-vetted pool ready)" />
                <SolutionRow text="$40K-70K for mid-senior (50-60% savings)" />
                <SolutionRow text="Only 3% approved (we do the screening)" />
                <SolutionRow text="Risk mitigated (infra verified, soft skills tested, guarantee)" />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Who We Serve</h2>
            <p className="text-gray-400">Supporting tech-forward companies across three continents.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServeCard 
              icon={Rocket} 
              title="European Startups" 
              desc="Seed to Series B companies looking to extend their runway without compromising on code quality."
            />
            <ServeCard 
              icon={Globe} 
              title="US Remote Teams" 
              desc="Hiring senior talent in GMT timezones to ensure 100% overlap with East Coast teams."
            />
            <ServeCard 
              icon={TrendingUp} 
              title="Growth Scale-ups" 
              desc="Companies needing to add 5-10 engineers in a single quarter while maintaining high vetting standards."
            />
            <ServeCard 
              icon={Building2} 
              title="Offshore Labs" 
              desc="Enterprises looking to test and build long-term offshore engineering centers in Africa."
            />
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-[#0d0d17] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-relay-purple/5 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <TestimonialCard 
              quote="We hired 3 engineers through Relay in 6 weeks. All three are still with us 9 months later. Quality is excellent, and the transparency in pricing made this a no-brainer."
              author="Marcus Weber"
              role="CTO, Berlin FinTech"
              initials="MW"
            />
            <TestimonialCard 
              quote="The Scale tier saved us so much hassle. Single invoice, all compliance handled, engineers are great. Relay is now our go-to for engineering hires."
              author="Sarah Chen"
              role="VP Engineering, London SaaS"
              initials="SC"
            />
          </div>
        </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How We Compare</h2>
            <p className="text-gray-400">The numbers don't lie. Relay offers agency quality at platform prices.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Feature</th>
                  <th className="py-6 px-4 text-xl font-display font-bold text-relay-accent">Relay</th>
                  <th className="py-6 px-4 text-sm font-bold text-gray-500">Toptal</th>
                  <th className="py-6 px-4 text-sm font-bold text-gray-500">Andela</th>
                  <th className="py-6 px-4 text-sm font-bold text-gray-500">Upwork</th>
                  <th className="py-6 px-4 text-sm font-bold text-gray-500">LinkedIn</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <ComparisonRow label="Acceptance Rate" values={['3%', '3%', '~10%', 'Anyone', 'Anyone']} highlight />
                <ComparisonRow label="Transparency" values={['Full ✅', 'None ❌', 'None ❌', 'Partial', 'N/A']} highlight />
                <ComparisonRow label="Pricing (Mid-Level)" values={['$50K-65K', '$80K-100K', '$60K-80K', 'Variable', 'Variable']} highlight />
                <ComparisonRow label="Time to Hire" values={['2-3 weeks', '4-6 weeks', '3-4 weeks', 'Varies', 'Varies']} highlight />
                <ComparisonRow label="Guarantee" values={['30-90 days', 'Yes', 'Yes', 'No', 'No']} highlight />
                <ComparisonRow label="Soft Skills Tested" values={['Yes ✅', 'Partial', 'Partial', 'No ❌', 'No ❌']} highlight />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d17] to-[#0a0a12]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Ready to Build Your<br />
            <span className="accent-text">Global Engineering Team?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onBrowse}
              className="bg-relay-accent hover:bg-white text-black px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-[0_0_50px_rgba(0,255,157,0.3)] flex items-center gap-3"
            >
              Start Hiring
              <ArrowRight className="w-6 h-6" />
            </button>
            <button 
              onClick={onSeePricing}
              className="text-white hover:text-relay-accent font-bold py-5 px-6 transition-colors"
            >
              See Pricing Details
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

const ProblemRow: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-4">
    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mt-0.5">
      <X className="w-4 h-4" />
    </div>
    <span className="text-gray-300 font-medium">{text}</span>
  </li>
);

const SolutionRow: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-4">
    <div className="w-6 h-6 rounded-full bg-relay-accent/10 flex items-center justify-center text-relay-accent mt-0.5">
      <Check className="w-4 h-4" />
    </div>
    <span className="text-white font-bold">{text}</span>
  </li>
);

const ServeCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-relay-accent/30 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 mb-6 group-hover:bg-relay-accent/10 group-hover:text-relay-accent transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TestimonialCard: React.FC<{ quote: string, author: string, role: string, initials: string }> = ({ quote, author, role, initials }) => (
  <div className="glass-card p-10 rounded-[40px] border border-white/10 relative">
    <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
    <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">"{quote}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-relay-purple/20 flex items-center justify-center text-relay-purple font-bold">
        {initials}
      </div>
      <div>
        <p className="text-white font-bold">{author}</p>
        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </div>
);

const ComparisonRow: React.FC<{ label: string, values: string[], highlight?: boolean }> = ({ label, values, highlight }) => (
  <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
    <td className="py-6 px-4 font-bold text-gray-400">{label}</td>
    <td className="py-6 px-4 font-bold text-relay-accent bg-relay-accent/5">{values[0]}</td>
    <td className="py-6 px-4 text-gray-500">{values[1]}</td>
    <td className="py-6 px-4 text-gray-500">{values[2]}</td>
    <td className="py-6 px-4 text-gray-500">{values[3]}</td>
    <td className="py-6 px-4 text-gray-500">{values[4]}</td>
  </tr>
);

const BadgeCheck: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

export default ForCompanies;