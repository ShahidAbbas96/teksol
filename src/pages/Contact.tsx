import { Clock, Mail, MapPin, Phone } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/forms/ContactForm";
import { SITE_CONFIG } from "../config/site";

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: SITE_CONFIG.EMAIL, href: `mailto:${SITE_CONFIG.EMAIL}` },
  { icon: Phone, label: "Phone", value: SITE_CONFIG.PHONE, href: `tel:${SITE_CONFIG.PHONE_HREF}` },
  {
    icon: MapPin,
    label: "Office Location",
    value: `${SITE_CONFIG.ADDRESS_LINE_1}, ${SITE_CONFIG.ADDRESS_LINE_2}`,
    href: undefined,
  },
  { icon: Clock, label: "Business Hours", value: SITE_CONFIG.BUSINESS_HOURS, href: undefined },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Book an ERP Consultation | TekSol"
        description="Get in touch with TekSol to discuss your Odoo implementation, customization, integration, or support needs."
        path="/contact"
      />

      <section className="bg-brand-background py-16 sm:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Let's Talk About Your ERP Project"
            description="Tell us about your business and current challenges. Our team will follow up to schedule a consultation and discuss the right Odoo solution for you."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-brand-background p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-brand-dark">Contact Information</h3>
                <div className="mt-6 space-y-6">
                  {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-secondary shadow-sm">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
                        {href ? (
                          <a href={href} className="mt-0.5 block text-sm font-medium text-brand-dark hover:text-brand-secondary">
                            {value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-sm font-medium text-brand-dark">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-xs leading-relaxed text-slate-500">
                  Contact details shown are placeholders and will be updated with final business information.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
