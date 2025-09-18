import BlogSection from '@/components/blog/BlogSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artikel dan tutorial terbaru seputar teknologi, programming, dan dunia IT dari Coder Institute.',
  keywords: [
    'blog IT',
    'tutorial programming',
    'artikel teknologi',
    'tips coding',
    'Coder Institute',
  ],
  openGraph: {
    title: 'Blog - Coder Institute',
    description:
      'Artikel dan tutorial terbaru seputar teknologi, programming, dan dunia IT dari Coder Institute.',
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogSection />
    </div>
  );
}
