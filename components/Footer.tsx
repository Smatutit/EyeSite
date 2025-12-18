
import React from 'react';
import { CONTACT_PHONE, CONTACT_EMAIL, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="text-4xl md:text-6xl font-black mb-4 tracking-tighter opacity-90">
            {CONTACT_PHONE} | {CONTACT_EMAIL}
          </div>
          <div className="h-0.5 w-32 bg-orange-600 mx-auto mb-10"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-900 pt-10 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center text-[10px] text-white font-black">E</div>
            <span className="font-bold text-gray-400">{BRAND_NAME}</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-orange-500">תקנון תנאי שימוש</a>
            <a href="#" className="hover:text-orange-500">מדיניות פרטיות</a>
          </div>
          
          <div>
            Copyright © 2025 {BRAND_NAME}. כל הזכויות שמורות.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
