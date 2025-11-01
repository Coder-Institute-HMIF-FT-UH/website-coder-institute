'use client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';

import { Card } from '@/components/common/Card';
import { projek } from '@/data/projek/projekData';

const FILTER_ALL = 'Semua';
const BASE_FILTERS = ['UI/UX', 'Website', 'Mobile', 'Game', 'IoT'];
const FILTER_OPTIONS: string[] = [
  FILTER_ALL,
  ...Array.from(
    new Set([...BASE_FILTERS, ...projek.map(item => item.category)])
  ),
];

export const ProjectsFilterSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const validatedFilter = useMemo(() => {
    const requestedFilter = searchParams.get('filter');

    if (requestedFilter && FILTER_OPTIONS.includes(requestedFilter)) {
      return requestedFilter;
    }

    return FILTER_ALL;
  }, [searchParams]);

  const [active, setActive] = useState(validatedFilter);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(
    () =>
      active === FILTER_ALL
        ? projek
        : projek.filter(project => project.category === active),
    [active]
  );
  const hasProjects = filteredProjects.length > 0;

  useEffect(() => {
    setActive(validatedFilter);
  }, [validatedFilter]);

  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isDropdownOpen]);

  const handleSelectFilter = (item: string) => {
    setActive(item);
    setIsDropdownOpen(false);

    const params = new URLSearchParams(searchParams.toString());

    if (item === FILTER_ALL) {
      params.delete('filter');
    } else {
      params.set('filter', item);
    }

    const query = params.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;

    router.replace(nextUrl, { scroll: false });
  };

  return (
    <section className="mt-12 w-full">
      {/* Mobile (md and below) dropdown */}
      <div className="flex justify-center md:hidden">
        <div ref={dropdownRef} className="relative w-full max-w-xs">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(prev => !prev)}
            className="flex w-full items-center justify-between rounded-[40px] bg-[#FFC343] px-4 py-3 text-sm text-[#111827] transition hover:brightness-95 focus:ring-2 focus:ring-[#FFB300] focus:outline-none"
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
          >
            {active}
            <Image
              src="/icons/arrow.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {isDropdownOpen && (
            <ul
              className="absolute right-0 left-0 z-50 mt-2 max-h-64 overflow-y-auto rounded-[28px] border border-[#FFC343] bg-[#FFF7ED] p-2 shadow-lg"
              role="listbox"
            >
              {FILTER_OPTIONS.map(item => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleSelectFilter(item)}
                    className={`flex w-full cursor-pointer items-center justify-between rounded-[24px] px-4 py-2 text-left text-sm transition ${active === item ? 'bg-[#FFC343] text-[#111827]' : 'text-[#4B5563] hover:bg-[#FFE4AF] hover:text-[#111827]'}`}
                    role="option"
                    aria-selected={active === item}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Desktop pills */}
      <div className="hidden justify-center md:flex">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-[40px] bg-[#FFC343] px-4 py-3 sm:gap-4 sm:px-6">
          {FILTER_OPTIONS.map(item => (
            <button
              key={item}
              onClick={() => handleSelectFilter(item)}
              className={`cursor-pointer rounded-[28px] px-4 py-2 text-sm font-medium transition-all duration-200 ${active === item ? 'bg-[#FFF9F1]' : 'bg-transparent hover:bg-[#FFF9F1]'}`}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {hasProjects ? (
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {filteredProjects.map(project => (
            <Card
              key={project.id}
              category={project.category}
              title={project.title}
              authors={project.authors}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-sm text-[#4B5563] md:text-base">
          Belum ada projek untuk kategori ini. Nantikan update selanjutnya!
        </p>
      )}
    </section>
  );
};
