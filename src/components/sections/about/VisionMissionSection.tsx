import { Eye, Target } from "lucide-react";
import { Container } from "../../common/Container";

const blocks = [
  {
    title: "Vizyonumuz",
    text: "Dünyadaki her öğrencinin, sosyo-ekonomik arka planı ne olursa olsun, hayallerindeki kariyere giden yolda profesyonel ve erişilebilir bir rehberliğe sahip olduğu bir gelecek inşa etmek.",
    icon: Eye,
    iconClassName: "bg-[#F59E0B]/18 text-[#FDE68A]"
  },
  {
    title: "Misyonumuz",
    text: "Bilimsel veri analitiği ve oyunlaştırmayı kullanarak, gençlerin potansiyellerini keşfetmelerine yardımcı olmak ve onları akademik başarıdan kariyer mutluluğuna taşıyan bütüncül bir ekosistem yaratmak.",
    icon: Target,
    iconClassName: "bg-[#16A34A]/18 text-[#86EFAC]"
  }
];

export const VisionMissionSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12" aria-label="Vizyon ve misyon">
      <div className="bg-cta-purple py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {blocks.map(({ title, text, icon: Icon, iconClassName }) => (
              <article key={title} className="min-w-0 text-center sm:text-left">
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${iconClassName} shadow-[0_18px_44px_rgba(8,27,75,0.16)] sm:mx-0`}
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8" strokeWidth={2.35} />
                </div>

                <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 max-w-xl text-base font-medium leading-8 text-white/82 sm:text-lg sm:leading-9">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
