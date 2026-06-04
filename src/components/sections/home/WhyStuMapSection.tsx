import { Bot, BriefcaseBusiness, ClipboardCheck, Route } from "lucide-react";
import { Container } from "../../common/Container";
import { FeatureCard, FeatureCardProps } from "../../common/FeatureCard";

const features: FeatureCardProps[] = [
  {
    title: "Kişiselleştirilmiş Yol",
    description:
      "Öğrencilerin ilgi alanlarına ve hedeflerine göre kişisel kariyer yol haritası oluşturulur.",
    icon: Route,
    color: "purple"
  },
  {
    title: "Bilimsel Testler",
    description:
      "Güvenilir testlerle öğrencilerin yetenekleri, ilgi alanları ve güçlü yönleri analiz edilir.",
    icon: ClipboardCheck,
    color: "orange"
  },
  {
    title: "AI Asistan",
    description:
      "Yapay zeka destekli asistan ile öğrencilere doğru bölüm ve kariyer önerileri sunulur.",
    icon: Bot,
    color: "blue"
  },
  {
    title: "Workshop Desteği",
    description:
      "Mesleki özel atölye çalışmaları ile öğrenci hem teoride hem de pratikte kendini keşfetme fırsatı bulur.",
    icon: BriefcaseBusiness,
    color: "green"
  }
];

export const WhyStuMapSection = () => {
  return (
    <section
      className="page-section section-surface"
      aria-labelledby="why-stumap-title"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="why-stumap-title"
            className="section-title"
          >
            Neden StuMap?
          </h2>
        </div>

        <div className="mt-10 grid min-w-0 items-stretch gap-7 sm:mt-12 md:grid-cols-2 md:gap-8 xl:grid-cols-4 xl:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};
