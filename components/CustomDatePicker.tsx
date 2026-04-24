import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CustomDatePickerProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
}

export default function CustomDatePicker({ label, value, onChange }: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
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

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  // Adjust so Monday is 0, Sunday is 6
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: adjustedFirstDay }, (_, i) => i);

  const formatDisplayDate = (isoString: string) => {
    if (!isoString) return '';
    const [year, month, day] = isoString.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleSelectDate = (day: number) => {
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const year = currentDate.getFullYear();
    onChange(`${year}-${month}-${dayStr}`);
    setIsOpen(false);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const monthNames = [
    "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-stone-700 mb-2">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-md border border-stone-300 bg-white flex items-center justify-between cursor-pointer hover:border-orange-500 transition-colors"
      >
        <span className={value ? "text-stone-900" : "text-stone-400"}>
          {value ? formatDisplayDate(value) : "Seleziona una data"}
        </span>
        <CalendarIcon className="w-5 h-5 text-stone-400" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 p-4 bg-white rounded-xl shadow-xl border border-stone-200 w-72"
          >
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                onClick={prevMonth}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-stone-600" />
              </button>
              <div className="font-semibold text-stone-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </div>
              <button
                type="button"
                onClick={nextMonth}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-stone-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map(d => (
                <div key={d} className="text-xs font-medium text-stone-500 py-1">
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {blanks.map(b => (
                <div key={`blank-${b}`} className="p-2"></div>
              ))}
              {days.map(day => {
                const currentDateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isSelected = value === currentDateStr;
                const today = new Date();
                const isToday = today.getDate() === day && today.getMonth() === currentDate.getMonth() && today.getFullYear() === currentDate.getFullYear();
                
                const dateToCompare = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                today.setHours(0, 0, 0, 0);
                const isPast = dateToCompare < today;

                return (
                  <button
                    type="button"
                    key={day}
                    disabled={isPast}
                    onClick={() => handleSelectDate(day)}
                    className={`
                      p-2 w-8 h-8 mx-auto flex items-center justify-center rounded-full text-sm transition-colors
                      ${isSelected ? 'bg-orange-600 text-white font-bold' : ''}
                      ${isToday && !isSelected ? 'bg-stone-100 font-bold text-orange-600' : ''}
                      ${!isSelected && !isPast ? 'hover:bg-orange-100 text-stone-700' : ''}
                      ${isPast ? 'text-stone-300 cursor-not-allowed' : ''}
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
