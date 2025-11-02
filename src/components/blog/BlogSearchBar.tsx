'use client';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';

const BlogSearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [keyword, setKeyword] = useState(
    () => searchParams.get('search')?.toLowerCase() ?? ''
  );

  useEffect(() => {
    setKeyword(searchParams.get('search')?.toLowerCase() ?? '');
  }, [searchParams]);

  const updateQuery = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const normalizedKeyword = value.trim().toLowerCase();

    if (normalizedKeyword.length > 0) {
      params.set('search', normalizedKeyword);
    } else {
      params.delete('search');
    }

    const query = params.toString();
    const nextUrl = query ? `${pathname}?${query}` : pathname;

    router.replace(nextUrl, { scroll: false });
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    const normalizedValue = event.currentTarget.value.toLowerCase();
    setKeyword(normalizedValue);
    updateQuery(normalizedValue);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateQuery(keyword.toLowerCase());
  };

  return (
    <form
      className="mt-4 flex w-full max-w-2xl items-center gap-3 rounded-[64px] bg-[linear-gradient(0deg,var(--yellow-yellow6,#FFF7ED)_0%,var(--yellow-yellow6,#FFF7ED)_100%)] px-7 py-4.5 md:mt-10"
      onSubmit={handleSubmit}
    >
      <Image
        src="/icons/search.svg"
        alt="Ikon pencarian"
        width={20}
        height={20}
      />
      <input
        className="w-full bg-transparent text-base text-[#0F2A3D] outline-none placeholder:text-[#969292]"
        type="search"
        placeholder="Search"
        aria-label="Cari blog"
        value={keyword}
        onInput={handleInputChange}
      />
      <button type="submit" className="sr-only">
        Cari
      </button>
    </form>
  );
};

export default BlogSearchBar;
