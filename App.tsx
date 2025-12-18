
import React from 'react';
import { CONTACT_PHONE, CONTACT_EMAIL, WHATSAPP_LINK, BRAND_NAME } from './constants';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import ExecutiveContext from './components/ExecutiveContext';
import HowItWorks from './components/HowItWorks';
import ReportPreview from './components/ReportPreview';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 selection:bg-orange-500 selection:text-white">
      <TopBar />
      
      <main className="industrial-grid">
        <Hero />
        
        <div className="container mx-auto px-4 py-20 space-y-32">
          <ExecutiveContext />
          
          <HowItWorks />
          
          <section className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <span className="text-[15rem] font-black uppercase tracking-tighter">EyeSite</span>
            </div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black mb-4">תמונת מצב ניהולית בזמן אמת</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  כך נראה הדוח שמגן על המנכ"ל ומוודא שהשטח עומד בסטנדרטים המחמירים ביותר.
                </p>
              </div>
              <ReportPreview />
            </div>
          </section>

          <section className="bg-gray-800/50 border-y border-gray-700 p-12 text-center rounded-xl">
            <h2 className="text-3xl font-black mb-6">מוכנים למהפכת 2026?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href={WHATSAPP_LINK} 
                className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-all transform hover:scale-105 inline-flex items-center gap-2 text-xl"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                דברו איתנו בוואטסאפ
              </a>
              <div className="text-gray-400 text-lg">
                או התקשרו: <span className="text-white font-bold">{CONTACT_PHONE}</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
