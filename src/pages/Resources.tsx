import { ArrowRight, BookOpen, HelpCircle, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import CTASection from "../components/sections/CTASection";

const RESOURCE_LINKS = [
  {
    icon: LayoutGrid,
    title: "Example ERP Projects",
    description: "See the type of Odoo ERP projects we take on, from single-store retail to multi-branch operations.",
    to: "#projects",
  },
  {
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    description: "Answers to common questions about Odoo, implementation timelines, cost, and support.",
    to: "/faq",
  },
  {
    icon: BookOpen,
    title: "Odoo Modules Guide",
    description: "A breakdown of Odoo's core applications and how they connect across your business.",
    to: "/odoo#modules",
  },
];

export default function Resources() {
  return (
    <>
      <SEO
        title="Resources | TekSol"
        description="Guides, FAQs, and example projects to help you plan your Odoo ERP implementation."
        path="/resources"
      />

      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Resources"
            title="ERP Resources & Guides"
            description="Explore guides, frequently asked questions, and example projects to help you plan your Odoo ERP journey."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCE_LINKS.map(({ icon: Icon, title, description, to }) => (
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
                  View <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <div id="projects">
        <CaseStudiesSection />
      </div>

      <CTASection />
    </>
  );
}
