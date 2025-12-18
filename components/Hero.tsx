
import React from 'react';
import { WHATSAPP_LINK, CONTACT_PHONE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 md:pt-40 md:pb-52 overflow-hidden border-b border-gray-800">
      {/* Visual background element */}
      <div className="absolute left-[-10%] top-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center md:text-right">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-500 uppercase border border-orange-500/30 rounded-full bg-orange-500/5">
            CONSTRUCTION SAFETY INTELLIGENCE
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-6">
            החוק החדש מחמיר.<br />
            <span className="text-orange-500">הפתרון הטכנולוגי פשוט.</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-gray-300 mb-10">
            היערכות לתקנות הבטיחות 2026.
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a 
              href={WHATSAPP_LINK}
              className="w-full md:w-auto bg-orange-600 hover:bg-orange-500 text-white text-xl font-black py-5 px-12 rounded shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              שליחת הודעת WhatsApp
            </a>
            
            <div className="flex flex-col items-center md:items-start">
              <span className="text-gray-400 text-sm mb-1 opacity-70">זמינות מיידית למענה:</span>
              <a href={`tel:${CONTACT_PHONE.replace(/-/g, '')}`} className="text-xl font-bold hover:text-orange-500 transition-colors border-b-2 border-orange-600/30 pb-1">
                או חייגו אלינו: {CONTACT_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
