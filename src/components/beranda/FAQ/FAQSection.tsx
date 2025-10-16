import { SectionHeading } from '../SectionHeading';

import { FAQList } from './FAQList';

export const FAQSection = () => {
  return (
    <div className="space-y-6">
      <SectionHeading title="Pertanyaan Umum" />
      <FAQList />
    </div>
  );
};
