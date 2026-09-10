import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceSummary } from "../../types";

export default function ServiceCard({ slug, icon: Icon, title, description }: ServiceSummary) {
  return (
    <Link
      to={`/services/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-brand-secondary/10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-secondary/0 to-brand-secondary/0 transition-colors duration-300 group-hover:from-brand-secondary/[0.04] group-hover:to-brand-primary/[0.03]"
      />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-secondary/10 to-brand-secondary/5 text-brand-secondary transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="relative mt-5 text-lg font-semibold text-brand-dark">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      <span className="relative mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary opacity-90 transition-transform duration-300 group-hover:translate-x-1">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
