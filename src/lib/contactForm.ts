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
const PHONE_REGEX = /^[+\d][\d\s()-]{6,}$/;

export function validateContactForm(values: ContactFormValues): Partial<Record<keyof ContactFormValues, string>> {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
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
