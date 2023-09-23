import { LuCheck } from "react-icons/lu";

const otherSkills = [
  { description: "Mobile-First, Design Responsivo" },
  { description: "Metodologias ágeis (Scrum e Kanban)" },
  { description: "Trabalho em equipe" },
  { description: "Resolução de problemas e capacidade analítica " },
];

const OtherSkills = () => {
  return (
    <section className="mt-8">
      <ul className="space-y-1">
        {otherSkills.map(({ description }) => (
          <li key={description} className="flex gap-2 items-center">
            <LuCheck />
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OtherSkills;
