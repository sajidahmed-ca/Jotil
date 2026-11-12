import { useState } from 'react';
import { Search, TrendingUp, Users, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  onNavigateToService: (serviceId: string) => void;
}

const suggestedServices = [
  { label: 'Trade License', id: 'trade-license' },
  { label: 'Passport', id: 'passport' },
  { label: 'NID', id: 'nid' },
  { label: 'Driving License', id: 'driving-license' },
  { label: 'Birth Certificate', id: 'birth-certificate' },
  { label: 'Land Mutation', id: 'land-mutation' },
];

export default function Hero({ onSearch, onNavigateToService }: HeroProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleSuggestion = (searchTerm: string) => {
    setQuery(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-600 to-primary-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-30" />

      <div className="container-custom relative section-padding text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mx-auto max-w-3xl leading-tight">
          Civic Service Reality Check
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-primary-50 max-w-2xl mx-auto text-balance">
          Real data on processing times, actual costs, and hassle scores for public services in Bangladesh.
        </p>

        <form onSubmit={handleSearch} className="mt-8 mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search service (e.g. Trade License, Passport, NID)..."
              className="w-full rounded-2xl bg-white pl-12 pr-4 py-4 text-base text-slate-900 shadow-lg placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <button type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              Search
            </button>
          </div>
        </form>

        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
          <span className="text-primary-100">Suggestions:</span>
          {suggestedServices.map((svc) => (
            <button
              key={svc.id}
              onClick={() => handleSuggestion(svc.label)}
              className="rounded-full bg-white/10 px-3 py-1 text-primary-50 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {svc.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <StatCard icon={<Users className="h-5 w-5" />} value="2,579" label="Total Reports" />
          <StatCard icon={<TrendingUp className="h-5 w-5" />} value="6 Services" label="Active Trackers" />
          <StatCard icon={<MapPin className="h-5 w-5" />} value="64" label="Districts Covered" />
          <StatCard icon={<Clock className="h-5 w-5" />} value="3.5" label="Avg Office Visits" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur-sm px-4 py-4 text-center">
      <div className="flex justify-center text-accent-100 mb-1">{icon}</div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-primary-100 mt-0.5">{label}</div>
    </div>
  );
}
