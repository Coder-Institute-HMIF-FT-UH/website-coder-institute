import { Suspense } from 'react';

import BlogFilteredResults from './BlogFilteredResults';
import BlogFilterList from './BlogFilterList';
import BlogHeroDescription from './BlogHeroDescription';
import BlogHeroTitle from './BlogHeroTitle';
import BlogSearchBar from './BlogSearchBar';

const BlogSection = () => (
  <section className="flex min-h-[270vh] w-full flex-col items-center px-6 pt-[18vh] pb-20 md:pt-36 md:pb-20">
    <div className="flex w-full flex-col items-center gap-16 md:gap-24">
      <div className="flex min-h-[90vh] w-full flex-col items-center justify-center gap-6 text-center md:min-h-[70vh]">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <BlogHeroTitle />
          <BlogHeroDescription />
        </div>
        <BlogSearchBar />
        <BlogFilterList />
      </div>

      <Suspense
        fallback={
          <p className="mt-12 text-center text-sm text-[#FCFCF7] md:text-base">
            Memuat artikel...
          </p>
        }
      >
        <BlogFilteredResults />
      </Suspense>
    </div>
  </section>
);

export default BlogSection;
