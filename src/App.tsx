import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsJotil from './components/WhatIsJotil';
import ExploreServices from './components/ExploreServices';
import ServiceDetail from './components/ServiceDetail';
import ReportExperienceModal from './components/ReportExperienceModal';
import Footer from './components/Footer';
import { CORE_SERVICES, type CoreServiceId } from './data/jotilData';

type Page = 'home' | 'service' | 'report' | 'how-it-works';

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

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeServiceId, setActiveServiceId] = useState<CoreServiceId>('trade-license');
  const [showReportModal, setShowReportModal] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = useCallback((query: string) => {
    const normalizedQuery = query.toLowerCase().trim();

    if (serviceAliasMap[normalizedQuery]) {
      const id = serviceAliasMap[normalizedQuery];
      if (CORE_SERVICES.includes(id as CoreServiceId)) {
        setActiveServiceId(id as CoreServiceId);
        setCurrentPage('service');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    for (const [alias, id] of Object.entries(serviceAliasMap)) {
      if (normalizedQuery.includes(alias) || alias.includes(normalizedQuery)) {
        if (CORE_SERVICES.includes(id as CoreServiceId)) {
          setActiveServiceId(id as CoreServiceId);
          setCurrentPage('service');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
    }

    setActiveServiceId('trade-license');
    setCurrentPage('service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectService = useCallback((serviceId: string) => {
    if (CORE_SERVICES.includes(serviceId as CoreServiceId)) {
      setActiveServiceId(serviceId as CoreServiceId);
      setCurrentPage('service');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const handleSwitchService = useCallback((id: CoreServiceId) => {
    setActiveServiceId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
      </main>

      <Footer />

      <ReportExperienceModal
        isOpen={showReportModal || currentPage === 'report'}
        onClose={() => {
          setShowReportModal(false);
          if (currentPage === 'report') {
            setCurrentPage('home');
          }
        }}
      />
    </div>
  );
}

export default App;
