import LinkCta from "components/link-cta/LinkCta";
import SectionTitle from "components/section-title/SectionTitle";

import AboutContent from "./components/about-content/AboutContent";

const About = () => {
  return (
    <section className="py-14 min-h-screen" id="about">
      <div className="px-4 md:px-8">
        <SectionTitle>Sobre mim</SectionTitle>

        <AboutContent />

        <LinkCta
          title="Veja mais detalhes da minha trajetoria profissional:"
          link="https://www.linkedin.com/in/marcos-kuribayashi"
          cta="Acessar LinkedIn"
        />
      </div>
    </section>
  );
};

export default About;
