'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

type Dish = {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  allergens: string;
  category: string;
};

const getMenuData = (t: any): Dish[] => [
  // Antipasti
  {
    id: 'a1',
    name: t.a1_name,
    shortDesc: t.a1_short,
    fullDesc: t.a1_full,
    price: 6.00,
    allergens: t.a1_allergens,
    category: t.categories[0],
  },
  {
    id: 'a2',
    name: t.a2_name,
    shortDesc: t.a2_short,
    fullDesc: t.a2_full,
    price: 14.00,
    allergens: t.a2_allergens,
    category: t.categories[0],
  },
  {
    id: 'a3',
    name: t.a3_name,
    shortDesc: t.a3_short,
    fullDesc: t.a3_full,
    price: 12.00,
    allergens: t.a3_allergens,
    category: t.categories[0],
  },
  {
    id: 'a4',
    name: t.a4_name,
    shortDesc: t.a4_short,
    fullDesc: t.a4_full,
    price: 11.00,
    allergens: t.a4_allergens,
    category: t.categories[0],
  },
  {
    id: 'a5',
    name: t.a5_name,
    shortDesc: t.a5_short,
    fullDesc: t.a5_full,
    price: 15.00,
    allergens: t.a5_allergens,
    category: t.categories[0],
  },
  {
    id: 'a6',
    name: t.a6_name,
    shortDesc: t.a6_short,
    fullDesc: t.a6_full,
    price: 18.00,
    allergens: t.a6_allergens,
    category: t.categories[0],
  },
  // Primi
  {
    id: 'p1',
    name: t.p1_name,
    shortDesc: t.p1_short,
    fullDesc: t.p1_full,
    price: 14.00,
    allergens: t.p1_allergens,
    category: t.categories[1],
  },
  {
    id: 'p2',
    name: t.p2_name,
    shortDesc: t.p2_short,
    fullDesc: t.p2_full,
    price: 18.00,
    allergens: t.p2_allergens,
    category: t.categories[1],
  },
  {
    id: 'p3',
    name: t.p3_name,
    shortDesc: t.p3_short,
    fullDesc: t.p3_full,
    price: 13.00,
    allergens: t.p3_allergens,
    category: t.categories[1],
  },
  {
    id: 'p4',
    name: t.p4_name,
    shortDesc: t.p4_short,
    fullDesc: t.p4_full,
    price: 16.00,
    allergens: t.p4_allergens,
    category: t.categories[1],
  },
  {
    id: 'p5',
    name: t.p5_name,
    shortDesc: t.p5_short,
    fullDesc: t.p5_full,
    price: 16.00,
    allergens: t.p5_allergens,
    category: t.categories[1],
  },
  {
    id: 'p6',
    name: t.p6_name,
    shortDesc: t.p6_short,
    fullDesc: t.p6_full,
    price: 12.00,
    allergens: t.p6_allergens,
    category: t.categories[1],
  },
  // Secondi
  {
    id: 's1',
    name: t.s1_name,
    shortDesc: t.s1_short,
    fullDesc: t.s1_full,
    price: 26.00,
    allergens: t.s1_allergens,
    category: t.categories[2],
  },
  {
    id: 's2',
    name: t.s2_name,
    shortDesc: t.s2_short,
    fullDesc: t.s2_full,
    price: 19.00,
    allergens: t.s2_allergens,
    category: t.categories[2],
  },
  {
    id: 's3',
    name: t.s3_name,
    shortDesc: t.s3_short,
    fullDesc: t.s3_full,
    price: 24.00,
    allergens: t.s3_allergens,
    category: t.categories[2],
  },
  {
    id: 's4',
    name: t.s4_name,
    shortDesc: t.s4_short,
    fullDesc: t.s4_full,
    price: 22.00,
    allergens: t.s4_allergens,
    category: t.categories[2],
  },
  {
    id: 's5',
    name: t.s5_name,
    shortDesc: t.s5_short,
    fullDesc: t.s5_full,
    price: 14.00,
    allergens: t.s5_allergens,
    category: t.categories[2],
  },
  {
    id: 's6',
    name: t.s6_name,
    shortDesc: t.s6_short,
    fullDesc: t.s6_full,
    price: 21.00,
    allergens: t.s6_allergens,
    category: t.categories[2],
  },
  // Contorni
  {
    id: 'c1',
    name: t.c1_name,
    shortDesc: t.c1_short,
    fullDesc: t.c1_full,
    price: 5.00,
    allergens: t.c1_allergens,
    category: t.categories[3],
  },
  {
    id: 'c2',
    name: t.c2_name,
    shortDesc: t.c2_short,
    fullDesc: t.c2_full,
    price: 4.50,
    allergens: t.c2_allergens,
    category: t.categories[3],
  },
  {
    id: 'c3',
    name: t.c3_name,
    shortDesc: t.c3_short,
    fullDesc: t.c3_full,
    price: 6.00,
    allergens: t.c3_allergens,
    category: t.categories[3],
  },
  {
    id: 'c4',
    name: t.c4_name,
    shortDesc: t.c4_short,
    fullDesc: t.c4_full,
    price: 5.50,
    allergens: t.c4_allergens,
    category: t.categories[3],
  },
  // Pizze
  {
    id: 'pz1',
    name: t.pz1_name,
    shortDesc: t.pz1_short,
    fullDesc: t.pz1_full,
    price: 6.50,
    allergens: t.pz1_allergens,
    category: t.categories[4],
  },
  {
    id: 'pz2',
    name: t.pz2_name,
    shortDesc: t.pz2_short,
    fullDesc: t.pz2_full,
    price: 8.00,
    allergens: t.pz2_allergens,
    category: t.categories[4],
  },
  {
    id: 'pz3',
    name: t.pz3_name,
    shortDesc: t.pz3_short,
    fullDesc: t.pz3_full,
    price: 11.00,
    allergens: t.pz3_allergens,
    category: t.categories[4],
  },
  {
    id: 'pz4',
    name: t.pz4_name,
    shortDesc: t.pz4_short,
    fullDesc: t.pz4_full,
    price: 10.00,
    allergens: t.pz4_allergens,
    category: t.categories[4],
  },
  {
    id: 'pz5',
    name: t.pz5_name,
    shortDesc: t.pz5_short,
    fullDesc: t.pz5_full,
    price: 9.50,
    allergens: t.pz5_allergens,
    category: t.categories[4],
  },
  {
    id: 'pz6',
    name: t.pz6_name,
    shortDesc: t.pz6_short,
    fullDesc: t.pz6_full,
    price: 11.50,
    allergens: t.pz6_allergens,
    category: t.categories[4],
  },
  {
    id: 'pz7',
    name: t.pz7_name,
    shortDesc: t.pz7_short,
    fullDesc: t.pz7_full,
    price: 11.00,
    allergens: t.pz7_allergens,
    category: t.categories[4],
  },
  {
    id: 'pz8',
    name: t.pz8_name,
    shortDesc: t.pz8_short,
    fullDesc: t.pz8_full,
    price: 10.50,
    allergens: t.pz8_allergens,
    category: t.categories[4],
  },
  // Dolci
  {
    id: 'd1',
    name: t.d1_name,
    shortDesc: t.d1_short,
    fullDesc: t.d1_full,
    price: 7.50,
    allergens: t.d1_allergens,
    category: t.categories[5],
  },
  {
    id: 'd2',
    name: t.d2_name,
    shortDesc: t.d2_short,
    fullDesc: t.d2_full,
    price: 6.50,
    allergens: t.d2_allergens,
    category: t.categories[5],
  },
  {
    id: 'd3',
    name: t.d3_name,
    shortDesc: t.d3_short,
    fullDesc: t.d3_full,
    price: 8.50,
    allergens: t.d3_allergens,
    category: t.categories[5],
  },
  {
    id: 'd4',
    name: t.d4_name,
    shortDesc: t.d4_short,
    fullDesc: t.d4_full,
    price: 7.00,
    allergens: t.d4_allergens,
    category: t.categories[5],
  },
  // Bevande
  {
    id: 'bev1',
    name: t.bev1_name,
    shortDesc: t.bev1_short,
    fullDesc: t.bev1_full,
    price: 4.00,
    allergens: t.none,
    category: t.categories[6],
  },
  {
    id: 'bev2',
    name: t.bev2_name,
    shortDesc: t.bev2_short,
    fullDesc: t.bev2_full,
    price: 4.00,
    allergens: t.none,
    category: t.categories[6],
  },
  {
    id: 'bev3',
    name: t.bev3_name,
    shortDesc: t.bev3_short,
    fullDesc: t.bev3_full,
    price: 4.50,
    allergens: t.none,
    category: t.categories[6],
  },
  {
    id: 'bev4',
    name: t.bev4_name,
    shortDesc: t.bev4_short,
    fullDesc: t.bev4_full,
    price: 5.00,
    allergens: t.none,
    category: t.categories[6],
  },
  {
    id: 'bev5',
    name: t.bev5_name,
    shortDesc: t.bev5_short,
    fullDesc: t.bev5_full,
    price: 5.00,
    allergens: t.none,
    category: t.categories[6],
  },
  {
    id: 'bev6',
    name: t.bev6_name,
    shortDesc: t.bev6_short,
    fullDesc: t.bev6_full,
    price: 5.00,
    allergens: t.none,
    category: t.categories[6],
  },
  {
    id: 'bev7',
    name: t.bev7_name,
    shortDesc: t.bev7_short,
    fullDesc: t.bev7_full,
    price: 6.00,
    allergens: t.a1_allergens, // Generic gluten for beer
    category: t.categories[6],
  },
  {
    id: 'bev8',
    name: t.bev8_name,
    shortDesc: t.bev8_short,
    fullDesc: t.bev8_full,
    price: 8.00,
    allergens: t.a1_allergens, // Generic gluten for beer
    category: t.categories[6],
  }
];

export default function MenuClient() {
  const { language } = useLanguage();
  const t = translations[language];
  const categories = t.categories;
  const menuData = getMenuData(t);

  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const activeCategory = categories[activeCategoryIndex];
  const filteredDishes = menuData.filter((dish) => dish.category === activeCategory);

  useEffect(() => {
    if (selectedDish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedDish]);

  return (
    <div>
      {/* Category Tabs (Segmented Control) */}
      <div className="flex justify-center mb-12 px-2">
        <nav className="inline-flex bg-stone-200/80 py-1.5 pl-1.5 pr-3 rounded-full overflow-x-auto max-w-full shadow-inner [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" aria-label="Menu Categories">
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryIndex(index)}
              className={`relative px-5 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 ${
                activeCategoryIndex === index
                  ? 'text-white'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200'
              }`}
            >
              {activeCategoryIndex === index && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-orange-700 rounded-full z-0 shadow-sm"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <div className="grid place-items-center">
                  <span className="col-start-1 row-start-1 invisible pointer-events-none whitespace-nowrap">{translations.it.categories[index]}</span>
                  <span className="col-start-1 row-start-1 invisible pointer-events-none whitespace-nowrap">{translations.en.categories[index]}</span>
                  <span className="col-start-1 row-start-1 whitespace-nowrap">{cat}</span>
                </div>
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Dish Grid with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory + language}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => setSelectedDish(dish)}
                  className="bg-white p-6 justify-between flex flex-col rounded-xl shadow-sm border border-stone-200 cursor-pointer hover:shadow-md transition-shadow group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-orange-700 transition-colors">
                        {dish.name}
                      </h3>
                      <span className="font-medium text-orange-700 bg-orange-50 px-3 py-1 rounded-full text-sm">
                        €{dish.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-stone-600 line-clamp-2">{dish.shortDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-stone-500">
              <p>{t.noDishes}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
            />
            
            <motion.div 
              className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
            >
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full text-stone-900 hover:bg-white inset-auto transition-colors shadow-sm"
                aria-label={t.closeModal}
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="relative aspect-square w-full bg-stone-200 shrink-0">
                  <Image
                    src="https://placehold.co/600x600.png"
                    alt={selectedDish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 512px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    unoptimized
                    priority
                  />
                </div>
                
                <div className="p-8 shrink-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-3xl font-bold text-stone-900">{selectedDish.name}</h3>
                    <span className="text-2xl font-bold text-orange-700">€{selectedDish.price.toFixed(2)}</span>
                  </div>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    {selectedDish.fullDesc}
                  </p>
                  <div className="bg-stone-50 p-4 border border-stone-200 rounded-lg">
                    <p className="text-sm font-medium text-stone-800">{t.allergensInfo}</p>
                    <p className="text-sm text-stone-600 mt-1">{selectedDish.allergens}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hidden preloader for Next.js Image Optimization */}
      <div className="hidden relative" aria-hidden="true">
        {filteredDishes.map((dish) => (
          <Image
            key={`preload-${dish.id}`}
            src="https://placehold.co/600x600.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            priority={true}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}
