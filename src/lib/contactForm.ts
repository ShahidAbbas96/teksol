export interface ContactFormValues {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  employees: string;
  currentSoftware: string;
  serviceRequired: string;
  message: string;
}

export const EMPLOYEE_RANGES = ["1 - 10", "11 - 50", "51 - 200", "201 - 500", "500+"];

export const SERVICE_OPTIONS = [
  "Odoo Implementation",
  "Odoo Customization",
  "Odoo Development",
  "Odoo Integration",
  "Odoo Migration",
  "Odoo Support",
  "Dynamics 365 Implementation",
  "ERP Consulting",
  "Other",
];

export const INITIAL_CONTACT_FORM: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  employees: "",
  currentSoftware: "",
  serviceRequired: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): Partial<Record<keyof ContactFormValues, string>> {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Business email is required.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.company.trim()) errors.company = "Company name is required.";
  if (!values.serviceRequired) errors.serviceRequired = "Please select a service.";
  if (!values.message.trim()) {
    errors.message = "Tell us a little about your project.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please provide a bit more detail (at least 10 characters).";
  }

  return errors;
}

export async function submitContactForm(values: ContactFormValues): Promise<{ success: true }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return { success: true };
}
