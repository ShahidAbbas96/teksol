import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { WHY_CHOOSE_US } from "../../data/content";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Why Us" title="Why Businesses Choose Us" />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-brand-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-semibold text-brand-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
