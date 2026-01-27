import React, { useState } from 'react';
import { UserType } from '../types';
import { Search, Handshake, Code2, FileCheck, Rocket, Users } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<UserType>('company');

  const companySteps = [
    {
      icon: Search,
      title: "Browse Profiles",
      desc: "Filter through our curated list of pre-vetted senior talent based on your stack."
    },
    {
      icon: Handshake,
      title: "Request Intro",
      desc: "Select who you like. We schedule interviews within 48 hours."
    },
    {
      icon: Code2,
      title: "Interview & Hire",
      desc: "Conduct your final technical round. If it's a match, they join your team instantly."
    }
  ];

  const engineerSteps = [
    {
      icon: FileCheck,
      title: "Apply & Get Vetted",
      desc: "Pass our coding challenges and technical interviews to join the elite top 2%."
    },
    {
      icon: Users,
      title: "Profile Goes Live",
      desc: "We build you a world-class profile showcasing your skills to European tech giants."
    },
    {
      icon: Rocket,
      title: "Get Matched",
      desc: "Receive interview requests from companies. Accept the offers that excite you."
    }
  ];

  const steps = activeTab === 'company' ? companySteps : engineerSteps;

  return (
    <section className="py-24 relative bg-[#0d0d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            How <span className="text-white">Relay</span> Works
          </h2>
          
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('company')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'company' 
                  ? 'bg-relay-accent text-black shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Companies
            </button>
            <button
              onClick={() => setActiveTab('engineer')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'engineer' 
                  ? 'bg-relay-purple text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              For Talent
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -z-1"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="glass-card p-8 rounded-2xl h-full transition-transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl
                  ${activeTab === 'company' ? 'bg-relay-accent/10 text-relay-accent' : 'bg-relay-purple/10 text-relay-purple'}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="absolute top-8 right-8 text-6xl font-display font-bold opacity-5 text-white">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <button className={`px-8 py-3 rounded-full font-bold transition-all ${
               activeTab === 'company' 
               ? 'bg-white text-black hover:bg-gray-200'
               : 'bg-relay-purple text-white hover:bg-purple-600'
           }`}>
               {activeTab === 'company' ? 'Browse Talent' : 'Apply Now'}
           </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;