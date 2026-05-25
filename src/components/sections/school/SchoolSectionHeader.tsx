import { ReactNode } from "react";
import { clsx } from "clsx";

interface SchoolSectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  className?: string;
  titleId?: string;
  inverted?: boolean;
}

export const SchoolSectionHeader = ({
  eyebrow,
  title,
  description,
  className,
  titleId,
  inverted = false
}: SchoolSectionHeaderProps) => {
  return (
    <div className={clsx("mx-auto max-w-3xl text-center", className)}>
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 text-sm font-extrabold uppercase leading-5 tracking-normal",
            inverted ? "text-white/75" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        id={titleId}
        className={clsx(
          "text-3xl font-extrabold leading-tight tracking-normal sm:text-4xl lg:text-h2",
          inverted ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>

      <p
        className={clsx(
          "mx-auto mt-5 max-w-2xl text-base font-medium leading-8 sm:text-lg",
          inverted ? "text-white/78" : "text-dark/62"
        )}
      >
        {description}
      </p>
    </div>
  );
};
