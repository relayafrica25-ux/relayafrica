import React from 'react';
import { FAQS } from '../constants';
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  ShieldCheck, 
  Users, 
  DollarSign, 
  Cpu, 
  Globe, 
  Layers 
} from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  // Helper to map icons to specific questions
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <ShieldCheck className="w-5 h-5" />;
      case 1: return <DollarSign className="w-5 h-5" />;
      case 2: return <Layers className="w-5 h-5" />;
      case 3: return <Users className="w-5 h-5" />;
      case 4: return <Cpu className="w-5 h-5" />;
      case 5: return <Globe className="w-5 h-5" />;
      case 6: return <HelpCircle className="w-5 h-5" />;
      default: return <HelpCircle className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-[#0a0a12] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-relay-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            Intel Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Frequently Asked <span className="accent-text">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to know about hiring world-class African talent through Relay.
          </p>
        </div>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group transition-all duration-500 rounded-3xl overflow-hidden border ${
                openIndex === idx 
                  ? 'bg-white/[0.04] border-relay-accent/30 shadow-[0_0_40px_rgba(0,255,157,0.05)]' 
                  : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx 
                      ? 'bg-relay-accent text-black shadow-[0_0_15px_rgba(0,255,157,0.4)]' 
                      : 'bg-white/5 text-gray-500 group-hover:text-gray-300'
                  }`}>
                    {getIcon(idx)}
                  </div>
                  <span className={`font-bold text-lg md:text-xl transition-colors ${
                    openIndex === idx ? 'text-white' : 'text-gray-300'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                
                <div className={`flex-shrink-0 transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}>
                  {openIndex === idx ? (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                       <Minus className="w-5 h-5 text-relay-accent" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                       <Plus className="w-5 h-5 text-gray-500" />
                    </div>
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out relative ${
                  openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                {/* Scanner Line Effect */}
                {openIndex === idx && (
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-relay-accent/50 to-transparent animate-pulse"></div>
                )}
                
                <div className="px-6 pb-8 md:pl-20 text-gray-400 leading-relaxed text-base md:text-lg">
                  <div className="max-w-2xl">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-[40px] bg-gradient-to-br from-relay-surface to-[#0d0d17] border border-white/5 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-8">Our team is ready to help you navigate your global hiring journey.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-relay-accent transition-all">
              Contact Support
            </button>
            <button className="text-white font-bold hover:text-relay-accent transition-colors">
              Read Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;