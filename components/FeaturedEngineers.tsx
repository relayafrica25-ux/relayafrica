import React, { useState, useMemo } from 'react';
import { MOCK_ENGINEERS } from '../constants';
import { Engineer } from '../types';
import { 
  Sparkles, 
  Loader2, 
  ArrowRight, 
  Filter, 
  Search, 
  X, 
  Check, 
  MapPin, 
  Briefcase, 
  Clock, 
  ChevronDown, 
  Lock,
  Code,
  Palette,
  Layers,
  BarChart3,
  Rocket,
  Video,
  ChevronLeft,
  ChevronRight,
  Eye,
  UserPlus
} from 'lucide-react';
import { generateEngineerMatch } from '../services/geminiService';

interface FilterState {
  roles: string[];
  techStack: string[];
  experienceLevels: string[];
  salaryRanges: string[];
  availability: string[];
}

interface FeaturedEngineersProps {
  showAll?: boolean;
  onLogin?: () => void;
  onViewProfile?: (eng: Engineer) => void;
  onRequestIntro?: (id: string) => void;
}

const FeaturedEngineers: React.FC<FeaturedEngineersProps> = ({ 
  showAll = false, 
  onLogin, 
  onViewProfile,
  onRequestIntro
}) => {
  const [engineers, setEngineers] = useState<Engineer[]>(MOCK_ENGINEERS);
  const [aiQuery, setAiQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [aiMatch, setAiMatch] = useState<Engineer | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Standard Filters State
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<'recent' | 'expHigh' | 'salaryLow' | 'salaryHigh'>('recent');
  const [filters, setFilters] = useState<FilterState>({
    roles: [],
    techStack: [],
    experienceLevels: [],
    salaryRanges: [],
    availability: []
  });

  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;

    setIsSearching(true);
    setAiMatch(null);
    const result = await generateEngineerMatch(aiQuery);
    setIsSearching(false);
    if (result) {
      setAiMatch(result);
    }
  };

  const clearFilters = () => {
    setFilters({
      roles: [],
      techStack: [],
      experienceLevels: [],
      salaryRanges: [],
      availability: []
    });
    setSearchQuery('');
    setCurrentPage(1);
  };

  // Filter Logic
  const filteredEngineers = useMemo(() => {
    let result = [...engineers];

    // Text Search
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        result = result.filter(e => 
            e.name.toLowerCase().includes(q) || 
            e.role.toLowerCase().includes(q) || 
            e.skills.some(s => s.toLowerCase().includes(q))
        );
    }

    // Faceted Filters
    if (filters.roles.length > 0) {
        result = result.filter(e => filters.roles.includes(e.roleCategory));
    }
    if (filters.techStack.length > 0) {
        result = result.filter(e => e.skills.some(s => filters.techStack.includes(s)));
    }
    if (filters.experienceLevels.length > 0) {
        result = result.filter(e => filters.experienceLevels.includes(e.experienceLevel));
    }
    if (filters.salaryRanges.length > 0) {
        result = result.filter(e => filters.salaryRanges.includes(e.salaryRange));
    }
    if (filters.availability.length > 0) {
        result = result.filter(e => filters.availability.includes(e.availability));
    }

    // Sorting
    if (sortOption === 'salaryHigh') {
       result.sort((a, b) => {
         const getVal = (s: string) => parseInt(s.match(/\d+/)?.[0] || '0');
         return getVal(b.salaryRange) - getVal(a.salaryRange);
       });
    } else if (sortOption === 'salaryLow') {
       result.sort((a, b) => {
        const getVal = (s: string) => parseInt(s.match(/\d+/)?.[0] || '0');
        return getVal(a.salaryRange) - getVal(b.salaryRange);
       });
    } else if (sortOption === 'expHigh') {
       result.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
    }

    return result;
  }, [engineers, searchQuery, filters, sortOption]);

  const paginatedEngineers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredEngineers.slice(start, start + itemsPerPage);
  }, [filteredEngineers, currentPage]);

  const totalPages = Math.ceil(filteredEngineers.length / itemsPerPage);

  if (!showAll) {
      return (
        <section className="py-24 bg-[#0d0d17] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl font-display font-bold">Top Talent Profiles</h2>
                        <p className="text-gray-400 mt-2">The top 3% of African professionals, ready to scale your team.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_ENGINEERS.slice(0, 3).map((eng) => (
                        <EngineerCard key={eng.id} engineer={eng} onView={onViewProfile} onIntro={onRequestIntro} />
                    ))}
                </div>
            </div>
        </section>
      );
  }

  return (
    <section className="bg-[#0a0a12] min-h-screen pb-20 relative">
      
      {/* Top Bar */}
      <div className="sticky top-20 z-40 bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full md:w-96 group">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-relay-accent transition-colors" />
                      <input 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {setSearchQuery(e.target.value); setCurrentPage(1);}}
                        placeholder="Search by role, skill, or name"
                        className="w-full bg-[#13131f] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-relay-accent transition-all"
                      />
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto">
                      <div className="relative flex-shrink-0">
                          <select 
                            value={sortOption}
                            onChange={(e) => {setSortOption(e.target.value as any); setCurrentPage(1);}}
                            className="appearance-none bg-[#13131f] border border-white/10 rounded-xl py-2.5 pl-4 pr-10 text-sm text-gray-300 focus:outline-none focus:border-relay-accent cursor-pointer"
                          >
                              <option value="recent">Recently Added</option>
                              <option value="expHigh">Years of Exp</option>
                              <option value="salaryLow">Budget (Low-High)</option>
                              <option value="salaryHigh">Budget (High-Low)</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                      </div>

                      <button 
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                        className="md:hidden p-2.5 bg-[#13131f] border border-white/10 rounded-xl text-gray-300 hover:text-white"
                      >
                          <Filter className="w-5 h-5" />
                      </button>
                  </div>
              </div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-col md:flex-row gap-8">
              
              <aside className={`
                 md:w-64 flex-shrink-0 space-y-8
                 ${mobileFiltersOpen ? 'fixed inset-0 z-50 bg-[#0a0a12] p-6 overflow-y-auto' : 'hidden md:block sticky top-48 h-fit'}
              `}>
                  {mobileFiltersOpen && (
                      <div className="flex justify-between items-center mb-6 md:hidden">
                          <h3 className="text-xl font-bold">Filters</h3>
                          <button onClick={() => setMobileFiltersOpen(false)}>
                              <X className="w-6 h-6" />
                          </button>
                      </div>
                  )}

                  <FilterGroup 
                    title="Domain" 
                    options={['Engineering', 'Design', 'Product', 'Marketing', 'Sales', 'Creative']}
                    selected={filters.roles}
                    onChange={(val) => {setFilters(prev => toggleFilter(prev, 'roles', val)); setCurrentPage(1);}}
                  />

                  <FilterGroup 
                    title="Skills" 
                    options={['React', 'Node.js', 'Figma', 'SEO', 'Agile', 'Python', 'AWS', 'Motion Design']}
                    selected={filters.techStack}
                    onChange={(val) => {setFilters(prev => toggleFilter(prev, 'techStack', val)); setCurrentPage(1);}}
                  />

                  <FilterGroup 
                    title="Experience" 
                    options={['Mid-Level', 'Senior', 'Lead']}
                    selected={filters.experienceLevels}
                    onChange={(val) => {setFilters(prev => toggleFilter(prev, 'experienceLevels', val)); setCurrentPage(1);}}
                  />

                  <FilterGroup 
                    title="Availability" 
                    options={['Available', 'Interviewing', 'Placed']}
                    selected={filters.availability}
                    onChange={(val) => {setFilters(prev => toggleFilter(prev, 'availability', val)); setCurrentPage(1);}}
                  />

                  {mobileFiltersOpen && (
                      <button 
                        onClick={() => setMobileFiltersOpen(false)}
                        className="w-full bg-relay-accent text-black font-bold py-3 rounded-xl mt-8"
                      >
                          Apply Filters
                      </button>
                  )}
              </aside>

              <div className="flex-1">
                  <div className="mb-8 p-1 rounded-2xl bg-gradient-to-r from-relay-purple via-relay-accent to-relay-purple opacity-90">
                     <div className="bg-[#0d0d17] rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
                        <div className="p-2 bg-white/5 rounded-full">
                           <Sparkles className="w-5 h-5 text-relay-accent" />
                        </div>
                        <input 
                            value={aiQuery}
                            onChange={(e) => setAiQuery(e.target.value)}
                            placeholder="AI Search: 'Senior Designer in Lagos with Figma expertise under €3k...'"
                            className="flex-1 bg-transparent border-none text-white placeholder-gray-500 focus:outline-none text-sm"
                        />
                         <button 
                            onClick={handleAiSearch}
                            disabled={isSearching}
                            className="text-xs font-bold bg-relay-accent text-black px-4 py-2 rounded-lg transition-colors flex items-center gap-2 hover:bg-white"
                        >
                            {isSearching ? <Loader2 className="w-3 h-3 animate-spin"/> : 'Search'}
                        </button>
                     </div>
                  </div>

                   {aiMatch && (
                      <div className="mb-8 animate-fade-in">
                          <EngineerCard engineer={aiMatch} isFeatured onView={onViewProfile} onIntro={onRequestIntro} />
                      </div>
                   )}

                  {paginatedEngineers.length === 0 ? (
                      <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                          <h3 className="text-xl font-bold mb-2">No profiles found</h3>
                          <p className="text-gray-400">Try broadening your search criteria.</p>
                          <button onClick={clearFilters} className="mt-6 text-relay-accent hover:underline">Clear Filters</button>
                      </div>
                  ) : (
                      <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedEngineers.map(eng => (
                                <EngineerCard key={eng.id} engineer={eng} onView={onViewProfile} onIntro={onRequestIntro} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                          <div className="mt-16 flex items-center justify-center gap-4">
                            <button 
                              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                              disabled={currentPage === 1}
                              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <div className="flex items-center gap-2">
                              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                  key={page}
                                  onClick={() => setCurrentPage(page)}
                                  className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                                    currentPage === page 
                                    ? 'bg-relay-accent text-black' 
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                  }`}
                                >
                                  {page}
                                </button>
                              ))}
                            </div>

                            <button 
                              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                              disabled={currentPage === totalPages}
                              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </div>
                        )}

                        <div className="mt-16 relative rounded-3xl overflow-hidden border border-white/5 bg-[#13131f]/30">
                            <div className="absolute inset-0 backdrop-blur-md bg-[#0a0a12]/70 z-10 flex flex-col items-center justify-center text-center p-8">
                                <Lock className="w-12 h-12 text-relay-accent mb-6" />
                                <h3 className="text-2xl font-display font-bold mb-3 text-white">Unlock Full Network</h3>
                                <p className="text-gray-400 max-w-md mb-8">
                                    Join 15+ companies hiring pre-vetted African talent. Access 500+ verified portfolios across all domains.
                                </p>
                                <button 
                                    onClick={onLogin}
                                    className="bg-relay-accent hover:bg-white text-black px-10 py-4 rounded-full font-bold transition-all shadow-xl flex items-center gap-2"
                                >
                                    Create Free Account
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="opacity-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 blur-md select-none">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-[#13131f] p-6 rounded-3xl border border-white/10 h-64"></div>
                                ))}
                            </div>
                        </div>
                      </>
                  )}
              </div>
          </div>
      </div>
    </section>
  );
};

const toggleFilter = (state: FilterState, key: keyof FilterState, value: string): FilterState => {
    const current = state[key] as string[];
    const updated = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
    return { ...state, [key]: updated };
}

const FilterGroup: React.FC<{
    title: string;
    options: string[];
    selected: string[];
    onChange: (val: string) => void;
}> = ({ title, options, selected, onChange }) => (
    <div className="space-y-3">
        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">{title}</h4>
        <div className="space-y-2">
            {options.map(opt => (
                <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        selected.includes(opt) 
                        ? 'bg-relay-accent border-relay-accent' 
                        : 'border-white/20 bg-white/5'
                    }`}>
                        {selected.includes(opt) && <Check className="w-3 h-3 text-black" />}
                    </div>
                    <span className={`text-sm ${selected.includes(opt) ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                        {opt}
                    </span>
                    <input type="checkbox" className="hidden" onChange={() => onChange(opt)} />
                </label>
            ))}
        </div>
    </div>
);

const getRoleIcon = (category: string) => {
  switch(category) {
    case 'Engineering': return <Code className="w-4 h-4" />;
    case 'Design': return <Palette className="w-4 h-4" />;
    case 'Product': return <Layers className="w-4 h-4" />;
    case 'Marketing': return <Rocket className="w-4 h-4" />;
    case 'Sales': return <BarChart3 className="w-4 h-4" />;
    case 'Creative': return <Video className="w-4 h-4" />;
    default: return <Briefcase className="w-4 h-4" />;
  }
};

const EngineerCard: React.FC<{ 
  engineer: Engineer; 
  isFeatured?: boolean;
  onView?: (eng: Engineer) => void;
  onIntro?: (id: string) => void;
}> = ({ engineer, isFeatured, onView, onIntro }) => {
    const statusColor = 
        engineer.availability === 'Available' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' :
        engineer.availability === 'Interviewing' ? 'bg-yellow-500 shadow-[0_0_10px_#eab308]' :
        'bg-gray-500';

    return (
        <div className={`group relative flex flex-col p-8 rounded-[40px] transition-all duration-500 hover:-translate-y-2
            ${isFeatured 
                ? 'bg-gradient-to-b from-[#1c1c2e] to-[#0a0a12] border border-relay-accent/50 shadow-[0_0_50px_rgba(0,255,157,0.2)]' 
                : 'bg-[#13131f]/40 backdrop-blur-xl border border-white/5 hover:border-relay-accent/30 shadow-xl'
            }`}
        >
            {/* Circular Profile Visual */}
            <div className="relative mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-relay-accent/20 to-relay-purple/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className={`relative p-1 rounded-full border-2 transition-colors duration-500 ${
                  engineer.availability === 'Available' ? 'border-green-500/30 group-hover:border-green-500' : 
                  engineer.availability === 'Interviewing' ? 'border-yellow-500/30 group-hover:border-yellow-500' :
                  'border-white/10'
                }`}>
                  <img 
                      src={engineer.imageUrl} 
                      alt={engineer.name} 
                      className="w-24 h-24 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  />
                  {/* Floating Availability Pulse */}
                  <div className={`absolute bottom-1 right-1 w-6 h-6 rounded-full border-4 border-[#13131f] flex items-center justify-center ${statusColor}`}>
                     {engineer.availability === 'Available' && <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>}
                  </div>
                </div>
            </div>

            <div className="text-center mb-6">
                <h3 className="font-display font-bold text-xl text-white group-hover:text-relay-accent transition-colors mb-1">{engineer.name}</h3>
                <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm font-medium">
                    {getRoleIcon(engineer.roleCategory)}
                    <span>{engineer.role}</span>
                </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-relay-accent" />
                    {engineer.location}
                </div>
                <div className="w-1 h-1 rounded-full bg-white/10"></div>
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-relay-purple" />
                    {engineer.experience}
                </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {engineer.skills.slice(0, 4).map((skill, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-tighter px-2.5 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-relay-accent/20 group-hover:text-gray-300 transition-all">
                        {skill}
                    </span>
                ))}
            </div>

            <div className="mt-auto pt-8 border-t border-white/5">
                <div className="text-center mb-6">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Expected Salary</div>
                    <div className="text-2xl font-display font-bold text-white">
                      {engineer.salaryRange}<span className="text-sm font-normal text-gray-500">/year</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    <button 
                      onClick={() => onView && onView(engineer)}
                      className="w-full py-4 rounded-2xl bg-white text-black font-bold text-sm hover:bg-relay-accent transition-all flex items-center justify-center gap-2"
                    >
                        <Eye className="w-4 h-4" />
                        View Profile
                    </button>
                    <button 
                      onClick={() => onIntro && onIntro(engineer.id)}
                      className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                    >
                        <UserPlus className="w-4 h-4" />
                        Request Intro
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedEngineers;