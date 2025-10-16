'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { projekTerbaruData } from '@/data/beranda/projekTerbaruData';

import { ProjectCardKanan } from './ProjectCardKanan';
import { ProjectCardUtama } from './ProjectCardUtama';
import { ScrollIndicator } from './ScrollIndicator';

export const ProjectTerbaruSection = () => {
  const utama = projekTerbaruData[0];
  const lainnya = projekTerbaruData.slice(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerMobileRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mx-auto">
      <div className="xs:mb-8 mb-6 flex flex-wrap items-center justify-between gap-x-2 gap-y-3 sm:mb-10 sm:gap-4">
        <h2 className="xs:text-xl min-w-0 flex-1 text-left text-lg leading-tight font-bold sm:text-3xl">
          Projek Terbaru
        </h2>
        <Link href="/projek">
          <button className="xs:px-3.5 xs:py-2 xs:text-xs cursor-pointer rounded-lg bg-[#FFCB5C] px-2.5 py-1.5 text-[11px] font-semibold whitespace-nowrap text-black transition sm:px-5 sm:py-2 sm:text-base">
            Lihat lainnya
          </button>
        </Link>
      </div>

      {/* Layout untuk ukuran lg kebawah */}
      <div className="relative lg:hidden">
        <div
          ref={scrollContainerMobileRef}
          className="scrollbar-hide xs:pl-1 h-[450px] overflow-y-auto pr-0 pl-2 sm:h-[400px] sm:px-2"
        >
          <div className="xs:gap-3 xs:pl-6 flex flex-col gap-4 pl-4">
            {projekTerbaruData.map(item => (
              <ProjectCardKanan key={item.id} item={item} />
            ))}
          </div>
        </div>
        <ScrollIndicator
          scrollContainerRef={scrollContainerMobileRef}
          className="h-[450px] sm:h-[400px]"
        />
      </div>

      {/* Layout utama untuk lg+ */}
      <div className="hidden flex-col gap-6 lg:flex lg:flex-row">
        {/* Kiri: card prestasi utama */}
        <div className="w-full lg:w-1/2">
          <ProjectCardUtama item={utama} />
        </div>

        {/* Kanan: list prestasi lainnya */}
        <div className="relative w-full lg:w-1/2">
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide relative h-[440px] overflow-y-auto rounded-[20px] px-4"
          >
            <div className="flex flex-col gap-5 pl-6">
              {lainnya.map(item => (
                <ProjectCardKanan key={item.id} item={item} />
              ))}
            </div>
          </div>
          <ScrollIndicator
            scrollContainerRef={scrollContainerRef}
            className="h-[440px]"
          />
        </div>
      </div>
    </section>
  );
};
