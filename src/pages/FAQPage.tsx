import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import Reveal from "../components/ui/Reveal";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTASection from "../components/sections/CTASection";
import PageHero from "../components/sections/PageHero";
import { GENERAL_FAQS } from "../data/faqs";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GENERAL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <SEO
        title="Odoo ERP FAQ | TekSol"
        description="Answers to frequently asked questions about Odoo ERP implementation, customization, cost, timelines, and support."
        path="/faq"
        schema={FAQ_SCHEMA}
      />

      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <FAQAccordion items={GENERAL_FAQS} />
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
