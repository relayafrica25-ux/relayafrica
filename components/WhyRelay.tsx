import React from 'react';
import { VALUE_PROPS } from '../constants';

const WhyRelay: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Why <span className="accent-text">Relay?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
                We bridge the gap between European innovation and African talent with speed and trust.
            </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <prop.icon className="w-10 h-10 text-relay-accent mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{prop.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRelay;