import { Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Reveal from "../components/ui/Reveal";
import Breadcrumbs, { breadcrumbSchema } from "../components/ui/Breadcrumbs";
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
  const breadcrumbItems = [
    { label: "Services", to: "/services" },
    { label: service.shortTitle },
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        schema={breadcrumbSchema(breadcrumbItems)}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-background py-16 sm:py-20">
        <div aria-hidden className="bg-mesh pointer-events-none absolute inset-0" />
        <Container className="relative">
          <Reveal>
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-secondary/15 to-brand-secondary/5 text-brand-secondary">
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
          </Reveal>
        </Container>
      </section>

      {/* Problem */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
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
          </Reveal>
        </Container>
      </section>

      {/* Solution */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our Approach" title={service.solution.heading} description={service.solution.body} />
          </Reveal>
        </Container>
      </section>

      {/* Included */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="What's Included" title={`What's Included in Our ${service.shortTitle} Service`} />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
              {service.included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-secondary/30 hover:shadow-md"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                  <span className="text-sm leading-relaxed text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Our Process" title="How We Work" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-secondary/30 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <span className="text-3xl font-bold text-brand-secondary/25 transition-colors duration-300 group-hover:text-brand-secondary/50">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-brand-dark">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Benefits" title="Why This Matters for Your Business" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl bg-brand-background p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary/5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                  <span className="text-sm leading-relaxed text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-background py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="FAQ" title={`${service.shortTitle} Questions, Answered`} />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-3xl">
              <FAQAccordion items={service.faqs} />
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
