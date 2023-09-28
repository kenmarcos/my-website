import { LuCheck } from "react-icons/lu";

import { gql } from "@apollo/client";
import { getClient } from "lib/client";
import { OtherSkill } from "types";

const OtherSkills = async () => {
  const { data } = await getClient().query<{ otherSkills: OtherSkill[] }>({
    query: gql`
      query getOtherSkills {
        otherSkills {
          id
          description
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
    <section className="mt-8">
      <ul className="space-y-1">
        {data.otherSkills.map(({ id, description }) => (
          <li key={id} className="flex gap-2 items-center">
            <LuCheck />
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OtherSkills;
