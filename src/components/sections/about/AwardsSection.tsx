import { Award, Handshake, Lightbulb, LucideIcon, Star } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "../../common/Container";

interface AwardItem {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "purple" | "orange" | "green" | "blue";
  logos?: AwardLogo[];
}

interface AwardLogo {
  src: string;
  alt: string;
  className?: string;
}

const awards: AwardItem[] = [
  {
    title: "JA Start-up Finalisti",
    description: "JA Europe Girişimcilik Programı kapsamında finalistlik derecesi.",
    icon: Award,
    tone: "purple",
    logos: [
      {
        src: "/assets/JA-Europe-logo.png",
        alt: "JA Europe"
      }
    ]
  },
  {
    title: "2024 İZİKAD Proje Yarışması",
    description: "2024 12. Genç İZİKAD Proje Yarışması ikinciliği.",
    icon: Lightbulb,
    tone: "orange",
    logos: [
      {
        src: "/assets/images/images.png",
        alt: "İZİKAD",
        className: "max-h-16"
      }
    ]
  },
  {
    title: "Eğitimde Güçlü Destek",
    description:
      "Genç Başarı Eğitim Vakfı, Radikal Okulları, PKA ve İzmir Büyükşehir Belediyesi destekleriyle büyüyen girişim.",
    icon: Handshake,
    tone: "green",
    logos: [
      {
        src: "/assets/logo.png",
        alt: "Radikal Eğitim Kurumları",
        className: "max-w-[8rem]"
      },
      {
        src: "/assets/IzmirBBlogo.png",
        alt: "İzmir Büyükşehir Belediyesi",
        className: "max-h-16 max-w-[4rem]"
      }
    ]
  },
  {
    title: "Etkim Yıldızları Finalistliği",
    description: "Etkim Yıldızları programında finalistlik derecesi.",
    icon: Star,
    tone: "blue",
    logos: [
      {
        src: "/assets/images/etkim.png",
        alt: "ETKİM",
        className: "max-h-14"
      }
    ]
  }
];

const toneClasses: Record<AwardItem["tone"], string> = {
  purple: "bg-[#7B2CF5]/10 text-[#7B2CF5] ring-[#7B2CF5]/10",
  orange: "bg-[#F59E0B]/12 text-[#F59E0B] ring-[#F59E0B]/10",
  green: "bg-[#16A34A]/12 text-[#16A34A] ring-[#16A34A]/10",
  blue: "bg-[#0284C7]/10 text-[#0284C7] ring-[#0284C7]/10"
};

const logoToneClasses: Record<AwardItem["tone"], string> = {
  purple: "border-[#7B2CF5]/14 bg-[#7B2CF5]/[0.035]",
  orange: "border-[#F59E0B]/16 bg-[#F59E0B]/[0.045]",
  green: "border-[#16A34A]/16 bg-[#16A34A]/[0.045]",
  blue: "border-[#0284C7]/14 bg-[#0284C7]/[0.04]"
};

export const AwardsSection = () => {
  return (
    <section
      className="bg-[#F7F8FC] py-20 sm:py-24 lg:py-28"
      aria-labelledby="awards-title"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="awards-title"
            className="text-3xl font-extrabold leading-tight tracking-normal text-[#081B4B] sm:text-4xl lg:text-h2"
          >
            Başarılarımız
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-[#081B4B]/62 sm:text-lg">
            Girişim yolculuğumuzda kazandığımız dereceler ve yanımızda olan destekçiler.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8 xl:grid-cols-4">
          {awards.map(({ title, description, icon: Icon, tone, logos }) => (
            <article
              key={title}
              className="flex h-full min-h-[20rem] flex-col items-center rounded-[2rem] border border-[#D9DDFE] bg-white px-6 py-8 text-center shadow-[0_18px_44px_rgba(8,27,75,0.07)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(8,27,75,0.11)] sm:px-7"
            >
              <div
                className={clsx(
                  "flex h-16 w-16 items-center justify-center rounded-full ring-8",
                  toneClasses[tone]
                )}
                aria-hidden="true"
              >
                <Icon className="h-8 w-8" strokeWidth={2.25} />
              </div>

              <h3 className="mt-7 text-xl font-extrabold leading-tight text-[#081B4B] sm:text-2xl">
                {title}
              </h3>
              <p className="mt-4 text-base font-medium leading-7 text-[#081B4B]/62">
                {description}
              </p>

              {logos && (
                <div className="mt-auto w-full pt-7">
                  <div
                    className={clsx(
                      "flex min-h-20 flex-wrap items-center justify-center gap-4 rounded-2xl border px-4 py-3",
                      logoToneClasses[tone]
                    )}
                  >
                    {logos.map((logo) => (
                      <img
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        className={clsx(
                          "max-h-12 w-auto max-w-[13rem] object-contain",
                          logo.className
                        )}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
