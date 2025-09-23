'use client';

import Image from 'next/image';

import { FAQ } from '@/data/beranda/faqData';

interface FAQItemProps {
  item: FAQ;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQItem = ({ item, isOpen, onClick }: FAQItemProps) => {
  return (
    <div
      className={`w-full cursor-pointer rounded-2xl border border-[#FFE7B7] px-6 py-5 text-left transition-colors hover:shadow-sm ${
        isOpen ? 'bg-[#FFC854]' : 'bg-[#FFF9F1]'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-medium sm:text-base">{item.question}</h3>
        <Image
          src={`/icons/arrow.svg`}
          alt="arrow icon"
          width={12}
          height={12}
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'mt-3 max-h-40' : 'max-h-0'
        }`}
      >
        <p className="text-sm sm:text-base">{item.answer}</p>
      </div>
    </div>
  );
};
