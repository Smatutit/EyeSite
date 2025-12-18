
import React from 'react';
import { CONTACT_PHONE, CONTACT_EMAIL, BRAND_NAME } from '../constants';

const TopBar: React.FC = () => {
  return (
    <nav className="border-b border-gray-800 bg-gray-900/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        {/* Logo - Right in RTL */}
        <div className="order-1 flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
            <i className="fas fa-eye text-white text-sm"></i>
          </div>
          <span className="text-2xl font-black tracking-tight text-white">{BRAND_NAME}</span>
        </div>

        {/* Contact Info - Left in RTL */}
        <div className="order-2 flex items-center gap-6 text-sm text-gray-400 font-medium">
          <div className="hidden md:flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer">
            <i className="fas fa-envelope text-orange-600/80"></i>
            <span>{CONTACT_EMAIL}</span>
          </div>
          <div className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer">
            <i className="fas fa-phone text-orange-600/80"></i>
            <span dir="ltr">{CONTACT_PHONE}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
