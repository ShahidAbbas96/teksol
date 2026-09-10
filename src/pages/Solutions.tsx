import { ArrowRight, Compass, Factory, Layers, Puzzle, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import CTASection from "../components/sections/CTASection";

const SOLUTION_CATEGORIES = [
  {
    icon: Compass,
    title: "ERP Consulting & Advisory",
    description: "Independent guidance on module scope, workflow design, and ERP transformation roadmaps.",
    to: "/services/erp-consulting",
  },
  {
    icon: Layers,
    title: "Odoo Modules & Apps",
    description: "CRM, Sales, Inventory, Manufacturing, Accounting, HR, eCommerce, and more — connected on one platform.",
    to: "/odoo#modules",
  },
  {
    icon: Factory,
    title: "Industry-Specific Solutions",
    description: "Odoo configured around the workflows of manufacturing, retail, wholesale, e-commerce, and service businesses.",
    to: "/industries",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Automate approvals, replenishment, invoicing, and reporting so your team spends less time on manual work.",
    to: "/services/odoo-implementation",
  },
  {
    icon: Puzzle,
    title: "Custom ERP Solutions",
    description: "Custom development and integration for requirements that go beyond standard Odoo functionality.",
    to: "/services/odoo-development",
  },
];

export default function Solutions() {
  return (
    <>
      <SEO
        title="ERP Solutions | Teksol"
        description="Explore Teksol's solutions — ERP consulting, Odoo modules, industry-specific ERP, business process automation, and custom ERP development."
        path="/solutions"
      />

      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Solutions"
            title="ERP Solutions Built Around Your Business"
            description="Whether you need a full Odoo implementation, a specific module, or a custom-built solution, we scope and deliver it around your actual business processes."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_CATEGORIES.map(({ icon: Icon, title, description, to }) => (
              <Link
                key={title}
                to={to}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-brand-secondary/40 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary opacity-90 transition-transform group-hover:translate-x-0.5">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
