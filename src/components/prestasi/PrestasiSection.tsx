import { Suspense } from 'react';

import { HeadingCustom } from '../common/HeadingCustom';

import { PrestasiFilterSection } from './PrestasiFilterSection';
import { PrestasiTerbaru } from './PrestasiTerbaru';

const PrestasiSection = () => {
  return (
    <div className="relative mx-auto mt-8 mb-20 flex min-h-[80vh] w-full max-w-6xl flex-col items-center">
      <HeadingCustom text="Prestasi Coder Institute" />
      <div className="w-full">
        <PrestasiTerbaru />
        <Suspense
          fallback={
            <p className="mt-12 text-center text-sm text-[#4B5563] md:text-base">
              Memuat projek...
            </p>
          }
        >
          <PrestasiFilterSection />
        </Suspense>
      </div>
    </div>
  );
};

export default PrestasiSection;
