import { Brain, Gamepad2, Handshake, LucideIcon } from "lucide-react";
import { Container } from "../../common/Container";

const MASCOT_IMAGE_SRC = "/assets/images/stumap-about-doctor.png";

interface ApproachItem {
  title: string;
  text: string;
  icon: LucideIcon;
}

const approachItems: ApproachItem[] = [
  {
    title: "Bilimsel Temelli",
    text: "Psikometrik testler ve yapay zeka destekli analizlerle yanılma payını en aza indiriyoruz.",
    icon: Brain
  },
  {
    title: "Oyunlaştırılmış Deneyim",
    text: "Sıkıcı formlar yerine, öğrencilerin kendilerini bir oyunun içindeymiş gibi hissettikleri bir süreç sunuyoruz.",
    icon: Gamepad2
  },
  {
    title: "Sürekli Destek",
    text: "Tek seferlik bir test değil, üniversite seçiminden mezuniyete kadar süren bir yol arkadaşlığı sağlıyoruz.",
    icon: Handshake
  }
];

export const CounselingApproachSection = () => {
  return (
    <section
      className="bg-[#F7F8FC] py-20 sm:py-24 lg:py-28"
      aria-labelledby="counseling-approach-title"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(20rem,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <div className="flex justify-center lg:justify-start">
          <div className="flex aspect-square w-full max-w-[20rem] items-center justify-center rounded-3xl border border-[#D9DDFE] bg-[#EEF1FF] p-6 shadow-[0_24px_70px_rgba(8,27,75,0.1)] sm:max-w-[25rem] sm:p-8 lg:max-w-[30rem]">
            <img
              src={MASCOT_IMAGE_SRC}
              alt="StuMap kariyer danışmanı doktor maskotu"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="min-w-0 text-center lg:text-left">
          <h2
            id="counseling-approach-title"
            className="text-3xl font-extrabold leading-tight tracking-normal text-[#081B4B] sm:text-4xl lg:text-h2"
          >
            Kariyer Danışmanlığına Yaklaşımımız
          </h2>

          <div className="mt-9 space-y-5">
            {approachItems.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="flex gap-4 rounded-[1.5rem] border border-[#D9DDFE] bg-[#F4F6FF] p-5 text-left shadow-[0_14px_34px_rgba(8,27,75,0.06)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(8,27,75,0.1)] sm:p-6"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#7B2CF5] shadow-[0_10px_24px_rgba(123,44,245,0.1)]"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6" strokeWidth={2.25} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-extrabold leading-tight text-[#081B4B] sm:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-base font-medium leading-7 text-[#081B4B]/62">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
