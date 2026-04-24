import React, { useState, useRef, useEffect } from 'react';
import { Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomNumberPickerProps {
  label: string;
  value: number | '';
  onChange: (num: number) => void;
  max?: number;
}

export default function CustomNumberPicker({ label, value, onChange, max = 6 }: CustomNumberPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const numbers = Array.from({ length: max }, (_, i) => i + 1);

  const handleSelectNumber = (num: number) => {
    onChange(num);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-stone-700 mb-2">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-md border border-stone-300 bg-white flex items-center justify-between cursor-pointer hover:border-orange-500 transition-colors"
      >
        <span className={value ? "text-stone-900" : "text-stone-400"}>
          {value ? `${value} ${value > 1 ? 'Persone' : 'Persona'}` : "Seleziona il numero di persone"}
        </span>
        <Users className="w-5 h-5 text-stone-400" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 p-2 bg-white rounded-xl shadow-xl border border-stone-200 w-full max-h-60 overflow-y-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {numbers.map(num => (
                <button
                  type="button"
                  key={num}
                  onClick={() => handleSelectNumber(num)}
                  className={`
                    p-2 rounded-md text-sm font-medium transition-colors text-center
                    ${value === num 
                      ? 'bg-orange-600 text-white' 
                      : 'text-stone-700 hover:bg-orange-50 hover:text-orange-700'
                    }
                  `}
                >
                  {num}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
