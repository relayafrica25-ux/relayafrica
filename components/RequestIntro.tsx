
import React, { useState } from 'react';
import { ArrowLeft, Loader2, CheckCircle, Info, ShieldCheck, ArrowRight, Building2, User, Mail, Phone, Briefcase, Calendar, Handshake, ChevronDown, Check, MailCheck, MessageCircle, CreditCard, Zap } from 'lucide-react';
import { Engineer } from '../types';

interface RequestIntroProps {
  engineer: Engineer;
  onBack: () => void;
  onBrowseEngineers?: () => void;
  onSeePricing?: () => void;
}

const RequestIntro: React.FC<RequestIntroProps> = ({ engineer, onBack, onBrowseEngineers, onSeePricing }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    yourName: '',
    yourTitle: '',
    email: '',
    phone: '',
    hiringRole: '',
    startDate: 'Immediately',
    employmentType: 'Full-time',
    additionalInfo: '',
    pricingTier: 'Scale (25% all-in, you handle everything)',
    agreedToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToTerms) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-4 flex items-center justify-center animate-fade-in bg-[#0a0a12]">
        <div className="max-w-2xl w-full glass-card p-8 md:p-12 rounded-[40px] border border-relay-accent/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-relay-accent to-relay-purple"></div>
          
          {/* Large Success Icon */}
          <div className="w-24 h-24 rounded-full bg-relay-accent/10 border border-relay-accent/30 flex items-center justify-center text-relay-accent mx-auto mb-8 shadow-[0_0_40px_rgba(0,255,157,0.2)]">
            <CheckCircle className="w-12 h-12" />
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-6">Introduction Request Sent!</h2>
          
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Thanks for your interest in <span className="text-white font-bold">{engineer.name}</span>.<br />
            We've received your request and will connect you within 24 hours via email at <span className="text-relay-accent font-medium">{formData.email || 'your email'}</span>.
          </p>

          {/* Next Steps Section */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 mb-10 text-left">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-relay-accent" /> Next Steps
            </h3>
            <ul className="space-y-4">
              <NextStepItem icon={MailCheck} text="Check your inbox for introduction email" />
              <NextStepItem icon={MessageCircle} text="Schedule an interview directly with the engineer" />
              <NextStepItem icon={CreditCard} text="If it's a fit, choose your pricing tier and hire" />
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-10 text-sm text-gray-500">
            Questions? Email us at <a href="mailto:hello@relay.africa" className="text-relay-accent hover:underline">hello@relay.africa</a> or call <a href="tel:+2348148475033" className="text-relay-accent hover:underline">+234 814 847 5033</a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBrowseEngineers}
              className="bg-relay-accent hover:bg-white text-black px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              Browse More Engineers
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onSeePricing}
              className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-relay-purple/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-relay-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 animate-fade-in-up">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Profile
        </button>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Request Introduction to <span className="accent-text">{engineer.name}</span>
          </h1>
          <p className="text-xl text-gray-400">Tell us about your role and we'll connect you within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Your Details */}
          <div className="glass-card p-8 md:p-10 rounded-[40px] border border-white/5 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-relay-accent">
                <User className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">Your Details</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <InputGroup 
                label="Company Name*" 
                icon={Building2} 
                placeholder="Acme Inc." 
                value={formData.companyName}
                onChange={(v) => setFormData({...formData, companyName: v})}
                required
              />
              <InputGroup 
                label="Your Name*" 
                icon={User} 
                placeholder="John Smith" 
                value={formData.yourName}
                onChange={(v) => setFormData({...formData, yourName: v})}
                required
              />
              <InputGroup 
                label="Your Title/Role*" 
                icon={Briefcase} 
                placeholder="CTO or Engineering Manager" 
                value={formData.yourTitle}
                onChange={(v) => setFormData({...formData, yourTitle: v})}
                required
              />
              <InputGroup 
                label="Email Address*" 
                icon={Mail} 
                type="email"
                placeholder="john@acme.com" 
                value={formData.email}
                onChange={(v) => setFormData({...formData, email: v})}
                required
              />
              <InputGroup 
                label="Phone Number (Optional)" 
                icon={Phone} 
                type="tel"
                placeholder="+44 20 XXXX XXXX" 
                value={formData.phone}
                onChange={(v) => setFormData({...formData, phone: v})}
              />
            </div>
          </div>

          {/* Section 2: Hiring Details */}
          <div className="glass-card p-8 md:p-10 rounded-[40px] border border-white/5 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-relay-purple">
                <Calendar className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">Hiring Details</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <InputGroup 
                  label="Role You're Hiring For*" 
                  icon={Briefcase} 
                  placeholder="Senior Backend Engineer" 
                  value={formData.hiringRole}
                  onChange={(v) => setFormData({...formData, hiringRole: v})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Expected Start Date*</label>
                <div className="relative">
                  <select 
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-3.5 px-4 text-white focus:outline-none focus:border-relay-accent transition-all appearance-none cursor-pointer"
                  >
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1-3 months</option>
                    <option>3+ months</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Employment Type*</label>
                <div className="relative">
                  <select 
                    value={formData.employmentType}
                    onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
                    className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-3.5 px-4 text-white focus:outline-none focus:border-relay-accent transition-all appearance-none cursor-pointer"
                  >
                    <option>Full-time</option>
                    <option>Contract</option>
                    <option>Part-time</option>
                    <option>Not sure yet</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Additional Information */}
          <div className="glass-card p-8 md:p-10 rounded-[40px] border border-white/5 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-500">
                <Info className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold">Additional Information</h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tell us about your company and the role (Optional)</label>
                  <span className="text-[10px] text-gray-600 font-mono">{formData.additionalInfo.length}/500</span>
                </div>
                <textarea 
                  maxLength={500}
                  rows={4}
                  placeholder="We're a fintech startup building payment infrastructure for e-commerce..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                  className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-2xl py-4 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-relay-accent transition-all resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Which pricing tier are you interested in?*</label>
                <div className="relative">
                  <Handshake className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <select 
                    value={formData.pricingTier}
                    onChange={(e) => setFormData({...formData, pricingTier: e.target.value})}
                    className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-relay-accent transition-all appearance-none cursor-pointer"
                  >
                    <option>Discover (10% placement fee, I handle payroll)</option>
                    <option>Grow ($499/month + 5% fees)</option>
                    <option>Scale (25% all-in, you handle everything)</option>
                    <option>Not sure, help me decide</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Consent */}
          <div className="p-8 space-y-8">
            <label className="flex items-start gap-4 cursor-pointer group">
              <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded border transition-all flex items-center justify-center ${
                formData.agreedToTerms ? 'bg-relay-accent border-relay-accent' : 'bg-white/5 border-white/20 group-hover:border-white/40'
              }`}>
                {formData.agreedToTerms && <Check className="w-3 h-3 text-black font-bold" />}
              </div>
              <input 
                type="checkbox" 
                className="hidden" 
                checked={formData.agreedToTerms}
                onChange={() => setFormData({...formData, agreedToTerms: !formData.agreedToTerms})}
              />
              <span className="text-sm text-gray-400 leading-relaxed">
                I agree to Relay's <button type="button" className="text-white hover:underline">terms</button> and 30-90 day replacement guarantee policy. We will treat your data with absolute privacy.
              </span>
            </label>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                type="submit"
                disabled={loading || !formData.agreedToTerms}
                className={`flex-1 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 transform active:scale-[0.98] ${
                  loading || !formData.agreedToTerms 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50' 
                  : 'bg-relay-accent text-black shadow-[0_0_30px_rgba(0,255,157,0.3)] hover:shadow-[0_0_40px_rgba(0,255,157,0.5)]'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Introduction Request
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
              <button 
                type="button"
                onClick={onBack}
                className="py-5 px-10 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

const NextStepItem: React.FC<{ icon: any, text: string }> = ({ icon: Icon, text }) => (
  <li className="flex items-center gap-4 group">
    <div className="w-10 h-10 rounded-xl bg-relay-accent/10 border border-relay-accent/20 flex items-center justify-center text-relay-accent group-hover:bg-relay-accent group-hover:text-black transition-all">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-gray-300 font-medium">{text}</span>
  </li>
);

const InputGroup: React.FC<{
  label: string;
  icon: any;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}> = ({ label, icon: Icon, placeholder, value, onChange, type = "text", required }) => (
  <div className="space-y-2 group">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-relay-accent transition-colors">{label}</label>
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-relay-accent transition-colors" />
      <input 
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-relay-accent transition-all"
      />
    </div>
  </div>
);

export default RequestIntro;
