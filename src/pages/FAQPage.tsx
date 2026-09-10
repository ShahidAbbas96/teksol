import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import FAQAccordion from "../components/sections/FAQAccordion";
import CTASection from "../components/sections/CTASection";
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
        title="Odoo ERP FAQ | Teksol"
        description="Answers to frequently asked questions about Odoo ERP implementation, customization, cost, timelines, and support."
        path="/faq"
        schema={FAQ_SCHEMA}
      />

      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <SectionHeading as="h1" eyebrow="FAQ" title="Frequently Asked Questions" />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={GENERAL_FAQS} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
