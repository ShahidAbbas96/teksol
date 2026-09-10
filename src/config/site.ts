/**
 * Centralized site configuration.
 * Change company details, contact info, social links, brand colors, and the
 * logo files here — nothing below should be hard-coded elsewhere in the app.
 */

export const SITE_CONFIG = {
  COMPANY_NAME: "TekSol",
  COMPANY_LEGAL_NAME: "TekSol LLC",
  TAGLINE: "Smarter ERP. Stronger Business.",
  LOGO_TEXT: "TekSol",

  /** Icon mark only (transparent) — square, good for badges and favicons. */
  LOGO_ICON_SRC: "/logo-icon.png",
  /** Icon + wordmark, no tagline (transparent) — for light-background headers. */
  LOGO_HORIZONTAL_SRC: "/logo-horizontal.png",
  /** Icon + wordmark + tagline (transparent) — for larger brand placements. */
  LOGO_FULL_SRC: "/logo-full.png",

  EMAIL: "hello@teksol.example",
  SUPPORT_EMAIL: "support@teksol.example",
  PHONE: "+1 (555) 123-4567",
  PHONE_HREF: "+15551234567",
  ADDRESS_LINE_1: "123 Business Avenue, Suite 400",
  ADDRESS_LINE_2: "Austin, TX 78701, United States",
  BUSINESS_HOURS: "Monday – Friday, 9:00 AM – 6:00 PM (CST)",

  SOCIAL_LINKS: {
    linkedin: "https://linkedin.com/company/teksol",
    facebook: "https://facebook.com/teksol",
    instagram: "https://instagram.com/teksol",
    youtube: "https://youtube.com/@teksol",
  },

  CALENDLY_URL: "#book-consultation",

  SEO: {
    siteUrl: "https://www.teksol.example",
    defaultTitle: "Odoo ERP Implementation & Consulting | TekSol",
    defaultDescription:
      "TekSol helps businesses implement, customize, integrate, and optimize Odoo ERP solutions for smarter, connected business operations.",
    ogImage: "/logo-full.png",
  },
} as const;

export const NOTE_ON_PARTNERSHIP =
  "We are building a dedicated Odoo practice with the goal of becoming a trusted Odoo partner for businesses seeking reliable ERP implementation and development.";
