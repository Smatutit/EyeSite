
import React from 'react';

const ExecutiveContext: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto">
      <div className="bg-gray-800 border-r-8 border-orange-600 p-8 md:p-14 rounded-l-2xl shadow-2xl relative">
        <div className="absolute top-8 left-8 opacity-10">
          <i className="fas fa-quote-left text-6xl"></i>
        </div>
        
        <h3 className="text-orange-500 text-sm font-black tracking-widest uppercase mb-4">ניהול סיכונים ותקינה</h3>
        <h2 className="text-2xl md:text-3xl font-black mb-8 text-white">לכבוד מנכ״ל החברה / סמנכ״ל בטיחות</h2>
        
        <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-gray-200 font-light">
          <p>
            אתם כבר יודעים ש-החל מאוקטובר 2026 האחריות באתרי הבנייה <strong>"עולה קומה"</strong> ונוגעת ישירות ליזם ולחברה. 
          </p>
          <p>
            מה שחסר היום בארגונים הוא לא מודעות – אלא כלי פרקטי ומתועד שמראה שבאמת מתקיימת 
            <span className="text-orange-500 font-bold"> בקרה שוטפת ומבוססת-ראיות</span>.
          </p>
          <p className="text-gray-400 italic text-lg border-r-2 border-gray-700 pr-6 mt-10">
            EyeSite נבנתה כדי לסגור את הפער הזה באופן מיידי, ללא צורך בהתקנת תשתיות יקרות או שינוי הרגלי העבודה בשטח.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveContext;
