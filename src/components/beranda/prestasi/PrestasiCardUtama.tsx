import Image from 'next/image';

import { PrestasiItem } from '@/data/beranda/prestasiTerbaruData';

export const PrestasiCardUtama = ({ item }: { item: PrestasiItem }) => {
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
        <h3 className="text-xl leading-snug font-semibold">{item.title}</h3>
        <p className="text-base">{item.participants}</p>
      </div>
    </div>
  );
};
