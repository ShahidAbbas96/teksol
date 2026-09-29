import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import CaseStudyCard from "../cards/CaseStudyCard";
import { CASE_STUDIES } from "../../data/caseStudies";

export default function CaseStudiesSection() {
  const featured = CASE_STUDIES.filter((study) => study.featured);

  return (
    <section className="bg-brand-background py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="What an Odoo ERP Engagement Looks Like"
            description="Common problems businesses bring us, and exactly how we solve them in Odoo."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featured.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex justify-center">
          <Button to="/portfolio" variant="outline" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
            View Full Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
