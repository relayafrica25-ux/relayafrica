import React from 'react';
import { 
  FileSearch, 
  Code, 
  Zap, 
  MessageSquare, 
  Video, 
  Award, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Globe,
  Battery
} from 'lucide-react';

const VETTING_STEPS = [
  {
    icon: FileSearch,
    title: "Application Review",
    subtitle: "Resume, portfolio, & verified experience",
    description: "Our talent acquisition team manually reviews every application, vetting for deep domain expertise and a history of high-impact work.",
    passRate: "100%",
    applicants: "1,200/mo"
  },
  {
    icon: Code,
    title: "Technical Assessment",
    subtitle: "2-hour deep-dive coding challenge",
    description: "Candidates solve real-world engineering problems under time pressure. We evaluate code quality, system design, and efficiency.",
    passRate: "50%",
    applicants: "600/mo"
  },
  {
    icon: Battery,
    title: "Infrastructure Check",
    subtitle: "Speed, Power, & Environment",
    description: "Crucial for remote success in Africa. We verify 50Mbps+ internet, 24/7 backup power solutions, and professional workspaces.",
    passRate: "70%",
    applicants: "420/mo"
  },
  {
    icon: MessageSquare,
    title: "Soft Skills Test",
    subtitle: "Communication & Proactivity",
    description: "Evaluated for remote-readiness. We test for proactive communication, empathy, and ability to thrive in agile, autonomous teams.",
    passRate: "60%",
    applicants: "252/mo"
  },
  {
    icon: Video,
    title: "Video Interview",
    subtitle: "Cultural Fit & English Fluency",
    description: "Live behavioral interview to assess professionalism, cultural alignment with Western startups, and perfect English proficiency.",
    passRate: "50%",
    applicants: "126/mo"
  },
  {
    icon: Award,
    title: "Final Approval",
    subtitle: "The Relay Standard (3-5%)",
    description: "Final committee review. Only the best-of-the-best are inducted into our network and presented to partners.",
    passRate: "3-5%",
    applicants: "36/mo"
  }
];

const VettingProcess: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a12] relative min-h-screen overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-relay-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-relay-purple/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-relay-accent/10 border border-relay-accent/20 text-relay-accent font-bold text-xs uppercase tracking-[0.2em] mb-6">
            The Quality Engine
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
            Our 6-Step <span className="accent-text">Vetting Process</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            We do the hard work so you don't have to. Our funnel is designed to find the top 3% of talent in the African market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Visual Funnel Column */}
          <div className="relative space-y-4">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest text-center mb-8">The Talent Funnel</h3>
            {VETTING_STEPS.map((step, idx) => (
              <div 
                key={`funnel-${idx}`} 
                className="relative flex items-center justify-center transition-all duration-500 hover:scale-[1.02]"
                style={{
                  width: `${100 - (idx * 12)}%`,
                  margin: '0 auto'
                }}
              >
                <div className={`
                  w-full h-16 rounded-xl flex items-center justify-between px-6 border backdrop-blur-md
                  ${idx === 5 ? 'bg-relay-accent border-relay-accent text-black shadow-[0_0_30px_rgba(0,255,157,0.4)]' : 'bg-white/5 border-white/10 text-white'}
                `}>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${idx === 5 ? 'text-black/60' : 'text-gray-500'}`}>0{idx + 1}</span>
                    <span className="font-bold text-sm truncate">{step.title}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono ${idx === 5 ? 'text-black/60' : 'text-gray-500 hidden md:inline'}`}>{step.applicants}</span>
                    <span className={`font-mono font-bold text-xs px-2 py-1 rounded bg-black/10`}>{step.passRate}</span>
                  </div>
                </div>
                {idx < 5 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-white/20 to-transparent"></div>
                )}
              </div>
            ))}
            
            <div className="mt-12 text-center p-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-lg">
              <ShieldCheck className="w-12 h-12 text-relay-accent mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">The Result:</h4>
              <p className="text-relay-accent text-2xl font-display font-bold leading-snug">
                You get rigorously vetted,<br />remote-ready Talent
              </p>
            </div>
          </div>

          {/* Details Column */}
          <div className="space-y-8">
            {VETTING_STEPS.map((step, idx) => (
              <div key={idx} className="group relative pl-16 py-2">
                {/* Connector Line */}
                {idx !== VETTING_STEPS.length - 1 && (
                  <div className="absolute left-[31px] top-12 bottom-[-16px] w-px bg-white/10 group-hover:bg-relay-accent/30 transition-colors"></div>
                )}
                
                {/* Icon Circle */}
                <div className={`absolute left-0 top-0 w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                  idx === 5 
                  ? 'bg-relay-accent text-black border-relay-accent shadow-[0_0_20px_rgba(0,255,157,0.2)]' 
                  : 'bg-white/5 text-relay-accent border-white/10 group-hover:border-relay-accent/50'
                }`}>
                  <step.icon className="w-7 h-7" />
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-relay-accent transition-colors">{step.title}</h3>
                    <span className="text-[10px] font-mono font-bold bg-white/5 text-gray-500 px-2 py-0.5 rounded border border-white/5">Step 0{idx+1}</span>
                  </div>
                  <p className="text-sm font-bold text-relay-accent/70 uppercase tracking-wider mb-2">{step.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-8">
               <button className="w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-relay-accent transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
                  Start Hiring Vetted Talent
                  <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="mt-24 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all duration-700">
        <div className="flex flex-col items-center gap-2">
          <Cpu className="w-8 h-8" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Algorithmic Vetting</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Globe className="w-8 h-8" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Global English</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Zap className="w-8 h-8" />
          <span className="text-[10px] font-bold uppercase tracking-widest">Fast Track Hiring</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <ShieldCheck className="w-8 h-8" />
          <span className="text-[10px] font-bold uppercase tracking-widest">IP Protection</span>
        </div>
      </div>
    </div>
  );
};

export default VettingProcess;