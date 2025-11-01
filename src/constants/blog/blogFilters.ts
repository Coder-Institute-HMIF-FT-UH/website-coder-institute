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

export const filterBlogsByCategory = ({
  category,
  keyword,
}: {
  category: string;
  keyword: string | null;
}) => {
  let filteredBlogs =
    category === BLOG_FILTER_ALL
      ? blogData
      : blogData.filter(blog => blog.category === category);

  if (keyword && keyword.trim() !== '') {
    const searchLower = keyword.toLowerCase().trim();
    filteredBlogs = filteredBlogs.filter(
      blog =>
        blog.title.toLowerCase().includes(searchLower) ||
        blog.description.toLowerCase().includes(searchLower) ||
        blog.category.toLowerCase().includes(searchLower)
    );
  }

  return filteredBlogs;
};
