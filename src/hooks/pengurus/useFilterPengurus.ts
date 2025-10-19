'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  FILTER_ALL,
  getValidFilters,
  PENGURUS_DATA,
  type PengurusDataItem,
} from '@/constants/pengurus/pengurusConstants';

/**
 * Custom hook untuk mengelola state dan logic filter pengurus
 * Menangani:
 * - State filter aktif
 * - Sinkronisasi dengan URL query parameter
 * - Filtering data berdasarkan filter yang dipilih
 * - Update URL tanpa reload halaman
 */
export function useFilterPengurus() {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string>(FILTER_ALL);

  // Sinkronisasi activeFilter dengan URL saat component mount atau URL berubah
  useEffect(() => {
    const filterFromUrl = searchParams.get('filter');
    const validFilters = getValidFilters();

    if (filterFromUrl && validFilters.includes(filterFromUrl)) {
      setActiveFilter(filterFromUrl);
    } else if (filterFromUrl) {
      // Jika filter tidak valid, reset ke 'Semua'
      setActiveFilter(FILTER_ALL);
    }
  }, [searchParams]);

  /**
   * Handle perubahan filter
   * - Update state activeFilter
   * - Update URL dengan query parameter
   * - Scroll ke atas halaman
   */
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);

    // Update URL tanpa navigasi - hanya update browser history
    const url = new URL(window.location.href);

    if (filter === FILTER_ALL) {
      // Hapus query parameter jika filter = 'Semua'
      url.searchParams.delete('filter');
    } else {
      // Set query parameter untuk filter yang dipilih
      url.searchParams.set('filter', filter);
    }

    // Update URL tanpa reload
    window.history.pushState({}, '', url.toString());

    // Scroll ke atas halaman dengan smooth animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  /**
   * Filter data pengurus berdasarkan filter yang aktif
   * - Jika 'Semua', tampilkan semua data
   * - Jika filter spesifik, tampilkan hanya section yang sesuai
   */
  const filteredData: PengurusDataItem[] =
    activeFilter === FILTER_ALL
      ? PENGURUS_DATA
      : PENGURUS_DATA.filter(section => section.filterKey === activeFilter);

  return {
    activeFilter,
    filteredData,
    handleFilterChange,
    validFilters: getValidFilters(),
  };
}
