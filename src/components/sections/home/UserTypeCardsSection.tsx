import { Building2, UserRound } from "lucide-react";
import { Container } from "../../common/Container";
import { UserTypeCard, UserTypeCardProps } from "../../common/UserTypeCard";
import { ROUTES } from "../../../constants/routes";

const userTypeCards: UserTypeCardProps[] = [
  {
    title: "Eğitim Kurumları",
    description:
      "Öğrencilerin potansiyelini keşfetmelerine ve doğru kariyer seçimleri yapmalarına yardımcı olun.",
    ctaLabel: "Kurumsal Kayıt",
    ctaTo: ROUTES.SCHOOL,
    icon: Building2,
    variant: "purple"
  },
  {
    title: "Bireysel Kullanıcılar",
    description:
      "Kendi yeteneklerinizi ve ilgi alanlarınızı keşfederek size uygun kariyer yolunu belirleyin.",
    ctaLabel: "Hemen Üye Ol",
    ctaTo: `${ROUTES.STUDENT}#student-lead`,
    icon: UserRound,
    variant: "orange"
  }
];

export const UserTypeCardsSection = () => {
  return (
    <section className="page-section section-surface" aria-labelledby="user-type-cards-title">
      <Container>
        <h2 id="user-type-cards-title" className="sr-only">
          Kullanıcı türleri
        </h2>

        <div className="grid min-w-0 items-stretch gap-7 md:grid-cols-2 md:gap-8 lg:gap-12">
          {userTypeCards.map((card) => (
            <UserTypeCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};
