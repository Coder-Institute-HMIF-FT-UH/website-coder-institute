'use client';

import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div>
      <section className="flex min-h-screen flex-col items-center justify-center gap-10 md:min-h-[80vh] md:flex-row md:justify-between md:gap-4 xl:gap-12">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center gap-8 text-center md:text-left lg:w-5/7 lg:items-start lg:gap-12 xl:w-2/3">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-center text-4xl font-extrabold sm:text-5xl lg:text-6xl 2xl:text-7xl">
              <span className="text-gradient-coder">CODER</span>{' '}
              <span className="text-gradient-institute">Institute</span>
            </h1>
            <h4 className="px-4 text-center font-bold sm:px-10 sm:text-lg md:px-0 lg:text-xl xl:text-2xl">
              HIMPUNAN MAHASISWA INFORMATIKA FAKULTAS TEKNIK UNIVERSITAS
              HASANUDDIN 2025
            </h4>
          </div>
          <Link
            href="#"
            className="hidden items-center justify-center gap-[10px] self-center rounded-[12px] bg-[linear-gradient(130deg,#ffcb5c_15.92%,#ffdb8c_48.65%,#ffcb5c_73.69%)] px-[28px] py-[12px] font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[linear-gradient(130deg,#ffd97a_15.92%,#ffe6a8_48.65%,#ffd97a_73.69%)] hover:shadow-md md:inline-flex"
          >
            <span>Lanjutkan</span>
            <Image
              src="/icons/arrow-point-down.svg"
              alt="Arrow Down"
              width={14}
              height={14}
            />
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col justify-center gap-10 md:flex md:gap-0 lg:w-3/7 xl:w-1/2">
          <Image
            src="/beranda/fotbar-coder.png"
            alt="Foto Bersama Coder Institute"
            width={450}
            height={450}
            className="h-auto w-[350px] object-cover md:w-[450px]"
            priority
          />

          <Link
            href="#"
            className="inline-flex items-center justify-center gap-[10px] self-center rounded-[12px] bg-[linear-gradient(130deg,#ffcb5c_15.92%,#ffdb8c_48.65%,#ffcb5c_73.69%)] px-[28px] py-[12px] font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[linear-gradient(130deg,#ffd97a_15.92%,#ffe6a8_48.65%,#ffd97a_73.69%)] hover:shadow-md md:hidden"
          >
            <span>Lanjutkan</span>
            <Image
              src="/icons/arrow-point-down.svg"
              alt="Arrow Down"
              width={14}
              height={14}
            />
          </Link>
        </div>
      </section>

      <span className="block w-full border-b-[1.4px] border-[#FFCB5C] bg-[linear-gradient(104deg,#FFF7ED_9.98%,#FFFBF6_28.58%,#FFF7ED_50.19%,#FFFAF4_78.46%,#FFF7ED_97.9%)]" />
    </div>
  );
};
