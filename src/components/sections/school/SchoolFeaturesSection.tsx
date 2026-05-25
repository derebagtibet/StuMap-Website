import {
  BarChart3,
  GraduationCap,
  LayoutDashboard,
  LucideIcon,
  UsersRound
} from "lucide-react";
import { Container } from "../../common/Container";
import { ProductPreviewCard, PreviewVariant } from "./ProductPreviewCard";
import { SchoolSectionHeader } from "./SchoolSectionHeader";

interface InstitutionalFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  preview: PreviewVariant;
}

const features: InstitutionalFeature[] = [
  {
    title: "Gelişmiş Yönetim",
    description:
      "Kurum, sınıf, öğrenci ve rehberlik süreçlerini tek panelden düzenli ve kontrollü şekilde yönetin.",
    icon: LayoutDashboard,
    preview: "dashboard"
  },
  {
    title: "Toplu Yönetim",
    description:
      "Öğrenci aktarımı, sınıf eşleştirme ve görev atamalarını toplu aksiyonlarla daha hızlı tamamlayın.",
    icon: UsersRound,
    preview: "bulk"
  },
  {
    title: "Detaylı Raporlama",
    description:
      "Kurum genelinde katılım, ilerleme ve kariyer eğilimlerini anlaşılır grafiklerle takip edin.",
    icon: BarChart3,
    preview: "reports"
  },
  {
    title: "Profesyonel Rehberlik Desteği",
    description:
      "Rehber öğretmenlerin öğrenci ihtiyaçlarını önceliklendirmesine yardımcı olan yapılandırılmış takip alanları sunun.",
    icon: GraduationCap,
    preview: "guidance"
  }
];

export const SchoolFeaturesSection = () => {
  return (
    <section
      className="bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="school-features-title"
    >
      <Container>
        <SchoolSectionHeader
          titleId="school-features-title"
          eyebrow="Platform yetenekleri"
          title={
            <>
              Kurumsal Platform <span className="text-primary">Özellikleri</span>
            </>
          }
          description="Stumap, okulların rehberlik süreçlerini ölçülebilir, yönetilebilir ve kurum geneline yayılabilir hale getiren güçlü araçlar sunar."
        />

        <div className="mt-12 grid min-w-0 items-stretch gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {features.map(({ title, description, icon: Icon, preview }) => (
            <article
              key={title}
              className="flex h-full min-h-[31rem] flex-col rounded-[2rem] border border-[#D9DDFE] bg-white p-6 shadow-[0_18px_52px_rgba(6,27,78,0.07)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(6,27,78,0.12)] sm:p-8"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-8 ring-primary/5">
                <Icon className="h-8 w-8" strokeWidth={2.25} />
              </div>

              <div className="mt-7 max-w-xl">
                <h3 className="heading-card-lg">{title}</h3>
                <p className="body-copy mt-4">{description}</p>
              </div>

              <ProductPreviewCard variant={preview} />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
