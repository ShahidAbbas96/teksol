import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SITE_CONFIG } from "../../config/site";

const ODOO_LINKS = [
  { label: "Odoo Implementation", to: "/services/odoo-implementation" },
  { label: "Odoo Customization", to: "/services/odoo-customization" },
  { label: "Odoo Development", to: "/services/odoo-development" },
  { label: "Odoo Integration", to: "/services/odoo-integration" },
  { label: "Odoo Migration", to: "/services/odoo-migration" },
  { label: "Odoo Support", to: "/services/odoo-support" },
  { label: "Odoo Training", to: "/odoo#training" },
  { label: "Odoo ERP Modules", to: "/odoo#modules" },
];

const SERVICES_LINKS = [
  { label: "ERP Consulting", to: "/services/erp-consulting" },
  { label: "Business Process Automation", to: "/services/odoo-implementation" },
  { label: "Custom Software Development", to: "/services/odoo-development" },
  { label: "System Integration", to: "/services/odoo-integration" },
  { label: "Data Migration", to: "/services/odoo-migration" },
  { label: "Technical Support", to: "/services/odoo-support" },
];

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Odoo", to: "/odoo", dropdown: ODOO_LINKS },
  { label: "Services", to: "/services", dropdown: SERVICES_LINKS },
  { label: "Industries", to: "/industries" },
  { label: "Solutions", to: "/solutions" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileSubOpen(null);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container>
        <nav ref={navRef} className="flex h-18 items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <img src={SITE_CONFIG.LOGO_HORIZONTAL_SRC} alt={SITE_CONFIG.LOGO_TEXT} className="h-9 w-auto" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex items-center gap-1 rounded-md px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand-secondary"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {openDropdown === link.label ? (
                    <div className="absolute left-0 top-full w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-secondary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:text-brand-secondary ${
                      isActive ? "text-brand-secondary" : "text-slate-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ),
            )}
          </div>

          <div className="hidden lg:block">
            <Button to="/contact" variant="primary" size="md">
              Book Consultation
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 lg:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() => setMobileSubOpen(mobileSubOpen === link.label ? null : link.label)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-medium text-slate-800"
                      aria-expanded={mobileSubOpen === link.label}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileSubOpen === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSubOpen === link.label ? (
                      <div className="ml-3 flex flex-col border-l border-slate-200 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.to}
                            className="rounded-md px-3 py-2.5 text-sm text-slate-600 hover:text-brand-secondary"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link key={link.label} to={link.to} className="rounded-md px-3 py-3 text-sm font-medium text-slate-800">
                    {link.label}
                  </Link>
                ),
              )}
              <div className="mt-2 px-3">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Book Consultation
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
