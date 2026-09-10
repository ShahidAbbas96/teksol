import {
  Users,
  TrendingUp,
  Calculator,
  Package,
  Factory,
  ShoppingCart,
  UserCheck,
  Globe,
  ShoppingBag,
  Briefcase,
  CreditCard,
  Headset,
  Megaphone,
  Repeat,
  Key,
  CalendarClock,
  UserPlus,
  Receipt,
} from "lucide-react";
import type { ModuleItem } from "../types";

/** The 10 core apps shown in the "One ERP. One Connected Business." section. */
export const CORE_MODULES: ModuleItem[] = [
  { icon: Users, title: "CRM", description: "Track leads, opportunities, and customer relationships in one pipeline." },
  { icon: TrendingUp, title: "Sales", description: "Create quotes, manage orders, and close deals faster." },
  { icon: Calculator, title: "Accounting", description: "Real-time financials, invoicing, and automated reconciliation." },
  { icon: Package, title: "Inventory", description: "Multi-warehouse stock tracking with automated replenishment." },
  { icon: Factory, title: "Manufacturing", description: "Plan production, manage bills of materials, and track work orders." },
  { icon: ShoppingCart, title: "Purchase", description: "Automate purchasing workflows and vendor management." },
  { icon: UserCheck, title: "HR", description: "Manage employees, attendance, time off, and payroll data." },
  { icon: Globe, title: "Website & eCommerce", description: "Run your online storefront connected to sales and inventory." },
  { icon: Briefcase, title: "Projects", description: "Plan, assign, and track work across teams and timelines." },
  { icon: CreditCard, title: "Point of Sale", description: "Unified in-store and online selling with real-time sync." },
];

/** The extended module catalog for the modules showcase section. */
export const ALL_MODULES: ModuleItem[] = [
  { icon: Users, title: "CRM", description: "Manage your sales pipeline from lead to close." },
  { icon: TrendingUp, title: "Sales", description: "Quotations, orders, and sales performance tracking." },
  { icon: ShoppingCart, title: "Purchase", description: "Procurement and vendor management workflows." },
  { icon: Package, title: "Inventory", description: "Real-time stock across multiple warehouses." },
  { icon: Factory, title: "Manufacturing", description: "Production planning, BoMs, and work orders." },
  { icon: Calculator, title: "Accounting", description: "Invoicing, reconciliation, and financial reporting." },
  { icon: CreditCard, title: "Point of Sale", description: "Retail and hospitality checkout, online or offline." },
  { icon: Globe, title: "Website", description: "A modern, editable business website builder." },
  { icon: ShoppingBag, title: "eCommerce", description: "Online storefront connected to inventory and sales." },
  { icon: Briefcase, title: "Project", description: "Task, timesheet, and project delivery management." },
  { icon: UserCheck, title: "Employees", description: "Central employee records and organization charts." },
  { icon: UserPlus, title: "Recruitment", description: "Track applicants through your hiring pipeline." },
  { icon: Receipt, title: "Expenses", description: "Submit, approve, and reconcile employee expenses." },
  { icon: Headset, title: "Helpdesk", description: "Ticketing and support case management." },
  { icon: Megaphone, title: "Marketing Automation", description: "Automated campaigns and customer journeys." },
  { icon: Repeat, title: "Subscriptions", description: "Recurring billing and subscription lifecycle management." },
  { icon: Key, title: "Rental", description: "Manage rental orders, schedules, and returns." },
  { icon: CalendarClock, title: "Planning", description: "Resource and shift scheduling across teams." },
];
