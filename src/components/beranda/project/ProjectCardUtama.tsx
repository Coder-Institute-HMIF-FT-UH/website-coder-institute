import Image from 'next/image';

import { ProjekItem } from '@/data/beranda/projekTerbaruData';

export const ProjectCardUtama = ({ item }: { item: ProjekItem }) => {
  return (
    <div className="flex h-[440px] w-full cursor-pointer flex-col rounded-xl border-[1.3px] border-[#FFEBC2] bg-[#FFF7ED] px-6 pt-6 pb-6 text-left">
      {/* Gambar */}
      <div className="relative mb-5 w-full flex-shrink-0 overflow-hidden rounded-[20px]">
        <div className="relative w-full" style={{ height: '280px' }}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 60vw"
          />
        </div>
      </div>

      {/* Teks */}
      <div className="flex w-full flex-col items-start gap-2">
        <div className="mb-1 flex items-center gap-2">
          <span className="inline-block rounded-md bg-[#FFC343] px-3 py-1 text-xs font-semibold text-black">
            {item.category}
          </span>
        </div>
        <h3 className="text-xl leading-snug font-semibold">{item.title}</h3>
        <p className="text-base">{item.participants}</p>
      </div>
    </div>
  );
};
