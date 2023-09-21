import { LuCheck } from "react-icons/lu";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

enum SkillLevel {
  Básico,
  Intermediário,
  Avançado,
}

const mainSkills = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Sass", icon: SiSass },
  { name: "Styled Components", icon: SiStyledcomponents },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Prisma", icon: SiPrisma },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
  { name: "Jest", icon: SiJest },
  { name: "Testing Library", icon: SiTestinglibrary },
  { name: "VS Code", icon: SiVisualstudiocode },
];

const otherSkills = [
  { description: "Mobile-First, Design Responsivo" },
  { description: "Metodologias ágeis (Scrum e Kanban)" },
  { description: "Trabalho em equipe" },
  { description: "Resolução de problemas e capacidade analítica " },
];

const Skills = () => {
  return (
    <section className="py-14 min-h-screen bg-blue-dark" id="skills">
      <div className="px-2 md:px-8">
        <h2 className="text-4xl text-blue-primary decoration-4 underline underline-offset-[16px]">
          Habilidades
        </h2>

        <div className="mt-12 bg-blue-light p-4 rounded-md mx-4 md:mx-8">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2">
            {mainSkills.map(({ icon: Icon, ...skill }) => (
              <li key={skill.name}>
                <div className="flex p-2 gap-2 items-center text-blue-dark">
                  <div>
                    <Icon size={35} />
                  </div>
                  <p className="font-bold overflow-hidden overflow-ellipsis">
                    {skill.name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-8 mx-4 space-y-1 md:mx-8">
          {otherSkills.map(({ description }) => (
            <li key={description} className="flex gap-2 items-center">
              <LuCheck />
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
