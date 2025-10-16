import Image from 'next/image';

import { PrestasiItem } from '@/data/beranda/prestasiTerbaruData';

export const PrestasiCardKanan = ({ item }: { item: PrestasiItem }) => {
  return (
    <div className="flex cursor-pointer gap-4 self-stretch rounded-xl border-[1.3px] border-[#FFE7B7] bg-[#FFF7ED] px-4 py-5 sm:gap-5 sm:px-5 sm:py-6 lg:gap-4 lg:px-4 lg:py-6 xl:p-6">
      <div className="relative min-h-[120px] w-[150px] flex-shrink-0 self-stretch overflow-hidden rounded-md sm:min-h-[150px] sm:w-[240px] lg:min-h-[110px] lg:w-[160px] lg:rounded-sm xl:w-[190px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 45vw, 160px"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 text-left sm:gap-4 lg:gap-2">
        <h4 className="text-base leading-tight font-semibold sm:text-lg lg:text-base 2xl:text-lg">
          {item.title}
        </h4>
        <p className="text-sm sm:text-base lg:text-xs 2xl:text-sm">
          {item.participants}
        </p>
      </div>
    </div>
  );
};
