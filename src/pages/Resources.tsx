import { ArrowRight, BookOpen, HelpCircle, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import CTASection from "../components/sections/CTASection";
import PageHero from "../components/sections/PageHero";

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

      <PageHero
        eyebrow="Resources"
        title="ERP Resources & Guides"
        description="Explore guides, frequently asked questions, and example projects to help you plan your Odoo ERP journey."
      />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {RESOURCE_LINKS.map(({ icon: Icon, title, description, to }) => (
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
                    View <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <div id="projects">
        <CaseStudiesSection />
      </div>

      <CTASection />
    </>
  );
}
