import { ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { IMPLEMENTATION_STEPS } from "../../data/content";

export default function ImplementationProcess() {
  return (
    <section className="bg-brand-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="Odoo Implementation Built Around Your Business"
          description="We follow a structured, five-phase approach that keeps your business processes at the center of every configuration decision."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {IMPLEMENTATION_STEPS.map((step) => (
            <div key={step.number} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-3xl font-bold text-brand-secondary/25">{step.number}</span>
              <h3 className="mt-3 text-base font-semibold text-brand-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button to="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
            Start Your Odoo Journey
          </Button>
        </div>
      </Container>
    </section>
  );
}
