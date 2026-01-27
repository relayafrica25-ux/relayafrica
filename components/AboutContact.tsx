
import React from 'react';
import { 
  Target, 
  History, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Zap,
  Award,
  Users
} from 'lucide-react';

const AboutContact: React.FC = () => {
  return (
    <div className="pt-20 bg-[#0a0a12] text-white">
      
      {/* 1. HERO / MISSION SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-relay-accent/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-relay-purple/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-relay-accent/10 border border-relay-accent/20 text-relay-accent font-bold text-xs uppercase tracking-[0.3em] mb-8">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-10 leading-tight tracking-tight">
            Bridging the gap between <span className="accent-text">Africa and the World.</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 leading-relaxed max-w-4xl mx-auto font-medium">
            "Relay bridges the talent gap between Africa and the world. We believe African engineers deserve access to global opportunities earning fair wages, and companies deserve transparent access to world-class talent."
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="py-24 bg-[#0d0d17] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-relay-purple font-bold text-xs uppercase tracking-widest">
                <History className="w-4 h-4" /> Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold">From Lagos to the <span className="text-relay-purple">Global Stage</span></h2>
              <div className="prose prose-invert prose-lg text-gray-400">
                <p>Founded in 2025 by Oluwaseun Babalola and Babajide Babalola, Relay was born out of a simple observation: African talent is world-class, but the bridge to global opportunities is often broken by lack of trust and transparency.</p>
                <p>Based in the heart of Lagos, Nigeria, we are building the infrastructure that allows the world's best companies to hire Africa's best engineers with 100% confidence.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-gradient-to-br from-relay-purple/10 to-transparent border border-relay-purple/20">
                <div className="text-sm font-bold text-relay-purple uppercase tracking-widest mb-2">The North Star Metric</div>
                <div className="text-5xl font-display font-bold text-white mb-2">10,000</div>
                <p className="text-gray-400 font-medium">African engineers exported to global companies by 2030.</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-relay-purple/20 rounded-[40px] blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Vision" 
                className="relative rounded-[40px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY WE'RE DIFFERENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why We're <span className="accent-text">Different</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We aren't just another agency. We're a transparent infrastructure for global growth.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <DiffCard 
              icon={ShieldCheck} 
              title="Fully Transparent" 
              desc="The first platform where you see exactly what the engineer earns. No hidden 40% agency markups."
            />
            <DiffCard 
              icon={Award} 
              title="Rigorous Vetting" 
              desc="We reject 97% of applicants. Only the absolute top 3% make it into our network."
            />
            <DiffCard 
              icon={Zap} 
              title="Infra Verified" 
              desc="We solve Nigeria-specific risks by verifying backup power and 25Mbps+ internet for every hire."
            />
            <DiffCard 
              icon={Users} 
              title="Zero Talent Fees" 
              desc="Unlike Upwork (20%) or Toptal, talent keeps 100% of their base salary. We align incentives for long-term retention."
            />
            <DiffCard 
              icon={Globe} 
              title="Timezone Aligned" 
              desc="Africa is perfectly aligned with European timezones, ensuring 100% workday overlap."
            />
            <DiffCard 
              icon={CheckCircle2} 
              title="Flexible Tiers" 
              desc="Choose the model that fits your growth—from single hires to building full offshore engineering labs."
            />
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-24 bg-[#0d0d17] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-display font-bold">Meet the <span className="text-relay-purple">Founders</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
             <TeamMember 
                name="Oluwaseun Babalola"
                role="CEO & Co-Founder"
                bio="Former business strategist with deep experience in African tech ecosystems. Passionate about showcasing African talent to the world."
                initials="OB"
             />
             <TeamMember 
                name="Babalola Babajide"
                role="CTO & Co-Founder"
                bio="Architect of the Relay platform. Focused on creating transparent, ethical, and highly efficient hiring infrastructure."
                initials="BB"
             />
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-card rounded-[60px] border border-white/10 p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-relay-accent/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Get in <span className="accent-text">Touch.</span></h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                  Have questions about our vetting process or pricing? Our team in Lagos is ready to help you scale your engineering team.
                </p>
                
                <div className="space-y-8">
                  <ContactRow icon={Mail} label="Email Us" value="hello@relay.africa" href="mailto:hello@relay.africa" />
                  <ContactRow icon={Phone} label="Call Us" value="+234 814 847 5033" href="tel:+2348148475033" />
                  <ContactRow icon={MapPin} label="Office" value="Lagos, Nigeria" />
                </div>

                <div className="mt-12 flex gap-4">
                  <SocialLink icon={Linkedin} href="https://linkedin.com/company/relay-africa" />
                  <SocialLink icon={Twitter} href="https://twitter.com/relay_africa" />
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-relay-accent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-relay-accent transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                  <select className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-4 px-4 text-white appearance-none focus:outline-none focus:border-relay-accent transition-all">
                    <option>Inquiry about hiring</option>
                    <option>Applying as talent</option>
                    <option>Partnership opportunities</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={5} placeholder="Tell us how we can help..." className="w-full bg-[#0a0a12]/50 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-relay-accent transition-all resize-none"></textarea>
                </div>
                <button className="w-full bg-relay-accent text-black font-bold py-5 rounded-xl hover:bg-white transition-all shadow-xl flex items-center justify-center gap-3">
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const DiffCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-relay-accent/30 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 mb-6 group-hover:bg-relay-accent/10 group-hover:text-relay-accent transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TeamMember: React.FC<{ name: string, role: string, bio: string, initials: string }> = ({ name, role, bio, initials }) => (
  <div className="glass-card p-10 rounded-[40px] border border-white/10 relative group">
    <div className="absolute top-0 right-0 w-32 h-32 bg-relay-purple/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="w-20 h-20 rounded-full bg-relay-purple/20 flex items-center justify-center text-relay-purple font-display font-bold text-2xl mb-8 border border-relay-purple/30">
      {initials}
    </div>
    <h3 className="text-2xl font-bold mb-1">{name}</h3>
    <p className="text-relay-purple font-bold text-xs uppercase tracking-[0.2em] mb-6">{role}</p>
    <p className="text-gray-400 leading-relaxed italic">"{bio}"</p>
  </div>
);

const ContactRow: React.FC<{ icon: any, label: string, value: string, href?: string }> = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center gap-5 group">
    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-relay-accent group-hover:bg-relay-accent group-hover:text-black transition-all">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{label}</p>
      {href ? (
        <a href={href} className="text-lg font-bold text-white hover:text-relay-accent transition-colors">{value}</a>
      ) : (
        <p className="text-lg font-bold text-white">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink: React.FC<{ icon: any, href: string }> = ({ icon: Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-relay-accent hover:border-relay-accent transition-all">
    <Icon className="w-5 h-5" />
  </a>
);

export default AboutContact;
