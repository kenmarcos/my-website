import { Button } from "components/ui/button";

const LinkedinLink = () => {
  return (
    <div className="mt-12 text-center">
      <h3 className="text-2xl font-semibold">
        Veja mais detalhes da minha trajetória profissional:
      </h3>

      <Button
        asChild
        variant="link"
        className="text-blue-primary text-2xl font-semibold"
      >
        <a
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/marcos-kuribayashi"
          target="_blank"
        >
          Acessar LinkedIn
        </a>
      </Button>
    </div>
  );
};

export default LinkedinLink;
