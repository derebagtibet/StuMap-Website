import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

type UserTypeCardVariant = "purple" | "orange";

interface UserTypeIconProps {
  icon: LucideIcon;
  variant: UserTypeCardVariant;
}

export interface UserTypeCardProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  icon: LucideIcon;
  variant: UserTypeCardVariant;
}

const variantStyles: Record<
  UserTypeCardVariant,
  {
    iconWrap: string;
    icon: string;
    button: string;
  }
> = {
  purple: {
    iconWrap: "bg-primary/10 text-primary ring-primary/15",
    icon: "text-primary",
    button: "btn-primary"
  },
  orange: {
    iconWrap: "bg-accent/10 text-accent ring-accent/15",
    icon: "text-accent",
    button: "btn-accent"
  }
};

const UserTypeIcon = ({ icon: Icon, variant }: UserTypeIconProps) => {
  const styles = variantStyles[variant];

  return (
    <div
      className={clsx(
        "icon-circle",
        styles.iconWrap
      )}
      aria-hidden="true"
    >
      <Icon className={clsx("h-8 w-8", styles.icon)} strokeWidth={2.25} />
    </div>
  );
};

export const UserTypeCard = ({
  title,
  description,
  ctaLabel,
  ctaTo,
  icon,
  variant
}: UserTypeCardProps) => {
  const styles = variantStyles[variant];

  return (
    <article className="info-card">
      <UserTypeIcon icon={icon} variant={variant} />

      <div className="mt-9 flex flex-1 flex-col">
        <h3 className="heading-card-lg">
          {title}
        </h3>

        <p className="body-copy-lg mt-5">
          {description}
        </p>

        <Link
          to={ctaTo}
          className={clsx(
            "mt-auto w-full py-4 text-center",
            styles.button
          )}
          aria-label={`${ctaLabel}: ${title}`}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
};
