import { HeadingCustom } from '../common/HeadingCustom';

import { ProjectsFilterSection } from './ProjectsFilterSection';
import { ProjectTerbaruKami } from './ProjectTerbaruKami';

const ProjekSection = () => {
  return (
    <div className="relative mx-auto mt-8 mb-20 flex min-h-[80vh] w-full max-w-6xl flex-col items-center">
      <HeadingCustom text="Projek Coder Institute" />
      <div className="w-full">
        <ProjectTerbaruKami />
        <ProjectsFilterSection />
      </div>
    </div>
  );
};

export default ProjekSection;
