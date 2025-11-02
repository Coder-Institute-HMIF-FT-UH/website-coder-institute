'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import {
  filterBlogsByCategory,
  validateBlogFilter,
} from '@/constants/blog/blogFilters';

import BlogCardGrid from './BlogCardGrid';

const BlogFilteredResults = () => {
  const searchParams = useSearchParams();

  const activeFilter = useMemo(
    () => validateBlogFilter(searchParams.get('filter')),
    [searchParams]
  );

  const searchQuery = searchParams.get('search');

  const filteredBlogs = useMemo(() => {
    return filterBlogsByCategory({
      category: activeFilter,
      keyword: searchQuery,
    });
  }, [activeFilter, searchQuery]);

  if (filteredBlogs.length === 0) {
    return (
      <p className="mt-12 text-center text-sm text-[#2E2E2E] md:text-base">
        Belum ada artikel untuk kategori ini. Nantikan update selanjutnya!
      </p>
    );
  }

  return (
    <div className="w-full">
      <div className="mt-12 md:mt-16">
        <BlogCardGrid blogs={filteredBlogs} />
      </div>
    </div>
  );
};

export default BlogFilteredResults;
