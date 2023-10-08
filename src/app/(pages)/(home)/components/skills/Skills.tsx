import SectionTitle from "components/section-title/SectionTitle";

import MainSkills from "./components/main-skills/MainSkills";
import OtherSkills from "./components/other-skills/OtherSkills";

const Skills = () => {
  return (
    <section className="py-14 min-h-screen bg-primary-foreground" id="skills">
      <div className="px-4 md:px-8">
        <SectionTitle>Habilidades</SectionTitle>

        <div className="mt-12">
          <MainSkills />

          <OtherSkills />
        </div>
      </div>
    </section>
  );
};

export default Skills;
