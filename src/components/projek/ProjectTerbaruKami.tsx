import Image from 'next/image';

import { projekTerbaruKami } from '@/data/projek/projekData';

export const ProjectTerbaruKami = () => {
  return (
    <section className="mt-6 w-full md:mt-10 lg:mt-12">
      <h2 className="text-2xl font-semibold md:text-3xl">
        Projek Terbaru Kami
      </h2>

      <div className="mt-6 rounded-[24px] border border-[#FFC343] bg-[#FFF7ED] p-5 md:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* Gambar kiri */}
          <div className="relative mx-auto w-full overflow-hidden rounded-[16px] bg-[#EDE5D8] lg:max-w-[420px] lg:flex-shrink-0">
            <div className="relative aspect-[5/3] w-full">
              <Image
                src={projekTerbaruKami.image}
                alt={projekTerbaruKami.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Konten kanan */}
          <div className="flex flex-1 flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold md:text-2xl">
                {projekTerbaruKami.title}
              </h3>
              <p className="text-sm font-medium">
                {projekTerbaruKami.creators}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#2E2E2E] md:text-base">
                {projekTerbaruKami.description}
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-[10px] bg-[#FEBD32] px-4 py-2 text-sm text-[#2E2E2E] transition hover:brightness-95"
              >
                Detail
                <Image
                  src="/icons/arrowLineRight.svg"
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
