import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Target, 
  Zap, 
  Layers, 
  Globe, 
  MessageSquare, 
  CreditCard,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { UserType } from '../types';

const HowItWorksPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserType>('company');

  const companyJourney = [
    {
      icon: Target,
      title: "Precision Matching",
      description: "Define your technical requirements and culture fit. Our AI-assisted matching engine scans our pre-vetted pool to find your top 3 perfect matches.",
      details: ["Detailed technical scores", "Soft skill evaluations", "Video intro clips"]
    },
    {
      icon: MessageSquare,
      title: "Seamless Interviews",
      description: "Review profiles and schedule interviews directly through our platform. No back-and-forth emails. We handle the coordination so you can focus on the talent.",
      details: ["Automated scheduling", "Relay support available", "Interview feedback loops"]
    },
    {
      icon: Layers,
      title: "Compliant Onboarding",
      description: "Once you've found the one, we handle the contracts, compliance, and global payroll. Your new engineer joins your Slack and starts coding on Day 1.",
      details: ["IP protection", "Local tax compliance", "Equipment logistics"]
    },
    {
      icon: ShieldCheck,
      title: "Risk-Free Trial",
      description: "Every hire comes with a 30-day performance guarantee. If it's not a perfect fit, we provide a replacement immediately at no extra cost.",
      details: ["Performance tracking", "Success managers", "Refund policy"]
    }
  ];

  const talentJourney = [
    {
      icon: Cpu,
      title: "Rigorous Vetting",
      description: "Apply to join the elite top 2%. Pass our technical stack tests, algorithm challenges, and English proficiency interview.",
      details: ["Coding challenge", "System design interview", "Communication test"]
    },
    {
      icon: Globe,
      title: "Global Visibility",
      description: "Your verified profile is showcased to high-growth tech companies in London, Berlin, Paris, and beyond. We highlight your unique strengths.",
      details: ["Professional profile", "Verified skill tags", "Salary benchmarking"]
    },
    {
      icon: CreditCard,
      title: "Direct Placement",
      description: "Receive interview requests from companies that match your career goals. Accept offers and sign contracts that protect your rights.",
      details: ["USD/EUR payments", "Legal support", "Remote-first roles"]
    },
    {
      icon: Zap,
      title: "Continuous Support",
      description: "We don't just place you and leave. We provide ongoing support, community access, and tools to help you thrive in your international role.",
      details: ["Learning resources", "Slack community", "Career coaching"]
    }
  ];

  const steps = activeTab === 'company' ? companyJourney : talentJourney;

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a12] relative overflow-hidden min-h-screen">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className={`absolute top-20 left-1/3 w-[600px] h-[600px] rounded-full blur-[140px] transition-colors duration-1000 ${activeTab === 'company' ? 'bg-relay-accent/10' : 'bg-relay-purple/10'}`}></div>
          <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-relay-surface/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight">
            The Future of <span className={`transition-colors duration-500 ${activeTab === 'company' ? 'text-relay-accent' : 'text-relay-purple'}`}>Global Hiring</span>
          </h1>
          
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-12">
            <button
              onClick={() => setActiveTab('company')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'company' 
                  ? 'bg-relay-accent text-black shadow-lg shadow-relay-accent/20' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Companies
            </button>
            <button
              onClick={() => setActiveTab('engineer')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'engineer' 
                  ? 'bg-relay-purple text-white shadow-lg shadow-relay-purple/20' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Talent
            </button>
          </div>

          <p className="text-xl text-gray-400 leading-relaxed">
            Relay isn't just a job board. We're an end-to-end infrastructure for cross-border engineering teams.
            Here is how we bridge the gap.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Vertical Stepper UI */}
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group pl-12">
                {/* Connector Line */}
                {idx !== steps.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-[-48px] w-0.5 bg-gradient-to-b from-white/20 to-transparent"></div>
                )}
                
                {/* Step Circle */}
                <div className={`absolute left-0 top-0 w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                  activeTab === 'company' 
                  ? 'bg-relay-accent/10 border-relay-accent/30 text-relay-accent group-hover:bg-relay-accent group-hover:text-black' 
                  : 'bg-relay-purple/10 border-relay-purple/30 text-relay-purple group-hover:bg-relay-purple group-hover:text-white'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:translate-x-1 transition-transform">{step.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">{step.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {step.details.map((detail, dIdx) => (
                      <span key={dIdx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-medium text-gray-300">
                        <CheckCircle2 className={`w-3 h-3 ${activeTab === 'company' ? 'text-relay-accent' : 'text-relay-purple'}`} />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Visual Representation */}
          <div className="lg:sticky lg:top-48">
            <div className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-relay-accent/5 to-relay-purple/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">system_v2.5_active</span>
                </div>

                {activeTab === 'company' ? (
                  <div className="space-y-6">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4 animate-fade-in">
                       <div className="w-10 h-10 rounded-full bg-relay-accent/20 flex items-center justify-center text-relay-accent">1</div>
                       <div>
                         <div className="text-sm font-bold">Search: Senior DevOps</div>
                         <div className="text-xs text-gray-500">Querying 5,000+ candidates...</div>
                       </div>
                    </div>
                    <div className="p-4 bg-relay-accent/10 rounded-xl border border-relay-accent/20 flex items-center gap-4 translate-x-4 animate-fade-in [animation-delay:500ms]">
                       <div className="w-10 h-10 rounded-full bg-relay-accent text-black flex items-center justify-center font-bold">✓</div>
                       <div>
                         <div className="text-sm font-bold text-relay-accent">Top Match Found</div>
                         <div className="text-xs text-relay-accent/70">Matching Score: 98.4%</div>
                       </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4 translate-x-8 animate-fade-in [animation-delay:1000ms]">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">3</div>
                       <div>
                         <div className="text-sm font-bold">Onboarding Package</div>
                         <div className="text-xs text-gray-500">Contract & Compliance Ready</div>
                       </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4 animate-fade-in">
                       <div className="w-10 h-10 rounded-full bg-relay-purple/20 flex items-center justify-center text-relay-purple">1</div>
                       <div>
                         <div className="text-sm font-bold">Assessment Complete</div>
                         <div className="text-xs text-gray-500">Node.js Performance: Top 1%</div>
                       </div>
                    </div>
                    <div className="p-4 bg-relay-purple/10 rounded-xl border border-relay-purple/20 flex items-center gap-4 translate-x-4 animate-fade-in [animation-delay:500ms]">
                       <div className="w-10 h-10 rounded-full bg-relay-purple text-white flex items-center justify-center font-bold">★</div>
                       <div>
                         <div className="text-sm font-bold text-relay-purple">Profile Verified</div>
                         <div className="text-xs text-relay-purple/70">Status: High Priority</div>
                       </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4 translate-x-8 animate-fade-in [animation-delay:1000ms]">
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">3</div>
                       <div>
                         <div className="text-sm font-bold">Interview Request</div>
                         <div className="text-xs text-gray-500">Berlin-based AI Startup</div>
                       </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-12 text-center">
                  <h4 className="text-lg font-bold mb-4">Ready to start?</h4>
                  <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'company' 
                    ? 'bg-relay-accent text-black hover:shadow-lg hover:shadow-relay-accent/20' 
                    : 'bg-relay-purple text-white hover:shadow-lg hover:shadow-relay-purple/20'
                  }`}>
                    {activeTab === 'company' ? 'Find Your First Hire' : 'Apply to the Network'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Metric Preview */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
                 <div className="text-2xl font-bold text-white mb-1">14 Days</div>
                 <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Avg. Time to Hire</div>
              </div>
              <div className="glass-card p-6 rounded-2xl border border-white/5 text-center">
                 <div className="text-2xl font-bold text-white mb-1">98%</div>
                 <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;