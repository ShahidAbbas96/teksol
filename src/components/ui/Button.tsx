import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "outline" | "outlineDark" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-secondary text-white hover:bg-blue-600 shadow-sm shadow-blue-900/10",
  secondary: "bg-brand-primary text-white hover:bg-[#5f3f56] shadow-sm shadow-purple-900/10",
  outline:
    "border border-slate-300 text-brand-dark bg-white hover:border-brand-secondary hover:text-brand-secondary",
  outlineDark: "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10",
  ghost: "text-brand-dark hover:bg-slate-100",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 whitespace-nowrap ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href ?? "#"} className={classes} {...rest}>
      {content}
    </a>
  );
}
