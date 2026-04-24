'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Languages } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navLinks = {
    it: [
      { name: 'Home', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'Prenotazioni', href: '/prenotazioni' },
      { name: 'Chi Siamo', href: '/chi-siamo' },
      { name: 'Contatti', href: '/contatti' },
    ],
    en: [
      { name: 'Home', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'Reservations', href: '/prenotazioni' },
      { name: 'About Us', href: '/chi-siamo' },
      { name: 'Contact', href: '/contatti' },
    ]
  };

  const links = navLinks[language];

  return (
    <nav className="fixed w-full z-50 top-0 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block relative h-12 w-48">
              <Image
                src="https://i.postimg.cc/7hX4gR5H/logo-1.avif"
                alt="La Bella Vita"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 150px, 192px"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const itName = navLinks.it.find(l => l.href === link.href)?.name;
              const enName = navLinks.en.find(l => l.href === link.href)?.name;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <div className="grid place-items-center">
                    <span className="col-start-1 row-start-1 invisible font-medium uppercase tracking-wide pointer-events-none whitespace-nowrap">
                      {itName}
                    </span>
                    <span className="col-start-1 row-start-1 invisible font-medium uppercase tracking-wide pointer-events-none whitespace-nowrap">
                      {enName}
                    </span>
                    <span className="col-start-1 row-start-1 font-medium uppercase tracking-wide whitespace-nowrap">
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-stone-600 hover:text-orange-700 transition-colors"
            >
              <Languages className="h-5 w-5" />
              <span className="font-bold inline-block w-6 text-center">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-stone-600 hover:text-orange-700 transition-colors"
            >
              <Languages className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-stone-50 border-b border-stone-200 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
