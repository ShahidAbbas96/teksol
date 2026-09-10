import {
  Target,
  Cpu,
  SlidersHorizontal,
  Layers,
  Database,
  Clock,
} from "lucide-react";
import type { ProcessStep } from "../types";

/** Homepage 5-step Odoo implementation process (section: Odoo Implementation). */
export const IMPLEMENTATION_STEPS: ProcessStep[] = [
  { number: "01", title: "Discover", description: "Understand business processes, requirements, challenges, and goals." },
  { number: "02", title: "Design", description: "Design the ERP architecture and workflows." },
  { number: "03", title: "Configure", description: "Configure Odoo modules according to business requirements." },
  { number: "04", title: "Customize & Integrate", description: "Develop custom features and integrations where required." },
  { number: "05", title: "Launch & Support", description: "Deploy, train users, monitor the system, and provide ongoing support." },
];

/** Full implementation methodology timeline. */
export const METHODOLOGY_STEPS: string[] = [
  "Discovery",
  "Business Analysis",
  "Solution Design",
  "Configuration",
  "Customization",
  "Data Migration",
  "Testing",
  "Training",
  "Go-Live",
  "Support & Optimization",
];

export const WHY_CHOOSE_US = [
  {
    icon: Target,
    title: "Business-First Approach",
    description: "We focus on business processes, not just software configuration.",
  },
  {
    icon: Cpu,
    title: "Technical Expertise",
    description: "Strong development and integration capabilities for complex requirements.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Solutions",
    description: "We customize Odoo where standard functionality does not meet business needs.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Solutions designed to support future business growth.",
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Structured and secure migration of existing business data.",
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    description: "We remain available after implementation to help your business evolve.",
  },
];

export const TRANSFORMATION = {
  before: [
    "Manual data entry",
    "Multiple spreadsheets",
    "Disconnected departments",
    "Inventory uncertainty",
    "Delayed reports",
    "Duplicate data",
    "Manual approvals",
  ],
  after: [
    "Centralized ERP",
    "Automated workflows",
    "Real-time visibility",
    "Connected departments",
    "Better reporting",
    "Reduced manual work",
    "Scalable processes",
  ],
};
