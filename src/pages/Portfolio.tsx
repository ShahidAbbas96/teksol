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
        title="Portfolio | Odoo & Dynamics 365 ERP Engagements | TechSols"
        description="How TechSols approaches Odoo and Microsoft Dynamics 365 ERP projects across retail, manufacturing, wholesale, healthcare, professional services, and e-commerce."
        path="/portfolio"
      />

      <PageHero
        eyebrow="Portfolio"
        title="What We Build"
        description="Common problems businesses bring us, and exactly how we solve them — the modules we configure, the approach we take, and the outcome you can expect."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
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
