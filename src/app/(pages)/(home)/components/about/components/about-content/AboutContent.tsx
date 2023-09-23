import Image from "next/image";

const AboutContent = () => {
  return (
    <section className="mt-12 flex flex-wrap gap-12 justify-center">
      <Image
        className="rounded-md -scale-x-100 object-cover aspect-[3/4]"
        src="https://github.com/kenmarcos.png"
        alt="Marcos"
        width={220}
        height={220}
      />

      <div className="flex flex-col gap-4 max-w-xl justify-center">
        <p>
          Desenvolvedor Full-Stack formado pela Kenzie Academy Brasil e Bacharel
          em Ciência e Tecnologia pela UFABC. Meu interesse pela programação
          despertou durante a graduação e desde então tenho me dedicado a
          especializar nessa área.
        </p>

        <p>
          Meu foco é na construção de aplicações completas de alta qualidade,
          desde a aparência do front-end até o funcionamento nos bastidores do
          back-end. Busco criar interfaces responsivas e dinâmicas que ofereçam
          uma excelente experiência ao usuário, combinando beleza e
          funcionalidade.
        </p>

        <p>
          Meu objetivo é construir uma carreira sólida, buscando sempre aprender
          e aprimorar minhas habilidades.
        </p>
      </div>
    </section>
  );
};

export default AboutContent;
