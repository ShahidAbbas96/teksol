import { ArrowRight, CalendarCheck } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

interface CTASectionProps {
  heading?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  variant?: "dark" | "light";
}

export default function CTASection({
  heading = "Ready to Transform Your Business?",
  description = "Let's discuss your current processes, challenges, and ERP goals. Our team will help you identify the right Odoo solution for your business.",
  primaryLabel = "Book a Consultation",
  primaryTo = "/contact",
  secondaryLabel = "Request a Demo",
  secondaryTo = "/contact?intent=demo",
  variant = "dark",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section className={isDark ? "bg-brand-dark py-20 sm:py-24" : "bg-white py-20 sm:py-24"}>
      <Container>
        <Reveal>
          <div
            className={`relative overflow-hidden flex flex-col items-center gap-8 rounded-3xl px-6 py-14 text-center sm:px-16 ${
              isDark
                ? "bg-mesh-dark bg-gradient-to-br from-[#1e2a44] to-[#141b2c] border border-white/10"
                : "bg-brand-background border border-slate-200"
            }`}
          >
            <h2 className={`relative max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-brand-dark"}`}>
              {heading}
            </h2>
            <p className={`relative max-w-xl text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {description}
            </p>
            <div className="relative flex flex-col gap-3 sm:flex-row">
              <Button to={primaryTo} variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                {primaryLabel}
              </Button>
              <Button
                to={secondaryTo}
                variant={isDark ? "outlineDark" : "outline"}
                size="lg"
                icon={<CalendarCheck className="h-5 w-5" />}
              >
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
