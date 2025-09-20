import Image from 'next/image';

const BerandaSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-5 text-center">
      <Image
        src="/logo-coder.png"
        alt="Logo Coder Institute"
        width={120}
        height={120}
        quality={100}
        priority
      />
      <h1 className="text-foreground text-2xl font-bold">
        Website Sedang Dalam Proses Pengerjaan 🚧
      </h1>
      <p className="text-gray-600">
        Nantikan update terbaru dari{' '}
        <span className="font-semibold">Coder Institute</span>.
      </p>
    </div>
  );
};

export default BerandaSection;
