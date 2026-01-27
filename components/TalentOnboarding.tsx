import React, { useState, useRef } from 'react';
import { 
  Upload, X, Check, Plus, Loader2, ChevronDown, AlertCircle, Info,
  User, Mail, Phone, MapPin, Linkedin, Briefcase, Code, 
  Github, Globe, Cpu, Battery, Wifi, Camera, DollarSign, 
  Calendar, MessageSquare, FileText, ShieldCheck, ArrowRight, ArrowLeft,
  CheckCircle, Zap, MailCheck, MessageCircle, Clock
} from 'lucide-react';

interface TalentOnboardingProps {
  onComplete: () => void;
  onBrowseEngineers?: () => void;
  onHowItWorks?: () => void;
}

const TECH_STACK_OPTIONS = {
  Frontend: ['React', 'Vue', 'Angular', 'TypeScript', 'Next.js', 'Svelte'],
  Backend: ['Node.js', 'Python', 'Django', 'Go', 'Java', 'Ruby', 'PHP', '.NET'],
  Mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  Database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  'Cloud/DevOps': ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes']
};

const TalentOnboarding: React.FC<TalentOnboardingProps> = ({ onComplete, onBrowseEngineers, onHowItWorks }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State grouped by sections
  const [formData, setFormData] = useState({
    // Section 1
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    // Section 2
    currentTitle: '',
    yearsExp: '3-5',
    currentCompany: '',
    prevCompany: '',
    // Section 3
    primaryRole: 'Full-Stack Developer',
    techStack: [] as string[],
    otherTech: '',
    // Section 4
    github: '',
    website: '',
    project1Name: '',
    project1Url: '',
    project2Name: '',
    project2Url: '',
    bestProjectDesc: '',
    // Section 5
    ram: '16GB',
    processor: '',
    backupPower: 'Yes - Generator',
    quietWorkspace: 'Yes',
    // Section 6
    salary: '$50K-70K',
    availability: 'Immediately',
    arrangement: 'Open to both',
    timezones: 'Yes, fully',
    english: 'Fluent',
    // Section 7
    whyRemote: '',
    techChallenge: '',
    // Section 9
    consentTerms: false,
    consentFees: false,
    consentShare: false
  });

  const [files, setFiles] = useState<{
    speedtest: File | null;
    workspace: File | null;
    resume: File | null;
    photo: File | null;
  }>({
    speedtest: null,
    workspace: null,
    resume: null,
    photo: null
  });

  const handleFileChange = (key: keyof typeof files, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(prev => ({ ...prev, [key]: e.target.files![0] }));
    }
  };

  const toggleTech = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.includes(tech) 
        ? prev.techStack.filter(t => t !== tech) 
        : [...prev.techStack, tech]
    }));
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev + 1);
  };
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API upload
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  // SUCCESS VIEW
  if (success) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-4 flex items-center justify-center bg-[#0a0a12] animate-fade-in">
        <div className="max-w-2xl w-full glass-card p-8 md:p-12 rounded-[40px] border border-relay-accent/30 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-relay-accent to-relay-purple"></div>
          
          <div className="w-24 h-24 rounded-full bg-relay-accent/10 border border-relay-accent/30 flex items-center justify-center text-relay-accent mx-auto mb-8 shadow-[0_0_40px_rgba(0,255,157,0.2)]">
            <CheckCircle className="w-12 h-12" />
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-6">Application Submitted!</h2>
          
          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Thanks for applying to Relay, <span className="text-white font-bold">{formData.fullName || 'Talent'}</span>!
          </p>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 mb-10 text-left">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-relay-accent" /> What Happens Next
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 font-mono text-xs">01</div>
                <div>
                  <p className="font-bold text-white mb-1">Week 1 Review</p>
                  <p className="text-xs text-gray-500">We review all applications (we receive 100+ per week).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 font-mono text-xs">02</div>
                <div>
                  <p className="font-bold text-white mb-1">Technical Assessment</p>
                  <p className="text-xs text-gray-500">If selected: You'll receive a technical assessment via email (2-hour test).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 font-mono text-xs">03</div>
                <div>
                  <p className="font-bold text-white mb-1">Verification</p>
                  <p className="text-xs text-gray-500">After passing: Infrastructure and soft skills verification.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-gray-400 font-mono text-xs">04</div>
                <div>
                  <p className="font-bold text-white mb-1">Final Interview</p>
                  <p className="text-xs text-gray-500">Final step: 15-minute video interview.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-relay-accent/20 border border-relay-accent/30 flex items-center justify-center flex-shrink-0 text-relay-accent font-mono text-xs">05</div>
                <div>
                  <p className="font-bold text-relay-accent mb-1">Go Live</p>
                  <p className="text-xs text-gray-500">If approved: Your profile goes live and companies can request introductions.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
              <Clock className="w-5 h-5 text-relay-purple" />
              <p className="text-sm font-bold text-white uppercase tracking-widest">Timeline: 1-2 weeks total</p>
            </div>
          </div>

          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 mb-10 text-left">
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-red-400 font-bold">Important:</span> We only approve 3% of applicants. If you don't hear from us within 2 weeks, unfortunately your application wasn't successful this time.
            </p>
          </div>

          <p className="text-sm text-gray-500 mb-10">
            Check your email at <span className="text-white font-medium">{formData.email || 'your email'}</span> for updates.<br />
            Questions? Email <a href="mailto:apply@relay.africa" className="text-relay-accent hover:underline">apply@relay.africa</a>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onBrowseEngineers}
              className="bg-relay-accent hover:bg-white text-black px-10 py-5 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group"
            >
              View Sample Engineer Profiles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onHowItWorks}
              className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Learn About Our Vetting Process
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 bg-[#0a0a12] text-white">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Progress Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">Talent <span className="accent-text">Application</span></h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 border ${
                  step >= i ? 'bg-relay-accent border-relay-accent text-black shadow-[0_0_15px_rgba(0,255,157,0.4)]' : 'bg-white/5 border-white/10 text-gray-500'
                }`}>
                  {step > i ? <Check className="w-5 h-5" /> : i}
                </div>
                {i < 4 && <div className={`w-8 md:w-16 h-0.5 mx-2 transition-all duration-500 ${step > i ? 'bg-relay-accent' : 'bg-white/5'}`} />}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
          
          {/* STEP 1: Personal & Professional */}
          {step === 1 && (
            <div className="space-y-8">
              <SectionWrapper title="SECTION 1: Personal Information" icon={User}>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup label="Full Name*" placeholder="Your name" value={formData.fullName} onChange={v => setFormData({...formData, fullName: v})} required />
                  <InputGroup label="Email Address*" type="email" placeholder="email@example.com" value={formData.email} onChange={v => setFormData({...formData, email: v})} required />
                  <InputGroup label="Phone Number (WhatsApp)*" type="tel" placeholder="+234..." value={formData.phone} onChange={v => setFormData({...formData, phone: v})} required />
                  <InputGroup label="Location*" placeholder="Lagos, Nigeria" value={formData.location} onChange={v => setFormData({...formData, location: v})} required />
                  <div className="md:col-span-2">
                    <InputGroup label="LinkedIn Profile URL*" icon={Linkedin} placeholder="linkedin.com/in/yourname" value={formData.linkedin} onChange={v => setFormData({...formData, linkedin: v})} required />
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper title="SECTION 2: Professional Information" icon={Briefcase}>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputGroup label="Current Title*" placeholder="Senior Full-Stack Developer" value={formData.currentTitle} onChange={v => setFormData({...formData, currentTitle: v})} required />
                  <SelectGroup 
                    label="Years of Professional Experience*" 
                    value={formData.yearsExp} 
                    onChange={v => setFormData({...formData, yearsExp: v})} 
                    options={['<1', '1-2', '2-3', '3-5', '5-8', '8+']} 
                  />
                  <InputGroup label="Current Company (Optional)" placeholder="Acme Corp" value={formData.currentCompany} onChange={v => setFormData({...formData, currentCompany: v})} />
                  <InputGroup label="Previous Company (Optional)" placeholder="Globex" value={formData.prevCompany} onChange={v => setFormData({...formData, prevCompany: v})} />
                </div>
              </SectionWrapper>

              <div className="flex justify-end">
                <button type="button" onClick={nextStep} className="bg-relay-accent text-black px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white transition-all">
                  Next Step <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Skills & Portfolio */}
          {step === 2 && (
            <div className="space-y-8">
              <SectionWrapper title="SECTION 3: Skills & Expertise" icon={Code}>
                <SelectGroup 
                  label="Primary Role*" 
                  value={formData.primaryRole} 
                  onChange={v => setFormData({...formData, primaryRole: v})} 
                  options={['Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'Mobile Developer', 'DevOps Engineer', 'Data Engineer', 'Other']} 
                />
                
                <div className="mt-8 space-y-6">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tech Stack* (Select all that apply)</label>
                  {Object.entries(TECH_STACK_OPTIONS).map(([cat, techs]) => (
                    <div key={cat} className="space-y-3">
                      <h4 className="text-[10px] font-bold text-relay-accent/60 uppercase tracking-widest">{cat}</h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map(t => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTech(t)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                              formData.techStack.includes(t) 
                                ? 'bg-relay-accent/10 border-relay-accent text-relay-accent' 
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <InputGroup label="Other (anything not listed)" placeholder="e.g. Solidity, Rust" value={formData.otherTech} onChange={v => setFormData({...formData, otherTech: v})} />
                </div>
              </SectionWrapper>

              <SectionWrapper title="SECTION 4: Portfolio & Work" icon={Globe}>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <InputGroup label="GitHub Profile URL*" icon={Github} placeholder="github.com/username" value={formData.github} onChange={v => setFormData({...formData, github: v})} required />
                  <InputGroup label="Personal Website (Optional)" icon={Globe} placeholder="yourportfolio.com" value={formData.website} onChange={v => setFormData({...formData, website: v})} />
                </div>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="md:col-span-2 text-xs font-bold text-gray-500 uppercase">Project 1 (Optional)</div>
                    <InputGroup label="Project Name" placeholder="My SaaS App" value={formData.project1Name} onChange={v => setFormData({...formData, project1Name: v})} />
                    <InputGroup label="Project URL" placeholder="https://..." value={formData.project1Url} onChange={v => setFormData({...formData, project1Url: v})} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="md:col-span-2 text-xs font-bold text-gray-500 uppercase">Project 2 (Optional)</div>
                    <InputGroup label="Project Name" placeholder="Open Source Library" value={formData.project2Name} onChange={v => setFormData({...formData, project2Name: v})} />
                    <InputGroup label="Project URL" placeholder="https://..." value={formData.project2Url} onChange={v => setFormData({...formData, project2Url: v})} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Describe your best project*</label>
                      <span className="text-[10px] text-gray-600 font-mono">{formData.bestProjectDesc.length}/200</span>
                    </div>
                    <textarea 
                      maxLength={200}
                      rows={4}
                      placeholder="What did you build? What was challenging? What tech did you use?"
                      value={formData.bestProjectDesc}
                      onChange={e => setFormData({...formData, bestProjectDesc: e.target.value})}
                      className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-2xl py-4 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-relay-accent transition-all resize-none"
                      required
                    />
                  </div>
                </div>
              </SectionWrapper>

              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-white/5 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button type="button" onClick={nextStep} className="bg-relay-accent text-black px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white transition-all">
                  Next Step <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Readiness & Availability */}
          {step === 3 && (
            <div className="space-y-8">
              <SectionWrapper title="SECTION 5: Remote Work Readiness" icon={Cpu}>
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Internet Speed*</label>
                    <p className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                      <Info className="w-3 h-3" />
                      Click <a href="https://speedtest.net" target="_blank" className="text-relay-accent hover:underline">here</a> to test your speed on speedtest.net, then upload screenshot (Required: 25+ Mbps)
                    </p>
                    <FileUpload 
                      file={files.speedtest} 
                      onChange={e => handleFileChange('speedtest', e)} 
                      onClear={() => setFiles({...files, speedtest: null})}
                      label="Upload Speedtest Screenshot"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <SelectGroup label="RAM*" value={formData.ram} onChange={v => setFormData({...formData, ram: v})} options={['4GB', '8GB', '16GB', '32GB+']} />
                    <InputGroup label="Processor*" placeholder="e.g. Intel i5, M1" value={formData.processor} onChange={v => setFormData({...formData, processor: v})} required />
                    <SelectGroup label="Backup Power*" value={formData.backupPower} onChange={v => setFormData({...formData, backupPower: v})} options={['Yes - Generator', 'Yes - Inverter/UPS', 'Yes - Both', 'No']} />
                    
                    <div className="space-y-4">
                      <label className="block text-sm font-bold text-gray-300">Do you have a quiet, dedicated workspace?*</label>
                      <div className="flex gap-6">
                        {['Yes', 'No'].map(opt => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                              formData.quietWorkspace === opt ? 'border-relay-accent' : 'border-white/10 group-hover:border-white/30'
                            }`}>
                              {formData.quietWorkspace === opt && <div className="w-2.5 h-2.5 rounded-full bg-relay-accent shadow-[0_0_8px_#00ff9d]" />}
                            </div>
                            <input type="radio" className="hidden" checked={formData.quietWorkspace === opt} onChange={() => setFormData({...formData, quietWorkspace: opt})} />
                            <span className={formData.quietWorkspace === opt ? 'text-white font-bold' : 'text-gray-400'}>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Workspace Photo (Optional)</label>
                    <FileUpload 
                      file={files.workspace} 
                      onChange={e => handleFileChange('workspace', e)} 
                      onClear={() => setFiles({...files, workspace: null})}
                      label="Upload Workspace Photo"
                    />
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper title="SECTION 6: Availability & Expectations" icon={Calendar}>
                <div className="grid md:grid-cols-2 gap-6">
                  <SelectGroup label="Expected Salary Range (USD/year)*" value={formData.salary} onChange={v => setFormData({...formData, salary: v})} options={['$30K-40K', '$40K-50K', '$50K-70K', '$70K-80K', '$80K+']} />
                  <SelectGroup label="Availability*" value={formData.availability} onChange={v => setFormData({...formData, availability: v})} options={['Immediately', '2 weeks notice', '1 month', '2+ months', 'Just exploring']} />
                  <SelectGroup label="Preferred Work Arrangement*" value={formData.arrangement} onChange={v => setFormData({...formData, arrangement: v})} options={['Full-time only', 'Contract only', 'Open to both']} />
                  <SelectGroup label="Can you work EU/US timezones?*" value={formData.timezones} onChange={v => setFormData({...formData, timezones: v})} options={['Yes, fully', 'Partially (some overlap)', 'No']} />
                  <SelectGroup label="English Proficiency*" value={formData.english} onChange={v => setFormData({...formData, english: v})} options={['Fluent', 'Conversational', 'Basic']} />
                </div>
              </SectionWrapper>

              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="bg-white/5 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button type="button" onClick={nextStep} className="bg-relay-accent text-black px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white transition-all">
                  Next Step <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: About & Documents */}
          {step === 4 && (
            <div className="space-y-8">
              <SectionWrapper title="SECTION 7: About You" icon={MessageSquare}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Why do you want to work remotely?*</label>
                      <span className="text-[10px] text-gray-600 font-mono">{formData.whyRemote.length}/300</span>
                    </div>
                    <textarea 
                      maxLength={300}
                      rows={4}
                      placeholder="Your motivations..."
                      value={formData.whyRemote}
                      onChange={e => setFormData({...formData, whyRemote: e.target.value})}
                      className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-2xl py-4 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-relay-accent transition-all resize-none"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tell us about a challenging technical project*</label>
                      <span className="text-[10px] text-gray-600 font-mono">{formData.techChallenge.length}/400</span>
                    </div>
                    <textarea 
                      maxLength={400}
                      rows={5}
                      placeholder="What was the problem? How did you solve it? What did you learn?"
                      value={formData.techChallenge}
                      onChange={e => setFormData({...formData, techChallenge: e.target.value})}
                      className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-2xl py-4 px-4 text-white placeholder-gray-600 focus:outline-none focus:border-relay-accent transition-all resize-none"
                      required
                    />
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper title="SECTION 8: Documents" icon={FileText}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Resume/CV*</label>
                    <FileUpload 
                      file={files.resume} 
                      onChange={e => handleFileChange('resume', e)} 
                      onClear={() => setFiles({...files, resume: null})}
                      label="Upload PDF or DOCX"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Profile Photo (Professional headshot recommended)</label>
                    <FileUpload 
                      file={files.photo} 
                      onChange={e => handleFileChange('photo', e)} 
                      onClear={() => setFiles({...files, photo: null})}
                      label="Upload JPG or PNG"
                    />
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper title="SECTION 9: Consent" icon={ShieldCheck}>
                <div className="space-y-4">
                  <ConsentCheck label="I agree to Relay's terms and vetting process*" checked={formData.consentTerms} onChange={v => setFormData({...formData, consentTerms: v})} />
                  <ConsentCheck label="I understand there are zero fees for engineers*" checked={formData.consentFees} onChange={v => setFormData({...formData, consentFees: v})} />
                  <ConsentCheck label="I consent to Relay sharing my profile with potential employers*" checked={formData.consentShare} onChange={v => setFormData({...formData, consentShare: v})} />
                </div>
              </SectionWrapper>

              <div className="flex flex-col sm:flex-row gap-4 pt-12">
                <button type="button" onClick={prevStep} className="flex-1 bg-white/5 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                  <ArrowLeft className="w-5 h-5" /> Back
                </button>
                <button 
                  type="submit" 
                  disabled={loading || !formData.consentTerms || !formData.consentFees || !formData.consentShare}
                  className={`flex-[2] py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 ${
                    loading || !formData.consentTerms || !formData.consentFees || !formData.consentShare
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-50'
                      : 'bg-relay-accent text-black hover:shadow-[0_0_30px_rgba(0,255,157,0.4)]'
                  }`}
                >
                  {loading ? (
                    <><Loader2 className="w-6 h-6 animate-spin" /> Submitting...</>
                  ) : (
                    <>Submit Application <Check className="w-6 h-6" /></>
                  )}
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
};

const SectionWrapper: React.FC<{ title: string; icon: any; children: React.ReactNode }> = ({ title, icon: Icon, children }) => (
  <div className="glass-card p-8 md:p-10 rounded-[40px] border border-white/5 space-y-8">
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-relay-accent shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
    </div>
    <div className="relative">
      {children}
    </div>
  </div>
);

const InputGroup: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  icon?: any;
  type?: string;
  required?: boolean;
}> = ({ label, placeholder, value, onChange, icon: Icon, type = 'text', required }) => (
  <div className="space-y-2 group">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-relay-accent transition-colors">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-relay-accent transition-colors" />}
      <input 
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-4 ${Icon ? 'pl-12' : 'px-4'} pr-4 text-white placeholder-gray-700 focus:outline-none focus:border-relay-accent transition-all`}
      />
    </div>
  </div>
);

const SelectGroup: React.FC<{
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}> = ({ label, value, onChange, options }) => (
  <div className="space-y-2 group">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-relay-accent transition-colors">{label}</label>
    <div className="relative">
      <select 
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-4 px-4 text-white appearance-none cursor-pointer focus:outline-none focus:border-relay-accent transition-all"
      >
        <option value="" disabled className="text-gray-600">Select an option</option>
        {options.map(o => <option key={o} value={o} className="bg-[#13131f]">{o}</option>)}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none group-focus-within:text-relay-accent transition-colors" />
    </div>
  </div>
);

const FileUpload: React.FC<{
  file: File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  label: string;
  accept?: string;
}> = ({ file, onChange, onClear, label, accept = "image/*" }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div 
      onClick={() => inputRef.current?.click()}
      className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all ${
        file ? 'border-relay-accent/50 bg-relay-accent/5' : 'border-white/10 hover:border-white/30 hover:bg-white/[0.02]'
      }`}
    >
      <input type="file" ref={inputRef} className="hidden" accept={accept} onChange={onChange} />
      {file ? (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-relay-accent/20 flex items-center justify-center text-relay-accent">
            <Check className="w-5 h-5" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold truncate max-w-[200px]">{file.name}</p>
            <p className="text-[10px] text-relay-accent font-bold uppercase">Uploaded</p>
          </div>
          <button 
            onClick={e => { e.stopPropagation(); onClear(); }}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors ml-2"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      ) : (
        <>
          <Upload className="w-8 h-8 text-gray-600 mb-3" />
          <p className="text-sm text-gray-400 font-medium">{label}</p>
          <p className="text-[10px] text-gray-600 mt-1 uppercase font-bold tracking-widest">Max 5MB</p>
        </>
      )}
    </div>
  );
};

const ConsentCheck: React.FC<{
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}> = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-4 cursor-pointer group p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
    <div className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
      checked ? 'bg-relay-accent border-relay-accent shadow-[0_0_10px_rgba(0,255,157,0.3)]' : 'border-white/20 bg-white/5 group-hover:border-white/40'
    }`}>
      {checked && <Check className="w-4 h-4 text-black font-bold" />}
    </div>
    <input type="checkbox" className="hidden" checked={checked} onChange={() => onChange(!checked)} />
    <span className={`text-sm font-medium transition-colors ${checked ? 'text-white' : 'text-gray-400'}`}>{label}</span>
  </label>
);

export default TalentOnboarding;