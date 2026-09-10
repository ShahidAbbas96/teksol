import { ArrowRight, Home } from "lucide-react";
import SEO from "../components/seo/SEO";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | TekSol" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[70vh] items-center bg-brand-background py-20">
        <Container>
          <div className="mx-auto flex max-w-lg flex-col items-center text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-secondary">404 Error</span>
            <h1 className="mt-4 text-4xl font-bold text-brand-dark sm:text-5xl">Page Not Found</h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The page you're looking for doesn't exist or may have been moved.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/" size="lg" icon={<Home className="h-5 w-5" />} iconPosition="left">
                Back to Homepage
              </Button>
              <Button to="/contact" variant="outline" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
