'use client';
import Image from 'next/image';

interface CardProps {
  category: string;
  title: string;
  authors: string;
  description: string;
  imageUrl: string;
}

export const Card = ({
  category,
  title,
  authors,
  description,
  imageUrl,
}: CardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-[#FFC343] bg-[#FFF7ED] p-5 shadow-sm">
      {/* Thumbnail */}
      <div className="mb-4 overflow-hidden rounded-[20px]">
        <div className="relative aspect-[8/5] w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-[20px] object-cover"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Category */}
      <span className="mb-3 inline-block rounded-full bg-[#FFC343] px-4 py-2 text-sm font-medium text-[#111827]">
        {category}
      </span>

      {/* Title */}
      <h3 className="mb-1 text-lg font-semibold text-[#111827]">{title}</h3>

      {/* Authors */}
      <p className="mb-2 text-sm font-medium text-[#4B5563]">{authors}</p>

      {/* Description */}
      <p className="mb-5 line-clamp-5 text-sm text-[#4B5563] md:text-base">
        {description}
      </p>

      {/* Button */}
      <div className="flex justify-end">
        <button className="inline-flex cursor-pointer items-center gap-2 rounded-[12px] bg-[#FFC343] px-4 py-2 text-sm transition hover:brightness-95">
          Detail
          <Image
            src="/icons/arrowLineRight.svg"
            alt="arrow right"
            width={12}
            height={12}
            className="inline-block"
          />
        </button>
      </div>
    </div>
  );
};
