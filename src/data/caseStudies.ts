import type { CaseStudy } from "../types";

/**
 * Example / illustrative projects, clearly labeled as such until real
 * client case studies are available to publish.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "multi-branch-retail-erp",
    title: "Multi-Branch Retail ERP",
    industry: "Retail",
    challenge:
      "Multiple stores were struggling with inventory visibility and centralized management, relying on spreadsheets to reconcile stock between locations.",
    solution:
      "An Odoo-based inventory, POS, purchasing, sales, and reporting workflow connecting every store to a single, centralized system.",
    outcome: "Centralized business operations and improved visibility across all store locations.",
  },
  {
    slug: "manufacturing-erp",
    title: "Manufacturing ERP",
    industry: "Manufacturing",
    challenge:
      "Production planning, bills of materials, and inventory were managed across disconnected spreadsheets, making shop-floor visibility difficult.",
    solution:
      "Odoo Manufacturing, Inventory, and Purchase configured together to connect production planning with real-time stock and procurement.",
    outcome: "A single connected view from raw materials to finished goods, replacing manual tracking.",
  },
  {
    slug: "distribution-wholesale-erp",
    title: "Distribution & Wholesale ERP",
    industry: "Wholesale & Distribution",
    challenge:
      "Tiered customer pricing and warehouse operations were managed manually, slowing down order processing at scale.",
    solution:
      "Odoo Sales, Inventory, and Accounting configured with automated pricing rules and warehouse workflows.",
    outcome: "Faster order-to-delivery cycles with pricing and stock managed from one system.",
  },
];
