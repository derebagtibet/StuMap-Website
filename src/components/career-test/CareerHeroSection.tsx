import { useState } from "react";
import { Container } from "../common/Container";

const CAREER_TEST_HERO_IMAGE_SRC = "/assets/images/public/assets/mascot-group.png";

export const CareerHeroSection = () => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <section
      className="overflow-hidden bg-surface-section"
      aria-labelledby="career-test-hero-title"
    >
      <Container className="grid min-h-[calc(100vh-72px)] items-center gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20 lg:gap-16 lg:py-16">
        <div className="min-w-0 max-w-2xl text-left">
          <h1
            id="career-test-hero-title"
            className="text-5xl font-extrabold leading-[1.06] tracking-normal text-dark sm:text-6xl lg:text-[76px]"
          >
            <span className="block">
              Geleceğini <span className="text-accent">Keşfetmeye</span>
            </span>
            <span className="mt-2 block">Hazır Mısın?</span>
          </h1>

          <p className="mt-7 max-w-xl text-base font-medium leading-8 text-dark/65 sm:text-lg md:text-xl md:leading-9">
            İlgi alanlarını, yeteneklerini ve güçlü yönlerini analiz eden
            kariyer testiyle sana en uygun bölüm ve meslek seçeneklerini
            keşfet.
          </p>

          <div className="mt-9 flex min-h-12 flex-wrap items-center gap-4" aria-hidden="true" />
        </div>

        <div className="flex min-w-0 w-full items-center justify-center md:justify-end">
          <div className="relative flex aspect-[4/3] w-full max-w-[360px] items-center justify-center overflow-hidden sm:max-w-[460px] md:max-w-[540px] lg:max-w-[620px]">
            {!hasImageError ? (
              <img
                src={CAREER_TEST_HERO_IMAGE_SRC}
                alt="Farklı meslekleri temsil eden Stumap karakterleri"
                className="absolute -bottom-[7%] left-1/2 h-auto w-[132%] max-w-none -translate-x-1/2 object-contain"
                loading="eager"
                onError={() => setHasImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-3xl border border-borderPurple bg-surface-purple px-8 text-center text-sm font-semibold text-primary shadow-nav">
                Kariyer testi karakter görseli için hazır alan
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
