import Image from "next/image";

import { gql } from "@apollo/client";
import { getClient } from "lib/client";
import { MainSkill } from "types";

const MainSkills = async () => {
  const { data } = await getClient().query<{ mainSkills: MainSkill[] }>({
    query: gql`
      query getMainSkills {
        mainSkills(first: 30) {
          id
          name
          icon
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
    <section className="bg-secondary p-4 rounded-md">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2">
        {data.mainSkills.map(({ id, name, icon }) => (
          <li key={id}>
            <div className="flex p-2 gap-2 items-center">
              <div>
                <img
                  src={`https://cdn.simpleicons.org/${icon}/000000/ffffff`}
                  alt={icon}
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
