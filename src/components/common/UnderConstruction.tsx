import Image from 'next/image';
import Link from 'next/link';

export const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 text-center">
      <Image
        src="/logo-coder.png"
        alt="Logo Coder Institute"
        width={120}
        height={120}
        quality={100}
        priority
      />
      <h1 className="text-foreground text-lg font-bold sm:text-xl md:text-2xl">
        Website Sedang Dalam Proses Pengerjaan 🚧
      </h1>
      <p className="text-sm md:text-base">
        Nantikan update terbaru dari{' '}
        <Link
          href="https://www.instagram.com/coderinstitute/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline"
        >
          <span className="font-semibold">Coder Institute</span>.
        </Link>
      </p>
    </div>
  );
};
