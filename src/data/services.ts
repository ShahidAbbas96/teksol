import {
  Rocket,
  Wrench,
  Code2,
  Plug,
  ArrowLeftRight,
  LifeBuoy,
  Compass,
  GraduationCap,
} from "lucide-react";
import type { ServiceDetail, ServiceSummary } from "../types";

/** Services section on the homepage (8 cards). */
export const SERVICES_SUMMARY: ServiceSummary[] = [
  {
    slug: "odoo-implementation",
    icon: Rocket,
    title: "Odoo Implementation",
    description: "End-to-end Odoo implementation tailored to your business processes.",
  },
  {
    slug: "odoo-customization",
    icon: Wrench,
    title: "Odoo Customization",
    description: "Customize workflows, screens, reports, business rules, and modules.",
  },
  {
    slug: "odoo-development",
    icon: Code2,
    title: "Odoo Development",
    description: "Build custom Odoo modules and functionality for unique requirements.",
  },
  {
    slug: "odoo-integration",
    icon: Plug,
    title: "Odoo Integration",
    description: "Connect Odoo with payment gateways, e-commerce platforms, APIs, and internal systems.",
  },
  {
    slug: "odoo-migration",
    icon: ArrowLeftRight,
    title: "Odoo Migration",
    description: "Migrate existing ERP or business data into Odoo safely and accurately.",
  },
  {
    slug: "odoo-support",
    icon: LifeBuoy,
    title: "Odoo Support",
    description: "Ongoing technical support, troubleshooting, optimization, and maintenance.",
  },
  {
    slug: "erp-consulting",
    icon: Compass,
    title: "ERP Consulting",
    description: "Help businesses select modules, design workflows, and plan ERP transformation.",
  },
  {
    slug: "odoo-training",
    icon: GraduationCap,
    title: "Odoo Training",
    description: "Train administrators and end users to maximize adoption and ROI.",
  },
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "odoo-implementation": {
    slug: "odoo-implementation",
    title: "Odoo Implementation",
    shortTitle: "Implementation",
    icon: Rocket,
    metaTitle: "Odoo Implementation Services | Teksol",
    metaDescription:
      "End-to-end Odoo ERP implementation services — discovery, configuration, data migration, training, and go-live support tailored to your business.",
    heroHeadline: "Odoo Implementation Built Around Your Business",
    heroSubheadline:
      "A structured, low-risk path from your current processes to a fully configured, connected Odoo ERP system.",
    problem: {
      heading: "Implementations fail when software comes before process",
      points: [
        "Generic, out-of-the-box setups that don't match how your teams actually work",
        "Departments left disconnected because modules were configured in isolation",
        "Rushed go-lives with no plan for training or change management",
        "Data migrated with errors that surface months after launch",
      ],
    },
    solution: {
      heading: "A phased implementation grounded in your real workflows",
      body: "We start by understanding how your business actually operates — sales, inventory, finance, and operations — before configuring a single screen. Every Odoo app we enable is mapped back to a real process, so the system fits your business instead of forcing your business to fit the system.",
    },
    included: [
      "Business process discovery and requirements workshops",
      "ERP architecture and module selection",
      "Odoo configuration across Sales, Inventory, Accounting, Manufacturing, and more",
      "Data migration from spreadsheets or legacy systems",
      "Custom workflow and approval configuration",
      "User acceptance testing before go-live",
      "End-user and administrator training",
      "Go-live support and post-launch monitoring",
    ],
    process: [
      { step: "01", title: "Discover", description: "Understand business processes, requirements, challenges, and goals." },
      { step: "02", title: "Design", description: "Design the ERP architecture and workflows around your operations." },
      { step: "03", title: "Configure", description: "Configure Odoo modules according to business requirements." },
      { step: "04", title: "Customize & Integrate", description: "Develop custom features and integrations where required." },
      { step: "05", title: "Launch & Support", description: "Deploy, train users, monitor the system, and provide ongoing support." },
    ],
    benefits: [
      "A system configured around your actual processes, not generic defaults",
      "Reduced risk of costly rework after go-live",
      "Departments connected through a single source of truth",
      "A clear, phased rollout instead of a disruptive big-bang switch",
    ],
    faqs: [
      {
        question: "How long does an Odoo implementation take?",
        answer:
          "Timelines depend on scope and complexity — a focused single-department rollout can take a few weeks, while a multi-department or multi-branch implementation typically takes longer. We provide a project timeline after the discovery phase.",
      },
      {
        question: "Do we need to migrate our existing data?",
        answer:
          "Most businesses do. We assess your current data sources during discovery and plan a migration approach as part of the implementation.",
      },
      {
        question: "Will our team be trained before go-live?",
        answer:
          "Yes. Administrator and end-user training is part of every implementation, delivered before and around go-live.",
      },
    ],
  },

  "odoo-customization": {
    slug: "odoo-customization",
    title: "Odoo Customization",
    shortTitle: "Customization",
    icon: Wrench,
    metaTitle: "Odoo Customization Services | Teksol",
    metaDescription:
      "Customize Odoo workflows, screens, reports, and business rules to match how your business actually operates.",
    heroHeadline: "Odoo Customized to Fit the Way You Work",
    heroSubheadline:
      "When standard functionality doesn't match your business rules, we adapt Odoo — not the other way around.",
    problem: {
      heading: "Standard configuration only goes so far",
      points: [
        "Approval flows and business rules that don't match standard Odoo logic",
        "Reports and dashboards that don't reflect how your team reviews data",
        "Screens cluttered with fields your team never uses",
        "Manual workarounds for gaps between Odoo and your operations",
      ],
    },
    solution: {
      heading: "Targeted customization, not unnecessary complexity",
      body: "We customize only where it adds real value — adjusting workflows, forms, views, and reports so Odoo matches your business rules precisely, while keeping the system upgradable and maintainable.",
    },
    included: [
      "Custom workflow and approval logic",
      "Form, view, and screen customization",
      "Custom reports and dashboards",
      "Business rule and automation configuration",
      "Role-based access and permission design",
      "UI/UX adjustments for specific teams or departments",
    ],
    process: [
      { step: "01", title: "Assess", description: "Review current configuration and identify functional gaps." },
      { step: "02", title: "Specify", description: "Document exactly what should change and why." },
      { step: "03", title: "Build", description: "Implement customizations using maintainable Odoo development practices." },
      { step: "04", title: "Test", description: "Validate against real business scenarios before rollout." },
      { step: "05", title: "Deploy", description: "Release changes with minimal disruption to daily operations." },
    ],
    benefits: [
      "A system that mirrors your real business rules",
      "Less manual workaround and duplicate data entry",
      "Reports that match how your team actually makes decisions",
      "Customizations built to remain stable through future upgrades",
    ],
    faqs: [
      {
        question: "Can Odoo be customized without breaking future upgrades?",
        answer:
          "Yes, when customizations follow Odoo's module development standards. We build custom logic as structured modules rather than direct core edits, which keeps upgrade paths cleaner.",
      },
      {
        question: "What's the difference between customization and development?",
        answer:
          "Customization adjusts and configures existing Odoo functionality — screens, workflows, and reports. Development builds new functionality that doesn't exist in Odoo at all. See our Odoo Development service for the latter.",
      },
    ],
  },

  "odoo-development": {
    slug: "odoo-development",
    title: "Odoo Development",
    shortTitle: "Development",
    icon: Code2,
    metaTitle: "Odoo Development Services | Teksol",
    metaDescription:
      "Custom Odoo module development for business logic, workflows, and functionality that standard Odoo apps don't cover.",
    heroHeadline: "Custom Odoo Modules for Unique Business Needs",
    heroSubheadline:
      "When your business needs functionality Odoo doesn't offer out of the box, we build it as a proper, maintainable module.",
    problem: {
      heading: "Some requirements go beyond configuration",
      points: [
        "Industry-specific processes with no equivalent standard module",
        "Complex calculations, pricing logic, or scheduling rules",
        "Custom document generation and specialized reporting",
        "Workflows that span multiple departments and require new logic",
      ],
    },
    solution: {
      heading: "Purpose-built Odoo modules, developed to standard",
      body: "Our development team builds custom Odoo modules using standard Odoo architecture — models, views, and business logic — so new functionality behaves like a native part of the system and stays maintainable long term.",
    },
    included: [
      "Custom module design and development",
      "Custom business logic and calculation engines",
      "Custom document templates and reports",
      "API development for internal and external use",
      "Automated testing of custom functionality",
      "Technical documentation for every module built",
    ],
    process: [
      { step: "01", title: "Scope", description: "Define exact functional and technical requirements." },
      { step: "02", title: "Architect", description: "Design the module structure and data model." },
      { step: "03", title: "Develop", description: "Build and unit-test the module against Odoo standards." },
      { step: "04", title: "Review", description: "Validate functionality against real business scenarios." },
      { step: "05", title: "Deploy & Document", description: "Release the module with documentation for your team." },
    ],
    benefits: [
      "Functionality that behaves like native Odoo, not a bolt-on",
      "Modules built to Odoo's own development standards",
      "Documented code your team or future developers can maintain",
      "A system that scales with increasingly complex requirements",
    ],
    faqs: [
      {
        question: "Can you develop custom Odoo modules?",
        answer:
          "Yes. We design and build custom Odoo modules for business logic, workflows, and integrations that standard apps don't cover.",
      },
      {
        question: "Do custom modules affect Odoo upgrades?",
        answer:
          "Custom modules built to Odoo's architecture standards are designed to be compatible with future upgrades, though every module is reviewed and tested as part of any upgrade project.",
      },
    ],
  },

  "odoo-integration": {
    slug: "odoo-integration",
    title: "Odoo Integration",
    shortTitle: "Integration",
    icon: Plug,
    metaTitle: "Odoo Integration Services | Teksol",
    metaDescription:
      "Connect Odoo with payment gateways, e-commerce platforms, APIs, and third-party systems for a single, connected business platform.",
    heroHeadline: "Connect Odoo With the Tools You Already Use",
    heroSubheadline:
      "We integrate Odoo with payment gateways, e-commerce platforms, marketplaces, and internal systems so data flows automatically.",
    problem: {
      heading: "Disconnected systems create manual work and errors",
      points: [
        "Orders re-entered by hand between your storefront and ERP",
        "Payment and shipping data that doesn't sync automatically",
        "Separate systems for CRM, accounting, or logistics that don't talk to each other",
        "No single source of truth across platforms",
      ],
    },
    solution: {
      heading: "Reliable, well-tested integrations",
      body: "We connect Odoo to your payment gateways, e-commerce platforms, marketplaces, and internal or third-party APIs, so information flows automatically between systems instead of being re-entered manually.",
    },
    included: [
      "Payment gateway integration",
      "E-commerce platform and marketplace integration",
      "Third-party API integration",
      "Internal system and legacy software integration",
      "Middleware and automation setup where needed",
      "Integration testing and monitoring",
    ],
    process: [
      { step: "01", title: "Map", description: "Identify systems, data flows, and integration points." },
      { step: "02", title: "Design", description: "Define the integration architecture and data mapping." },
      { step: "03", title: "Build", description: "Develop and configure the integration." },
      { step: "04", title: "Test", description: "Validate data accuracy and error handling end to end." },
      { step: "05", title: "Monitor", description: "Confirm stability and monitor after go-live." },
    ],
    benefits: [
      "Fewer manual data entry errors",
      "Real-time visibility across connected systems",
      "A single source of truth for orders, customers, and inventory",
      "Systems that scale as you add new platforms",
    ],
    faqs: [
      {
        question: "Can Odoo integrate with our existing software?",
        answer:
          "In most cases, yes. Odoo integrates with common payment gateways, e-commerce platforms, and systems that expose an API. We assess your specific systems during discovery.",
      },
      {
        question: "Do you build custom integrations if no ready-made connector exists?",
        answer:
          "Yes, our development team builds custom integrations using Odoo's API framework when a pre-built connector isn't available.",
      },
    ],
  },

  "odoo-migration": {
    slug: "odoo-migration",
    title: "Odoo Migration",
    shortTitle: "Migration",
    icon: ArrowLeftRight,
    metaTitle: "Odoo Data Migration Services | Teksol",
    metaDescription:
      "Safely migrate business and ERP data into Odoo with structured data mapping, cleansing, and validation.",
    heroHeadline: "Move Your Business Data Into Odoo, Safely",
    heroSubheadline:
      "A structured migration approach that protects data accuracy when moving from spreadsheets or another ERP into Odoo.",
    problem: {
      heading: "Data migration is where implementations go wrong",
      points: [
        "Years of historical data spread across spreadsheets and legacy systems",
        "Inconsistent formats, duplicate records, and incomplete data",
        "Risk of losing transaction history during a system switch",
        "No validation step before the old system is retired",
      ],
    },
    solution: {
      heading: "A structured, validated migration process",
      body: "We map your source data, clean and standardize it, migrate it into Odoo in a controlled sequence, and validate the results before your old system is retired — so nothing is lost in the switch.",
    },
    included: [
      "Data audit and source system assessment",
      "Data mapping and cleansing",
      "Master data migration (customers, vendors, products)",
      "Transactional and historical data migration",
      "Post-migration validation and reconciliation",
      "Parallel-run support where required",
    ],
    process: [
      { step: "01", title: "Audit", description: "Assess source data quality, structure, and volume." },
      { step: "02", title: "Map", description: "Define how source data maps to Odoo's data model." },
      { step: "03", title: "Cleanse", description: "Standardize and de-duplicate data before migration." },
      { step: "04", title: "Migrate", description: "Move data into Odoo in a controlled, staged sequence." },
      { step: "05", title: "Validate", description: "Reconcile migrated data against source records." },
    ],
    benefits: [
      "Reduced risk of data loss or corruption during migration",
      "Clean, standardized data instead of inherited data debt",
      "Historical records preserved and accessible in Odoo",
      "Confidence to retire legacy systems on schedule",
    ],
    faqs: [
      {
        question: "Can you migrate our existing data?",
        answer:
          "Yes. We migrate data from spreadsheets and most legacy ERP or accounting systems, following a structured mapping, cleansing, and validation process.",
      },
      {
        question: "Will we lose historical records during migration?",
        answer:
          "Our migration process is designed specifically to preserve historical and transactional data, validated against your source system before go-live.",
      },
    ],
  },

  "odoo-support": {
    slug: "odoo-support",
    title: "Odoo Support",
    shortTitle: "Support",
    icon: LifeBuoy,
    metaTitle: "Odoo Support & Maintenance Services | Teksol",
    metaDescription:
      "Ongoing Odoo technical support, troubleshooting, optimization, and maintenance to keep your ERP running reliably.",
    heroHeadline: "Odoo Support That Keeps Your Business Running",
    heroSubheadline:
      "Ongoing technical support, troubleshooting, and optimization after go-live — so your ERP stays reliable as your business grows.",
    problem: {
      heading: "ERP systems need care after go-live",
      points: [
        "New requirements emerge as the business grows and processes evolve",
        "Occasional technical issues need fast, informed troubleshooting",
        "Performance and configuration can drift over time without oversight",
        "In-house teams often lack deep Odoo technical expertise",
      ],
    },
    solution: {
      heading: "Responsive support from the team that knows your system",
      body: "We provide ongoing technical support for issue resolution, configuration changes, performance monitoring, and system optimization — so your Odoo environment keeps pace with your business.",
    },
    included: [
      "Technical issue troubleshooting and resolution",
      "Configuration changes and minor enhancements",
      "System performance monitoring",
      "Odoo version updates and patch management",
      "Periodic system health reviews",
      "Priority access to your implementation team",
    ],
    process: [
      { step: "01", title: "Report", description: "Submit an issue or request through your support channel." },
      { step: "02", title: "Diagnose", description: "Our team investigates the root cause." },
      { step: "03", title: "Resolve", description: "We apply a fix or configuration change." },
      { step: "04", title: "Confirm", description: "Verify the resolution with your team." },
      { step: "05", title: "Review", description: "Periodic reviews to catch issues before they impact the business." },
    ],
    benefits: [
      "Faster resolution from a team that already knows your setup",
      "Fewer disruptions to daily operations",
      "A system that stays current and well-maintained",
      "Support that scales as your business and usage grow",
    ],
    faqs: [
      {
        question: "Do you provide post-launch support?",
        answer:
          "Yes. Ongoing support is available after go-live, covering troubleshooting, configuration changes, monitoring, and optimization.",
      },
      {
        question: "Is support available if you weren't our original implementation partner?",
        answer:
          "In many cases, yes. We can review your existing Odoo setup and provide ongoing support — contact us to discuss your specific environment.",
      },
    ],
  },

  "erp-consulting": {
    slug: "erp-consulting",
    title: "ERP Consulting",
    shortTitle: "Consulting",
    icon: Compass,
    metaTitle: "ERP Consulting Services | Teksol",
    metaDescription:
      "Independent ERP consulting to help you select the right modules, design workflows, and plan your ERP transformation.",
    heroHeadline: "ERP Consulting to Plan Your Transformation",
    heroSubheadline:
      "Before implementation begins, we help you decide what to implement, in what order, and why.",
    problem: {
      heading: "Businesses often choose ERP scope before understanding it",
      points: [
        "Unclear which modules actually match current business processes",
        "No agreed roadmap for phased rollout across departments",
        "Difficulty aligning stakeholders on priorities and scope",
        "Risk of over-scoping or under-scoping the ERP project",
      ],
    },
    solution: {
      heading: "Independent guidance before you commit to scope",
      body: "We assess your business processes and objectives, then help you define the right module scope, implementation sequence, and success criteria — so your ERP investment is planned deliberately, not guessed at.",
    },
    included: [
      "Business process and systems assessment",
      "ERP module scope and fit analysis",
      "Implementation roadmap and phasing plan",
      "Stakeholder alignment workshops",
      "Vendor and licensing guidance",
      "Risk and readiness assessment",
    ],
    process: [
      { step: "01", title: "Assess", description: "Review current systems, processes, and pain points." },
      { step: "02", title: "Define", description: "Clarify goals, priorities, and success criteria." },
      { step: "03", title: "Recommend", description: "Propose module scope and implementation approach." },
      { step: "04", title: "Plan", description: "Build a phased roadmap aligned to your business." },
      { step: "05", title: "Hand off", description: "Transition into implementation with a clear plan in hand." },
    ],
    benefits: [
      "A scope grounded in your actual business needs",
      "Reduced risk of costly mid-project scope changes",
      "Stakeholder alignment before implementation begins",
      "A realistic, phased roadmap instead of guesswork",
    ],
    faqs: [
      {
        question: "Is ERP consulting useful if we already know we want Odoo?",
        answer:
          "Yes. Even with Odoo chosen, consulting helps define which modules, in what sequence, and with what configuration approach — decisions that shape the entire implementation.",
      },
      {
        question: "How much does Odoo implementation cost?",
        answer:
          "Cost depends on scope — number of modules, users, customizations, integrations, and data migration complexity. We provide a project estimate after an initial consultation.",
      },
    ],
  },
};
