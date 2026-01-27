import React from 'react';
import { ArrowRight, Check, X, ShieldAlert, BadgeCheck, FileText } from 'lucide-react';
import { View } from '../types';

interface TransparencyPromiseProps {
  onNavigateToPricing: () => void;
}

const TransparencyPromise: React.FC<TransparencyPromiseProps> = ({ onNavigateToPricing }) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#e0fff3] to-[#ccfbf1]">
      {/* Decorative futuristic elements for light theme */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-relay-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-relay-accent/30 text-relay-accent font-bold text-xs uppercase tracking-widest mb-6">
          The Transparency Promise
        </div>
        
        <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
          The First Fully <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Transparent</span> Talent Platform
        </h2>
        
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-16 font-medium">
          See exactly what you pay—and what your engineer earns. No hidden fees. No surprises.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT BOX: OTHER PLATFORMS */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gray-200 rounded-[32px] blur opacity-25"></div>
            <div className="relative h-full bg-white/40 backdrop-blur-md border border-gray-300/50 rounded-[30px] p-8 flex flex-col grayscale group-hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Other Platforms</h3>
              </div>

              <div className="bg-white/60 border border-gray-200 rounded-2xl p-6 mb-8 text-left shadow-sm">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Monthly Invoice</span>
                  <span className="text-xs font-mono text-gray-400">#INV-00129</span>
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Amount Due</p>
                    <p className="text-4xl font-display font-bold text-gray-900">$8,333<span className="text-lg text-gray-400">/mo</span></p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-left flex-grow">
                <div className="flex items-start gap-3 p-4 bg-gray-100/50 rounded-xl border border-dashed border-gray-300">
                  <X className="w-5 h-5 text-red-500 mt-0.5" />
                  <p className="text-gray-600 text-sm font-medium">
                    [Client has no idea what engineer earns]
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-100/50 rounded-xl border border-dashed border-gray-300">
                  <X className="w-5 h-5 text-red-500 mt-0.5" />
                  <p className="text-gray-600 text-sm font-medium">
                    [Hidden markup: 40-50%]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX: RELAY */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-relay-accent to-emerald-400 rounded-[32px] blur opacity-30 animate-pulse"></div>
            <div className="relative h-full bg-white rounded-[30px] p-8 border border-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-relay-accent/20 flex items-center justify-center">
                    <BadgeCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Relay <span className="text-relay-accent text-sm font-display">(Scale Tier)</span></h3>
                </div>
                <div className="text-[10px] font-mono font-bold bg-relay-accent/10 text-emerald-700 px-2 py-1 rounded">V2.5 VERIFIED</div>
              </div>

              <div className="bg-gray-50 border border-relay-accent/20 rounded-2xl p-6 mb-8 text-left shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <FileText className="w-24 h-24" />
                </div>
                
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Monthly Invoice - March 2025</span>
                  <span className="text-xs font-mono text-relay-accent font-bold">#REL-2025-309</span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Engineer</span>
                    <span className="text-gray-900 font-bold">Ademola Okonkwo</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Base Salary</span>
                    <span className="text-gray-900 font-mono font-bold">$5,000.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Relay Management Fee (25%)</span>
                    <span className="text-gray-900 font-mono font-bold">$1,250.00</span>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-dashed border-gray-200 flex justify-between items-end">
                  <span className="text-sm font-bold text-gray-900">Total Due</span>
                  <span className="text-3xl font-display font-bold text-emerald-600">$6,250.00</span>
                </div>
              </div>

              <div className="space-y-4 text-left flex-grow">
                <FeatureRow text="Transparent breakdown" />
                <FeatureRow text="You see what engineer earns" />
                <FeatureRow text="Fair 25% fee (vs 40-50% hidden)" />
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16">
          <button 
            onClick={onNavigateToPricing}
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1"
          >
            See Full Pricing Breakdown
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const FeatureRow: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
      <Check className="w-4 h-4 text-emerald-600" />
    </div>
    <span className="text-gray-700 font-semibold">{text}</span>
  </div>
);

export default TransparencyPromise;