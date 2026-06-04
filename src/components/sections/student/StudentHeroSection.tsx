import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Container } from "../../common/Container";
import { ROUTES } from "../../../constants/routes";

const STUDENT_GRADUATION_SRC = "/assets/images/stumap-student-graduation.png";

export const StudentHeroSection = () => {
  return (
    <section className="overflow-hidden bg-[#F7F8FC]">
      <Container className="grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1.05fr)] lg:gap-20 lg:py-24">
        <div className="min-w-0 max-w-2xl text-center sm:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-extrabold text-primary shadow-[0_10px_26px_rgba(109,74,255,0.08)]">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            StuMap Student
          </div>

          <h1 className="text-[2.75rem] font-extrabold leading-[1.06] tracking-normal text-dark sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            Kariyer Yolculuğunu
            <span className="mt-2 block text-primary">Eğlenerek Keşfet</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[36rem] text-base font-medium leading-8 text-dark/65 sm:mx-0 sm:text-lg md:text-xl md:leading-9">
            İlgi alanlarını, güçlü yönlerini ve sana uygun bölümleri eğlenceli
            görevlerle keşfet. Kafandaki soru işaretlerini kişisel kariyer
            haritana dönüştür.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Link
              to={ROUTES.CAREER_TEST}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-extrabold text-white shadow-[0_16px_34px_rgba(255,138,0,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:bg-accentHover hover:shadow-[0_22px_48px_rgba(255,138,0,0.36)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:translate-y-0"
            >
              Teste Başla
            </Link>
            <a
              href="#student-journey"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-primary bg-white px-8 py-3 text-base font-extrabold text-primary transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primaryLight focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 active:translate-y-0"
            >
              Nasıl Çalışır?
            </a>
          </div>
        </div>

        <div className="flex w-full min-w-0 items-center justify-center lg:justify-end">
          <div className="relative flex aspect-square w-full max-w-[21rem] items-center justify-center overflow-hidden rounded-[2rem] border border-[#D9DDFE] bg-[#EEF1FF] shadow-[0_26px_76px_rgba(6,27,78,0.13)] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem]">
            <img
              src={STUDENT_GRADUATION_SRC}
              alt="Mezuniyet kıyafetli StuMap öğrenci maskotları"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
