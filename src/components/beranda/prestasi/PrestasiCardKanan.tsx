import Image from 'next/image';

import { PrestasiItem } from '@/data/beranda/prestasiTerbaruData';

export const PrestasiCardKanan = ({ item }: { item: PrestasiItem }) => {
  return (
    <div className="flex cursor-pointer gap-4 self-stretch rounded-xl border-[1.3px] border-[#FFE7B7] bg-[#FFF7ED] px-4 py-6 xl:p-6">
      <div className="relative min-h-[110px] w-[140px] flex-shrink-0 self-stretch overflow-hidden rounded-sm lg:w-[160px] xl:w-[190px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 30vw, 160px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 text-left lg:gap-3">
        <h4 className="text-base leading-tight font-semibold 2xl:text-lg">
          {item.title}
        </h4>
        <p className="text-xs 2xl:text-sm">{item.participants}</p>
      </div>
    </div>
  );
};
