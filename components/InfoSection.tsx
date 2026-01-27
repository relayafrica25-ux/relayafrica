import React from 'react';
import { Check, DollarSign, Globe, Shield, Zap, ArrowRight, UserCheck } from 'lucide-react';

interface InfoSectionProps {
  onApply: () => void;
  onBrowse: () => void;
}

const InfoSection: React.FC<InfoSectionProps> = ({ onApply, onBrowse }) => {
  return (
    <section className="bg-[#0a0a12] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* For Companies */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-4 bg-relay-accent/20 rounded-2xl blur-2xl"></div>
                <div className="relative glass-card p-8 rounded-2xl border border-relay-accent/20">
                    <h3 className="text-2xl font-bold mb-6">Transparent Pricing</h3>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-5xl font-bold text-white">25%</span>
                        <span className="text-gray-400">management fee</span>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-gray-300">
                            <Check className="w-5 h-5 text-relay-accent" />
                            <span>Only pay when you hire</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <Check className="w-5 h-5 text-relay-accent" />
                            <span>Includes 30-day replacement guarantee</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <Check className="w-5 h-5 text-relay-accent" />
                            <span>Full payroll & compliance handling</span>
                        </li>
                    </ul>
                    <button 
                      onClick={onBrowse}
                      className="w-full mt-8 bg-relay-accent text-black font-bold py-3 rounded-lg hover:bg-[#00e68e] transition-colors"
                    >
                        Browse Talent
                    </button>
                </div>
            </div>
            
            <div className="order-1 md:order-2">
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">For Companies</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    European startups and tech companies face a massive talent shortage. 
                    We give you instant access to senior engineers in similar timezones who communicate perfectly in English.
                </p>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-white font-bold text-xl mb-2">Timezone Aligned</h4>
                        <p className="text-sm text-gray-500">Nigeria (GMT+1) is perfectly aligned with London, Berlin, and Paris.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-xl mb-2">Culture Fit</h4>
                        <p className="text-sm text-gray-500">Engineers with experience in agile, western workflows and startups.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* FOR TALENT SECTION - UPDATED */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-relay-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                        alt="Talent at work" 
                        className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                        <div className="glass-card p-6 rounded-2xl border border-relay-purple/30 backdrop-blur-md">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-relay-purple flex items-center justify-center">
                                    <UserCheck className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Relay Verified</p>
                                    <p className="text-xs text-relay-purple font-medium uppercase tracking-widest">Global Standard</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-white text-black p-6 rounded-3xl shadow-2xl animate-float hidden lg:block">
                    <div className="text-4xl font-bold mb-1">3-5x</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-tight">Income<br/>Increase</div>
                </div>
            </div>

            {/* Text Column */}
            <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-relay-purple/10 border border-relay-purple/30 text-relay-purple font-bold text-xs uppercase tracking-widest mb-6">
                  For High-Impact Talent
                </div>
                
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  Join Relay.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-relay-purple to-relay-accent">Earn 3-5x More.</span>
                </h2>
                
                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                  Access international remote opportunities with zero platform fees.
                </p>

                <div className="space-y-5 mb-12">
                  <BenefitRow text="Earn $40K-80K/year (vs $12K-30K locally)" />
                  <BenefitRow text="Work for European & US companies" />
                  <BenefitRow text="Zero platform fees (unlike Upwork's 20%)" />
                  <BenefitRow text="Paid in USD (stable income)" />
                  <BenefitRow text="We verify your skills (build credibility)" />
                </div>

                <button 
                  onClick={onApply}
                  className="inline-flex items-center gap-3 bg-relay-purple text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#5f00d9] transition-all shadow-xl hover:-translate-y-1"
                >
                  Apply to Join
                  <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

const BenefitRow: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-relay-accent/20 flex items-center justify-center mt-0.5 group-hover:bg-relay-accent/40 transition-colors">
      <Check className="w-4 h-4 text-relay-accent" />
    </div>
    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{text}</span>
  </div>
);

export default InfoSection;