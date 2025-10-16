import Image from 'next/image';

import { PrestasiItem } from '@/data/beranda/prestasiTerbaruData';

export const PrestasiCardKanan = ({ item }: { item: PrestasiItem }) => {
  return (
    <div className="xs:gap-4 xs:px-4 xs:py-5 flex cursor-pointer gap-3 self-stretch rounded-xl border-[1.3px] border-[#FFE7B7] bg-[#FFF7ED] py-4 pl-3 sm:gap-5 sm:px-5 sm:py-6 lg:gap-4 lg:px-4 lg:py-6 xl:p-6">
      <div className="xs:min-h-[120px] xs:w-[130px] relative min-h-[100px] w-[110px] flex-shrink-0 self-stretch overflow-hidden rounded-md sm:min-h-[150px] sm:w-[240px] lg:min-h-[110px] lg:w-[160px] lg:rounded-sm xl:w-[190px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 400px) 110px, (max-width: 640px) 130px, (max-width: 1024px) 240px, 160px"
        />
      </div>

      <div className="xs:gap-2 flex min-w-0 flex-1 flex-col justify-center gap-1 text-left sm:gap-4 lg:gap-2">
        <h4 className="text-sm leading-tight font-semibold sm:text-lg lg:text-base 2xl:text-lg">
          {item.title}
        </h4>
        <p className="text-xs sm:text-base lg:text-xs 2xl:text-sm">
          {item.participants}
        </p>
      </div>
    </div>
  );
};
