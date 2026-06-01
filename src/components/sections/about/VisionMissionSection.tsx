import { Eye, Target } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "../../common/Container";

const blocks = [
  {
    title: "Misyonumuz",
    text: "Bilimsel veri analitiği ve oyunlaştırmayı kullanarak, gençlerin potansiyellerini keşfetmelerine yardımcı olmak ve onları akademik başarıdan kariyer mutluluğuna taşıyan bütüncül bir ekosistem yaratmak.",
    icon: Target,
    iconClassName: "bg-[#16A34A]/18 text-[#86EFAC]"
  },
  {
    title: "Vizyonumuz",
    text: "Dünyadaki her öğrencinin, sosyo-ekonomik arka planı ne olursa olsun, hayallerindeki kariyere giden yolda profesyonel ve erişilebilir bir rehberliğe sahip olduğu bir gelecek inşa etmek.",
    icon: Eye,
    iconClassName: "bg-[#F59E0B]/18 text-[#FDE68A]"
  }
];

export const VisionMissionSection = () => {
  return (
    <section className="bg-white py-8 sm:py-12" aria-label="Vizyon ve misyon">
      <div className="bg-cta-purple py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
            {blocks.map(({ title, text, icon: Icon, iconClassName }, index) => (
              <article
                key={title}
                className={clsx(
                  "min-w-0 text-center sm:text-left",
                  index === 0 &&
                    "border-b border-[#061B4E]/18 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-16",
                  index === 1 && "lg:pl-16"
                )}
              >
                <div
                  className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${iconClassName} shadow-[0_18px_44px_rgba(8,27,75,0.16)] sm:mx-0`}
                  aria-hidden="true"
                >
                  <Icon className="h-8 w-8" strokeWidth={2.35} />
                </div>

                <h2 className="mt-7 text-3xl font-extrabold leading-tight text-[#061B4E] sm:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 max-w-xl text-base font-semibold leading-8 text-[#061B4E]/82 sm:text-lg sm:leading-9">
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
