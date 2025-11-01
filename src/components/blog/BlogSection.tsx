import BlogFilterList from './BlogFilterList';
import BlogHeroDescription from './BlogHeroDescription';
import BlogHeroTitle from './BlogHeroTitle';
import BlogSearchBar from './BlogSearchBar';

const BlogSection = () => (
  <section className="flex min-h-[280vh] w-full flex-col items-center px-6 pt-32 pb-20 md:min-h-[300dvh] md:pt-36 md:pb-20">
    <div className="flex w-full flex-col items-center gap-6 text-center">
      <div className="flex flex-col items-center gap-12">
        <BlogHeroTitle />
        <BlogHeroDescription />
      </div>
      <BlogSearchBar />
      <BlogFilterList />
    </div>
  </section>
);

export default BlogSection;
