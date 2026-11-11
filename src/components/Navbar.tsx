import { useState } from 'react';
import { Menu, X, MessageCircleMore } from 'lucide-react';
import clsx from 'clsx';

interface NavbarProps {
  currentPage: 'home' | 'service' | 'report' | 'how-it-works';
  onNavigate: (page: 'home' | 'service' | 'report' | 'how-it-works') => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white font-bold text-sm">
                J
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-primary-900 tracking-tight leading-none">
                  JOTIL
                </span>
                <span className="text-[10px] font-medium text-slate-400 leading-none mt-0.5">
                  Civic-Tech Platform
                </span>
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <NavLink active={currentPage === 'home'} onClick={() => onNavigate('home')} label="Home" />
            <NavLink active={currentPage === 'how-it-works'} onClick={() => onNavigate('how-it-works')} label="How It Works" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('report')}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 active:bg-accent-800"
            >
              <MessageCircleMore className="h-4 w-4" />
              Share Experience
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-100 py-3 md:hidden">
            <div className="flex flex-col gap-1">
              <MobileNavLink active={currentPage === 'home'} onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} label="Home" />
              <MobileNavLink active={currentPage === 'how-it-works'} onClick={() => { onNavigate('how-it-works'); setMobileMenuOpen(false); }} label="How It Works" />
              <button
                onClick={() => { onNavigate('report'); setMobileMenuOpen(false); }}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent-700"
              >
                <MessageCircleMore className="h-4 w-4" />
                Share Experience
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        active
          ? 'bg-primary-50 text-primary-700'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      )}
    >
      {label}
    </button>
  );
}

function MobileNavLink({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors',
        active
          ? 'bg-primary-50 text-primary-700'
          : 'text-slate-600 hover:bg-slate-50'
      )}
    >
      {label}
    </button>
  );
}
