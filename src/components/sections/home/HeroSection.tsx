import { useState } from "react";
import { Container } from "../../common/Container";

const MASCOT_IMAGE_SRC = "/assets/images/stumap-doctor-mascot.png";

export const HeroSection = () => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <section className="overflow-hidden bg-surface-section">
      <Container className="grid items-center gap-10 py-12 sm:gap-12 sm:py-16 md:py-20 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-16">
        <div className="min-w-0 max-w-2xl text-left">
          <h1 className="display-title">
            <span className="block">Geleceğin Yol Haritasını</span>
            <span className="mt-2 block text-primary">Birlikte Çizelim</span>
          </h1>

          <p className="mt-7 max-w-xl text-base font-normal leading-8 text-dark/65 sm:text-lg md:text-xl">
            Öğrencilerin ilgi alanlarını keşfetmesine, hedeflerini
            netleştirmesine ve geleceğe daha güvenle hazırlanmasına yardımcı
            olan akıllı rehberlik platformu.
          </p>

          <div
            className="mt-9 flex min-h-12 flex-wrap items-center gap-4"
            aria-hidden="true"
          />
        </div>

        <div className="flex min-w-0 w-full items-center justify-center lg:justify-end">
          <div className="relative flex aspect-[4/5] w-full max-w-[320px] items-center justify-center sm:max-w-[400px] md:max-w-[460px] lg:max-w-[560px]">
            {!hasImageError ? (
              <img
                src={MASCOT_IMAGE_SRC}
                alt="StuMap meslek maskotu"
                className="h-full w-full object-contain"
                loading="eager"
                onError={() => setHasImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-3xl border border-borderPurple bg-surface-purple px-8 text-center text-sm font-semibold text-primary shadow-nav">
                StuMap maskot görseli için hazır alan
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
