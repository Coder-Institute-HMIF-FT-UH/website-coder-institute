'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

export interface CardPengurusProps {
  fotoUrl: string;
  nama: string;
  jabatan: string;
}

export const CardPengurus: React.FC<CardPengurusProps> = ({
  fotoUrl,
  nama,
  jabatan,
}) => {
  const isLeader =
    jabatan.toLowerCase() === 'ketua' ||
    jabatan.toLowerCase().startsWith('koordinator');

  return (
    <div
      className={clsx(
        'mshover:shadow-lg flex w-full flex-col rounded-xl p-3 transition-shadow duration-200 ease-in-out sm:p-4',
        isLeader
          ? 'bg-[linear-gradient(159deg,#FFAE21_1.6%,#FFC343_30.54%,#FFDB8C_49.83%,#FFAE21_98.07%)]'
          : 'border-[1.25px] border-[#FFC343] bg-[#FFF9F1]'
      )}
    >
      <div className="relative mb-3 aspect-[7/8] w-full overflow-hidden sm:mb-4">
        <Image
          src={fotoUrl}
          alt={`foto ${nama}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-lg object-cover"
          priority={isLeader}
        />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <p className="text-sm leading-tight font-semibold text-[#1A1A1A] sm:text-base">
          {nama}
        </p>
        <p className="text-xs leading-tight text-[#333] sm:text-sm">
          {jabatan}
        </p>
      </div>
    </div>
  );
};
