import Image from "next/image";

import { gql } from "@apollo/client";
import { getClient } from "lib/client";
import { MainSkill } from "types";

// const mainSkills = [
// { name: "React", icon: "react" },
// { name: "TypeScript", icon: SiTypescript },
// { name: "Next.js", icon: SiNextdotjs },
// { name: "Redux", icon: SiRedux },
// { name: "JavaScript", icon: SiJavascript },
// { name: "HTML", icon: SiHtml5 },
// { name: "CSS", icon: SiCss3 },
// { name: "Sass", icon: SiSass },
// { name: "Styled Components", icon: SiStyledcomponents },
// { name: "Tailwind", icon: SiTailwindcss },
// { name: "Bootstrap", icon: SiBootstrap },
// { name: "Node.js", icon: SiNodedotjs },
// { name: "Express", icon: SiExpress },
// { name: "Prisma", icon: SiPrisma },
// { name: "PostgreSQL", icon: SiPostgresql },
// { name: "MongoDB", icon: SiMongodb },
// { name: "Firebase", icon: SiFirebase },
// { name: "Git", icon: SiGit },
// { name: "Jest", icon: SiJest },
// { name: "Testing Library", icon: SiTestinglibrary },
// { name: "VS Code", icon: SiVisualstudiocode },
// ];

const MainSkills = async () => {
  const { data } = await getClient().query<{ mainSkills: MainSkill[] }>({
    query: gql`
      query getMainSkills {
        mainSkills {
          id
          name
          icon
        }
      }
    `,
  });

  return (
    <section className="bg-blue-light p-4 rounded-md">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2">
        {data.mainSkills.map(({ id, name, icon }) => (
          <li key={id}>
            <div className="flex p-2 gap-2 items-center text-blue-dark">
              <div>
                <Image
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${icon}.svg`}
                  alt={name}
                  width={35}
                  height={35}
                />
              </div>
              <p className="font-bold overflow-hidden overflow-ellipsis">
                {name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainSkills;
