import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../common/Container";
import { ROUTES } from "../../../constants/routes";

const MASCOT_IMAGE_SRC = "/assets/images/stumap-about-doctor.png";

export const AboutHeroSection = () => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <section className="overflow-hidden bg-[#F7F8FC]">
      <Container className="grid min-h-[calc(100svh-72px)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1.05fr)] lg:gap-20 lg:py-24">
        <div className="min-w-0 max-w-2xl text-center sm:text-left">
          <h1 className="text-[2.9rem] font-extrabold leading-[1.05] tracking-normal text-[#081B4B] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
            Hikayemiz
          </h1>

          <p className="mx-auto mt-7 max-w-[38rem] text-base font-medium leading-8 text-[#081B4B]/68 sm:mx-0 sm:text-lg md:text-xl md:leading-9">
            Stumap, kariyer planlamayı bir stres kaynağı olmaktan çıkarıp, her
            öğrencinin kendi potansiyelini keşfettiği eğlenceli bir maceraya
            dönüştürmek için doğdu.
          </p>

          <div className="mt-9 flex justify-center sm:justify-start">
            <Link
              to={ROUTES.CAREER_TEST}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-[#F59E0B] px-8 py-3 text-center text-base font-extrabold text-white shadow-[0_16px_34px_rgba(245,158,11,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:bg-[#E69008] hover:shadow-[0_22px_48px_rgba(245,158,11,0.36)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F59E0B]/30 active:translate-y-0"
            >
              Maceraya Katıl
            </Link>
          </div>
        </div>

        <div className="flex w-full min-w-0 items-center justify-center lg:justify-end">
          <div className="flex aspect-square w-full max-w-[20rem] items-center justify-center rounded-3xl border border-[#D9DDFE] bg-[#EEF1FF] p-6 shadow-[0_24px_70px_rgba(8,27,75,0.12)] sm:max-w-[25rem] sm:p-8 md:max-w-[29rem] lg:max-w-[32rem]">
            {!hasImageError ? (
              <img
                src={MASCOT_IMAGE_SRC}
                alt="StuMap doktor maskotu"
                className="h-full w-full object-contain"
                loading="eager"
                decoding="async"
                onError={() => setHasImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-3xl border border-[#D9DDFE] bg-white px-8 text-center text-sm font-semibold text-[#7B2CF5]">
                StuMap maskot görseli
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
