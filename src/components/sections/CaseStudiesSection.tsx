import { Info } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import CaseStudyCard from "../cards/CaseStudyCard";
import { CASE_STUDIES } from "../../data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section className="bg-brand-background py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Example Projects"
            title="What an Odoo ERP Project Looks Like"
            description="These illustrative examples show the type of ERP projects we take on. Real client case studies will be published here as engagements are completed."
          />

          <div className="mx-auto mt-6 flex max-w-2xl items-start gap-2.5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-left text-xs text-amber-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <span>These are illustrative example projects for demonstration purposes, not completed client engagements.</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.slug} {...study} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
