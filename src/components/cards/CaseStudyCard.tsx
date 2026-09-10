import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "../../types";

export default function CaseStudyCard({ title, industry, challenge, solution, outcome }: CaseStudy) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7">
      <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
        {industry}
      </span>
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

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary">
        Example project <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  );
}
