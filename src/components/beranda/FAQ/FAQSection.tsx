import { SectionHeading } from '../SectionHeading';

import { FAQList } from './FAQList';

export const FAQSection = () => {
  return (
    <div id="faq" className="scroll-mt-20 space-y-6">
      <SectionHeading title="Pertanyaan Umum" />
      <FAQList />
    </div>
  );
};
