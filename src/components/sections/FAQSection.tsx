import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FAQAccordion from "./FAQAccordion";
import { GENERAL_FAQS } from "../../data/faqs";
import type { FaqItem } from "../../types";

interface FAQSectionProps {
  items?: FaqItem[];
  title?: string;
}

export default function FAQSection({ items = GENERAL_FAQS, title = "Frequently Asked Questions" }: FAQSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="FAQ" title={title} />
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  );
}
