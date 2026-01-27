import React, { useState, useMemo } from 'react';
import { 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  Info, 
  TrendingDown, 
  ArrowRight,
  Zap,
  ShieldCheck,
  Globe
} from 'lucide-react';

type Tier = 'Discover' | 'Grow' | 'Scale';
type Timeline = 'Monthly' | 'Quarterly' | 'Yearly';

const PricingCalculator: React.FC = () => {
  const [tier, setTier] = useState<Tier>('Scale');
  const [salary, setSalary] = useState(60000);
  const [numEngineers, setNumEngineers] = useState(1);
  const [timeline, setTimeline] = useState<Timeline>('Yearly');

  const calculations = useMemo(() => {
    const monthlySalary = salary / 12;
    let relayFeeYearly = 0;
    let relayFeeMonthly = 0;
    let oneTimeFee = 0;

    if (tier === 'Discover') {
      oneTimeFee = salary * 0.10;
      relayFeeYearly = oneTimeFee;
      relayFeeMonthly = 0;
    } else if (tier === 'Grow') {
      oneTimeFee = salary * 0.05;
      relayFeeMonthly = 499;
      relayFeeYearly = oneTimeFee + (relayFeeMonthly * 12);
    } else {
      // Scale Tier
      relayFeeYearly = salary * 0.25;
      relayFeeMonthly = relayFeeYearly / 12;
    }

    const totalPerEngYearly = salary + relayFeeYearly;
    const totalPerEngMonthly = (salary / 12) + relayFeeMonthly;
    
    const totalAnnualCost = totalPerEngYearly * numEngineers;
    const totalMonthlyCost = totalPerEngMonthly * numEngineers;

    // Comparison Benchmarks
    const europeCostPerEng = 87000; // ~80k EUR
    const europeTotal = europeCostPerEng * numEngineers;
    const europeSavings = europeTotal - totalAnnualCost;
    const europeSavingsPercent = Math.round((europeSavings / europeTotal) * 100);

    const toptalMarkup = 1.40;
    const toptalTotal = (salary * toptalMarkup) * numEngineers;
    const toptalSavings = toptalTotal - totalAnnualCost;
    const toptalSavingsPercent = Math.round((toptalSavings / toptalTotal) * 100);

    return {
      monthlySalary,
      relayFeeYearly,
      relayFeeMonthly,
      totalPerEngYearly,
      totalPerEngMonthly,
      totalAnnualCost,
      totalMonthlyCost,
      europeTotal,
      europeSavings,
      europeSavingsPercent,
      toptalTotal,
      toptalSavings,
      toptalSavingsPercent
    };
  }, [tier, salary, numEngineers]);

  const includedFeatures = {
    Discover: [
      "Access to pre-vetted network",
      "Introductions within 48h",
      "30-day replacement guarantee",
      "Standard IP protection"
    ],
    Grow: [
      "Everything in Discover",
      "50% lower placement fees",
      "Priority candidate matching",
      "Dedicated account manager",
      "60-day replacement guarantee",
      "Slack-first communication"
    ],
    Scale: [
      "Payroll processing",
      "Tax compliance & filing",
      "Employment contracts & IP assignment",
      "Insurance & legal protection",
      "Currency conversion & FX risk",
      "Payment guarantee",
      "Dedicated account manager"
    ]
  };

  return (
    <section className="py-24 bg-[#0d0d17] relative rounded-[40px] border border-white/5 mb-24 overflow-hidden">
      {/* Visual background for calculator */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-relay-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Pricing <span className="accent-text">Calculator</span></h2>
          <p className="text-gray-400">Estimate your investment and see the ROI of African talent.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-10">
            <div className="glass-card p-8 rounded-[32px] border border-white/5 space-y-8">
              
              {/* Tier Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Select Tier</label>
                <div className="flex bg-[#0a0a12] p-1 rounded-xl border border-white/10">
                  {(['Discover', 'Grow', 'Scale'] as Tier[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTier(t)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all ${
                        tier === t 
                        ? (t === 'Scale' ? 'bg-relay-purple text-white shadow-lg' : 'bg-relay-accent text-black shadow-lg') 
                        : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Salary Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300">Engineer Annual Salary</label>
                  <span className="text-relay-accent font-display font-bold text-xl">${(salary/1000).toFixed(0)}K</span>
                </div>
                <input 
                  type="range"
                  min="30000"
                  max="100000"
                  step="5000"
                  value={salary}
                  onChange={(e) => setSalary(parseInt(e.target.value))}
                  className="w-full accent-relay-accent h-2 bg-white/5 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>$30K</span>
                  <span>$60K (Avg)</span>
                  <span>$100K</span>
                </div>
              </div>

              {/* Headcount Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gray-300">Number of Engineers</label>
                  <span className="text-relay-accent font-display font-bold text-xl">{numEngineers}</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="20"
                  value={numEngineers}
                  onChange={(e) => setNumEngineers(parseInt(e.target.value))}
                  className="w-full accent-relay-accent h-2 bg-white/5 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  <span>1</span>
                  <span>10</span>
                  <span>20</span>
                </div>
              </div>

              {/* Timeline Toggle */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Hiring Timeline</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Monthly', 'Quarterly', 'Yearly'] as Timeline[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`py-2 px-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${
                        timeline === t 
                        ? 'border-relay-accent text-relay-accent bg-relay-accent/5' 
                        : 'border-white/5 text-gray-500 hover:border-white/20'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Savings Benchmarks */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] px-4">Performance Benchmarks</h3>
              
              <div className="glass-card p-6 rounded-2xl border border-white/5 group hover:border-relay-accent/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-2">
                     <Globe className="w-4 h-4 text-gray-500" />
                     <span className="text-sm font-bold text-gray-300">vs. Hiring in Europe</span>
                   </div>
                   <div className="text-xs font-bold text-relay-accent">-{calculations.europeSavingsPercent}% Cost</div>
                </div>
                <div className="flex justify-between items-baseline">
                   <p className="text-xs text-gray-500">{numEngineers} Eng. @ €80K Avg.</p>
                   <p className="text-relay-accent font-bold">SAVINGS: ${calculations.europeSavings.toLocaleString()}/yr</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/5 group hover:border-relay-purple/30 transition-all">
                <div className="flex items-center justify-between mb-2">
                   <div className="flex items-center gap-2">
                     <ShieldCheck className="w-4 h-4 text-gray-500" />
                     <span className="text-sm font-bold text-gray-300">vs. Toptal (40% Markup)</span>
                   </div>
                   <div className="text-xs font-bold text-relay-purple">-{calculations.toptalSavingsPercent}% Cost</div>
                </div>
                <div className="flex justify-between items-baseline">
                   <p className="text-xs text-gray-500">Premium Agency Markup</p>
                   <p className="text-relay-purple font-bold">SAVINGS: ${calculations.toptalSavings.toLocaleString()}/yr</p>
                </div>
              </div>
            </div>
          </div>

          {/* Result Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[40px] border border-white/10 overflow-hidden shadow-2xl bg-gradient-to-b from-[#13131f] to-[#0a0a12]">
              
              <div className="p-10 border-b border-white/5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                  <div>
                    <div className="text-xs font-bold text-relay-accent uppercase tracking-widest mb-1">Engineer Earns</div>
                    <div className="text-3xl font-display font-bold">${salary.toLocaleString()}<span className="text-lg text-gray-500 font-normal">/year</span></div>
                    <div className="text-sm text-gray-500 mt-1">(${(salary/12).toLocaleString(undefined, {maximumFractionDigits: 0})}/month)</div>
                  </div>
                  <div className={`px-4 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider ${tier === 'Scale' ? 'bg-relay-purple/10 border-relay-purple text-relay-purple' : 'bg-relay-accent/10 border-relay-accent text-relay-accent'}`}>
                    {tier} Tier
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Base Salary</span>
                    <span className="text-white font-mono">${salary.toLocaleString()}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Relay Management Fee {tier === 'Scale' ? '(25%)' : ''}</span>
                    <span className="text-white font-mono">+${calculations.relayFeeYearly.toLocaleString()}.00</span>
                  </div>
                  <div className="pt-4 border-t border-dashed border-white/10 flex justify-between items-end">
                    <div className="text-sm font-bold text-white uppercase tracking-wider">Total Per Engineer</div>
                    <div className="text-right">
                      <div className={`text-2xl font-display font-bold ${tier === 'Scale' ? 'text-relay-purple' : 'text-relay-accent'}`}>${calculations.totalPerEngYearly.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">(${(calculations.totalPerEngMonthly).toLocaleString(undefined, {maximumFractionDigits: 0})}/mo)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-white/[0.02]">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-10">
                   <div>
                     <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">For {numEngineers} Engineers</div>
                     <div className="text-5xl font-display font-bold text-white tracking-tighter">${calculations.totalAnnualCost.toLocaleString()}</div>
                     <div className="text-sm text-gray-400 mt-2">Estimated Monthly Billing: <span className="text-white font-bold">${calculations.totalMonthlyCost.toLocaleString(undefined, {maximumFractionDigits: 0})}/month</span></div>
                   </div>
                   <div className="flex flex-col gap-2 w-full sm:w-auto">
                     <button className="bg-relay-accent hover:bg-white text-black font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)] flex items-center justify-center gap-2 group">
                       Talk to Sales
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </button>
                     <button className="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-white transition-colors py-2">
                       Request Custom Quote
                     </button>
                   </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {includedFeatures[tier].map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${tier === 'Scale' ? 'text-relay-purple' : 'text-relay-accent'}`} />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#0a0a12] border border-white/5 relative group overflow-hidden">
                     <div className="absolute inset-0 bg-relay-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="flex items-center gap-2 text-relay-accent mb-3 relative z-10">
                        <Zap className="w-4 h-4 fill-current" />
                        <span className="text-xs font-bold uppercase tracking-widest">Global Standard</span>
                     </div>
                     <p className="text-xs text-gray-500 leading-relaxed relative z-10">
                       Our fee covers full Employer of Record (EOR) services in the Scale tier, ensuring your IP is safe and your team is fully compliant with local labor laws.
                     </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;