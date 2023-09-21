import HeroSubtitle from "./components/hero-subtitle/HeroSubtitle";

const Hero = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-hero bg-cover bg-center p-4">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold max-w-[450px] leading-[1.10]">
          Marcos Kenji Kuribayashi
        </h1>

        <p className="text-3xl">
          <HeroSubtitle />
        </p>
      </div>
    </section>
  );
};

export default Hero;
