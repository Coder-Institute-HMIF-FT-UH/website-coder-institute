import BlogCardGrid from './BlogCardGrid';
import BlogFilterList from './BlogFilterList';
import BlogHeroDescription from './BlogHeroDescription';
import BlogHeroTitle from './BlogHeroTitle';
import BlogSearchBar from './BlogSearchBar';

const BlogSection = () => (
  <section className="flex min-h-[270vh] w-full flex-col items-center px-6 pt-32 pb-20 md:pt-36 md:pb-20">
    <div className="flex w-full flex-col items-center gap-40">
      <div className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-col items-center gap-12">
          <BlogHeroTitle />
          <BlogHeroDescription />
        </div>
        <BlogSearchBar />
        <BlogFilterList />
      </div>

      <BlogCardGrid />
    </div>
  </section>
);

export default BlogSection;
