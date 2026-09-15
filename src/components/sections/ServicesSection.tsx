import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ServiceCard from "../cards/ServiceCard";
import { SERVICES_SUMMARY } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Our Odoo & Dynamics 365 ERP Services"
            description="From first consultation to long-term support, we cover every stage of your Odoo or Dynamics 365 ERP journey."
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_SUMMARY.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
