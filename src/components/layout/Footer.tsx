import {
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../common/Container";
import { ROUTES } from "../../constants/routes";

interface FooterLink {
  label: string;
  href: string;
}

const productLinks: FooterLink[] = [
  { label: "Stumap School", href: ROUTES.SCHOOL },
  { label: "Stumap Student", href: ROUTES.STUDENT },
  { label: "Kariyer Testi", href: ROUTES.CAREER_TEST }
];

const companyLinks: FooterLink[] = [
  { label: "Hakkımızda", href: ROUTES.ABOUT }
];

const contactLinks = [
  {
    label: "stumapofficial@gmail.com",
    href: "mailto:stumapofficial@gmail.com",
    icon: Mail
  },
  {
    label: "İzmir, Türkiye",
    href: "#",
    icon: MapPin
  }
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/stumapofficial/",
    icon: Camera
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/stumap/",
    icon: BriefcaseBusiness
  },
  {
    label: "Twitter X",
    href: "#",
    icon: MessageCircle
  }
];

const FooterTextLink = ({ href, label }: FooterLink) => {
  const className =
    "inline-flex rounded-md text-sm font-semibold leading-6 text-dark/62 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25";

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#F7F7FA] py-12 sm:py-14 lg:py-16"
      aria-labelledby="footer-title"
    >
      <Container>
        <div className="grid min-w-0 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.08fr_1.15fr_1fr] lg:gap-16">
          <div className="max-w-md">
            <Link
              to={ROUTES.HOME}
              id="footer-title"
              className="inline-flex rounded-md text-[28px] font-extrabold leading-none tracking-normal text-primary transition-opacity duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
            >
              StuMap
            </Link>

            <p className="mt-5 max-w-sm text-sm font-medium leading-7 text-dark/62">
              Öğrencilerin kariyer yolculuğunu ve kurumların rehberlik
              süreçlerini daha görünür, ölçülebilir ve yönetilebilir hale
              getiren akıllı rehberlik platformu.
            </p>

            <p className="mt-7 text-sm font-semibold leading-6 text-dark/50">
              © {currentYear} StuMap. Tüm hakları saklıdır.
            </p>
          </div>

          <div className="grid min-w-0 gap-9 sm:grid-cols-2">
            <nav aria-label="Ürün bağlantıları">
              <h3 className="text-sm font-extrabold uppercase leading-5 tracking-normal text-primary">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <FooterTextLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Şirket bağlantıları">
              <h3 className="text-sm font-extrabold uppercase leading-5 tracking-normal text-primary">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <FooterTextLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="min-w-0">
            <nav aria-label="İletişim bağlantıları">
              <h3 className="text-sm font-extrabold uppercase leading-5 tracking-normal text-primary">
                Contact
              </h3>
              <ul className="mt-4 space-y-3">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="inline-flex max-w-full items-center gap-3 rounded-md text-sm font-semibold leading-6 text-dark/62 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 text-primary"
                        strokeWidth={2.2}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 break-words">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="mt-8" aria-label="Sosyal medya bağlantıları">
              <h3 className="text-sm font-extrabold uppercase leading-5 tracking-normal text-primary">
                Social
              </h3>
              <ul className="mt-4 flex flex-wrap items-center gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={`StuMap ${label}`}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/12 bg-white text-primary shadow-social transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-primary/10 pt-6">
          <p className="text-sm font-medium leading-6 text-dark/50">
            Geleceğin yol haritasını birlikte çizelim.
          </p>
        </div>
      </Container>
    </footer>
  );
};
