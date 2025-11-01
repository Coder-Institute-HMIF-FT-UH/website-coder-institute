'use client';

import { useState } from 'react';

const FILTER_OPTIONS = ['Semua', 'UI/UX', 'Website', 'Mobile', 'Game', 'IoT'];

const BlogFilterList = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
      {FILTER_OPTIONS.map(option => {
        const isActive = option === activeFilter;

        return (
          <button
            key={option}
            type="button"
            className={`rounded-[20px] px-5 py-2 text-[#0F2A3D] ${isActive ? 'bg-[var(--yellow-yellow6,#FFF7ED)] font-semibold' : 'bg-[var(--yellow-yellow4,#FFC343)]'}`}
            onClick={() => setActiveFilter(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default BlogFilterList;
