'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Car, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function ContattiPage() {
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-stone-900 mb-6">
            <div className="grid place-items-center">
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.contactUsTitle}</span>
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.contactUsTitle}</span>
              <span className="col-start-1 row-start-1">{t.contactUsTitle}</span>
            </div>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {t.contactUsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Info Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">{t.contactDetailsTitle}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-orange-700 mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-900">{t.exactAddress}</h4>
                    <p className="text-stone-600">Via Roma, 45<br/>00012 Guidonia Montecelio (RM)<br/>{t.italy}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Car className="w-6 h-6 text-orange-700 mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-900">{t.parkingInfo}</h4>
                    <p className="text-stone-600">{t.parkingText}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-orange-700 mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-900">{t.phone}</h4>
                    <p className="text-stone-600">+39 06 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-orange-700 mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-900">{t.email}</h4>
                    <p className="text-stone-600">info@labellavita.it</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-orange-700 mt-1 mr-4 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-stone-900">{t.time}</h4>
                    <p className="text-stone-600">{t.monThu}: 12-15 / 19-23<br/>{t.friSat}: 12-15 / 19-00<br/>{t.sunday}: 12-16</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-stone-200">
                <h4 className="font-semibold text-stone-900 mb-4">{t.followUs}</h4>
                <div className="flex space-x-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:text-white hover:bg-orange-700 transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:text-white hover:bg-orange-700 transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-stone-100 rounded-full text-stone-600 hover:text-white hover:bg-orange-700 transition-colors" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-200 h-full">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">{t.writeUs}</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="font-bold text-xl text-stone-900 mb-2">
                    <div className="grid place-items-center">
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.messageSent}</span>
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.messageSent}</span>
                      <span className="col-start-1 row-start-1">{t.messageSent}</span>
                    </div>
                  </h4>
                  <p className="text-stone-600 mb-6">{t.responseSoon}</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-orange-700 font-semibold hover:text-orange-800"
                  >
                    <div className="grid place-items-center">
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.sendAnother}</span>
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.sendAnother}</span>
                      <span className="col-start-1 row-start-1">{t.sendAnother}</span>
                    </div>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-stone-700 mb-2">{t.firstName} *</label>
                      <input type="text" id="nome" required className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">{t.email} *</label>
                      <input type="email" id="email" required className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="oggetto" className="block text-sm font-medium text-stone-700 mb-2">{t.subject}</label>
                    <input type="text" id="oggetto" className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-stone-700 mb-2">{t.message} *</label>
                    <textarea id="messaggio" required rows={6} className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-stone-900 text-white font-bold rounded-md hover:bg-stone-800 transition-colors"
                  >
                    <div className="grid place-items-center">
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.sendMessage}</span>
                      <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.sendMessage}</span>
                      <span className="col-start-1 row-start-1">{t.sendMessage}</span>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Real Google Map Embed */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.7869389278913!2d12.7214902!3d41.9944321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f837486e9e38f%3A0x8670860579e0a6d2!2sVia%20Roma%2C%2045%2C%2000012%20Guidonia%20RM!5e0!3m2!1sit!2sit!4v1703163750000!5m2!1sit!2sit" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '0.75rem' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={t.mapTitle}
          ></iframe>
        </div>

      </div>
    </div>
  );
}
