import { Metadata } from 'next';
import { Suspense } from 'react';

import PengurusSection from '@/components/pengurus/PengurusSection';

export const metadata: Metadata = {
  title: 'Pengurus',
  description:
    'Profil pengurus dan struktur organisasi Coder Institute - komunitas IT mahasiswa Teknik Informatika Universitas Hasanuddin.',
  keywords: [
    'pengurus Coder Institute',
    'struktur organisasi',
    'kepengurusan',
    'mahasiswa IT Unhas',
  ],
  openGraph: {
    title: 'Pengurus - Coder Institute',
    description:
      'Profil pengurus dan struktur organisasi Coder Institute - komunitas IT mahasiswa Teknik Informatika Universitas Hasanuddin.',
  },
};

function PengurusLoading() {
  return (
    <div className="relative mx-auto mt-10 mb-20 min-h-[80vh]">
      <div className="flex flex-col items-center gap-10 text-center">
        <div className="h-20 w-64 animate-pulse rounded-lg bg-gray-200" />
        <div className="h-12 w-full max-w-2xl animate-pulse rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}

export default function PengurusPage() {
  return (
    <div>
      <Suspense fallback={<PengurusLoading />}>
        <PengurusSection />
      </Suspense>
    </div>
  );
}
