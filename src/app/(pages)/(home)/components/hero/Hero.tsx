import HeroActions from "./components/hero-actions/HeroActions";
import HeroHeader from "./components/hero-header/HeroHeader";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex justify-center items-center bg-hero bg-cover bg-center p-4"
    >
      <div className="max-w-[450px]">
        <HeroHeader />

        <HeroActions />
      </div>
    </section>
  );
};

export default Hero;
