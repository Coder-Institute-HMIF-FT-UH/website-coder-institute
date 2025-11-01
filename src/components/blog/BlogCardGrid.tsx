import { Card } from '@/components/common/Card';
import { blogData } from '@/data/blog/blogData';

const BlogCardGrid = () => {
  return (
    <div className="blog-container mt-0 md:mt-16">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {blogData.map(blog => (
          <Card key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogCardGrid;
