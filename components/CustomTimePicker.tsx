import React, { useState, useRef, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomTimePickerProps {
  label: string;
  value: string;
  onChange: (time: string) => void;
}

export default function CustomTimePicker({ label, value, onChange }: CustomTimePickerProps) {
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

  // Generate available times (e.g. 12:00 to 15:00 and 19:00 to 23:00)
  const times = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30"
  ];

  const handleSelectTime = (time: string) => {
    onChange(time);
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
          {value || "Seleziona un orario"}
        </span>
        <Clock className="w-5 h-5 text-stone-400" />
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
            <div className="grid grid-cols-2 gap-2">
              {times.map(time => (
                <button
                  type="button"
                  key={time}
                  onClick={() => handleSelectTime(time)}
                  className={`
                    p-2 rounded-md text-sm font-medium transition-colors text-center
                    ${value === time 
                      ? 'bg-orange-600 text-white' 
                      : 'text-stone-700 hover:bg-orange-50 hover:text-orange-700'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
