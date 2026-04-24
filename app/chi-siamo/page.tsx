'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import { motion } from 'motion/react';

export default function ChiSiamoPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intestazione */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">
            <div className="grid place-items-center">
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.storyTitle}</span>
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.storyTitle}</span>
              <span className="col-start-1 row-start-1">{t.storyTitle}</span>
            </div>
          </h1>
          <div className="text-xl text-stone-600 italic">
            <div className="grid place-items-center">
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.chefQuote}</span>
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.chefQuote}</span>
              <span className="col-start-1 row-start-1">{t.chefQuote}</span>
            </div>
          </div>
        </motion.div>

        {/* Content Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6 font-medium">
              <div className="grid place-items-start">
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.rootsTitle}</span>
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.rootsTitle}</span>
                <span className="col-start-1 row-start-1">{t.rootsTitle}</span>
              </div>
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              {t.rootsText1}
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              {t.rootsText2}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://i.postimg.cc/NffyH7W9/Storia-1.jpg"
              alt="La nostra sala da pranzo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Content Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://i.postimg.cc/xC6QDHt9/Storia-2.jpg"
              alt="Il nostro Chef al lavoro"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6">
              <div className="grid place-items-start">
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.chefTitle}</span>
                <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.chefTitle}</span>
                <span className="col-start-1 row-start-1">{t.chefTitle}</span>
              </div>
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              {t.chefText1}
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              {t.chefText2}
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
