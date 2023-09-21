"use client";

import { TypeAnimation } from "react-type-animation";

const HeroSubtitle = () => {
  return (
    <TypeAnimation
      sequence={[
        "Desenvolvedor Full-Stack",
        3000,
        "Desenvolvedor Front-End",
        3000,
        "Desenvolvedor Web",
        3000,
      ]}
      repeat={Infinity}
      speed={5}
      style={{
        textDecoration: "underline",
        textUnderlineOffset: "16px",
        textDecorationColor: "#4f91f9",
      }}
    />
  );
};

export default HeroSubtitle;
