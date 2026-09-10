import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import ModulesSection from "../components/sections/ModulesSection";
import PartnershipSection from "../components/sections/PartnershipSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import ServiceCard from "../components/cards/ServiceCard";
import DashboardIllustration from "../components/illustrations/DashboardIllustration";
import { SERVICE_DETAILS } from "../data/services";

const WHY_ODOO_POINTS = [
  "A single, modular platform instead of dozens of disconnected tools",
  "Apps for sales, inventory, accounting, manufacturing, HR, and more — all natively connected",
  "Start with what you need today and add modules as your business grows",
  "An open, widely adopted platform with a large ecosystem of apps and developers",
  "Configurable enough to match real business processes, not just generic workflows",
];

const ODOO_SERVICE_SLUGS = [
  "odoo-implementation",
  "odoo-customization",
  "odoo-integration",
  "odoo-migration",
  "odoo-support",
];

export default function Odoo() {
  return (
    <>
      <SEO
        title="Odoo ERP Solutions Designed Around Your Business | TekSol"
        description="Explore Odoo ERP modules, implementation, customization, integration, migration, and support services from TekSol."
        path="/odoo"
      />

      {/* Hero */}
      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600">
                Odoo ERP
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl">
                Odoo ERP Solutions Designed Around Your Business
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Odoo brings your sales, inventory, accounting, manufacturing, and operations onto one connected
                platform. We help you implement, customize, and extend it around how your business actually runs.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                  Book ERP Consultation
                </Button>
                <Button to="#modules" variant="outline" size="lg">
                  View Odoo Modules
                </Button>
              </div>
            </div>
            <DashboardIllustration />
          </div>
        </Container>
      </section>

      {/* What is Odoo */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="What is Odoo?"
              title="A Connected Suite of Business Applications"
              description="Odoo is a modular ERP platform made up of individual applications — CRM, Sales, Inventory, Accounting, Manufacturing, HR, and more — that share one underlying database. Instead of stitching together separate tools, businesses run every department from one connected system."
            />
            <div>
              <h3 className="text-lg font-semibold text-brand-dark">Why Odoo</h3>
              <ul className="mt-5 space-y-4">
                {WHY_ODOO_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <ModulesSection />

      {/* Implementation / Customization / Integration / Migration / Support */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Odoo Services"
            title="Every Stage of Your Odoo Journey"
            description="From first configuration to long-term optimization, we support your Odoo environment end to end."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ODOO_SERVICE_SLUGS.map((slug) => {
              const service = SERVICE_DETAILS[slug];
              return (
                <ServiceCard
                  key={slug}
                  slug={service.slug}
                  icon={service.icon}
                  title={service.title}
                  description={service.heroSubheadline}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* Training */}
      <section id="training" className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Odoo Training"
              title="Training That Drives Real Adoption"
              description="A well-configured Odoo system only pays off if your team knows how to use it. We train administrators and end users on the workflows relevant to their role, so adoption happens from day one instead of months later."
            />
            <ul className="space-y-4">
              {[
                "Administrator training for system configuration and maintenance",
                "Role-based end-user training by department",
                "Hands-on sessions using your own configured workflows",
                "Reference materials your team can revisit after go-live",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <PartnershipSection />

      <FAQSection />

      <CTASection
        heading="Ready to Bring Your Business Onto Odoo?"
        primaryLabel="Book ERP Consultation"
        secondaryLabel="Talk to an ERP Consultant"
      />
    </>
  );
}
