import { WhatsappIcon } from "../icons/SocialIcons";
import { SITE_CONFIG } from "../../config/site";

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    SITE_CONFIG.WHATSAPP_DEFAULT_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/20 transition-transform duration-200 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40 group-hover:opacity-0" />
      <WhatsappIcon className="relative h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-brand-dark px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
