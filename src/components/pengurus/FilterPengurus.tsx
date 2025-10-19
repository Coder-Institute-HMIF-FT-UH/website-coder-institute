'use client';

import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

import { filterList } from '@/constants/pengurus/pengurusConstants';

interface FilterPengurusProps {
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

export const FilterPengurus: React.FC<FilterPengurusProps> = ({
  activeFilter: externalActiveFilter,
  onFilterChange,
}) => {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sync dengan external filter dari parent
  useEffect(() => {
    if (externalActiveFilter) {
      setActiveFilter(externalActiveFilter);
    }
  }, [externalActiveFilter]);

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  // Tutup otomatis dropdown saat pengguna scroll (hanya untuk mobile)
  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    // Tambahkan listener hanya saat dropdown terbuka
    if (isDropdownOpen) {
      window.addEventListener('scroll', handleScroll);
    }

    // Bersihkan listener saat komponen unmount atau saat kondisi berubah
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen]);

  return (
    <>
      {/* Filter Desktop - tampil di layar md ke atas (tidak sticky) */}
      <div className="hidden w-full flex-wrap items-center justify-center gap-3 md:flex">
        {filterList.map(item => (
          <button
            key={item}
            type="button"
            onClick={() => handleFilterChange(item)}
            className={clsx(
              'px-5 py-2 text-sm font-medium whitespace-nowrap transition-all',
              'rounded-[20px]',
              activeFilter === item
                ? 'bg-[var(--yellow-yellow4,#FFC343)] text-[#2E2E2E]'
                : 'cursor-pointer border border-[var(--yellow-yellow4,#FFC343)] bg-[var(--yellow-yellow7,#FFF9F1)] text-[#2E2E2E] hover:bg-[var(--yellow-yellow4,#FFC343)]'
            )}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile/Tablet Dropdown - < md */}
      <div className="relative w-48 md:hidden">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={clsx(
            'flex w-full items-center justify-between px-6 py-3 text-sm font-medium',
            'rounded-[20px] border border-[var(--yellow-yellow5,#FFCB5C)]',
            'bg-[var(--yellow-yellow6,#FFF7ED)] backdrop-blur-[4px]',
            'text-[#2E2E2E] transition-all hover:bg-[var(--yellow-yellow4,#FFC343)]',
            'shadow-sm'
          )}
        >
          <span>{activeFilter}</span>
          <svg
            className={clsx(
              'h-4 w-4 transition-transform duration-200',
              isDropdownOpen ? 'rotate-180' : 'rotate-0'
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="animate-in fade-in fixed inset-0 z-10 duration-200"
              onClick={() => setIsDropdownOpen(false)}
            />

            <div
              className={clsx(
                'absolute top-full right-0 left-0 z-20 mt-2',
                'rounded-[20px] border border-[var(--yellow-yellow5,#FFCB5C)]',
                'bg-[var(--yellow-yellow6,#FFF7ED)] backdrop-blur-[4px]',
                'max-h-64 overflow-y-auto shadow-xl',
                'animate-in slide-in-from-top-2 fade-in duration-200'
              )}
            >
              {filterList.map(item => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    handleFilterChange(item);
                    setIsDropdownOpen(false);
                  }}
                  className={clsx(
                    'w-full px-6 py-3 text-left text-sm font-medium transition-all',
                    'hover:bg-[var(--yellow-yellow4,#FFC343)] hover:text-[#1A1A1A]',
                    'focus:bg-[var(--yellow-yellow4,#FFC343)] focus:outline-none',
                    'first:rounded-t-[16px] last:rounded-b-[16px]',
                    activeFilter === item
                      ? 'bg-[var(--yellow-yellow4,#FFC343)] font-semibold text-[#1A1A1A]'
                      : 'text-[#2E2E2E]'
                  )}
                >
                  <span className="flex items-center justify-between">
                    {item}
                    {activeFilter === item && (
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
