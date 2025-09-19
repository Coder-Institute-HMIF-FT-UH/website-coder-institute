import ProjekSection from '@/components/projek/ProjekSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projek',
  description:
    'Kumpulan project dan karya inovatif dari anggota Coder Institute mulai dari web development, mobile app, hingga AI.',
  keywords: [
    'project Coder Institute',
    'web development',
    'mobile app',
    'software project',
    'portfolio mahasiswa IT',
  ],
  openGraph: {
    title: 'Projek - Coder Institute',
    description:
      'Kumpulan project dan karya inovatif dari anggota Coder Institute mulai dari web development, mobile app, hingga AI.',
  },
};

export default function ProjekPage() {
  return (
    <>
      <div className="container">
        <ProjekSection />
      </div>
    </>
  );
}
