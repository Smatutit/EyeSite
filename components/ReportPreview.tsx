
import React from 'react';

const ReportRow: React.FC<{ status: 'ok' | 'alert'; category: string; label: string; details: string }> = ({ status, category, label, details }) => (
  <div className="flex flex-col md:flex-row items-center gap-4 p-5 border-b border-gray-700 hover:bg-gray-700/30 transition-colors">
    <div className="flex-shrink-0 w-full md:w-12 flex justify-center">
      {status === 'ok' ? (
        <div className="w-8 h-8 rounded-full bg-green-900/40 border border-green-500/50 flex items-center justify-center">
          <i className="fas fa-check text-green-500 text-sm"></i>
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-orange-900/40 border border-orange-500/50 flex items-center justify-center animate-pulse">
          <i className="fas fa-exclamation text-orange-500 text-sm"></i>
        </div>
      )}
    </div>
    <div className="flex-grow w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div className="text-lg font-bold text-white">{category}</div>
        <div className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest ${status === 'ok' ? 'bg-green-600/10 text-green-400' : 'bg-orange-600 text-white'}`}>
          {label}
        </div>
      </div>
      <div className="text-sm text-gray-400 mt-1">{details}</div>
    </div>
  </div>
);

const ReportPreview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
      <div className="bg-gray-700/50 p-6 flex items-center justify-between border-b border-gray-600">
        <div>
          <h4 className="text-xl font-black text-white">דו״ח בקרת סיכוני הנהלה</h4>
          <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest">פרוטוקול 2026 | מזהה פרויקט: #ES-4921</p>
        </div>
        <div className="hidden sm:block text-right">
          <div className="text-orange-500 font-bold">EyeSite AI Analysis</div>
          <div className="text-gray-500 text-[10px]">TIMESTAMP: 2025-05-14 09:12</div>
        </div>
      </div>
      
      <div className="bg-gray-900">
        <ReportRow 
          status="ok" 
          category="ציוד מגן אישי" 
          label="Verified Clean" 
          details="סריקה חזותית אישרה חבישת קסדות ונעלי בטיחות ב-100% מהעובדים במפלס 4."
        />
        <ReportRow 
          status="alert" 
          category="הגנות קצה ונפילה" 
          label="Anomaly Detected" 
          details="חריגה קריטית: חוסר במעקה תקני באזור פיגור פיגור 2. סבירות גבוהה לאי-עמידה בתקנות הבטיחות החדשות."
        />
        <ReportRow 
          status="ok" 
          category="עגורנים ואזורי הרמה" 
          label="Verified Clean" 
          details="שטח תפעול פנוי ממכשולים, שלטי אזהרה מוצבים כנדרש בסיור האחרון."
        />
      </div>
      
      <div className="p-6 bg-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-600 rounded flex items-center justify-center font-black">!</div>
          <div className="text-sm">
            <div className="font-bold text-white">המלצה ניהולית:</div>
            <div className="text-gray-400">יש לתקן ליקוי הגנות קצה תוך 4 שעות למניעת חשיפה משפטית.</div>
          </div>
        </div>
        <button className="text-xs font-bold text-orange-500 hover:text-orange-400 flex items-center gap-2 border border-orange-500/30 px-4 py-2 rounded">
          <i className="fas fa-file-pdf"></i>
          הורדת דוח מלא (PDF)
        </button>
      </div>
    </div>
  );
};

export default ReportPreview;
