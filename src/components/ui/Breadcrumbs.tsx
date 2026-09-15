import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE_CONFIG } from "../../config/site";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", to: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.to ? `${SITE_CONFIG.SEO.siteUrl}${item.to === "/" ? "" : item.to}` : undefined,
    })),
  };
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
      <Link to="/" className="flex items-center gap-1 hover:text-brand-secondary">
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          {item.to && index < items.length - 1 ? (
            <Link to={item.to} className="hover:text-brand-secondary">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-brand-dark" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
