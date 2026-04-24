'use client';

import MenuClient from '@/components/MenuClient';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function MenuPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            {t.menuTitle}
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t.menuSubtitle}
          </p>
        </div>
        
        <MenuClient />
      </div>
    </div>
  );
}
