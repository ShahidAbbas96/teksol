import { Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTASection from "../components/sections/CTASection";
import { SERVICE_DETAILS } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? SERVICE_DETAILS[slug] : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <SEO title={service.metaTitle} description={service.metaDescription} path={`/services/${service.slug}`} />

      {/* Hero */}
      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary/10 text-brand-secondary">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
              {service.heroHeadline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{service.heroSubheadline}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button to="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Get Implementation Quote
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Talk to an ERP Consultant
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionHeading align="left" eyebrow="The Challenge" title={service.problem.heading} />
            <ul className="space-y-4">
              {service.problem.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Solution */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Approach" title={service.solution.heading} description={service.solution.body} />
        </Container>
      </section>

      {/* Included */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What's Included" title={`What's Included in Our ${service.shortTitle} Service`} />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {service.included.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                <span className="text-sm leading-relaxed text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Process" title="How We Work" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((step) => (
              <div key={step.step} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="text-3xl font-bold text-brand-secondary/25">{step.step}</span>
                <h3 className="mt-3 text-base font-semibold text-brand-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Benefits" title="Why This Matters for Your Business" />
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-xl bg-brand-background p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                <span className="text-sm leading-relaxed text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="FAQ" title={`${service.shortTitle} Questions, Answered`} />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={service.faqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
