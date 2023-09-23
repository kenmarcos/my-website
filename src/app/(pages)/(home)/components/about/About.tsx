import SectionTitle from "components/section-title/SectionTitle";

import AboutContent from "./components/about-content/AboutContent";
import LinkedinLink from "./components/linkedin-link/LinkedinLink";

const About = () => {
  return (
    <section className="py-14 min-h-screen" id="about">
      <div className="px-4 md:px-8">
        <SectionTitle>Sobre mim</SectionTitle>

        <AboutContent />

        <LinkedinLink />
      </div>
    </section>
  );
};

export default About;
