import Image from 'next/image';

const BerandaSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-5">
      <Image
        src="/logo-coder.png"
        alt="Logo Coder Institute"
        width={120}
        height={120}
        quality={100}
        priority
      />
      <h1 className="text-2xl font-bold text-foreground">
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
