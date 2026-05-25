import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";
import { ROUTES } from "../../constants/routes";

const NAV_ITEMS = [
  { label: "Stumap School", href: ROUTES.SCHOOL },
  { label: "Stumap Student", href: ROUTES.STUDENT },
  { label: "Kariyer Testi", href: ROUTES.CAREER_TEST },
  { label: "Hakkımızda", href: ROUTES.ABOUT }
] as const;

const STUMAP_LOGO_SRC = "/assets/images/stumap-logo.svg";

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  clsx(
    "relative rounded-md px-2.5 py-2 text-sm font-medium leading-none text-dark/75 transition-colors duration-200 after:absolute after:left-2.5 after:right-2.5 after:-bottom-2 after:h-0.5 after:origin-center after:rounded-full after:bg-primary after:transition-transform after:duration-200 hover:text-primary hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25",
    isActive
      ? "font-bold text-primary after:scale-x-100"
      : "after:scale-x-0"
  );

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 h-[72px] border-b border-borderPurple bg-white/95 shadow-nav backdrop-blur">
      <nav
        className="mx-auto grid h-full w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6 lg:px-12"
        aria-label="Ana navigasyon"
      >
        <Link
          to={ROUTES.HOME}
          className="inline-flex items-center gap-2 justify-self-start rounded-md text-[26px] font-extrabold tracking-normal text-primary transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25"
          onClick={closeMenu}
        >
          <img
            src={STUMAP_LOGO_SRC}
            alt=""
            className="h-8 w-8 shrink-0 object-contain"
            aria-hidden="true"
          />
          StuMap
        </Link>

        <div className="hidden items-center justify-center gap-6 md:flex lg:gap-7">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} to={item.href} className={navLinkClasses}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-borderPurple text-dark transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 md:hidden"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute left-0 right-0 top-[72px] border-b border-borderPurple bg-white px-4 py-4 shadow-nav sm:px-6 md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    clsx(
                      "rounded-lg px-3 py-3 text-sm font-medium text-dark/80 transition-colors duration-200 hover:bg-light hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25",
                      isActive && "bg-light font-bold text-primary"
                    )
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
