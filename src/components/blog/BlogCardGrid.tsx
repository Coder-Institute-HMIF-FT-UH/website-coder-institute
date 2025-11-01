'use client';

import { Card } from '@/components/common/Card';
import type { BlogItem } from '@/data/blog/blogData';

interface BlogCardGridProps {
  blogs: BlogItem[];
}

const BlogCardGrid = ({ blogs }: BlogCardGridProps) => {
  return (
    <div className="blog-container">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {blogs.map(blog => (
          <Card key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogCardGrid;
