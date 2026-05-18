const THRESHOLD = 20;
const DARK_HERO_PAGES = ["/notebooklink/"];
const LOGO_DEFAULT = "/img/quantstack/logo-website-smaller.svg";
const LOGO_WHITE_TEXT = "/img/quantstack/logo-website-white-text.svg";

function update(): void {
  const scrolled = window.scrollY > THRESHOLD;
  const { pathname } = window.location;
  const isHome = pathname === "/";
  const isDarkHero = DARK_HERO_PAGES.some((p) => pathname.startsWith(p));
  const useDarkLogo = isDarkHero && !scrolled;
  document.documentElement.toggleAttribute("data-navbar-scrolled", scrolled);
  document.documentElement.toggleAttribute(
    "data-navbar-home-top",
    isHome && !scrolled
  );
  document.documentElement.toggleAttribute("data-navbar-dark-top", useDarkLogo);
  const logoImg = document.querySelector(".navbar__logo img") as HTMLImageElement | null;
  if (logoImg) {
    logoImg.src = useDarkLogo ? LOGO_WHITE_TEXT : LOGO_DEFAULT;
  }
}

export function onRouteDidUpdate(): void {
  update();
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", update, { passive: true });
  update();
}
