import { useState } from "react";
import type { FormEvent, FocusEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  EMPLOYEE_RANGES,
  INITIAL_CONTACT_FORM,
  SERVICE_OPTIONS,
  submitContactForm,
  validateContactForm,
  type ContactFormValues,
} from "../../lib/contactForm";
import { INDUSTRIES_SUMMARY } from "../../data/industries";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const REQUIRED_FIELDS: (keyof ContactFormValues)[] = ["fullName", "email", "phone"];

function baseInputClasses(hasError: boolean) {
  return `w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
    hasError
      ? "border-rose-300 focus:border-rose-400 focus:ring-rose-200"
      : "border-slate-300 focus:border-brand-secondary focus:ring-brand-secondary/20"
  }`;
}

const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";
const optionalClasses = "font-normal text-slate-400";
const errorClasses = "mt-1 text-xs font-medium text-rose-600";

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_CONTACT_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormValues, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateContactForm({ ...values, [field]: value })[field] }));
    }
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const field = event.target.id as keyof ContactFormValues;
    if (!REQUIRED_FIELDS.includes(field)) return;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateContactForm(values)[field] }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    setTouched({ fullName: true, email: true, phone: true });

    if (Object.keys(validationErrors).length > 0) {
      const firstErrorField = REQUIRED_FIELDS.find((field) => validationErrors[field]);
      if (firstErrorField) document.getElementById(firstErrorField)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm(values);
      setStatus("success");
      setValues(INITIAL_CONTACT_FORM);
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <h3 className="text-xl font-bold text-brand-dark">Request received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate-600">
          Thank you for reaching out. A member of our team will get back to you shortly to schedule your
          consultation.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-brand-secondary hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="text-xs text-slate-500">
        Fields marked <span className="font-semibold text-brand-dark">*</span> are required — everything else is
        optional and helps us prepare for the conversation.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={labelClasses}>
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            className={baseInputClasses(Boolean(errors.fullName))}
            value={values.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            onBlur={handleBlur}
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName ? (
            <p id="fullName-error" className={errorClasses}>
              {errors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={baseInputClasses(Boolean(errors.email))}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            onBlur={handleBlur}
            placeholder="jane@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className={errorClasses}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            className={baseInputClasses(Boolean(errors.phone))}
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            onBlur={handleBlur}
            placeholder="+92 300 1234567"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className={errorClasses}>
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>
            Company Name <span className={optionalClasses}>(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            className={baseInputClasses(false)}
            value={values.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="Your Company Inc."
          />
        </div>

        <div>
          <label htmlFor="industry" className={labelClasses}>
            Industry <span className={optionalClasses}>(optional)</span>
          </label>
          <select
            id="industry"
            className={baseInputClasses(false)}
            value={values.industry}
            onChange={(e) => updateField("industry", e.target.value)}
          >
            <option value="">Select an industry</option>
            {INDUSTRIES_SUMMARY.map((industry) => (
              <option key={industry.slug} value={industry.title}>
                {industry.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="employees" className={labelClasses}>
            Number of Employees <span className={optionalClasses}>(optional)</span>
          </label>
          <select
            id="employees"
            className={baseInputClasses(false)}
            value={values.employees}
            onChange={(e) => updateField("employees", e.target.value)}
          >
            <option value="">Select a range</option>
            {EMPLOYEE_RANGES.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="currentSoftware" className={labelClasses}>
            Current ERP / Software <span className={optionalClasses}>(optional)</span>
          </label>
          <input
            id="currentSoftware"
            type="text"
            className={baseInputClasses(false)}
            value={values.currentSoftware}
            onChange={(e) => updateField("currentSoftware", e.target.value)}
            placeholder="e.g. Spreadsheets, QuickBooks, another ERP"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="serviceRequired" className={labelClasses}>
            Services Required <span className={optionalClasses}>(optional)</span>
          </label>
          <select
            id="serviceRequired"
            className={baseInputClasses(false)}
            value={values.serviceRequired}
            onChange={(e) => updateField("serviceRequired", e.target.value)}
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Message <span className={optionalClasses}>(optional)</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className={baseInputClasses(false)}
            value={values.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Tell us about your business processes, goals, and challenges."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Request Consultation
          </>
        )}
      </button>

      {status === "error" ? (
        <p className="text-sm font-medium text-rose-600">
          Something went wrong sending your request. Please try again or email us directly.
        </p>
      ) : null}
    </form>
  );
}
