import { Info } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import PageHero from "../components/sections/PageHero";
import CaseStudyCard from "../components/cards/CaseStudyCard";
import CTASection from "../components/sections/CTASection";
import { CASE_STUDIES } from "../data/caseStudies";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio | Example Odoo & Dynamics 365 ERP Projects | TechSols"
        description="See the type of Odoo and Microsoft Dynamics 365 ERP projects TechSols takes on — across retail, manufacturing, wholesale, healthcare, professional services, and e-commerce."
        path="/portfolio"
      />

      <PageHero
        eyebrow="Portfolio"
        title="What We Build"
        description="A look at the type of ERP projects we take on — the problems businesses bring us, how we approach them in Odoo or Dynamics 365, and what changes as a result."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-2xl items-start gap-2.5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-left text-sm text-amber-800">
              <Info className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                These are illustrative example projects, written to show the type of work we do and how we approach
                it — not completed client engagements. Real case studies will replace and expand this page as
                engagements are completed.
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.slug} {...study} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        heading="Have a Project Like One of These?"
        description="Tell us about your business and current setup. We'll walk through what an Odoo or Dynamics 365 implementation would actually look like for you."
        primaryLabel="Book a Consultation"
        secondaryLabel="Get Implementation Quote"
      />
    </>
  );
}
