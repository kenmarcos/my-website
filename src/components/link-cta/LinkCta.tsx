import { Button } from "components/ui/button";

interface LinkCtaProps {
  title: string;
  link: string;
  cta: string;
}

const LinkCta = ({ title, link, cta }: LinkCtaProps) => {
  return (
    <section className="mt-20 text-center">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <Button
        asChild
        variant="link"
        className="text-blue-primary text-2xl font-semibold"
      >
        <a rel="noreferrer noopener" href={link} target="_blank">
          {cta}
        </a>
      </Button>
    </section>
  );
};

export default LinkCta;
