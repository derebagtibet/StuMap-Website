import {
  PointerEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import { Building2, GraduationCap, Landmark, School } from "lucide-react";
import { clsx } from "clsx";
import { Container } from "../../common/Container";
import { SchoolSectionHeader } from "./SchoolSectionHeader";

interface Institution {
  name: string;
  tone: string;
}

const institutions: Institution[] = [
  { name: "Anka Koleji", tone: "bg-primary/10 text-primary" },
  { name: "Bilim Kampüsü", tone: "bg-accent/10 text-accent" },
  { name: "Nova Okulları", tone: "bg-sky-100 text-sky-600" },
  { name: "Ufuk Anadolu", tone: "bg-emerald-100 text-emerald-700" },
  { name: "Pusula Akademi", tone: "bg-violet-100 text-violet-700" },
  { name: "Mavi Çizgi", tone: "bg-blue-100 text-blue-700" },
  { name: "Atlas Lisesi", tone: "bg-amber-100 text-amber-700" },
  { name: "Kuzey Eğitim", tone: "bg-fuchsia-100 text-fuchsia-700" }
];

const brandIcons = [School, GraduationCap, Building2, Landmark];

export const TrustedInstitutionsSection = () => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const singleLoopWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const frameRef = useRef(0);
  const dragRef = useRef({
    isDragging: false,
    pointerId: 0,
    startX: 0,
    startOffset: 0
  });
  const activeIndexRef = useRef(0);
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const repeatedInstitutions = useMemo(
    () => [...institutions, ...institutions, ...institutions],
    []
  );

  const normalizeOffset = useCallback((value: number) => {
    const singleLoopWidth = singleLoopWidthRef.current;

    if (!singleLoopWidth) {
      return value;
    }

    if (value <= singleLoopWidth * -2) {
      return value + singleLoopWidth;
    }

    if (value >= 0) {
      return value - singleLoopWidth;
    }

    return value;
  }, []);

  const measureLoop = useCallback(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    singleLoopWidthRef.current = track.scrollWidth / 3;
    offsetRef.current = -singleLoopWidthRef.current;
    setOffset(offsetRef.current);
  }, []);

  const updateActiveInstitution = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return;
    }

    const viewportRect = viewport.getBoundingClientRect();
    const centerX = viewportRect.left + viewportRect.width / 2;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-institution-index]"));

    let closestIndex = activeIndexRef.current;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(centerX - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = Number(card.dataset.institutionIndex ?? 0);
      }
    });

    if (activeIndexRef.current !== closestIndex) {
      activeIndexRef.current = closestIndex;
      setActiveIndex(closestIndex);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    measureLoop();
    updateActiveInstitution();

    const handleResize = () => {
      measureLoop();
      updateActiveInstitution();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [measureLoop, updateActiveInstitution]);

  useEffect(() => {
    const tick = () => {
      if (!prefersReducedMotion && !isPaused && !dragRef.current.isDragging) {
        offsetRef.current = normalizeOffset(offsetRef.current - 0.55);
        setOffset(offsetRef.current);
      }

      frameRef.current += 1;

      if (frameRef.current % 8 === 0) {
        updateActiveInstitution();
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isPaused, normalizeOffset, prefersReducedMotion, updateActiveInstitution]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      isDragging: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startOffset: offsetRef.current
    };
    setIsPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;

    if (!drag.isDragging) {
      return;
    }

    offsetRef.current = normalizeOffset(drag.startOffset + event.clientX - drag.startX);
    setOffset(offsetRef.current);
    updateActiveInstitution();
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current.isDragging) {
      event.currentTarget.releasePointerCapture(dragRef.current.pointerId);
    }

    dragRef.current.isDragging = false;
    setIsPaused(false);
    updateActiveInstitution();
  };

  return (
    <section
      className="section-blue overflow-hidden py-20 sm:py-24 lg:py-28"
      aria-labelledby="trusted-institutions-title"
    >
      <Container>
        <SchoolSectionHeader
          titleId="trusted-institutions-title"
          eyebrow="Referans kurumlar"
          title="Güvenen Kurumlar"
          description="Rehberlik süreçlerini dijitalleştiren kurumlar StuMap ile öğrenci gelişimini daha görünür ve yönetilebilir hale getiriyor."
          className="[&_h2]:text-primary"
        />

        <div
          ref={viewportRef}
          className="relative mx-auto mt-12 max-w-6xl cursor-grab overflow-hidden py-8 active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            if (!dragRef.current.isDragging) {
              setIsPaused(false);
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          role="region"
          aria-label="Güvenen kurumlar karuseli"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-surface-blue to-transparent sm:w-24"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-surface-blue to-transparent sm:w-24"
            aria-hidden="true"
          />

          <div
            ref={trackRef}
            className="flex touch-pan-y select-none items-center gap-5 will-change-transform sm:gap-7 lg:gap-9"
            style={{
              transform: `translate3d(${offset}px, 0, 0)`
            }}
          >
            {repeatedInstitutions.map((institution, index) => {
              const realIndex = index % institutions.length;
              const isActive = activeIndex === realIndex;
              const Icon = brandIcons[realIndex % brandIcons.length];

              return (
                <div
                  key={`${institution.name}-${index}`}
                  data-institution-index={realIndex}
                  className={clsx(
                    "flex w-32 shrink-0 flex-col items-center text-center transition duration-300 ease-out sm:w-40 lg:w-44",
                    isActive ? "scale-110 opacity-100" : "scale-90 opacity-70"
                  )}
                >
                  <div
                    className={clsx(
                      "flex aspect-square w-24 items-center justify-center rounded-full border-[6px] border-primary/45 bg-white shadow-[0_18px_44px_rgba(109,74,255,0.14)] ring-4 ring-white transition duration-300 sm:w-28 lg:w-32",
                      isActive && "border-primary shadow-[0_26px_62px_rgba(109,74,255,0.24)]"
                    )}
                    aria-hidden="true"
                  >
                    <div
                      className={clsx(
                        "flex h-[68%] w-[68%] items-center justify-center rounded-full",
                        institution.tone
                      )}
                    >
                      <Icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2.2} />
                    </div>
                  </div>
                  <p
                    className={clsx(
                      "mt-5 min-h-[2.75rem] text-sm font-extrabold leading-snug text-dark transition duration-300 sm:text-base",
                      isActive && "text-primary"
                    )}
                  >
                    {institution.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
