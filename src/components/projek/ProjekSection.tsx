import { Suspense } from 'react';

import { HeadingCustom } from '../common/HeadingCustom';

import { ProjectsFilterSection } from './ProjectsFilterSection';
import { ProjectTerbaruKami } from './ProjectTerbaruKami';

const ProjekSection = () => {
  return (
    <div className="relative mx-auto mt-8 mb-20 flex min-h-[80vh] w-full max-w-6xl flex-col items-center">
      <HeadingCustom text="Projek Coder Institute" />
      <div className="w-full">
        <ProjectTerbaruKami />
        <Suspense
          fallback={
            <p className="mt-12 text-center text-sm text-[#4B5563] md:text-base">
              Memuat projek...
            </p>
          }
        >
          <ProjectsFilterSection />
        </Suspense>
      </div>
    </div>
  );
};

export default ProjekSection;
