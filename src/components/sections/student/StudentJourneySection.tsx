import { Bot, CheckCircle2, Flag, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../common/Container";
import { ROUTES } from "../../../constants/routes";

const DOCTOR_SRC = "/assets/images/stumap-about-doctor.png";

const steps = [
  {
    title: "Keşfet",
    text: "Kısa testler ve oyunlaştırılmış görevlerle kendin hakkında veri topla.",
    icon: Search
  },
  {
    title: "Sohbet Et",
    text: "AI kariyer asistanına aklındaki bölüm ve meslek sorularını sor.",
    icon: Bot
  },
  {
    title: "Karşılaştır",
    text: "Sana yakın alanları, becerileri ve kariyer yollarını yan yana gör.",
    icon: CheckCircle2
  },
  {
    title: "Hedef Koy",
    text: "Kişisel kariyer haritanla bir sonraki adımını netleştir.",
    icon: Flag
  }
];

export const StudentJourneySection = () => {
  return (
    <section
      id="student-journey"
      className="bg-[#EEF1FF] py-20 sm:py-24 lg:py-28"
      aria-labelledby="student-journey-title"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(21rem,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
        <div className="flex justify-center lg:justify-start">
          <div className="flex aspect-square w-full max-w-[20rem] items-center justify-center rounded-[2rem] border border-[#D9DDFE] bg-white p-6 shadow-[0_24px_70px_rgba(6,27,78,0.11)] sm:max-w-[25rem] sm:p-8 lg:max-w-[30rem]">
            <img
              src={DOCTOR_SRC}
              alt="StuMap rehber maskotu"
              className="h-full w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="min-w-0 text-center lg:text-left">
          <h2 id="student-journey-title" className="section-title">
            Geleceğini Tahmin Etme, <span className="text-primary">Keşfet</span>
          </h2>
          <p className="body-copy-lg mx-auto mt-5 max-w-2xl lg:mx-0">
            Süreç, sıkıcı bir form değil; seni tanıyan, seçeneklerini açan ve
            hedeflerini görünür kılan kişisel bir yolculuk.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {steps.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-[#D9DDFE] bg-white p-5 text-left shadow-[0_14px_34px_rgba(6,27,78,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <h3 className="text-lg font-extrabold text-dark">{title}</h3>
                </div>
                <p className="mt-3 text-sm font-medium leading-6 text-dark/62">
                  {text}
                </p>
              </article>
            ))}
          </div>

          <Link
            to={ROUTES.CAREER_TEST}
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-extrabold text-white shadow-[0_16px_34px_rgba(255,138,0,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:bg-accentHover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:translate-y-0"
          >
            Kariyer Testine Başla
          </Link>
        </div>
      </Container>
    </section>
  );
};
