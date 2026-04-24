'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';
import CustomDatePicker from '@/components/CustomDatePicker';
import CustomTimePicker from '@/components/CustomTimePicker';
import CustomNumberPicker from '@/components/CustomNumberPicker';

export default function PrenotazioniPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPeople, setSelectedPeople] = useState<number | ''>('');
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      alert("Seleziona una data per la prenotazione");
      return;
    }
    if (!selectedTime) {
      alert("Seleziona un orario per la prenotazione");
      return;
    }
    if (!selectedPeople) {
      alert("Seleziona il numero di persone");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl font-bold text-stone-900 mb-6">
            <div className="grid place-items-center">
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.bookTableTitle}</span>
              <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.bookTableTitle}</span>
              <span className="col-start-1 row-start-1">{t.bookTableTitle}</span>
            </div>
          </h1>
          <p className="text-lg text-stone-600">
            {t.bookTableSubtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mb-4">
                <div className="grid place-items-center">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.requestSent}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.requestSent}</span>
                  <span className="col-start-1 row-start-1">{t.requestSent}</span>
                </div>
              </h2>
              <p className="text-stone-600 text-lg mb-8">
                {t.bookingSuccess}
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-stone-900 text-white rounded-md hover:bg-stone-800 transition-colors"
              >
                <div className="grid place-items-center">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.newBooking}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.newBooking}</span>
                  <span className="col-start-1 row-start-1">{t.newBooking}</span>
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
                  <label htmlFor="cognome" className="block text-sm font-medium text-stone-700 mb-2">{t.lastName} *</label>
                  <input type="text" id="cognome" required className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="telefono" className="block text-sm font-medium text-stone-700 mb-2">{t.phone} *</label>
                  <input type="tel" id="telefono" required className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div>
                  <CustomDatePicker
                    label={`${t.date} *`}
                    value={selectedDate}
                    onChange={setSelectedDate}
                  />
                </div>
                <div>
                  <CustomTimePicker
                    label={`${t.time} *`}
                    value={selectedTime}
                    onChange={setSelectedTime}
                  />
                </div>
                <div className="md:col-span-2">
                  <CustomNumberPicker
                    label={`${t.people} *`}
                    value={selectedPeople}
                    onChange={setSelectedPeople}
                    max={6}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="richieste" className="block text-sm font-medium text-stone-700 mb-2">{t.specialRequests}</label>
                  <textarea id="richieste" rows={4} className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"></textarea>
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-orange-700 text-white font-bold rounded-md hover:bg-orange-800 transition-colors text-lg"
                >
                  <div className="grid place-items-center">
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.it.confirmBooking}</span>
                    <span className="col-start-1 row-start-1 invisible pointer-events-none">{translations.en.confirmBooking}</span>
                    <span className="col-start-1 row-start-1">{t.confirmBooking}</span>
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
