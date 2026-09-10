import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import IndustryCard from "../cards/IndustryCard";
import { INDUSTRIES_SUMMARY, INDUSTRY_DETAILS } from "../../data/industries";

export default function IndustriesSection() {
  return (
    <section className="bg-brand-background py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Odoo Solutions for Your Industry"
            description="Every industry runs on different processes. We configure Odoo around the workflows specific to yours."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_SUMMARY.map((industry) => (
              <IndustryCard key={industry.slug} {...industry} linkable={Boolean(INDUSTRY_DETAILS[industry.slug])} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
