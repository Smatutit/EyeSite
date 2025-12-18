
import React from 'react';

const Step: React.FC<{ icon: string; title: string; desc: string; number: string }> = ({ icon, title, desc, number }) => (
  <div className="relative group p-8 bg-gray-800/30 border border-gray-800 rounded-2xl hover:border-orange-500/50 transition-all">
    <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center text-orange-500 font-black text-sm group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors">
      {number}
    </div>
    <div className="mb-6 w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
      <i className={`${icon} text-3xl`}></i>
    </div>
    <h3 className="text-2xl font-black mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-lg">{desc}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4">פרוטוקול עבודה מהיר</h2>
        <div className="h-1 w-20 bg-orange-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Step 
          number="01"
          icon="fas fa-camera"
          title="5 דקות באתר"
          desc="מנהל אתר מצלם סיור קצר בטלפון הנייד. ללא צורך בציוד מיוחד, רחפנים או תשתיות."
        />
        <Step 
          number="02"
          icon="fas fa-paper-plane"
          title="שליחה בוואטסאפ"
          desc="הסרטון נשלח אלינו בלחיצת כפתור. המערכת מצליבה את הממצאים מול 1,200 תקנות בטיחות."
        />
        <Step 
          number="03"
          icon="fas fa-file-invoice"
          title="קבלת דו״ח מנהלים"
          desc="אתם מקבלים דוח ניהולי מזוקק באותו יום. רק ממצאים אופרטיביים שדורשים התייחסות."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
