import React from "react";
import Image from "next/image";

export const BerandaSection = () => {
  return (
    <div className="min h-screen flex justify-center items-center flex-col gap-10">
      <Image
        src="/logo-coder.png"
        alt="Coder Institute Logo"
        width={200}
        height={200}
      />
      <div className="text-center">
        <h1 className="text-4xl font-semibold">CODER INSTITUTE</h1>
        <p>Ini halaman beranda</p>
      </div>
    </div>
  );
};
