import type { LucideIcon } from "lucide-react";

export interface ServiceSummary {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  icon: LucideIcon;
  problem: {
    heading: string;
    points: string[];
  };
  solution: {
    heading: string;
    body: string;
  };
  included: string[];
  process: { step: string; title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface IndustrySummary {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IndustryDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  icon: LucideIcon;
  challenges: string[];
  solution: string;
  modules: string[];
  workflows: { title: string; description: string }[];
}

export interface ModuleItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
