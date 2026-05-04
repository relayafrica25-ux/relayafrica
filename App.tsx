
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyRelay from './components/WhyRelay';
import FeaturedEngineers from './components/FeaturedEngineers';
import InfoSection from './components/InfoSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Auth from './components/Auth';
import TalentOnboarding from './components/TalentOnboarding';
import Pricing from './components/Pricing';
import HowItWorksPage from './components/HowItWorksPage';
import ForCompanies from './components/ForCompanies';
import ForTalent from './components/ForTalent';
import TrustedCompanies from './components/TrustedCompanies';
import StatsSection from './components/StatsSection';
import TransparencyPromise from './components/TransparencyPromise';
import VettingProcess from './components/VettingProcess';
import TalentProfile from './components/TalentProfile';
import RequestIntro from './components/RequestIntro';
import AboutContact from './components/AboutContact';
import { View, Engineer } from './types';
import { MOCK_ENGINEERS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedEngineer, setSelectedEngineer] = useState<Engineer | null>(null);
  const [authRole, setAuthRole] = useState<'company' | 'engineer'>('company');

  const navigateToEngineers = () => {
    setCurrentView(View.ENGINEERS);
    window.scrollTo(0, 0);
  };
  
  const navigateToApply = () => {
    setAuthRole('engineer');
    setCurrentView(View.APPLY);
    window.scrollTo(0, 0);
  };

  const navigateToLogin = (role: 'company' | 'engineer' = 'company') => {
    setAuthRole(role);
    setCurrentView(View.LOGIN);
    window.scrollTo(0, 0);
  };
  
  const navigateToSignup = (role: 'company' | 'engineer' = 'company') => {
    setAuthRole(role);
    setCurrentView(View.SIGNUP);
    window.scrollTo(0, 0);
  };

  const navigateToPricing = () => {
    setCurrentView(View.PRICING);
    window.scrollTo(0, 0);
  };

  const navigateToHowItWorks = () => {
    setCurrentView(View.HOW_IT_WORKS);
    window.scrollTo(0, 0);
  };

  const navigateToVetting = () => {
    setCurrentView(View.VETTING);
    window.scrollTo(0, 0);
  };

  const navigateToForCompanies = () => {
    setCurrentView(View.FOR_COMPANIES);
    window.scrollTo(0, 0);
  };

  const navigateToForTalent = () => {
    setCurrentView(View.FOR_TALENT);
    window.scrollTo(0, 0);
  };

  const handleViewProfile = (engineer: Engineer) => {
    setSelectedEngineer(engineer);
    setCurrentView(View.TALENT_PROFILE);
    window.scrollTo(0, 0);
  };

  const handleRequestIntro = (id: string) => {
    const engineer = MOCK_ENGINEERS.find(e => e.id === id);
    if (engineer) {
      setSelectedEngineer(engineer);
      setCurrentView(View.REQUEST_INTRO);
      window.scrollTo(0, 0);
    }
  };

  const handleBackToProfile = () => {
    if (selectedEngineer) {
      setCurrentView(View.TALENT_PROFILE);
    } else {
      setCurrentView(View.ENGINEERS);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white selection:bg-relay-accent selection:text-black font-sans">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} onNavigateLogin={navigateToLogin} onNavigateSignup={navigateToSignup} onNavigateApply={navigateToApply} />
      
      <main>
        {currentView === View.HOME && (
          <>
            <Hero onBrowse={navigateToEngineers} onApply={navigateToApply} />
            <TrustedCompanies />
            <StatsSection />
            <TransparencyPromise onNavigateToPricing={navigateToPricing} />
            <HowItWorks />
            <WhyRelay />
            <FeaturedEngineers showAll={false} onViewProfile={handleViewProfile} />
            <InfoSection onApply={navigateToApply} onBrowse={navigateToEngineers} />
            <FAQ />
          </>
        )}

        {currentView === View.FOR_COMPANIES && (
          <ForCompanies 
            onBrowse={navigateToEngineers}
            onSeePricing={navigateToPricing}
          />
        )}

        {currentView === View.FOR_TALENT && (
          <ForTalent 
            onApply={navigateToApply}
            onSeeEngineers={navigateToEngineers}
          />
        )}

        {currentView === View.ENGINEERS && (
          <div className="pt-20 animate-fade-in">
             <div className="bg-[#0d0d17] py-16 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-display font-light mb-4">World-Class <span className="font-medium">Talent</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
                  Browse our directory of pre-vetted talent ready to join your team.
                </p>
             </div>
             <FeaturedEngineers 
                showAll={true} 
                onLogin={navigateToLogin} 
                onViewProfile={handleViewProfile} 
                onRequestIntro={handleRequestIntro} 
              />
             <div className="bg-[#0a0a12] py-20 text-center">
                <h3 className="text-2xl font-display font-light mb-6">Didn't find what you're looking for?</h3>
                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-gray-200 transition-colors uppercase tracking-wide text-xs">
                  Contact Sales for Custom Search
                </button>
             </div>
          </div>
        )}

        {currentView === View.HOW_IT_WORKS && (
          <HowItWorksPage />
        )}

        {currentView === View.PRICING && (
          <Pricing 
            onNavigateToSignup={navigateToSignup}
            onContactSales={() => window.location.href = 'mailto:sales@relay.africa'}
          />
        )}

        {currentView === View.VETTING && (
          <VettingProcess />
        )}

        {currentView === View.TALENT_PROFILE && selectedEngineer && (
          <TalentProfile 
            engineer={selectedEngineer} 
            onNavigateHome={() => setCurrentView(View.HOME)}
            onNavigateEngineers={navigateToEngineers}
            onRequestIntro={handleRequestIntro}
          />
        )}

        {currentView === View.REQUEST_INTRO && selectedEngineer && (
          <RequestIntro 
            engineer={selectedEngineer}
            onBack={handleBackToProfile}
            onBrowseEngineers={navigateToEngineers}
            onSeePricing={navigateToPricing}
          />
        )}

        {currentView === View.ABOUT && (
          <AboutContact />
        )}

        {/* Auth Handling */}
        {(currentView === View.LOGIN || currentView === View.SIGNUP || currentView === View.APPLY) && (
          <Auth 
            mode={currentView === View.LOGIN ? 'login' : 'signup'}
            onSwitchMode={() => currentView === View.LOGIN ? navigateToSignup(authRole) : navigateToLogin(authRole)}
            onNavigateToEngineers={navigateToEngineers}
            onNavigateToApply={navigateToApply}
            defaultRole={currentView === View.APPLY ? 'engineer' : authRole}
            hideRoleToggle={currentView === View.APPLY}
            onAuthSuccess={(role) => {
              if (role === 'engineer') {
                setCurrentView(View.ONBOARDING);
                window.scrollTo(0, 0);
              } else {
                navigateToEngineers();
              }
            }}
          />
        )}

        {currentView === View.ONBOARDING && (
          <TalentOnboarding 
            onComplete={() => {
              setCurrentView(View.HOME);
              window.scrollTo(0, 0);
            }}
            onBrowseEngineers={navigateToEngineers}
            onHowItWorks={navigateToHowItWorks}
          />
        )}
      </main>
      
      {currentView !== View.LOGIN && currentView !== View.SIGNUP && currentView !== View.APPLY && currentView !== View.ONBOARDING && (
        <Footer setCurrentView={setCurrentView} />
      )}
    </div>
  );
};

export default App;
