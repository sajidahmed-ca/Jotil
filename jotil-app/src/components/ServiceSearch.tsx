"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { services } from "@/data/services";

export function ServiceSearch() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const filtered = services.filter(
    (s) =>
      s.name.includes(query) ||
      s.nameEn.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (slug: string) => {
    setQuery("");
    setShowResults(false);
    router.push(`/services/${slug}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const match = services.find(
      (s) =>
        s.name === query ||
        s.nameEn.toLowerCase() === query.toLowerCase()
    );
    if (match) {
      handleSelect(match.slug);
    } else if (filtered.length === 1) {
      handleSelect(filtered[0].slug);
    }
  };

  return (
    <div className="relative w-full max-w-xl">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(e.target.value.length > 0);
            }}
            onFocus={() => query.length > 0 && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            placeholder="যেমন: Trade License, Passport, NID..."
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-border rounded-xl text-sm text-text-dark placeholder:text-text-light focus:ring-2 focus:ring-accent focus:border-accent transition-shadow shadow-sm"
            aria-label="সেবা খুঁজুন"
          />
        </div>
      </form>

      {showResults && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg overflow-hidden z-50">
          {filtered.map((service) => (
            <button
              key={service.id}
              onClick={() => handleSelect(service.slug)}
              className="w-full px-4 py-3 text-left hover:bg-bg-warm transition-colors flex items-center justify-between border-b border-border-light last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-text-dark">
                  {service.name}
                </p>
                <p className="text-xs text-text-muted">{service.nameEn}</p>
              </div>
              {service.comingSoon ? (
                <span className="text-xs px-2 py-0.5 bg-bg-warm text-text-muted rounded-full">
                  শীঘ্রই আসছে
                </span>
              ) : (
                <span className="text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
                  উপলব্ধ
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {showResults && query.length > 0 && filtered.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-lg p-4 z-50">
          <p className="text-sm text-text-muted text-center">
            &ldquo;{query}&rdquo; এর জন্য কোনো সেবা পাওয়া যায়নি
          </p>
        </div>
      )}
    </div>
  );
}
