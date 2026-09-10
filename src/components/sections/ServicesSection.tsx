import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../cards/ServiceCard";
import { SERVICES_SUMMARY } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Odoo & ERP Services"
          description="From first consultation to long-term support, we cover every stage of your Odoo ERP journey."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_SUMMARY.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
