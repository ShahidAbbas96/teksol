import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ServiceCard from "../components/cards/ServiceCard";
import CTASection from "../components/sections/CTASection";
import { SERVICES_SUMMARY } from "../data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Odoo & ERP Services | Teksol"
        description="Explore our full range of Odoo ERP services — implementation, customization, development, integration, migration, support, consulting, and training."
        path="/services"
      />

      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Services"
            title="Our Odoo & ERP Services"
            description="From first ERP consultation through long-term support, we cover every stage of your Odoo journey."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_SUMMARY.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
