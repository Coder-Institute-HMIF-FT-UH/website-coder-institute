'use client';

import { useFilterPengurus } from '@/hooks/pengurus/useFilterPengurus';

import { FilterPengurus } from './FilterPengurus';
import { HeadingPengurus } from './HeadingPengurus';
import { PengurusSectionPerDivision } from './PengurusSectionPerDivision';

const PengurusSection = () => {
  // Gunakan custom hook untuk mengelola filter logic
  const { activeFilter, filteredData, handleFilterChange } =
    useFilterPengurus();

  return (
    <div className="relative mx-auto mt-10 mb-20 min-h-[80vh]">
      {/* Header */}
      <div className="flex flex-col items-center gap-10 text-center">
        <div>
          <HeadingPengurus />
        </div>
        {/* Desktop Filter - > md */}
        <div className="hidden w-full md:block">
          <FilterPengurus
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Sticky Mobile Filter */}
      <div className="sticky top-20 z-[5] flex justify-end px-4 pt-4 md:hidden">
        <FilterPengurus
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </div>

      {/* Content - hanya tampilkan yang sesuai filter */}
      <div className="mt-6 flex flex-col gap-20 md:mt-12">
        {filteredData.map(pengurus => (
          <PengurusSectionPerDivision
            key={pengurus.id}
            id={pengurus.id}
            title={pengurus.title}
            data={pengurus.data}
          />
        ))}
      </div>
    </div>
  );
};

export default PengurusSection;
