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
  "@type": "Organization",
  name: SITE_CONFIG.COMPANY_NAME,
  url: SITE_CONFIG.SEO.siteUrl,
  email: SITE_CONFIG.EMAIL,
  telephone: SITE_CONFIG.PHONE,
  description: SITE_CONFIG.SEO.defaultDescription,
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
