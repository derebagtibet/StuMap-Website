import { Brain, ChartNoAxesCombined, HeartHandshake, LucideIcon } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "../common/Container";

type CareerTestTheme = "purple" | "orange" | "green";

interface CareerTestCardData {
  title: string;
  description: string;
  icon: LucideIcon;
  theme: CareerTestTheme;
}

interface CareerTestCardProps {
  test: CareerTestCardData;
}

const themeStyles: Record<
  CareerTestTheme,
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
  green: {
    iconWrap: "bg-accentGreen/10 ring-accentGreen/10",
    icon: "text-accentGreen"
  }
};

const careerTests: CareerTestCardData[] = [
  {
    title: "Kariyer İlgi Testi",
    description:
      "İlgi alanlarını keşfederek sana en uygun kariyer ve bölüm seçeneklerini belirle.",
    icon: HeartHandshake,
    theme: "purple"
  },
  {
    title: "Kişilik Envanteri",
    description:
      "Kişilik özelliklerini analiz ederek güçlü yönlerine uygun meslekleri tanı.",
    icon: Brain,
    theme: "orange"
  },
  {
    title: "Yetenek Analizi",
    description:
      "Yeteneklerini ve becerilerini değerlendirerek potansiyelini ortaya çıkar.",
    icon: ChartNoAxesCombined,
    theme: "green"
  }
];

const CareerTestCard = ({ test }: CareerTestCardProps) => {
  const styles = themeStyles[test.theme];
  const Icon = test.icon;

  return (
    <article className="info-card">
      <div className={clsx("icon-circle", styles.iconWrap)} aria-hidden="true">
        <Icon className={clsx("h-8 w-8", styles.icon)} strokeWidth={2.25} />
      </div>

      <div className="mt-8 flex flex-1 flex-col">
        <h3 className="heading-card-lg">{test.title}</h3>
        <p className="body-copy-lg mt-5">{test.description}</p>
      </div>
    </article>
  );
};

export const CareerTestCardsSection = () => {
  return (
    <section
      className="page-section section-surface"
      aria-labelledby="career-test-cards-title"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="career-test-cards-title" className="section-title">
            Sana Özel Kariyer Testleri
          </h2>
          <div
            className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-primary"
            aria-hidden="true"
          />
        </div>

        <div className="mt-12 grid min-w-0 items-stretch gap-7 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-9">
          {careerTests.map((test) => (
            <CareerTestCard key={test.title} test={test} />
          ))}
        </div>
      </Container>
    </section>
  );
};
