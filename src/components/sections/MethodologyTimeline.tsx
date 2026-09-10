import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { METHODOLOGY_STEPS } from "../../data/content";

export default function MethodologyTimeline() {
  return (
    <section className="bg-brand-background py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Methodology"
          title="A Proven Implementation Methodology"
          description="Every engagement follows the same disciplined sequence, from first discovery call to long-term optimization."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {METHODOLOGY_STEPS.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-secondary text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="font-semibold text-brand-dark">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
