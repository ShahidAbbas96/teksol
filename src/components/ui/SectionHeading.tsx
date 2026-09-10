interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  theme?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  theme = "light",
}: SectionHeadingProps) {
  const Heading = as;
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = theme === "dark" ? "text-white" : "text-brand-dark";
  const descriptionColor = theme === "dark" ? "text-slate-300" : "text-slate-600";
  const eyebrowClasses =
    theme === "dark"
      ? "bg-white/10 text-white"
      : "bg-brand-secondary/10 text-brand-secondary";

  return (
    <div className={`max-w-3xl ${alignClasses}`}>
      {eyebrow ? (
        <span className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${eyebrowClasses}`}>
          {eyebrow}
        </span>
      ) : null}
      <Heading className={`text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</Heading>
      {description ? <p className={`mt-4 text-lg leading-relaxed ${descriptionColor}`}>{description}</p> : null}
    </div>
  );
}
