'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">La Bella Vita</h3>
            <p className="text-stone-400 max-w-sm">
              {t.footerDesc}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              <div className="grid place-items-start">
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.contact}</span>
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.contact}</span>
                <span className="col-start-1 row-start-1">{t.contact}</span>
              </div>
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>Via Roma, 45 - 00012 Guidonia Montecelio (RM)</li>
              <li>Tel: +39 06 1234 5678</li>
              <li>Email: info@labellavita.it</li>
              <li>P.IVA: IT01234567890</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              <div className="grid place-items-start">
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.openingHours}</span>
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.openingHours}</span>
                <span className="col-start-1 row-start-1">{t.openingHours}</span>
              </div>
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>{t.monThu}: 12:00 - 15:00 / 19:00 - 23:00</li>
              <li>{t.friSat}: 12:00 - 15:00 / 19:00 - 00:00</li>
              <li>{t.sunday}: 12:00 - 16:00 / Chiuso a cena</li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-stone-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-800 text-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} La Bella Vita. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  );
}
