import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import ServiceCard from "../components/cards/ServiceCard";
import CTASection from "../components/sections/CTASection";
import PageHero from "../components/sections/PageHero";
import { SERVICES_SUMMARY } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Odoo & ERP Services | TechSols"
        description="Explore our full range of Odoo ERP services — implementation, customization, development, integration, migration, support, consulting, and training."
        path="/services"
      />

      <PageHero
        eyebrow="Services"
        title="Our Odoo & ERP Services"
        description="From first ERP consultation through long-term support, we cover every stage of your Odoo journey."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES_SUMMARY.map((service) => (
                <ServiceCard key={service.slug} {...service} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
