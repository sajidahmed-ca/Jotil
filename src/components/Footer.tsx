import { Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-custom section-padding !py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold text-xs">
                J
              </div>
              <span className="text-lg font-bold text-primary-900">JOTIL</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jotil is a crowd-powered platform that collects and shares real experiences of government services in Bangladesh, so citizens can better prepare.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold text-primary-900 mb-3">
              Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="#" className="hover:text-primary-600 transition-colors inline-flex items-center gap-1">
                  Privacy Policy
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition-colors inline-flex items-center gap-1">
                  Terms of Service
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition-colors inline-flex items-center gap-1">
                  Contact
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-600 transition-colors inline-flex items-center gap-1">
                  About
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h4 className="text-sm font-bold text-primary-900 mb-3">
              Our Mission
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Contributing to the improvement of government services through transparency and citizen voices. We are not affiliated with any government agency or political party.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-xs text-red-700 leading-relaxed text-center">
            <strong>Disclaimer:</strong>{' '}
            Jotil aggregates user-reported experiences for transparency. It does not verify official claims, accuse individuals, or serve as a legal authority.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-slate-400">
          <p className="flex items-center justify-center gap-1">
            For the citizens of Bangladesh <Heart className="h-3 w-3 text-red-400" />
          </p>
          <p className="mt-1">&copy; 2026 Jotil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
