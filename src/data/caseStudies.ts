import type { CaseStudy } from "../types";

/**
 * Capability scenarios: common, real industry problems and exactly how we'd
 * solve them in Odoo — written in general "here's the pattern" language
 * rather than as a specific past client story, since TechSols is a new
 * practice with no completed engagements to publish yet. `featured` entries
 * appear in the homepage teaser; the full list appears on /portfolio.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "multi-branch-retail-erp",
    title: "Multi-Branch Retail ERP",
    industry: "Retail",
    industrySlug: "retail",
    challenge:
      "Multi-branch retailers often lose visibility into stock the moment they open a second location — spreadsheets can't keep pace with reconciling inventory across stores in real time.",
    solution:
      "We connect POS, inventory, purchasing, sales, and reporting into one Odoo system, so every store runs on the same live data.",
    outcome: "One centralized view of the business, with inventory and sales visible across every location in real time.",
    modules: ["Point of Sale", "Inventory", "Purchase", "Sales", "Accounting"],
    featured: true,
  },
  {
    slug: "manufacturing-erp",
    title: "Manufacturing ERP",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    challenge:
      "Manufacturers frequently run production planning, bills of materials, and inventory across disconnected spreadsheets, leaving shop-floor visibility to guesswork.",
    solution:
      "We configure Odoo Manufacturing, Inventory, and Purchase together so production planning runs on real-time stock and procurement data.",
    outcome: "A single connected view from raw materials to finished goods, replacing manual tracking.",
    modules: ["Manufacturing", "Inventory", "Purchase", "Quality"],
    featured: true,
  },
  {
    slug: "distribution-wholesale-erp",
    title: "Distribution & Wholesale ERP",
    industry: "Wholesale & Distribution",
    industrySlug: "wholesale",
    challenge:
      "Distributors managing tiered customer pricing and warehouse operations by hand typically see order processing slow down as volume grows.",
    solution:
      "We configure Odoo Sales, Inventory, and Accounting with automated pricing rules and structured warehouse workflows.",
    outcome: "Faster order-to-delivery cycles, with pricing and stock managed from one system.",
    modules: ["Sales", "Inventory", "Purchase", "Accounting"],
    featured: true,
  },
  {
    slug: "healthcare-multi-facility-erp",
    title: "Multi-Facility Healthcare ERP",
    industry: "Healthcare",
    industrySlug: "healthcare",
    challenge:
      "Healthcare organizations running scheduling, medical supply inventory, and billing across separate tools rarely have one shared view across facilities.",
    solution:
      "We configure Odoo Inventory, Accounting, Employees, and Planning to give administrators one system for scheduling, supply tracking, and billing.",
    outcome: "A connected, auditable view of operations across every facility.",
    modules: ["Inventory", "Accounting", "Employees", "Planning"],
    featured: false,
  },
  {
    slug: "professional-services-project-erp",
    title: "Professional Services Project ERP",
    industry: "Professional Services",
    industrySlug: "services",
    challenge:
      "Service firms tracking project profitability across separate timesheet, billing, and CRM tools usually can't see margins slipping until it's too late to act.",
    solution:
      "We connect Odoo CRM, Project, Sales, and Accounting so timesheets flow directly into client invoices and project budgets.",
    outcome: "A clear, real-time view of project profitability and client relationships.",
    modules: ["CRM", "Project", "Sales", "Accounting"],
    featured: false,
  },
  {
    slug: "ecommerce-omnichannel-erp",
    title: "Omnichannel E-commerce ERP",
    industry: "E-commerce",
    industrySlug: "ecommerce",
    challenge:
      "Online sellers whose storefront doesn't sync with inventory end up reconciling orders against stock and accounting by hand.",
    solution:
      "We connect Odoo Website & eCommerce, Inventory, Sales, and Accounting so every order updates stock and financials automatically.",
    outcome: "Online and offline sales visible in one dashboard, with automated fulfillment and reconciliation.",
    modules: ["Website & eCommerce", "Inventory", "Sales", "Accounting"],
    featured: false,
  },
];
