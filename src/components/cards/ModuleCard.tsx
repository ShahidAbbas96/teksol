import type { ModuleItem } from "../../types";

export default function ModuleCard({ icon: Icon, title, description }: ModuleItem) {
  return (
    <div className="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-secondary/30 hover:shadow-md hover:shadow-slate-200/60">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-dark/5 text-brand-dark transition-colors duration-300 group-hover:bg-brand-secondary/10 group-hover:text-brand-secondary">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div>
        <h3 className="font-semibold text-brand-dark">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </div>
  );
}
