import type { ModuleItem } from "../../types";

export default function ModuleCard({ icon: Icon, title, description }: ModuleItem) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-brand-secondary/40">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-dark/5 text-brand-dark">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="font-semibold text-brand-dark">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
