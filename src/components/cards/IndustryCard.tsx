import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { IndustrySummary } from "../../types";

interface IndustryCardProps extends IndustrySummary {
  linkable?: boolean;
}

export default function IndustryCard({ slug, icon: Icon, title, description, linkable = false }: IndustryCardProps) {
  const cardClasses =
    "group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-brand-primary/10";

  const cardBody = (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 text-brand-primary transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-brand-dark">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      {linkable ? (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary opacity-90 transition-transform duration-300 group-hover:translate-x-1">
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
