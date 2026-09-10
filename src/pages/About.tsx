import { ArrowRight, Compass, Layers, ShieldCheck, Target, Users2 } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import CTASection from "../components/sections/CTASection";
import { SITE_CONFIG } from "../config/site";

const VALUES = [
  { icon: Target, title: "Business-First Thinking", description: "We start with your processes, not a list of software features." },
  { icon: ShieldCheck, title: "Transparency", description: "Clear scope, clear communication, and honesty about what a system can and can't do." },
  { icon: Layers, title: "Technical Rigor", description: "ERP work done to a standard that holds up as your business scales." },
  { icon: Users2, title: "Long-Term Partnership", description: "We stay involved after go-live — your ERP evolves as your business does." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | TekSol"
        description="TekSol is an ERP-focused technology company helping businesses implement, customize, and extend Odoo ERP."
        path="/about"
      />

      {/* Hero */}
      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-600">
              About {SITE_CONFIG.COMPANY_NAME}
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
              An ERP-Focused Technology Company
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              We help growing businesses replace disconnected tools and manual processes with one connected Odoo ERP
              platform — built around how they actually operate.
            </p>
          </div>
        </Container>
      </section>

      {/* Who we are */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="ERP Specialists, Not a General Software Shop"
              description={`${SITE_CONFIG.COMPANY_NAME} is focused specifically on Odoo ERP — implementation, customization, development, integration, migration, and support. That focus lets us go deep on one platform instead of spreading thin across every technology.`}
            />
            <SectionHeading
              align="left"
              eyebrow="Our Mission"
              title="Help Businesses Run on One Connected System"
              description="Our mission is to help small and growing businesses move off spreadsheets and disconnected tools onto a single ERP platform that gives them real visibility and room to scale."
            />
          </div>
        </Container>
      </section>

      {/* Our approach */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Our Approach"
              title="Process Before Configuration"
              description="Every engagement starts with understanding how your business actually works. We map current processes before touching a single Odoo setting, so the system we deliver matches your operations instead of forcing your team to adapt to generic software."
            />
            <SectionHeading
              align="left"
              eyebrow="Why ERP"
              title="One Source of Truth Changes How You Run the Business"
              description="Spreadsheets and disconnected tools work until they don't — duplicate data, delayed reporting, and manual reconciliation become the norm as a business grows. An ERP replaces that with one connected system your whole team can trust."
            />
          </div>
        </Container>
      </section>

      {/* Why Odoo + Technology expertise */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Why Odoo"
              title="A Platform That Scales With You"
              description="We chose to specialize in Odoo because of its modular architecture, breadth of native applications, and open ecosystem — letting businesses start small and expand without switching platforms as they grow."
            />
            <SectionHeading
              align="left"
              eyebrow="Our Expertise"
              title="Configuration, Development, and Integration"
              description="Our team combines functional ERP consulting with hands-on Odoo development — configuring standard workflows where they fit, and building custom functionality and integrations where they don't."
            />
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What Guides Our Work" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-semibold text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <Compass className="h-10 w-10 text-brand-secondary" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">Let's talk about your ERP project</h2>
            <Button to="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Discuss Your Requirements
            </Button>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
