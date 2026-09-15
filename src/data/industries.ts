import {
  Factory,
  Store,
  Truck,
  ShoppingCart,
  HeartPulse,
  Briefcase,
  HardHat,
  GraduationCap,
  UtensilsCrossed,
  Building2,
} from "lucide-react";
import type { IndustryDetail, IndustrySummary } from "../types";

/** All 10 industry cards shown on the homepage and /industries index. */
export const INDUSTRIES_SUMMARY: IndustrySummary[] = [
  {
    slug: "manufacturing",
    icon: Factory,
    title: "Manufacturing",
    description:
      "Manage manufacturing orders, bills of materials, inventory, procurement, quality, and production planning from one platform.",
  },
  {
    slug: "retail",
    icon: Store,
    title: "Retail",
    description: "Connect POS, inventory, purchasing, accounting, and multi-store operations.",
  },
  {
    slug: "wholesale",
    icon: Truck,
    title: "Wholesale & Distribution",
    description: "Manage bulk ordering, warehousing, logistics, and distributor pricing in one system.",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Sync online storefronts with inventory, fulfillment, and accounting in real time.",
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    description: "Coordinate scheduling, inventory, billing, and administration across facilities.",
  },
  {
    slug: "services",
    icon: Briefcase,
    title: "Professional Services",
    description: "Manage projects, timesheets, billing, and client relationships in one place.",
  },
  {
    slug: "construction",
    icon: HardHat,
    title: "Construction",
    description: "Track project costs, subcontractors, procurement, and site resources together.",
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Education",
    description: "Manage enrollment, administration, resources, and institutional operations.",
  },
  {
    slug: "food-beverage",
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Handle recipes, batch production, expiry tracking, and supply chain in one system.",
  },
  {
    slug: "multi-branch",
    icon: Building2,
    title: "Multi-Branch Businesses",
    description: "Centralize operations, reporting, and inventory across multiple locations.",
  },
];

export const INDUSTRY_DETAILS: Record<string, IndustryDetail> = {
  manufacturing: {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    metaTitle: "Odoo ERP for Manufacturing | TechSols",
    metaDescription:
      "Odoo ERP solutions for manufacturers — production planning, bills of materials, inventory, quality, and procurement in one platform.",
    heroHeadline: "Odoo ERP for Manufacturing",
    heroSubheadline:
      "Manage manufacturing orders, bills of materials, inventory, procurement, quality, and production planning from one connected platform.",
    challenges: [
      "Production schedules disconnected from real inventory levels",
      "Bills of materials and routings managed in separate spreadsheets",
      "Limited visibility into work-in-progress and shop floor status",
      "Quality and procurement processes running outside the core system",
    ],
    solution:
      "Odoo connects manufacturing, inventory, purchasing, and quality into a single system, giving production teams real-time visibility from raw materials to finished goods.",
    modules: ["Manufacturing", "Inventory", "Purchase", "Quality", "Maintenance", "Planning"],
    workflows: [
      { title: "Production planning", description: "Plan manufacturing orders against real-time demand and capacity." },
      { title: "Bills of materials", description: "Manage multi-level BoMs and routings in one place." },
      { title: "Quality control", description: "Define quality checkpoints across the production process." },
      { title: "Procurement sync", description: "Trigger purchasing automatically based on production needs." },
    ],
  },

  retail: {
    slug: "retail",
    title: "Retail",
    icon: Store,
    metaTitle: "Retail ERP Implementation | Odoo for Retail | TechSols",
    metaDescription:
      "Retail ERP implementation with Odoo — connect POS, inventory, purchasing, accounting, and multi-store operations in one system.",
    heroHeadline: "Odoo ERP for Retail",
    heroSubheadline: "Connect POS, inventory, purchasing, accounting, and multi-store operations.",
    challenges: [
      "Point-of-sale systems disconnected from back-office inventory",
      "Inconsistent pricing and promotions across store locations",
      "Manual stock counts and slow replenishment decisions",
      "Sales data that takes too long to reach financial reports",
    ],
    solution:
      "Odoo unifies point of sale, inventory, purchasing, and accounting so every sale updates stock and financials in real time, across every store.",
    modules: ["Point of Sale", "Inventory", "Sales", "Purchase", "Accounting", "Website & eCommerce"],
    workflows: [
      { title: "Unified checkout", description: "Run in-store and online sales through one connected system." },
      { title: "Real-time stock", description: "Inventory updates instantly across every location and channel." },
      { title: "Centralized pricing", description: "Manage pricelists and promotions from a single source." },
      { title: "Store-level reporting", description: "Compare performance across branches in real time." },
    ],
  },

  wholesale: {
    slug: "wholesale",
    title: "Wholesale & Distribution",
    icon: Truck,
    metaTitle: "Odoo ERP for Wholesale & Distribution | TechSols",
    metaDescription:
      "Odoo ERP for wholesalers and distributors — bulk ordering, warehousing, logistics, and distributor pricing in one platform.",
    heroHeadline: "Odoo ERP for Wholesale & Distribution",
    heroSubheadline: "Manage bulk ordering, warehousing, logistics, and distributor pricing in one system.",
    challenges: [
      "Complex pricing tiers managed manually across customer segments",
      "Warehouse operations disconnected from sales and purchasing",
      "Limited visibility into logistics and delivery performance",
      "Slow order-to-cash cycles across large order volumes",
    ],
    solution:
      "Odoo streamlines bulk order processing, warehouse management, and distributor pricing, giving distribution teams a connected view from purchase order to delivery.",
    modules: ["Sales", "Inventory", "Purchase", "Accounting", "Planning"],
    workflows: [
      { title: "Tiered pricing", description: "Automate customer-specific and volume-based pricing." },
      { title: "Warehouse management", description: "Track multi-location stock and optimize putaway and picking." },
      { title: "Order automation", description: "Streamline bulk order entry and fulfillment." },
      { title: "Logistics visibility", description: "Track shipments and delivery performance in real time." },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    title: "E-commerce",
    icon: ShoppingCart,
    metaTitle: "Odoo ERP for E-commerce | TechSols",
    metaDescription:
      "Odoo ERP for e-commerce businesses — sync online storefronts with inventory, fulfillment, and accounting in real time.",
    heroHeadline: "Odoo ERP for E-commerce",
    heroSubheadline: "Sync online storefronts with inventory, fulfillment, and accounting in real time.",
    challenges: [
      "Orders placed online that don't sync automatically with inventory",
      "Multiple sales channels managed as disconnected systems",
      "Manual reconciliation between storefront and accounting",
      "Fulfillment delays from poor stock visibility",
    ],
    solution:
      "Odoo connects your online storefront directly to inventory, fulfillment, and accounting, so every order updates stock and financials automatically across every channel.",
    modules: ["Website & eCommerce", "Inventory", "Sales", "Accounting", "Point of Sale"],
    workflows: [
      { title: "Channel sync", description: "Connect your storefront and marketplaces to a single inventory source." },
      { title: "Automated fulfillment", description: "Trigger picking and shipping directly from online orders." },
      { title: "Payment integration", description: "Connect payment gateways for automatic reconciliation." },
      { title: "Unified reporting", description: "See online and offline performance in one dashboard." },
    ],
  },

  healthcare: {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    metaTitle: "Odoo ERP for Healthcare Organizations | TechSols",
    metaDescription:
      "Odoo ERP for healthcare organizations — coordinate scheduling, inventory, billing, and administration across facilities.",
    heroHeadline: "Odoo ERP for Healthcare Organizations",
    heroSubheadline: "Coordinate scheduling, inventory, billing, and administration across facilities.",
    challenges: [
      "Scheduling and resource management handled across disconnected tools",
      "Medical and supply inventory tracked manually",
      "Billing processes disconnected from service delivery records",
      "Limited visibility across multiple facilities or departments",
    ],
    solution:
      "Odoo brings scheduling, inventory, billing, and administrative operations into one platform, giving healthcare organizations a connected, auditable view of operations.",
    modules: ["Inventory", "Accounting", "Employees", "Planning", "Helpdesk"],
    workflows: [
      { title: "Resource scheduling", description: "Coordinate staff and facility scheduling in one system." },
      { title: "Supply tracking", description: "Track medical and administrative inventory with expiry visibility." },
      { title: "Billing workflows", description: "Connect service records to invoicing and accounting." },
      { title: "Multi-facility oversight", description: "Centralize reporting across departments and locations." },
    ],
  },

  services: {
    slug: "services",
    title: "Professional Services",
    icon: Briefcase,
    metaTitle: "Odoo ERP for Professional Services | TechSols",
    metaDescription:
      "Odoo ERP for service companies — manage projects, timesheets, billing, and client relationships in one place.",
    heroHeadline: "Odoo ERP for Professional Services",
    heroSubheadline: "Manage projects, timesheets, billing, and client relationships in one place.",
    challenges: [
      "Project profitability that's difficult to track in real time",
      "Timesheets and billing handled through separate tools",
      "Client and project information scattered across systems",
      "Resource allocation decided without real utilization data",
    ],
    solution:
      "Odoo connects CRM, project management, timesheets, and invoicing, giving service businesses a clear, real-time view of project profitability and client relationships.",
    modules: ["CRM", "Project", "Sales", "Accounting", "Employees"],
    workflows: [
      { title: "Project tracking", description: "Monitor budgets, timelines, and profitability per project." },
      { title: "Time and billing", description: "Convert timesheets directly into client invoices." },
      { title: "Client management", description: "Track the full client relationship from lead to delivery." },
      { title: "Resource planning", description: "Allocate team capacity based on real utilization data." },
    ],
  },
};
