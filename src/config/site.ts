/**
 * Centralized site configuration.
 * Change company details, contact info, social links, brand colors, and the
 * logo files here — nothing below should be hard-coded elsewhere in the app.
 */

export const SITE_CONFIG = {
  COMPANY_NAME: "TechSols",
  COMPANY_LEGAL_NAME: "TechSols LLC",
  TAGLINE: "Smarter ERP. Stronger Business.",
  LOGO_TEXT: "TechSols",

  /** Icon mark only (transparent) — square, good for badges and favicons. */
  LOGO_ICON_SRC: "/logo-icon.png",
  /** Icon + wordmark, no tagline (transparent) — for light-background headers. */
  LOGO_HORIZONTAL_SRC: "/logo-horizontal.png",
  /** Icon + wordmark + tagline (transparent) — for larger brand placements. */
  LOGO_FULL_SRC: "/logo-full.png",

  EMAIL: "hello@techsols.net",
  SUPPORT_EMAIL: "support@techsols.net",
  PHONE: "+1 (555) 123-4567",
  PHONE_HREF: "+15551234567",
  ADDRESS_LINE_1: "123 Business Avenue, Suite 400",
  ADDRESS_LINE_2: "Austin, TX 78701, United States",
  BUSINESS_HOURS: "Monday – Friday, 9:00 AM – 6:00 PM (CST)",

  SOCIAL_LINKS: {
    linkedin: "https://linkedin.com/company/techsols",
    facebook: "https://facebook.com/techsols",
    instagram: "https://instagram.com/techsols",
    youtube: "https://youtube.com/@techsols",
  },

  CALENDLY_URL: "#book-consultation",

  SEO: {
    siteUrl: "https://techsols.net",
    defaultTitle: "Odoo ERP Implementation & Consulting | TechSols",
    defaultDescription:
      "TechSols helps businesses implement, customize, integrate, and optimize Odoo ERP solutions for smarter, connected business operations.",
    ogImage: "/logo-full.png",
  },
} as const;

export const NOTE_ON_PARTNERSHIP =
  "We are building a dedicated Odoo practice with the goal of becoming a trusted Odoo partner for businesses seeking reliable ERP implementation and development.";
