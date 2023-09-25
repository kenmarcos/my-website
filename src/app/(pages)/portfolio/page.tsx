import Image from "next/image";

import LinkCta from "components/link-cta/LinkCta";
import SectionTitle from "components/section-title/SectionTitle";
import { Button } from "components/ui/button";

import ProjectCard from "./components/project-card/ProjectCard";

const projects = [1, 2, 3, 4, 5, 6];

const PortfolioPage = () => {
  return (
    <section className="py-14 bg-blue-dark min-h-screen" id="about">
      <div className="px-4 md:px-10">
        <SectionTitle>Portfólio</SectionTitle>

        <div className="mt-12">
          <section className="max-w-[1140px] mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {projects.map((project) => (
                <li key={project}>
                  <ProjectCard />
                </li>
              ))}
            </ul>
          </section>

          <LinkCta
            title="Veja mais projetos:"
            link="https://github.com/kenmarcos"
            cta="Acessar GitHub"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
