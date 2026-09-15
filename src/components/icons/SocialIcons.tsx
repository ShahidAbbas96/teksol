/**
 * lucide-react no longer ships brand/social icons, so these are small,
 * self-contained replacements sized to match lucide's 24x24 viewBox.
 */
import type { SVGProps } from "react";

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.33-.02-3.05-1.9-3.05-1.9 0-2.2 1.44-2.2 2.95V21h-4z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 4h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2h3.5a.5.5 0 0 1 .5.6l-.6 3a.5.5 0 0 1-.5.4H14v8h-4v-8H8a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2V9.5A4.5 4.5 0 0 1 14.5 5H14z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth={1.8} />
      <path d="M10.5 9.5v5l4.5-2.5z" />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.28 2 11.5c0 1.85.55 3.58 1.5 5.04L2 22l5.66-1.44A10.4 10.4 0 0 0 12 21c5.52 0 10-4.28 10-9.5S17.52 2 12 2Zm5.2 13.3c-.22.6-1.28 1.15-1.77 1.2-.45.06-1 .08-1.62-.1a8.9 8.9 0 0 1-1.5-.55c-2.64-1.13-4.36-3.77-4.5-3.95-.13-.18-1.07-1.4-1.07-2.68 0-1.27.68-1.9.92-2.16.24-.26.52-.32.7-.32h.5c.16 0 .38-.03.58.44.22.53.75 1.83.82 1.96.07.14.11.3.02.48-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.13.55.16.28.7 1.15 1.5 1.86 1.04.92 1.9 1.2 2.18 1.34.28.13.44.11.6-.07.16-.18.68-.78.87-1.05.18-.26.36-.22.6-.13.24.09 1.52.71 1.78.84.26.13.43.2.5.3.06.12.06.68-.16 1.29Z" />
    </svg>
  );
}
