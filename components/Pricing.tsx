import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Plus, 
  Minus,
  FileText,
  BadgeCheck,
  ShieldAlert,
  PieChart,
  HelpCircle,
  TrendingUp,
  ChevronDown
} from 'lucide-react';
import PricingCalculator from './PricingCalculator';

interface PricingProps {
  onNavigateToSignup: () => void;
  onContactSales: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigateToSignup, onContactSales }) => {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a12] relative overflow-hidden min-h-screen">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-relay-purple/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-relay-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-relay-accent to-relay-purple">Hiring Models</span>
          </h1>
          <p className="text-xl text-gray-400">
            From your first hire to building a full offshore engineering hub.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="hidden lg:block overflow-hidden rounded-[40px] border border-white/10 bg-[#13131f]/30 backdrop-blur-xl mb-24">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-8 w-1/4"></th>
                <th className="p-8 w-1/4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Free to browse</span>
                    <h3 className="text-3xl font-display font-bold text-white">Discover</h3>
                  </div>
                </th>
                <th className="p-8 w-1/4 bg-white/[0.03] relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-relay-accent"></div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                       <span className="text-xs font-bold text-relay-accent uppercase tracking-widest">Most Popular</span>
                       <Star className="w-3 h-3 text-relay-accent fill-current" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-white">Grow</h3>
                  </div>
                </th>
                <th className="p-8 w-1/4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-relay-purple uppercase tracking-widest">Best Value</span>
                    <h3 className="text-3xl font-display font-bold text-white">Scale</h3>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* ROW: PRICING */}
              <tr className="border-b border-white/5 bg-white/[0.01]">
                <td className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">Pricing</td>
                <td className="p-8">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">$0 <span className="text-sm font-normal text-gray-500">monthly</span></div>
                    <div className="text-sm text-gray-400">10% placement fee</div>
                  </div>
                </td>
                <td className="p-8 bg-white/[0.03]">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">$499 <span className="text-sm font-normal text-gray-500">monthly</span></div>
                    <div className="text-sm text-relay-accent font-bold">5% placement fee</div>
                  </div>
                </td>
                <td className="p-8">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">Included</div>
                    <div className="text-sm text-relay-purple font-bold">25% management fee</div>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest">Best For</td>
                <td className="p-8 text-gray-300 text-sm leading-relaxed">First hire, testing African talent</td>
                <td className="p-8 text-gray-300 text-sm leading-relaxed bg-white/[0.03]">Hiring 3-10 engineers/year</td>
                <td className="p-8 text-gray-300 text-sm leading-relaxed">Building a team of 10+ engineers</td>
              </tr>
              <tr>
                <td className="p-8 text-xs font-bold text-gray-500 uppercase tracking-widest align-top pt-10">Features</td>
                <td className="p-8 space-y-4 align-top pt-10">
                  <FeatureCheck text="Browse unlimited profiles" />
                  <FeatureCheck text="Request introductions" />
                  <FeatureCheck text="30-day guarantee" />
                  <FeatureCheck text="Email support" />
                </td>
                <td className="p-8 space-y-4 align-top pt-10 bg-white/[0.03]">
                  <FeatureCheck text="Everything in Discover" highlight />
                  <FeatureCheck text="50% lower placement fees" highlight />
                  <FeatureCheck text="Priority matching" highlight />
                  <FeatureCheck text="Slack support" highlight />
                </td>
                <td className="p-8 space-y-4 align-top pt-10">
                  <FeatureCheck text="Everything in Grow" isPurple />
                  <FeatureCheck text="EOR (We employ the talent)" isPurple />
                  <FeatureCheck text="Tax & Compliance Handling" isPurple />
                  <FeatureCheck text="IP Rights Assignment" isPurple />
                  <FeatureCheck text="90-day guarantee" isPurple />
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="p-8">
                  <button onClick={onNavigateToSignup} className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">Start Browsing</button>
                </td>
                <td className="p-8 bg-white/[0.03]">
                  <button onClick={onNavigateToSignup} className="w-full py-4 rounded-2xl bg-relay-accent text-black font-bold shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:bg-white transition-all flex items-center justify-center gap-2">Subscribe Now <Zap className="w-4 h-4 fill-current" /></button>
                </td>
                <td className="p-8">
                  <button onClick={onContactSales} className="w-full py-4 rounded-2xl bg-relay-purple text-white font-bold hover:bg-[#6000e0] transition-all flex items-center justify-center gap-2">Request Demo <ArrowRight className="w-4 h-4" /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pricing Calculator Section */}
        <PricingCalculator />

        {/* TRANSPARENCY BREAKDOWN (The Killer Feature) */}
        <section className="py-24 border-t border-white/5">
           <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6">Where Your Money Goes <span className="text-relay-purple">(Scale Tier)</span></h2>
              <p className="text-xl text-gray-400">Unlike platforms that hide 40-50% markups, we show you exactly where your investment is allocated.</p>
           </div>

           <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                 {/* Visual Split Bar */}
                 <div className="relative h-20 w-full rounded-2xl overflow-hidden bg-white/5 flex border border-white/10">
                    <div className="h-full bg-relay-accent w-[80%] flex items-center px-6 relative group cursor-help shadow-[0_0_30px_rgba(0,255,157,0.2)]">
                       <span className="text-black font-bold text-lg">80% to Engineer</span>
                       {/* Tooltip-like popup on bar */}
                       <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white text-black text-xs font-bold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          $60,000 of $75,000 total investment
                       </div>
                    </div>
                    <div className="h-full bg-relay-purple w-[20%] flex items-center justify-end px-6 group cursor-help">
                       <span className="text-white font-bold text-lg">20% Relay</span>
                       <div className="absolute bottom-full left-3/4 mb-4 bg-relay-purple text-white text-xs font-bold py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          $15,000 Management Fee
                       </div>
                    </div>
                 </div>

                 {/* Sub-breakdown Cards */}
                 <div className="grid sm:grid-cols-2 gap-4">
                    <BreakdownItem label="Payroll & tax compliance" percent="8%" icon={ShieldCheck} color="relay-accent" />
                    <BreakdownItem label="Legal, contracts, insurance" percent="5%" icon={BadgeCheck} color="white" />
                    <BreakdownItem label="Currency conversion & FX risk" percent="4%" icon={TrendingUp} color="relay-purple" />
                    <BreakdownItem label="Account management & support" percent="3%" icon={Star} color="relay-accent" />
                    <BreakdownItem label="Platform operations & profit" percent="5%" icon={Zap} color="white" />
                 </div>
              </div>

              <div className="lg:col-span-5 p-10 rounded-[40px] bg-white/[0.02] border border-white/10">
                 <p className="text-lg text-gray-300 leading-relaxed italic">
                    "We show you exactly where your money goes. Our 25% fee covers real infrastructure—payroll, global compliance, legal, and dedicated support. We make a fair margin while ensuring our engineers earn a top-tier global wage."
                 </p>
                 <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-relay-accent/10 flex items-center justify-center text-relay-accent">
                       <BadgeCheck className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="font-bold">Verified Fairness</p>
                       <p className="text-xs text-gray-500 uppercase tracking-widest">Global Pay Standard v2.1</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* EXAMPLE INVOICES SECTION */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">What Your Invoice Looks Like</h2>
            <p className="text-gray-400">Simple. Transparent. Fair. You see exactly what you're paying for.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Other Platforms */}
            <div className="glass-card p-10 rounded-[30px] border border-white/5 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center gap-3 mb-8">
                 <ShieldAlert className="w-6 h-6 text-gray-500" />
                 <h3 className="text-2xl font-bold text-gray-400">Other Platforms</h3>
              </div>
              <div className="bg-[#050508] p-8 rounded-2xl border border-white/5 space-y-6 font-mono text-sm mb-10">
                 <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-gray-600">INVOICE #2025-03-001</span>
                    <span className="text-gray-600">DUE: MARCH 31</span>
                 </div>
                 <div className="flex justify-between items-center py-4">
                    <span className="text-gray-400">Professional Services</span>
                    <span className="text-gray-300 font-bold">$8,333.00</span>
                 </div>
                 <div className="border-t border-white/10 pt-4 flex justify-between">
                    <span className="text-gray-500">TOTAL DUE</span>
                    <span className="text-white text-xl">$8,333.00</span>
                 </div>
              </div>
              <p className="text-gray-500 text-sm italic">
                [No breakdown. No transparency. Client has no idea what the engineer actually earns.]
              </p>
            </div>

            {/* Relay Invoice */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-relay-accent to-relay-purple rounded-[32px] blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative glass-card p-10 rounded-[30px] border border-relay-accent/30 bg-[#0a0a12]">
                <div className="flex items-center justify-between mb-8">
                   <div className="flex items-center gap-3">
                      <BadgeCheck className="w-6 h-6 text-relay-accent" />
                      <h3 className="text-2xl font-bold text-white">Relay <span className="text-relay-accent text-xs font-display">(Scale Tier)</span></h3>
                   </div>
                   <div className="text-[10px] font-mono font-bold bg-relay-accent/10 text-relay-accent px-2 py-1 rounded">VERIFIED</div>
                </div>
                
                <div className="bg-[#13131f] p-8 rounded-2xl border border-white/10 space-y-6 font-mono text-sm mb-8 relative">
                   <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-gray-500">REL-2025-03-001</span>
                      <span className="text-relay-accent font-bold">DUE: MARCH 31</span>
                   </div>
                   
                   <div className="space-y-3">
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Engineer: Ademola Okonkwo</div>
                      <div className="flex justify-between">
                         <span className="text-gray-400">Base Salary</span>
                         <span className="text-white">$5,000.00</span>
                      </div>
                      <div className="flex justify-between">
                         <span className="text-gray-400">Relay Mgmt Fee (25%)</span>
                         <span className="text-white">$1,250.00</span>
                      </div>
                   </div>

                   <div className="border-t-2 border-dashed border-white/10 pt-4 flex justify-between items-end">
                      <span className="text-gray-400 font-bold">TOTAL DUE</span>
                      <span className="text-relay-accent text-3xl font-display font-bold tracking-tight">$6,250.00</span>
                   </div>

                   <div className="grid grid-cols-2 gap-2 mt-4">
                      <InvoiceFeature text="Payroll processed" />
                      <div className="text-[9px] text-gray-600 flex items-center gap-1"><Check className="w-3 h-3 text-relay-accent"/> IP Rights Assigned</div>
                      <div className="text-[9px] text-gray-600 flex items-center gap-1"><Check className="w-3 h-3 text-relay-accent"/> Compliance active</div>
                      <div className="text-[9px] text-gray-600 flex items-center gap-1"><Check className="w-3 h-3 text-relay-accent"/> Guarantee active</div>
                   </div>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                   <div className="w-8 h-8 rounded-full bg-relay-accent/10 flex items-center justify-center text-relay-accent">
                      <HelpCircle className="w-4 h-4" />
                   </div>
                   <p>Your dedicated manager: <span className="text-white font-bold">sarah@relay.africa</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 border-t border-white/5">
           <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-display font-bold">Pricing <span className="accent-text">Questions</span></h2>
              </div>
              
              <div className="space-y-4">
                 <PricingFAQItem 
                    question="Can I switch tiers later?" 
                    answer="Yes! Start with Discover to test the waters, then upgrade to Grow or Scale anytime. We'll prorate your subscription and apply any credits instantly to your account."
                 />
                 <PricingFAQItem 
                    question="What if I hire 50 engineers? Do you offer volume discounts?" 
                    answer="Absolutely. For companies scaling beyond 20+ engineers, we provide custom Enterprise agreements with volume-based fee reductions and dedicated on-site infrastructure support."
                 />
                 <PricingFAQItem 
                    question="Do engineers pay any fees?" 
                    answer="No. Relay is zero-fee for talent. Engineers keep 100% of their base salary. We believe this alignment is critical for long-term retention and high-quality output."
                 />
                 <PricingFAQItem 
                    question="What's included in the 25% Scale fee?" 
                    answer="Everything: global payroll administration, local tax compliance, legal employment contracts, IP assignment protection, insurance coverage, FX risk management, and your dedicated Success Manager."
                 />
                 <PricingFAQItem 
                    question="How does the guarantee work?" 
                    answer="If a hire isn't a perfect fit within your tier's guarantee window (30-90 days), we replace them at no cost. You only pay for the time worked; the search for the new hire is covered by your fee."
                 />
              </div>
           </div>
        </section>

        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-relay-accent" />
            All tiers include our standard IP Protection and Data Security agreements.
          </p>
        </div>
      </div>
    </div>
  );
};

const FeatureCheck: React.FC<{ text: string; highlight?: boolean; isPurple?: boolean }> = ({ text, highlight, isPurple }) => (
  <div className="flex items-center gap-3">
    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
      isPurple ? 'bg-relay-purple/10 text-relay-purple' : 
      highlight ? 'bg-relay-accent/10 text-relay-accent' : 'bg-white/5 text-gray-400'
    }`}>
      <Check className="w-3 h-3" />
    </div>
    <span className={`text-sm ${highlight || isPurple ? 'text-white font-medium' : 'text-gray-400'}`}>{text}</span>
  </div>
);

const FeatureCross: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 opacity-30">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-gray-500">
      <X className="w-3 h-3" />
    </div>
    <span className="text-sm text-gray-500">{text}</span>
  </div>
);

const BreakdownItem: React.FC<{ label: string; percent: string; icon: any; color: string }> = ({ label, percent, icon: Icon, color }) => (
  <div className="p-4 rounded-xl bg-white/[0.04] border border-white/5 flex items-center gap-4 group hover:border-white/20 transition-all">
     <div className={`w-10 h-10 rounded-lg bg-${color}/10 flex items-center justify-center text-${color}`}>
        <Icon className="w-5 h-5" />
     </div>
     <div className="flex-1">
        <div className="flex justify-between items-center">
           <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{percent}</span>
        </div>
        <p className="text-sm font-medium text-gray-300">{label}</p>
     </div>
  </div>
);

const InvoiceFeature: React.FC<{ text: string }> = ({ text }) => (
  <div className="text-[9px] text-gray-600 flex items-center gap-1">
     <Check className="w-3 h-3 text-relay-accent" />
     {text}
  </div>
);

const PricingFAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all ${isOpen ? 'bg-white/[0.04] border-relay-accent/30' : 'bg-white/[0.02] border-white/5'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between"
      >
        <span className={`font-bold transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-relay-accent" /> : <Plus className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-sm animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Pricing;