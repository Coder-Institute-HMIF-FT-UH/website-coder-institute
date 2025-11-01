import Image from 'next/image';

const BlogSearchBar = () => {
  return (
    <form className="mt-10 flex w-full max-w-2xl items-center gap-3 rounded-[64px] bg-[linear-gradient(0deg,var(--yellow-yellow6,#FFF7ED)_0%,var(--yellow-yellow6,#FFF7ED)_100%)] px-7 py-4.5">
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
      />
    </form>
  );
};

export default BlogSearchBar;
