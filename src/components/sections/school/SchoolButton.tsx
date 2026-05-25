import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary";

interface SchoolButtonProps {
  children: ReactNode;
  to: string;
  variant?: ButtonVariant;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_14px_30px_rgba(255,138,0,0.28)] hover:bg-accentHover hover:shadow-[0_20px_42px_rgba(255,138,0,0.34)] focus-visible:ring-accent/25",
  secondary:
    "border border-primary bg-white text-primary hover:bg-primaryLight focus-visible:ring-primary/20"
};

export const SchoolButton = ({
  children,
  to,
  variant = "primary",
  className
}: SchoolButtonProps) => {
  const classes = clsx(
    "inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-center text-base font-bold transition duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 active:translate-y-0",
    variantClasses[variant],
    className
  );

  if (to.startsWith("#")) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={classes}
    >
      {children}
    </Link>
  );
};
