import LinkCta from "components/link-cta/LinkCta";
import SectionTitle from "components/section-title/SectionTitle";

import ProjectCard from "./components/project-card/ProjectCard";

import { gql } from "@apollo/client";
import { getClient } from "lib/client";
import { Project } from "types";

const PortfolioPage = async () => {
  const { data } = await getClient().query<{ projects: Project[] }>({
    query: gql`
      query getProjects {
        projects {
          id
          name
          description
          techs
          github
          demo
          image {
            url
          }
        }
      }
    `,
    context: {
      fetchOptions: {
        next: { revalidate: 60 * 60 * 24 * 15 }, // revalidate every 15 days
      },
    },
  });

  return (
    <section className="py-14 bg-background min-h-screen" id="about">
      <div className="px-4 md:px-10">
        <SectionTitle>Portfólio</SectionTitle>

        <div className="mt-12">
          <section className="max-w-[1140px] mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {data.projects.map((project) => (
                <li key={project.id}>
                  <ProjectCard project={project} />
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
