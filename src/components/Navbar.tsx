import { useState } from 'react';
import { Menu, X, MessageCircleMore } from 'lucide-react';
import clsx from 'clsx';
import logo from '../assets/logo.svg';
import type { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { page: Page; label: string; homeGroup?: boolean }[] = [
  { page: 'home', label: 'Home', homeGroup: true },
  { page: 'privacy-policy', label: 'Privacy Policy' },
  { page: 'terms-of-service', label: 'Terms of Service' },
  { page: 'contact', label: 'Contact' },
  { page: 'about', label: 'About' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (item: (typeof navItems)[number]) =>
    item.homeGroup
      ? ['home', 'service', 'how-it-works'].includes(currentPage)
      : currentPage === item.page;

  const navigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-primary-700/40 bg-primary-600 text-white shadow-sm"
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => navigate('home')}
            className="shrink-0 rounded-xl bg-white px-3 py-1.5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600"
            aria-label="Jotil home"
          >
            <img src={logo} alt="Jotil" className="h-8 w-auto" />
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.page}
                active={isActive(item)}
                onClick={() => navigate(item.page)}
                label={item.label}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => navigate('share-experience')}
              aria-current={currentPage === 'share-experience' ? 'page' : undefined}
              className={clsx(
                'hidden items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all sm:inline-flex',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600',
                currentPage === 'share-experience'
                  ? 'bg-accent-700 ring-2 ring-white/70'
                  : 'bg-accent-600 hover:bg-accent-700 active:bg-accent-800'
              )}
            >
              <MessageCircleMore className="h-4 w-4" />
              Share Your Experience
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex items-center justify-center rounded-lg p-2 text-primary-50 transition-colors hover:bg-primary-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-navigation" className="border-t border-primary-500/40 py-3 lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <MobileNavLink
                  key={item.page}
                  active={isActive(item)}
                  onClick={() => navigate(item.page)}
                  label={item.label}
                />
              ))}
              <button
                type="button"
                onClick={() => navigate('share-experience')}
                className={clsx(
                  'mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all sm:hidden',
                  currentPage === 'share-experience'
                    ? 'bg-accent-700 ring-2 ring-white/70'
                    : 'bg-accent-600 hover:bg-accent-700'
                )}
              >
                <MessageCircleMore className="h-4 w-4" />
                Share Your Experience
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
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
        active
          ? 'bg-white text-primary-800 shadow-sm'
          : 'text-primary-50 hover:bg-primary-700 hover:text-white'
      )}
    >
      {label}
    </button>
  );
}

function MobileNavLink({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white',
        active
          ? 'bg-white text-primary-800 shadow-sm'
          : 'text-primary-50 hover:bg-primary-700 hover:text-white'
      )}
    >
      {label}
    </button>
  );
}
