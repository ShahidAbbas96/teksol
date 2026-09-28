import type { CaseStudy } from "../types";

/**
 * Example / illustrative projects, clearly labeled as such until real
 * client case studies are available to publish. `featured` entries appear
 * in the homepage teaser; the full list appears on /portfolio.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "multi-branch-retail-erp",
    title: "Multi-Branch Retail ERP",
    industry: "Retail",
    industrySlug: "retail",
    challenge:
      "Multiple stores were struggling with inventory visibility and centralized management, relying on spreadsheets to reconcile stock between locations.",
    solution:
      "An Odoo-based inventory, POS, purchasing, sales, and reporting workflow connecting every store to a single, centralized system.",
    outcome: "Centralized business operations and improved visibility across all store locations.",
    modules: ["Point of Sale", "Inventory", "Purchase", "Sales", "Accounting"],
    featured: true,
  },
  {
    slug: "manufacturing-erp",
    title: "Manufacturing ERP",
    industry: "Manufacturing",
    industrySlug: "manufacturing",
    challenge:
      "Production planning, bills of materials, and inventory were managed across disconnected spreadsheets, making shop-floor visibility difficult.",
    solution:
      "Odoo Manufacturing, Inventory, and Purchase configured together to connect production planning with real-time stock and procurement.",
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
      "Tiered customer pricing and warehouse operations were managed manually, slowing down order processing at scale.",
    solution:
      "Odoo Sales, Inventory, and Accounting configured with automated pricing rules and warehouse workflows.",
    outcome: "Faster order-to-delivery cycles with pricing and stock managed from one system.",
    modules: ["Sales", "Inventory", "Purchase", "Accounting"],
    featured: true,
  },
  {
    slug: "healthcare-multi-facility-erp",
    title: "Multi-Facility Healthcare ERP",
    industry: "Healthcare",
    industrySlug: "healthcare",
    challenge:
      "Staff scheduling, medical supply inventory, and billing were handled across separate tools, with no shared view across facilities.",
    solution:
      "Odoo Inventory, Accounting, Employees, and Planning configured to give administrators one system for scheduling, supply tracking, and billing.",
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
      "Project profitability was hard to track in real time, with timesheets, billing, and client records spread across separate tools.",
    solution:
      "Odoo CRM, Project, Sales, and Accounting connected so timesheets flow directly into client invoices and project budgets.",
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
      "Online orders didn't sync automatically with inventory, and reconciling the storefront with accounting was a manual, error-prone process.",
    solution:
      "Odoo Website & eCommerce, Inventory, Sales, and Accounting connected so every order updates stock and financials automatically.",
    outcome: "Online and offline sales visible in one dashboard, with automated fulfillment and reconciliation.",
    modules: ["Website & eCommerce", "Inventory", "Sales", "Accounting"],
    featured: false,
  },
];
