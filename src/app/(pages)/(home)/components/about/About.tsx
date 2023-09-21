import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="pt-14 min-h-screen" id="about">
      <div className="px-2 md:px-8">
        <h2 className="text-4xl text-blue-primary decoration-4 underline underline-offset-[16px]">
          Sobre mim
        </h2>

        <div className="mt-12 flex flex-col items-center md:flex-row px-8 gap-12">
          <Image
            className="rounded-md -scale-x-100 object-cover"
            src="https://github.com/kenmarcos.png"
            alt="Marcos"
            width={400}
            height={400}
          />

          <div className="flex flex-col gap-4 justify-center">
            <p>
              Desenvolvedor Full-Stack formado pela Kenzie Academy Brasil e
              Bacharel em Ciência e Tecnologia pela UFABC. Meu interesse pela
              programação despertou durante a graduação e desde então tenho me
              dedicado a especializar nessa área.
            </p>

            <p>
              Meu foco é na construção de aplicações completas de alta
              qualidade, desde a aparência do front-end até o funcionamento nos
              bastidores do back-end. Busco criar interfaces responsivas e
              dinâmicas que ofereçam uma excelente experiência ao usuário,
              combinando beleza e funcionalidade.
            </p>

            <p>
              Meu objetivo é construir uma carreira sólida, buscando sempre
              aprender e aprimorar minhas habilidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
