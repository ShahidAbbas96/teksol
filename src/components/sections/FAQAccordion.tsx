import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "../../types";

export default function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold transition-colors ${isOpen ? "text-brand-secondary" : "text-brand-dark"}`}>
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-brand-secondary" : "text-slate-400"}`}
              />
            </button>
            {isOpen ? (
              <p className="animate-[reveal-up_0.25s_ease-out] px-6 pb-5 text-sm leading-relaxed text-slate-600">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
