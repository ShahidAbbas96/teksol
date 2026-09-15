import { ArrowRight, Compass, Factory, Layers, Puzzle, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import CTASection from "../components/sections/CTASection";
import PageHero from "../components/sections/PageHero";

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
        title="ERP Solutions | TechSols"
        description="Explore TechSols' solutions — ERP consulting, Odoo modules, industry-specific ERP, business process automation, and custom ERP development."
        path="/solutions"
      />

      <PageHero
        eyebrow="Solutions"
        title="ERP Solutions Built Around Your Business"
        description="Whether you need a full Odoo implementation, a specific module, or a custom-built solution, we scope and deliver it around your actual business processes."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SOLUTION_CATEGORIES.map(({ icon: Icon, title, description, to }) => (
                <Link
                  key={title}
                  to={to}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-brand-secondary/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 text-brand-secondary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-brand-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary opacity-90 transition-transform duration-300 group-hover:translate-x-1">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
