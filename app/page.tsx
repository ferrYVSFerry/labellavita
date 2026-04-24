'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'motion/react';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:h-[80vh] flex items-center justify-center overflow-hidden py-24 sm:py-32 lg:py-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.postimg.cc/fWdPBSJD/hero-bg.avif"
            alt={t.logoAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
            quality={90}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center lg:justify-start"
          >
            <div className="relative h-80 sm:h-96 md:h-[400px] lg:h-[400px] xl:h-[450px] aspect-square rounded-[2rem] border border-black/20 shadow-2xl overflow-hidden mx-auto lg:mx-0">
              <Image
                src="https://i.postimg.cc/XY29qNxp/Logo-hero.avif"
                alt={t.logoAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex flex-col items-center text-center"
          >
            <p className="text-xl lg:text-2xl text-stone-200 mb-10 max-w-xl drop-shadow-md font-medium tracking-wide text-justify">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link 
                href="/menu"
                className="w-full sm:w-auto px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-medium rounded-sm transition-colors text-lg text-center"
              >
                <div className="grid place-items-center">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.discoverMenu}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.discoverMenu}</span>
                  <span className="col-start-1 row-start-1">{t.discoverMenu}</span>
                </div>
              </Link>
              <Link 
                href="/prenotazioni"
                className="w-full sm:w-auto px-8 py-4 bg-stone-100 hover:bg-white text-stone-900 font-medium rounded-sm transition-colors text-lg text-center"
              >
                <div className="grid place-items-center">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.bookTable}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.bookTable}</span>
                  <span className="col-start-1 row-start-1">{t.bookTable}</span>
                </div>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* La Nostra Storia */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                <div className="grid place-items-start">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.ourStoryTitle}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.ourStoryTitle}</span>
                  <span className="col-start-1 row-start-1">{t.ourStoryTitle}</span>
                </div>
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                {t.ourStoryText}
              </p>
              <Link
                href="/chi-siamo"
                className="inline-flex items-center text-orange-700 font-semibold hover:text-orange-800 transition-colors"
              >
                <div className="grid place-items-center">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.readMore}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.readMore}</span>
                  <span className="col-start-1 row-start-1">{t.readMore}</span>
                </div>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="https://i.postimg.cc/Y2FPbLh2/homepage1.avif"
                alt="Chef"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                referrerPolicy="no-referrer"
                quality={90}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vieni a Trovarci Revamp */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[2.5rem] shadow-sm border border-stone-200 py-20 relative overflow-hidden"
        >
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-stone-50 rounded-full blur-3xl opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 mb-6 uppercase tracking-wider">
                <div className="grid place-items-center">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.visitUs}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.visitUs}</span>
                  <span className="col-start-1 row-start-1">{t.visitUs}</span>
                </div>
              </h2>
              <div className="w-24 h-1 bg-orange-700 mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Orari */}
              <div className="group bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-700 transition-colors duration-300">
                  <Clock className="w-8 h-8 text-stone-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  <div className="grid place-items-start">
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.openingHours}</span>
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.openingHours}</span>
                    <span className="col-start-1 row-start-1">{t.openingHours}</span>
                  </div>
                </h3>
                <div className="space-y-4 text-stone-600">
                  <div className="flex justify-between items-center border-b border-stone-200/60 pb-3">
                    <span className="font-medium text-stone-800">{t.monThu}</span>
                    <span className="text-sm font-medium">12:00-15:00 <br className="sm:hidden" /> 19:00-23:00</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200/60 pb-3">
                    <span className="font-medium text-stone-800">{t.friSat}</span>
                    <span className="text-sm font-medium">12:00-15:00 <br className="sm:hidden" /> 19:00-00:00</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-medium text-stone-800">{t.sunday}</span>
                    <span className="text-sm font-medium">12:00-16:00</span>
                  </div>
                </div>
              </div>
  
              {/* Indirizzo */}
              <div className="group bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-700 transition-colors duration-300">
                  <MapPin className="w-8 h-8 text-stone-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  <div className="grid place-items-start">
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.address}</span>
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.address}</span>
                    <span className="col-start-1 row-start-1">{t.address}</span>
                  </div>
                </h3>
                <div className="text-stone-600 leading-relaxed">
                  <p className="text-lg font-medium text-stone-800 mb-2">Via Roma, 45</p>
                  <p className="text-stone-600">00012 Guidonia Montecelio (RM)</p>
                  <p className="mt-8 inline-flex items-center text-orange-700 font-bold tracking-wide hover:text-orange-800 cursor-pointer transition-colors group-hover:translate-x-1 duration-300">
                    <span className="grid place-items-center">
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.visitUs}</span>
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.visitUs}</span>
                      <span className="col-start-1 row-start-1">{t.visitUs}</span>
                    </span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </p>
                </div>
              </div>
  
              {/* Contatti */}
              <div className="group bg-stone-50 p-10 rounded-3xl border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-700 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-stone-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mb-6">
                  <div className="grid place-items-start">
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.contact}</span>
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.contact}</span>
                    <span className="col-start-1 row-start-1">{t.contact}</span>
                  </div>
                </h3>
                <div className="space-y-5">
                  <div>
                    <span className="block text-sm font-medium text-stone-500 mb-1 uppercase tracking-wider">Telefono</span>
                    <a href="tel:+390612345678" className="block text-xl font-bold text-stone-800 hover:text-orange-700 transition-colors">+39 06 1234 5678</a>
                  </div>
                  <div className="pt-2">
                    <span className="block text-sm font-medium text-stone-500 mb-1 uppercase tracking-wider">Email</span>
                    <a href="mailto:info@labellavita.it" className="block text-lg font-medium text-stone-600 hover:text-orange-700 transition-colors">info@labellavita.it</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
