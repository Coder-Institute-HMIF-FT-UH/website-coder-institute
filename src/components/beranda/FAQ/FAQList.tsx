'use client';

import { useState } from 'react';

import { faqData } from '@/data/beranda/faqData';

import { FAQItem } from './FAQItem';

export const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-8 w-full max-w-5xl space-y-4">
      {faqData.map((faq, idx) => (
        <FAQItem
          key={idx}
          item={faq}
          isOpen={openIndex === idx}
          onClick={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
};
