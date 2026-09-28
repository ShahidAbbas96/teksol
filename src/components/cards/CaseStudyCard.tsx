import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../../types";

export default function CaseStudyCard({ title, industry, industrySlug, challenge, solution, outcome, modules }: CaseStudy) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60">
      {industrySlug ? (
        <Link
          to={`/industries/${industrySlug}`}
          className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary transition-colors hover:bg-brand-primary/20"
        >
          {industry}
        </Link>
      ) : (
        <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
          {industry}
        </span>
      )}
      <h3 className="text-xl font-bold text-brand-dark">{title}</h3>

      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="font-semibold text-slate-500">Challenge</dt>
          <dd className="mt-1 leading-relaxed text-slate-600">{challenge}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">Solution</dt>
          <dd className="mt-1 leading-relaxed text-slate-600">{solution}</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-500">Outcome</dt>
          <dd className="mt-1 leading-relaxed text-slate-600">{outcome}</dd>
        </div>
      </dl>

      {modules?.length ? (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {modules.map((module) => (
            <span key={module} className="rounded-md bg-brand-background px-2 py-1 text-xs font-medium text-slate-600">
              {module}
            </span>
          ))}
        </div>
      ) : null}

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary">
        Example project <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  );
}
