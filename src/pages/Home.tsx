import SEO from "../components/seo/SEO";
import Hero from "../components/sections/Hero";
import TrustSection from "../components/sections/TrustSection";
import ImplementationProcess from "../components/sections/ImplementationProcess";
import ServicesSection from "../components/sections/ServicesSection";
import IndustriesSection from "../components/sections/IndustriesSection";
import ModulesSection from "../components/sections/ModulesSection";
import TransformationSection from "../components/sections/TransformationSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import MethodologyTimeline from "../components/sections/MethodologyTimeline";
import PartnershipSection from "../components/sections/PartnershipSection";
import CaseStudiesSection from "../components/sections/CaseStudiesSection";
import FAQSection from "../components/sections/FAQSection";
import CTASection from "../components/sections/CTASection";
import { SITE_CONFIG } from "../config/site";

const HOME_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_CONFIG.SEO.siteUrl}/#organization`,
  name: SITE_CONFIG.COMPANY_NAME,
  url: SITE_CONFIG.SEO.siteUrl,
  logo: `${SITE_CONFIG.SEO.siteUrl}${SITE_CONFIG.LOGO_FULL_SRC}`,
  image: `${SITE_CONFIG.SEO.siteUrl}${SITE_CONFIG.LOGO_FULL_SRC}`,
  email: SITE_CONFIG.EMAIL,
  telephone: SITE_CONFIG.PHONE_HREF,
  description: SITE_CONFIG.SEO.defaultDescription,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.ADDRESS_LINE_1,
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  sameAs: Object.values(SITE_CONFIG.SOCIAL_LINKS),
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Odoo ERP Implementation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microsoft Dynamics 365 Implementation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP Consulting" } },
  ],
};

export default function Home() {
  return (
    <>
      <SEO
        title={SITE_CONFIG.SEO.defaultTitle}
        description={SITE_CONFIG.SEO.defaultDescription}
        path="/"
        schema={HOME_SCHEMA}
      />
      <Hero />
      <TrustSection />
      <ImplementationProcess />
      <ServicesSection />
      <IndustriesSection />
      <ModulesSection />
      <TransformationSection />
      <WhyChooseUs />
      <MethodologyTimeline />
      <PartnershipSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
