import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Appears once the user has scrolled past the first screen, giving them an
 * always-available, low-effort way back to the top instead of relying on
 * memory of where the nav bar is (recognition over recall, user control). */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 600);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-24 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-dark shadow-lg shadow-slate-300/40 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand-secondary lg:bottom-6"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
