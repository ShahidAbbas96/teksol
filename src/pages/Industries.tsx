import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import IndustryCard from "../components/cards/IndustryCard";
import CTASection from "../components/sections/CTASection";
import PageHero from "../components/sections/PageHero";
import { INDUSTRIES_SUMMARY, INDUSTRY_DETAILS } from "../data/industries";

export default function Industries() {
  return (
    <>
      <SEO
        title="Odoo ERP Solutions by Industry | TechSols"
        description="See how Odoo ERP supports manufacturing, retail, wholesale, e-commerce, healthcare, and professional services businesses."
        path="/industries"
      />

      <PageHero
        eyebrow="Industries"
        title="Odoo Solutions for Your Industry"
        description="Every industry runs on different processes. We configure Odoo around the specific workflows your business depends on."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES_SUMMARY.map((industry) => (
                <IndustryCard key={industry.slug} {...industry} linkable={Boolean(INDUSTRY_DETAILS[industry.slug])} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
