import { CheckCircle2, XCircle } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { TRANSFORMATION } from "../../data/content";

export default function TransformationSection() {
  return (
    <section className="bg-brand-dark py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Business Transformation"
          title="From Disconnected Systems to One Connected Business"
          description="Odoo replaces scattered tools and manual processes with one system your whole business runs on."
          align="center"
          theme="dark"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <XCircle className="h-5 w-5 text-rose-400" /> Before
            </h3>
            <ul className="mt-6 space-y-4">
              {TRANSFORMATION.before.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-secondary/30 bg-brand-secondary/10 p-8">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" /> After
            </h3>
            <ul className="mt-6 space-y-4">
              {TRANSFORMATION.after.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
