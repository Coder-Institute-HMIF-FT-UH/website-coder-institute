'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState, useTransition } from 'react';

import {
  BLOG_FILTER_ALL,
  BLOG_FILTER_OPTIONS,
  validateBlogFilter,
} from '@/constants/blog/blogFilters';

const BlogFilterList = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const validatedFilter = useMemo(
    () => validateBlogFilter(searchParams.get('filter')),
    [searchParams]
  );

  const [activeFilter, setActiveFilter] = useState(validatedFilter);

  useEffect(() => {
    setActiveFilter(validatedFilter);
  }, [validatedFilter]);

  useEffect(() => {
    const currentFilter = searchParams.get('filter');
    if (!currentFilter) {
      return;
    }

    const normalizedFilter = currentFilter.toLowerCase();

    if (currentFilter === normalizedFilter) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set('filter', normalizedFilter);

    const query = params.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;

    startTransition(() => {
      router.replace(nextUrl, { scroll: false });
    });
  }, [pathname, router, searchParams, startTransition]);

  const handleSelectFilter = (option: string) => {
    if (option === activeFilter) {
      return;
    }

    setActiveFilter(option);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      const normalizedOption = option.toLowerCase();

      if (option === BLOG_FILTER_ALL) {
        params.delete('filter');
      } else {
        params.set('filter', normalizedOption);
      }

      const query = params.toString();
      const nextUrl = query ? `${pathname}?${query}` : pathname;

      router.replace(nextUrl, { scroll: false });
    });
  };

  return (
    <div
      className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4"
      aria-busy={isPending}
    >
      {BLOG_FILTER_OPTIONS.map(option => {
        const isActive = option === activeFilter;

        return (
          <button
            key={option}
            type="button"
            className={`rounded-[20px] px-5 py-2 text-[#0F2A3D] ${isActive ? 'bg-[var(--yellow-yellow6,#FFF7ED)] font-semibold' : 'bg-[var(--yellow-yellow4,#FFC343)]'}`}
            onClick={() => handleSelectFilter(option)}
            aria-pressed={isActive}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default BlogFilterList;
