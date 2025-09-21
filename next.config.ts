import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  /*
  daftar kualitas gambar yang diizinkan
  75 = default, 100 = high quality (misalnya untuk logo penting)
  */
  images: {
    qualities: [50, 75, 100],
  },
};

export default nextConfig;
