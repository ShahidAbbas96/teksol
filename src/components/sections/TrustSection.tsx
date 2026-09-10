import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ModuleCard from "../cards/ModuleCard";
import { CORE_MODULES } from "../../data/modules";

export default function TrustSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="One Platform"
          title="One ERP. One Connected Business."
          description="Odoo connects the departments that usually run on separate tools — sales, inventory, accounting, HR, and more — into a single, centralized business platform."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CORE_MODULES.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </Container>
    </section>
  );
}
