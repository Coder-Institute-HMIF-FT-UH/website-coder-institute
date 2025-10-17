'use client';

import { useState } from 'react';

import { misiKamiData } from '@/data/beranda/misiKamiData';

import { SectionHeading } from '../SectionHeading';

import { MisiKamiButton } from './MisiKamiButton';

export const MisiKamiSection = () => {
  const [selectedId, setSelectedId] = useState(1);
  const selectedItem = misiKamiData.find(item => item.id === selectedId);

  return (
    <section id="misi-kami" className="mx-auto scroll-mt-28 lg:scroll-mt-40">
      <SectionHeading title="Misi Kami" />

      <div className="mt-6 flex flex-col items-center justify-center gap-8 md:mt-10 md:flex-row md:gap-16 xl:gap-24">
        <div className="flex w-full flex-col gap-4 md:w-[350px] md:max-w-[350px]">
          {misiKamiData.map(item => (
            <MisiKamiButton
              key={item.id}
              label={item.title}
              active={selectedId === item.id}
              onClick={() => setSelectedId(item.id)}
            />
          ))}
        </div>

        <div
          className="flex w-full items-center justify-center rounded-[20px] border border-[#FFCB5C] px-6 py-10 text-left sm:px-8 md:h-[260px] md:max-w-[550px] md:p-10"
          style={{
            background:
              'linear-gradient(104deg, #FFF7ED 9.98%, #FFFBF6 28.58%, #FFF7ED 50.19%, #FFFAF4 78.46%, #FFF7ED 97.9%)',
          }}
        >
          <p className="text-base leading-relaxed md:text-lg">
            {selectedItem?.description}
          </p>
        </div>
      </div>
    </section>
  );
};
