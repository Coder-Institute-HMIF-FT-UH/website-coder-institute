'use client';

import { SectionHeading } from '../SectionHeading';

export const TentangKamiSection = () => {
  return (
    <section id="tentang-kami" className="mx-auto scroll-mt-28 lg:scroll-mt-40">
      <SectionHeading title="Tentang Kami" />
      <div className="relative mt-4 flex flex-col items-end md:mt-10 md:flex-row md:items-end md:justify-center xl:max-w-[1000px]">
        {/* Logo Kiri */}
        <div
          className="relative z-10 h-24 w-24 flex-shrink-0 rotate-[-4deg] bg-center bg-no-repeat sm:h-28 sm:w-28 md:mb-8 md:h-54 md:w-54 md:rotate-0 lg:h-62 lg:w-62 xl:h-70 xl:w-70"
          style={{
            background: "url('/logo-coder.png') center / contain no-repeat",
            opacity: 0.8,
          }}
        ></div>

        {/* Kotak Kanan */}
        <div className="relative z-0 -mt-8 w-full md:-ml-8 lg:mt-0 lg:-ml-8 xl:-ml-12">
          <div
            className="rounded-2xl border-2 border-[#FFCB5C] px-6 py-10 sm:p-10 xl:p-14"
            style={{
              background:
                'linear-gradient(104deg, #FFF7ED 9.98%, #FFFBF6 28.58%, #FFF7ED 50.19%, #FFFAF4 78.46%, #FFF7ED 97.9%)',
            }}
          >
            <p className="text-start text-sm leading-relaxed text-[#000] sm:text-base lg:text-lg 2xl:text-xl">
              <span className="font-semibold text-[#FFAE21]">
                Coder Institute HMIF FT-UH
              </span>{' '}
              adalah inkubator talenta digital bagi mahasiswa Teknik Informatika
              Universitas Hasanuddin yang{' '}
              <span className="font-semibold text-[#FFAE21]">
                fokus mencetak software developer kelas dunia.
              </span>{' '}
              Lewat kolaborasi, pembinaan skill, dan kegiatan nyata di bidang
              software development, Coder Institute membekali anggotanya dengan
              pembelajaran praktis di berbagai bidang seperti{' '}
              <span className="font-semibold text-[#FFAE21]">
                UI/UX, IoT, Mobile, Web, dan Game Development.
              </span>{' '}
              Dengan pendekatan ini, anggota didorong untuk siap bersaing di
              industri, berinovasi, dan berkontribusi nyata untuk kemajuan
              teknologi dan bangsa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
