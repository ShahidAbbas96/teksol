import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

/** Shared hero block for simple interior pages — heading + subtext on a soft mesh backdrop. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-background py-16 sm:py-20">
      <div aria-hidden className="bg-mesh pointer-events-none absolute inset-0" />
      <Container className="relative">
        <Reveal>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
      </Container>
    </section>
  );
}
