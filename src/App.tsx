import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsJotil from './components/WhatIsJotil';
import ExploreServices from './components/ExploreServices';
import ServiceDetail from './components/ServiceDetail';
import ReportExperienceModal from './components/ReportExperienceModal';
import ShareExperience from './components/ShareExperience';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import { CORE_SERVICES, type CoreServiceId } from './data/jotilData';
import type { Page } from './types';
import { migrateStoredReports } from './utils/reportStorage';

const serviceAliasMap: Record<string, string> = {
  'trade license': 'trade-license',
  'tradelicense': 'trade-license',
  'trade': 'trade-license',
  'ট্রেড লাইসেন্স': 'trade-license',
  'passport': 'passport',
  'পাসপোর্ট': 'passport',
  'nid': 'nid',
  'national id': 'nid',
  'nid services': 'nid',
  'জাতীয় পরিচয়পত্র': 'nid',
  'driving license': 'driving-license',
  'drivinglicence': 'driving-license',
  'ড্রাইভিং লাইসেন্স': 'driving-license',
  'birth certificate': 'birth-certificate',
  'birthcertificate': 'birth-certificate',
  'জন্ম নিবন্ধন': 'birth-certificate',
  'land mutation': 'land-mutation',
  'landmutation': 'land-mutation',
  'নামজারি': 'land-mutation',
  'জমির মিউটেশন': 'land-mutation',
};

const pagePaths: Record<Page, string> = {
  'home': '/',
  'service': '/services/trade-license',
  'how-it-works': '/how-it-works',
  'share-experience': '/share-experience',
  'privacy-policy': '/privacy-policy',
  'terms-of-service': '/terms-of-service',
  'contact': '/contact',
  'about': '/about',
};

const pathPages: Record<string, Page> = {
  '/': 'home',
  '/how-it-works': 'how-it-works',
  '/share-experience': 'share-experience',
  '/privacy-policy': 'privacy-policy',
  '/terms-of-service': 'terms-of-service',
  '/contact': 'contact',
  '/about': 'about',
};

interface Route {
  page: Page;
  serviceId?: CoreServiceId;
}

function parseRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/';

  if (path.startsWith('/services/')) {
    const serviceId = path.split('/')[2];
    if (CORE_SERVICES.includes(serviceId as CoreServiceId)) {
      return { page: 'service', serviceId: serviceId as CoreServiceId };
    }
    return { page: 'home' };
  }

  return { page: pathPages[path] ?? 'home' };
}

function App() {
  const initialRoute = parseRoute(window.location.pathname);
  const [currentPage, setCurrentPage] = useState<Page>(initialRoute.page);
  const [activeServiceId, setActiveServiceId] = useState<CoreServiceId>(initialRoute.serviceId ?? 'trade-license');
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    migrateStoredReports();
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const route = parseRoute(window.location.pathname);
      setCurrentPage(route.page);
      if (route.serviceId) {
        setActiveServiceId(route.serviceId);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: Page, serviceId?: CoreServiceId) => {
    const nextServiceId = serviceId ?? activeServiceId;
    const path = page === 'service' ? `/services/${nextServiceId}` : pagePaths[page];

    window.history.pushState({}, '', path);
    setCurrentPage(page);
    if (serviceId) {
      setActiveServiceId(serviceId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: Page) => {
    navigate(page);
  };

  const handleSearch = (query: string) => {
    const normalizedQuery = query.toLowerCase().trim();

    if (serviceAliasMap[normalizedQuery]) {
      const id = serviceAliasMap[normalizedQuery];
      if (CORE_SERVICES.includes(id as CoreServiceId)) {
        navigate('service', id as CoreServiceId);
        return;
      }
    }

    for (const [alias, id] of Object.entries(serviceAliasMap)) {
      if (normalizedQuery.includes(alias) || alias.includes(normalizedQuery)) {
        if (CORE_SERVICES.includes(id as CoreServiceId)) {
          navigate('service', id as CoreServiceId);
          return;
        }
      }
    }

    navigate('service', 'trade-license');
  };

  const handleSelectService = (serviceId: string) => {
    if (CORE_SERVICES.includes(serviceId as CoreServiceId)) {
      navigate('service', serviceId as CoreServiceId);
    }
  };

  const handleSwitchService = (id: CoreServiceId) => {
    navigate('service', id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero
              onSearch={handleSearch}
              onNavigateToService={handleSelectService}
            />
            <WhatIsJotil />
            <ExploreServices
              onSelectService={handleSelectService}
            />
          </>
        )}

        {currentPage === 'service' && (
          <ServiceDetail
            serviceId={activeServiceId}
            onBack={() => handleNavigate('home')}
            onReport={() => setShowReportModal(true)}
            onSwitchService={handleSwitchService}
          />
        )}

        {currentPage === 'how-it-works' && (
          <WhatIsJotil />
        )}

        {currentPage === 'share-experience' && (
          <ShareExperience />
        )}

        {currentPage === 'privacy-policy' && (
          <PrivacyPolicy />
        )}

        {currentPage === 'terms-of-service' && (
          <TermsOfService />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}

        {currentPage === 'about' && (
          <About onNavigate={handleNavigate} />
        )}
      </main>

      <Footer />

      <ReportExperienceModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
      />
    </div>
  );
}

export default App;
