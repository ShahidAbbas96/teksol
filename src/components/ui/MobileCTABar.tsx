import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsappIcon } from "../icons/SocialIcons";
import { SITE_CONFIG } from "../../config/site";

/** Persistent bottom action bar, mobile only. Puts the primary conversion
 * action in the thumb-reachable zone instead of requiring a scroll back up
 * to the nav bar (efficiency of use, recognition over recall). */
export default function MobileCTABar() {
  const whatsappHref = `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(
    SITE_CONFIG.WHATSAPP_DEFAULT_MESSAGE,
  )}`;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Link
        to="/contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-secondary px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-900/10 transition-colors hover:bg-blue-600"
      >
        Book Consultation
        <ArrowRight className="h-4 w-4" />
      </Link>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-sm transition-transform hover:scale-105"
      >
        <WhatsappIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
