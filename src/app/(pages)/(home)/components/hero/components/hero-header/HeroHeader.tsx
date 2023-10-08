import HeroSubtitle from "./components/hero-subtitle/HeroSubtitle";

const HeroHeader = () => {
  return (
    <section className="space-y-4 text-white">
      <h1 className="text-6xl font-bold leading-[1.10]">
        Marcos Kenji Kuribayashi
      </h1>

      <p className="text-2xl">
        <HeroSubtitle />
      </p>
    </section>
  );
};

export default HeroHeader;
