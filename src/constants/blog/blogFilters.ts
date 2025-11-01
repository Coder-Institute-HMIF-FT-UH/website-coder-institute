import { blogData } from '@/data/blog/blogData';

export const BLOG_FILTER_ALL = 'Semua';

const BASE_BLOG_FILTERS = [
  'UI/UX',
  'Website',
  'Mobile',
  'Game',
  'IoT',
  'Lainnya',
];

export const BLOG_FILTER_OPTIONS: string[] = [
  BLOG_FILTER_ALL,
  ...Array.from(
    new Set([...BASE_BLOG_FILTERS, ...blogData.map(item => item.category)])
  ),
];

export const validateBlogFilter = (value: string | null) =>
  value && BLOG_FILTER_OPTIONS.includes(value) ? value : BLOG_FILTER_ALL;

export const filterBlogsByCategory = (category: string) =>
  category === BLOG_FILTER_ALL
    ? blogData
    : blogData.filter(blog => blog.category === category);
