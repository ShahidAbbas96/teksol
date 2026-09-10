import { Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import CTASection from "../components/sections/CTASection";
import { INDUSTRY_DETAILS } from "../data/industries";
import { IMPLEMENTATION_STEPS } from "../data/content";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? INDUSTRY_DETAILS[slug] : undefined;

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const Icon = industry.icon;

  return (
    <>
      <SEO title={industry.metaTitle} description={industry.metaDescription} path={`/industries/${industry.slug}`} />

      {/* Hero */}
      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
              {industry.heroHeadline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{industry.heroSubheadline}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Book ERP Consultation
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Get Implementation Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Common Challenges"
              title={`Where ${industry.title} Businesses Get Stuck`}
            />
            <ul className="space-y-4">
              {industry.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Odoo Solution"
            title={`How Odoo Supports ${industry.title}`}
            description={industry.solution}
          />

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2.5">
            {industry.modules.map((module) => (
              <Badge key={module}>{module}</Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* Workflows */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Key Workflows" title="Business Workflows We Configure" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industry.workflows.map((workflow) => (
              <div key={workflow.title} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                <div>
                  <h3 className="font-semibold text-brand-dark">{workflow.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{workflow.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Implementation approach */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Implementation Approach" title="How We Get You Live" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {IMPLEMENTATION_STEPS.map((step) => (
              <div key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-3xl font-bold text-brand-primary/25">{step.number}</span>
                <h3 className="mt-3 text-base font-semibold text-brand-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
