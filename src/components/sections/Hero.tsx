import { ArrowRight, Compass } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import DashboardIllustration from "../illustrations/DashboardIllustration";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-96 bg-gradient-to-b from-brand-secondary/10 to-transparent"
      />
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600">
              Odoo ERP Implementation Partner
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-[3.25rem]">
              Transform Your Business with Odoo ERP
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              We help businesses implement, customize, integrate, and optimize Odoo ERP to streamline operations,
              improve visibility, and scale with confidence.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Book ERP Consultation
              </Button>
              <Button to="/odoo" variant="outline" size="lg" icon={<Compass className="h-5 w-5" />}>
                Explore Odoo Solutions
              </Button>
            </div>
          </div>

          <div>
            <DashboardIllustration />
          </div>
        </div>
      </Container>
    </section>
  );
}
