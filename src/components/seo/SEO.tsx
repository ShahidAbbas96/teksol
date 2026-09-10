import { useEffect } from "react";
import { SITE_CONFIG } from "../../config/site";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  schema?: Record<string, unknown>;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, data: Record<string, unknown>) {
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-schema-id="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-schema-id", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/** Lightweight, dependency-free document-head manager for per-page SEO metadata. */
export default function SEO({ title, description, path = "/", schema }: SEOProps) {
  useEffect(() => {
    const pageTitle = title ?? SITE_CONFIG.SEO.defaultTitle;
    const pageDescription = description ?? SITE_CONFIG.SEO.defaultDescription;
    const canonicalUrl = `${SITE_CONFIG.SEO.siteUrl}${path}`;

    document.title = pageTitle;
    setMetaTag("name", "description", pageDescription);
    setLinkTag("canonical", canonicalUrl);

    setMetaTag("property", "og:title", pageTitle);
    setMetaTag("property", "og:description", pageDescription);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:image", `${SITE_CONFIG.SEO.siteUrl}${SITE_CONFIG.SEO.ogImage}`);
    setMetaTag("property", "og:site_name", SITE_CONFIG.COMPANY_NAME);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", pageTitle);
    setMetaTag("name", "twitter:description", pageDescription);

    if (schema) {
      setJsonLd("page-schema", schema);
    }
  }, [title, description, path, schema]);

  return null;
}
