import { ReactNode } from "react";

interface SectionTitle {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitle) => {
  return (
    <h2 className="text-4xl text-blue-primary decoration-4 underline underline-offset-[16px]">
      {children}
    </h2>
  );
};

export default SectionTitle;
