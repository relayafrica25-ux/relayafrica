
import React from 'react';
import { 
  MapPin, 
  Clock, 
  Building2, 
  Globe2, 
  DollarSign, 
  FileText, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Linkedin, 
  ChevronRight,
  Star,
  Award,
  Video,
  Monitor,
  Zap,
  BatteryCharging,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Engineer, Skill } from '../types';

interface TalentProfileProps {
  engineer: Engineer;
  onNavigateHome: () => void;
  onNavigateEngineers: () => void;
  onRequestIntro: (id: string) => void;
}

const TalentProfile: React.FC<TalentProfileProps> = ({ 
  engineer, 
  onNavigateHome, 
  onNavigateEngineers,
  onRequestIntro 
}) => {
  // Group skills by category
  const skillCategories = React.useMemo(() => {
    if (!engineer.detailedSkills) return null;
    // Explicitly cast to Skill[] to ensure correct reduction types
    return (engineer.detailedSkills as Skill[]).reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    }, {} as Record<string, Skill[]>);
  }, [engineer.detailedSkills]);

  return (
    <div className="pt-24 pb-32 bg-[#0a0a12] text-white">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500">
          <button onClick={onNavigateHome} className="hover:text-relay-accent transition-colors">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={onNavigateEngineers} className="hover:text-relay-accent transition-colors">Engineers</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-relay-accent">{engineer.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* LEFT SIDEBAR (30%) */}
          <aside className="lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-8">
            {/* Profile Summary Card */}
            <div className="glass-card p-8 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-relay-accent/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="relative mb-8 text-center">
                <div className="p-1 rounded-full border-2 border-relay-accent/30 mx-auto w-fit">
                  <img 
                    src={engineer.imageUrl} 
                    alt={engineer.name} 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className={`mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  engineer.availability === 'Available' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                  {engineer.availability === 'Available' ? 'Available Immediately' : 'Interviewing'}
                </div>
              </div>

              <div className="text-center mb-10">
                <h1 className="text-3xl font-display font-bold mb-2">{engineer.name}</h1>
                <p className="text-relay-accent font-medium mb-4">{engineer.role}</p>
                <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  {engineer.location} 🇳🇬
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <StatRow icon={Clock} label="Experience" value={engineer.experience} />
                <StatRow icon={Building2} label="Current Company" value={engineer.currentCompany || 'Freelance'} />
                <StatRow icon={Globe2} label="Timezone" value={engineer.timezone || 'WAT (GMT+1)'} />
                <StatRow icon={MessageSquare} label="English" value={engineer.englishLevel || 'Fluent'} />
                <StatRow icon={DollarSign} label="Salary Expectation" value={`${engineer.salaryRange}/year`} />
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => onRequestIntro(engineer.id)}
                  className="w-full py-4 rounded-2xl bg-relay-accent text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all transform active:scale-[0.98]"
                >
                  Request Introduction
                </button>
                <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                  <FileText className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Verified Checks */}
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Relay Verification</h3>
              <div className="space-y-4">
                <CheckRow text="Technical skills verified" />
                <CheckRow text="English fluency confirmed" />
                <CheckRow text="Infrastructure verified (25Mbps+, Power)" />
                <CheckRow text="Remote work ready" />
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT AREA (70%) */}
          <main className="lg:w-2/3 space-y-16">
            
            {/* SECTION 1: About */}
            <section id="about">
              <h2 className="text-3xl font-display font-bold mb-8">About {engineer.name.split(' ')[0]}</h2>
              <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-6">
                {/* Fixed type inference error for unknown by adding explicit type casting to the split result */}
                {((engineer.bio || '').split('\n\n') as string[]).map((p: string, i: number) => (
                  <p key={i} className="text-lg">{p}</p>
                ))}
              </div>
            </section>

            {/* SECTION 2: Tech Stack */}
            <section id="skills">
              <h2 className="text-3xl font-display font-bold mb-10">Technical Skills</h2>
              {skillCategories ? (
                <div className="grid sm:grid-cols-2 gap-10">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div key={category} className="space-y-6">
                      <h3 className="text-xs font-bold text-relay-accent uppercase tracking-[0.2em]">{category}</h3>
                      <div className="space-y-5">
                        {skills.map(skill => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{skill.label}</span>
                            </div>
                            <div className="flex gap-1.5">
                              {[1, 2, 3, 4, 5].map(i => (
                                <div 
                                  key={i} 
                                  className={`h-1.5 flex-1 rounded-full ${i <= skill.level ? 'bg-relay-accent shadow-[0_0_8px_rgba(0,255,157,0.5)]' : 'bg-white/10'}`}
                                />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {engineer.skills.map(s => (
                    <span key={s} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-gray-300 font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </section>

            {/* SECTION 3: Work Experience */}
            <section id="experience">
              <h2 className="text-3xl font-display font-bold mb-10">Professional Experience</h2>
              <div className="space-y-12">
                {engineer.workHistory?.map((job, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    <div className="absolute left-[19px] top-8 bottom-[-48px] w-px bg-white/10 group-last:hidden"></div>
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-relay-accent transition-colors group-hover:bg-relay-accent group-hover:text-black">
                      <Award className="w-5 h-5" />
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                          <h3 className="text-xl font-bold text-white">{job.title}</h3>
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{job.duration}</span>
                        </div>
                        <p className="text-relay-accent font-medium">{job.company}</p>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map(t => (
                          <span key={t} className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded-lg border border-white/5 uppercase">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: Portfolio */}
            <section id="portfolio">
              <h2 className="text-3xl font-display font-bold mb-10">Portfolio & Live Projects</h2>
              
              <div className="flex items-center gap-6 mb-12">
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub Profile</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Globe2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Personal Site</span>
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {engineer.projects?.map((project, idx) => (
                  <div key={idx} className="glass-card overflow-hidden rounded-[32px] border border-white/5 hover:border-relay-accent/30 transition-all group">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map(t => (
                          <span key={t} className="text-[9px] font-bold text-gray-500 border border-white/5 px-2 py-1 rounded bg-white/5">{t}</span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a href="#" className="text-xs font-bold text-white flex items-center gap-1.5 hover:text-relay-accent transition-colors uppercase tracking-widest">
                          Live Demo <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href="#" className="text-xs font-bold text-gray-500 flex items-center gap-1.5 hover:text-white transition-colors uppercase tracking-widest">
                          View Code <Github className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: Education */}
            <section id="education">
              <h2 className="text-3xl font-display font-bold mb-10">Education & Certs</h2>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Formal Education</h3>
                  {engineer.education?.map((edu, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-relay-accent">{edu.university}</p>
                      <span className="text-sm text-gray-500">Graduated {edu.year}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-8">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Certifications</h3>
                  <div className="space-y-4">
                    {engineer.certifications?.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-relay-accent" />
                        <span className="font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: Communication Sample */}
            <section id="communication" className="p-10 rounded-[40px] bg-gradient-to-br from-[#13131f] to-[#0a0a12] border border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-relay-accent/10 flex items-center justify-center text-relay-accent">
                  <Video className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-bold">Communication Sample</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Question: {engineer.communicationSample?.question}</p>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-relay-accent rounded-full"></div>
                  <p className="text-gray-300 text-lg leading-relaxed italic">
                    "{engineer.communicationSample?.answer}"
                  </p>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* STICKY BOTTOM CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <div className="max-w-4xl mx-auto glass-card border border-relay-accent/30 rounded-[30px] p-6 shadow-2xl pointer-events-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-relay-accent font-display font-bold text-xl mb-1">Request Introduction to {engineer.name.split(' ')[0]}</div>
            <p className="text-gray-400 text-sm">Interested? We'll connect you within 24 hours.</p>
          </div>
          <button 
            onClick={() => onRequestIntro(engineer.id)}
            className="bg-relay-accent hover:bg-white text-black px-10 py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group"
          >
            Request Intro
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

const StatRow: React.FC<{ icon: any, label: string, value: string }> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-relay-accent/70">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
      <p className="text-white font-bold">{value}</p>
    </div>
  </div>
);

const CheckRow: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="w-5 h-5 rounded-full bg-relay-accent/20 flex items-center justify-center">
      <CheckCircle2 className="w-3 h-3 text-relay-accent" />
    </div>
    <span className="text-sm text-gray-400 font-medium">{text}</span>
  </div>
);

export default TalentProfile;
