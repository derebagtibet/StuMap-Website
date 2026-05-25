import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

export type FeatureCardColor = "purple" | "orange" | "blue";

interface FeatureIconProps {
  icon: LucideIcon;
  color: FeatureCardColor;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: FeatureCardColor;
}

const colorStyles: Record<
  FeatureCardColor,
  {
    iconWrap: string;
    icon: string;
  }
> = {
  purple: {
    iconWrap: "bg-primary/10 ring-primary/10",
    icon: "text-primary"
  },
  orange: {
    iconWrap: "bg-accent/10 ring-accent/10",
    icon: "text-accent"
  },
  blue: {
    iconWrap: "bg-sky-100 ring-sky-100",
    icon: "text-sky-600"
  }
};

const FeatureIcon = ({ icon: Icon, color }: FeatureIconProps) => {
  const styles = colorStyles[color];

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

export const FeatureCard = ({
  title,
  description,
  icon,
  color
}: FeatureCardProps) => {
  return (
    <article className="feature-card">
      <FeatureIcon icon={icon} color={color} />

      <div className="mt-8">
        <h3 className="heading-card">
          {title}
        </h3>

        <p className="body-copy mt-4">
          {description}
        </p>
      </div>
    </article>
  );
};
