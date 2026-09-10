import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../ui/Container";
import { SITE_CONFIG } from "../../config/site";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../icons/SocialIcons";

const COLUMNS: { heading: string; links: { label: string; to: string }[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Industries", to: "/industries" },
      { label: "Resources", to: "/resources" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Odoo",
    links: [
      { label: "Odoo ERP", to: "/odoo" },
      { label: "Implementation", to: "/services/odoo-implementation" },
      { label: "Customization", to: "/services/odoo-customization" },
      { label: "Development", to: "/services/odoo-development" },
      { label: "Integration", to: "/services/odoo-integration" },
      { label: "Migration", to: "/services/odoo-migration" },
      { label: "Support", to: "/services/odoo-support" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "ERP Consulting", to: "/services/erp-consulting" },
      { label: "Business Automation", to: "/services/odoo-implementation" },
      { label: "Custom Development", to: "/services/odoo-development" },
      { label: "System Integration", to: "/services/odoo-integration" },
    ],
  },
];

const SOCIALS = [
  { icon: LinkedinIcon, href: SITE_CONFIG.SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: FacebookIcon, href: SITE_CONFIG.SOCIAL_LINKS.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SITE_CONFIG.SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: SITE_CONFIG.SOCIAL_LINKS.youtube, label: "YouTube" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-brand-dark text-slate-300">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-white">
                {SITE_CONFIG.LOGO_TEXT.charAt(0)}
              </span>
              <span className="text-lg font-bold text-white">
                {SITE_CONFIG.LOGO_TEXT}
                <span className="text-brand-secondary">{SITE_CONFIG.LOGO_ACCENT}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{SITE_CONFIG.TAGLINE}</p>

            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${SITE_CONFIG.EMAIL}`} className="flex items-center gap-2.5 text-slate-400 hover:text-white">
                <Mail className="h-4 w-4 shrink-0" /> {SITE_CONFIG.EMAIL}
              </a>
              <a href={`tel:${SITE_CONFIG.PHONE_HREF}`} className="flex items-center gap-2.5 text-slate-400 hover:text-white">
                <Phone className="h-4 w-4 shrink-0" /> {SITE_CONFIG.PHONE}
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {SITE_CONFIG.ADDRESS_LINE_1}
                  <br />
                  {SITE_CONFIG.ADDRESS_LINE_2}
                </span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-brand-secondary hover:text-brand-secondary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE_CONFIG.COMPANY_LEGAL_NAME}. All rights reserved.
          </p>
          <p>Independent Odoo ERP implementation and consulting services.</p>
        </div>
      </Container>
    </footer>
  );
}
