import Link from "next/link";

import { Button } from "components/ui/button";

const HeroActions = () => {
  return (
    <section className="mt-16">
      <Button asChild size="lg" className="text-2xl font-semibold">
        <Link href="/#about">Descubra mais</Link>
      </Button>
    </section>
  );
};

export default HeroActions;
