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

const MainSkills = () => {
  return (
    <section className="bg-blue-light p-4 rounded-md">
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
    </section>
  );
};

export default MainSkills;
