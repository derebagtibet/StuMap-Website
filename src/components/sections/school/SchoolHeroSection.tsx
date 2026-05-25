import { useState } from "react";
import { Container } from "../../common/Container";
import { ROUTES } from "../../../constants/routes";
import { SchoolButton } from "./SchoolButton";

const MASCOT_IMAGE_SRC = "/assets/images/stumap-doctor-mascot.png";

export const SchoolHeroSection = () => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <section className="overflow-hidden bg-surface-section">
      <Container className="grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.96fr)_minmax(22rem,1.04fr)] lg:gap-16 lg:py-24 xl:gap-20">
        <div className="min-w-0 max-w-2xl text-center sm:text-left">
          <p className="mb-4 text-sm font-extrabold uppercase leading-5 tracking-normal text-primary">
            StuMap School
          </p>

          <h1 className="text-[2.65rem] font-extrabold leading-[1.08] tracking-normal text-dark sm:text-5xl md:text-[3.65rem] lg:text-[4.25rem]">
            <span className="block">Okul Rehberliğini</span>
            <span className="mt-2 block text-primary">Tek Platformda Yönetin</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[35rem] text-base font-normal leading-8 text-dark/65 sm:mx-0 sm:text-lg md:text-xl">
            StuMap School, kurumların öğrenci gelişimini takip etmesini,
            raporlamasını ve rehberlik süreçlerini daha verimli yönetmesini
            sağlayan kurumsal platformdur.
          </p>

          <div className="mt-9 flex min-h-12 flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <SchoolButton to="#school-lead-title" className="sm:min-w-[12rem]">
              Kurum Panelini İncele
            </SchoolButton>
            <SchoolButton
              to={ROUTES.CAREER_TEST}
              variant="secondary"
              className="sm:min-w-[12rem]"
            >
              Kariyer Testini Gör
            </SchoolButton>
          </div>
        </div>

        <div className="flex w-full min-w-0 items-center justify-center lg:justify-end">
          <div className="relative flex aspect-square w-full max-w-[20rem] items-center justify-center rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_24px_70px_rgba(6,27,78,0.12)] sm:max-w-[25rem] sm:p-8 md:max-w-[28.5rem] lg:max-w-[32rem]">
            <span
              className="pointer-events-none absolute -inset-5 -z-10 rounded-[2.5rem] bg-primary/5"
              aria-hidden="true"
            />
            {!hasImageError ? (
              <img
                src={MASCOT_IMAGE_SRC}
                alt="StuMap okul maskotu"
                className="h-full w-full object-contain"
                loading="eager"
                decoding="async"
                onError={() => setHasImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-3xl border border-borderPurple bg-surface-purple px-8 text-center text-sm font-semibold text-primary">
                StuMap School görsel alanı
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
