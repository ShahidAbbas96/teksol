import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { IndustrySummary } from "../../types";

interface IndustryCardProps extends IndustrySummary {
  linkable?: boolean;
}

export default function IndustryCard({ slug, icon: Icon, title, description, linkable = false }: IndustryCardProps) {
  const cardClasses =
    "group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-lg hover:shadow-slate-200/60";

  const cardBody = (
    <>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold text-brand-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      {linkable ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary opacity-90 transition-transform group-hover:translate-x-0.5">
          See industry solution <ArrowRight className="h-4 w-4" />
        </span>
      ) : null}
    </>
  );

  if (linkable) {
    return (
      <Link to={`/industries/${slug}`} className={cardClasses}>
        {cardBody}
      </Link>
    );
  }

  return <div className={cardClasses}>{cardBody}</div>;
}
