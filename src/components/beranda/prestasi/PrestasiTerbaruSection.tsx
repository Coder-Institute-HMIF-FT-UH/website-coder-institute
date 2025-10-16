'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { prestasiTerbaruData } from '@/data/beranda/prestasiTerbaruData';

import { PrestasiCardKanan } from './PrestasiCardKanan';
import { PrestasiCardUtama } from './PrestasiCardUtama';
import { ScrollIndicator } from './ScrollIndicator';

export const PrestasiTerbaruSection = () => {
  const utama = prestasiTerbaruData[0];
  const lainnya = prestasiTerbaruData.slice(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mx-auto">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Prestasi Terbaru</h2>
        <Link href="/prestasi">
          <button className="cursor-pointer rounded-lg bg-[#FFCB5C] px-5 py-2 font-semibold text-black transition">
            Lihat lainnya
          </button>
        </Link>
      </div>

      {/* Layout utama */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* Kiri: card prestasi utama */}
        <div className="w-full lg:w-1/2">
          <PrestasiCardUtama item={utama} />
        </div>

        {/* Kanan: list prestasi lainnya */}
        <div className="relative w-full lg:w-1/2">
          <div
            ref={scrollContainerRef}
            className="scrollbar-hide relative h-[440px] overflow-y-auto rounded-[20px] px-4"
          >
            <div className="flex flex-col gap-5 pl-6">
              {lainnya.map(item => (
                <PrestasiCardKanan key={item.id} item={item} />
              ))}
            </div>
          </div>
          <ScrollIndicator scrollContainerRef={scrollContainerRef} />
        </div>
      </div>
    </section>
  );
};
