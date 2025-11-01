import { Card } from '@/components/common/Card';
import { blogData } from '@/data/blog/blogData';

const BlogCardGrid = () => {
  return (
    <div className="container mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
      {blogData.map(blog => (
        <Card key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogCardGrid;
