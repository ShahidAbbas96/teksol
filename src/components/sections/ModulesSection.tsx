import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import ModuleCard from "../cards/ModuleCard";
import { ALL_MODULES } from "../../data/modules";

export default function ModulesSection() {
  return (
    <section id="modules" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Odoo Apps"
          title="A Complete Suite of Odoo ERP Modules"
          description="Start with the apps your business needs today, and add more as you grow — every module works together natively."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ALL_MODULES.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button to="/odoo" variant="outline" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
            Explore Odoo Modules
          </Button>
        </div>
      </Container>
    </section>
  );
}
