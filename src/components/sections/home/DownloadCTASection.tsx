import { Apple, Play } from "lucide-react";
import { Container } from "../../common/Container";

interface DownloadLink {
  label: string;
  storeName: string;
  href: string;
  ariaLabel: string;
  icon: typeof Apple;
}

const downloadLinks: DownloadLink[] = [
  {
    label: "Download on the",
    storeName: "App Store",
    href: "#",
    ariaLabel: "Stumap uygulamasını App Store'dan indir",
    icon: Apple
  },
  {
    label: "GET IT ON",
    storeName: "Google Play",
    href: "#",
    ariaLabel: "Stumap uygulamasını Google Play'den indir",
    icon: Play
  }
];

export const DownloadCTASection = () => {
  return (
    <section className="page-section section-surface" aria-labelledby="download-cta-title">
      <Container>
        <div className="relative isolate min-w-0 overflow-hidden rounded-card bg-cta-purple px-5 py-10 text-center shadow-cta sm:rounded-3xl sm:px-10 sm:py-16 lg:rounded-banner lg:px-16 lg:py-20">
          <div className="absolute inset-x-8 top-0 -z-10 h-28 rounded-full bg-white/15 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-20 left-1/2 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />

          <div className="mx-auto max-w-3xl">
            <h2
              id="download-cta-title"
              className="section-title text-white"
            >
              Stumap mobil uygulamasını hemen indirin
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-8 text-white/85 sm:text-lg">
              Kariyer yolculuğunuzu her an yanınızda taşıyın ve hedeflerinize daha kolay ulaşın.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {downloadLinks.map(({ label, storeName, href, ariaLabel, icon: Icon }) => (
                <a
                  key={storeName}
                  href={href}
                  aria-label={ariaLabel}
                  className="store-button"
                >
                  <Icon className="h-8 w-8 shrink-0 text-dark" strokeWidth={2.1} aria-hidden="true" />
                  <span className="flex flex-col leading-none">
                    <span className="text-[11px] font-bold uppercase tracking-normal text-dark/55">
                      {label}
                    </span>
                    <span className="mt-1 text-xl font-extrabold tracking-normal text-dark">
                      {storeName}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
