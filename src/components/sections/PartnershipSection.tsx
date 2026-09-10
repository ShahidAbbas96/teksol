import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { NOTE_ON_PARTNERSHIP } from "../../config/site";

const CAPABILITIES = [
  "ERP consulting and process assessment",
  "Full-scope Odoo implementation",
  "Custom Odoo development",
  "System and third-party integration",
  "Data migration from legacy systems",
  "Administrator and end-user training",
  "Ongoing technical support",
];

export default function PartnershipSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Our Odoo Practice"
                title="Your Trusted Odoo Technology Partner"
                align="left"
                description="We work with businesses end to end — from ERP consulting through implementation, custom development, integration, migration, training, and support."
              />
              <ul className="mt-8 space-y-3">
                {CAPABILITIES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl border border-brand-primary/20 bg-brand-background p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-primary/10 blur-3xl"
              />
              <span className="relative inline-flex items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                Working Toward Odoo Partnership
              </span>
              <p className="relative mt-5 text-base leading-relaxed text-slate-700">{NOTE_ON_PARTNERSHIP}</p>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-500">
                We are transparent about where we are on this path — our focus today is delivering high-quality Odoo
                implementation, development, and support for every client we work with.
              </p>
              <div className="relative mt-7">
                <Button to="/contact" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
                  Discuss Your ERP Project
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
