import React from 'react';
import { 
  ArrowRight, 
  DollarSign, 
  Globe, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  ShieldCheck, 
  Quote, 
  FileCheck, 
  Users, 
  Rocket,
  Battery,
  Wifi,
  Laptop,
  Briefcase
} from 'lucide-react';

interface ForTalentProps {
  onApply: () => void;
  onSeeEngineers: () => void;
}

const ForTalent: React.FC<ForTalentProps> = ({ onApply, onSeeEngineers }) => {
  return (
    <div className="pt-20 bg-[#0a0a12] text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-relay-purple/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-relay-accent/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-relay-purple/10 border border-relay-purple/20 text-relay-purple font-bold text-xs uppercase tracking-[0.3em] mb-8 animate-fade-in">
            Engineers & Creators Only
          </div>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-tight tracking-tighter">
            Earn 3-5x More.<br />
            <span className="accent-text">Zero Fees.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join Relay and access international remote opportunities with high-growth European & US companies. Protect your income and scale your career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onApply}
              className="bg-relay-purple hover:bg-white text-white hover:text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(112,0,255,0.3)] flex items-center gap-3 group"
            >
              Apply to Join
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onSeeEngineers}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all"
            >
              See Sample Profiles
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE OPPORTUNITY */}
      <section className="py-24 bg-[#0d0d17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why African Talent <span className="accent-text">Chooses Relay</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">We don't just find you a job; we build your international career path.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <OppCard 
              icon={DollarSign} 
              title="High Earnings" 
              desc="Earn $40K-80K/year compared to the $12K-30K typical for local roles." 
              color="relay-accent"
            />
            <OppCard 
              icon={Globe} 
              title="Global Exposure" 
              desc="Work for leading companies in Europe, the US, and Asia from your home." 
              color="relay-purple"
            />
            <OppCard 
              icon={ShieldCheck} 
              title="USD/EUR Stability" 
              desc="Get paid in stable currencies. Protect your purchasing power against local volatility." 
              color="blue-500"
            />
            <OppCard 
              icon={Zap} 
              title="Remote Flexibility" 
              desc="Zero commute. 100% remote. Total control over your work environment." 
              color="yellow-500"
            />
            <OppCard 
              icon={TrendingUp} 
              title="Career Growth" 
              desc="Build a world-class portfolio with international startups and high-impact projects." 
              color="emerald-500"
            />
            <OppCard 
              icon={Users} 
              title="Zero Fees" 
              desc="Unlike other platforms, Relay takes 0% from your salary. You keep every cent." 
              color="relay-accent"
            />
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
            <p className="text-gray-400">Our process is fast, transparent, and built for professionals.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <StepItem 
              num="01"
              icon={FileCheck}
              title="Apply & Vet"
              desc="Submit your application and pass our rigorous coding and communication assessments."
            />
            <StepItem 
              num="02"
              icon={Rocket}
              title="Go Live"
              desc="Once approved, your verified profile goes live to our network of international hiring managers."
            />
            <StepItem 
              num="03"
              icon={CheckCircle2}
              title="Get Matched"
              desc="Receive interview requests. Accept the offers that match your lifestyle and goals."
            />
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm font-mono italic">Timeline: 1-2 weeks from application to live profile</p>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE LOOK FOR */}
      <section className="py-24 bg-[#0d0d17] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">What We Look For</h2>
              <div className="space-y-6">
                <CriterionRow text="3+ years of professional experience in your domain" />
                <CriterionRow text="Strong technical skills verified via live coding or portfolio" />
                <CriterionRow text="Excellent English communication (both written and verbal)" />
                <CriterionRow text="Remote work readiness (proactivity, self-management)" />
                <CriterionRow text="Professionalism and reliability in distributed teams" />
              </div>
            </div>
            <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <ShieldCheck className="w-40 h-40" />
               </div>
               <h3 className="text-2xl font-bold mb-6 text-relay-accent flex items-center gap-2">
                 <Zap className="w-6 h-6" />
                 Relay Standard
               </h3>
               <p className="text-gray-400 leading-relaxed mb-8">
                 We only accept the top 3% of talent. If you are passionate about your craft and ready for global challenges, we want you in our network.
               </p>
               <button onClick={onApply} className="text-white font-bold flex items-center gap-2 hover:text-relay-accent transition-colors">
                 Learn more about vetting <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ZERO FEES GUARANTEE */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-relay-accent to-relay-purple rounded-[40px] blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative glass-card p-12 md:p-20 rounded-[40px] border border-white/10 text-center">
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Zero Fees. <span className="accent-text">Period.</span></h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Unlike Upwork (20% fee) or Toptal (hidden markups), Relay charges <span className="text-white font-bold underline decoration-relay-accent underline-offset-8">ZERO fees to engineers</span>. You keep 100% of your negotiated salary. We only charge the hiring companies.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-relay-accent" />
                  <span className="font-bold">No placement fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-relay-accent" />
                  <span className="font-bold">No subscription fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-relay-accent" />
                  <span className="font-bold">No hidden deductions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="py-24 bg-[#0d0d17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <TestimonialCard 
              quote="I was earning ₦5M/year (~$10K) in Lagos. Through Relay, I got hired by a Berlin startup at $65K/year. My life changed overnight, and the career growth has been exponential."
              author="Ademola O."
              role="Senior Full-Stack Developer"
              initials="AO"
            />
            <TestimonialCard 
              quote="The vetting process was tough but fair. Once approved, I had 3 interview requests in 2 weeks. Now I'm working for a London company from my home in Lagos."
              author="Chioma N."
              role="Frontend Developer"
              initials="CN"
            />
          </div>
        </div>
      </section>

      {/* 7. REQUIREMENTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Remote Infrastructure <span className="text-gray-500">Requirements</span></h2>
            <p className="text-gray-400">To ensure reliability for global partners, we require the following setup.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ReqCard icon={Battery} title="Backup Power" desc="Generator or Inverter with 8+ hours capacity. (REQUIRED)" />
            <ReqCard icon={Wifi} title="High-Speed Internet" desc="Stable 25+ Mbps connection with a backup ISP. (REQUIRED)" />
            <ReqCard icon={Briefcase} title="Private Workspace" desc="Dedicated, quiet, and professional environment. (REQUIRED)" />
            <ReqCard icon={Laptop} title="Modern Hardware" desc="Laptop with 8GB+ RAM and working webcam/mic. (REQUIRED)" />
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-relay-purple/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8">Ready to Level Up?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onApply}
              className="bg-relay-purple hover:bg-white text-white hover:text-black px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-[0_0_50px_rgba(112,0,255,0.4)] flex items-center gap-3"
            >
              Apply to Join Relay
              <ArrowRight className="w-6 h-6" />
            </button>
            <button 
              onClick={onSeeEngineers}
              className="text-white hover:text-relay-accent font-bold py-5 px-6 transition-colors"
            >
              Browse Sample Profiles
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

const OppCard: React.FC<{ icon: any, title: string, desc: string, color: string }> = ({ icon: Icon, title, desc, color }) => (
  <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
    <div className={`w-12 h-12 rounded-2xl bg-${color}/10 flex items-center justify-center text-${color} mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const StepItem: React.FC<{ num: string, icon: any, title: string, desc: string }> = ({ num, icon: Icon, title, desc }) => (
  <div className="relative group text-center">
    <div className="absolute top-0 right-0 text-7xl font-display font-bold opacity-5 text-white select-none">{num}</div>
    <div className="w-16 h-16 rounded-3xl bg-relay-purple/10 flex items-center justify-center text-relay-purple mx-auto mb-6 group-hover:bg-relay-purple group-hover:text-white transition-all">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
  </div>
);

const CriterionRow: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-4">
    <div className="w-6 h-6 rounded-full bg-relay-accent/10 flex items-center justify-center text-relay-accent mt-0.5">
      <CheckCircle2 className="w-4 h-4" />
    </div>
    <span className="text-gray-300 font-medium">{text}</span>
  </div>
);

const TestimonialCard: React.FC<{ quote: string, author: string, role: string, initials: string }> = ({ quote, author, role, initials }) => (
  <div className="glass-card p-10 rounded-[40px] border border-white/10 relative overflow-hidden">
    <Quote className="absolute -top-4 -left-4 w-24 h-24 text-white/[0.02]" />
    <p className="text-lg text-gray-300 leading-relaxed mb-8 italic relative z-10">"{quote}"</p>
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

const ReqCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-relay-accent/30 transition-all text-center">
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 mx-auto mb-6">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default ForTalent;