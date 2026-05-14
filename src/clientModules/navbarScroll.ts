const THRESHOLD = 20;

function update(): void {
  const scrolled = window.scrollY > THRESHOLD;
  const isHome = window.location.pathname === "/";
  document.documentElement.toggleAttribute("data-navbar-scrolled", scrolled);
  document.documentElement.toggleAttribute(
    "data-navbar-home-top",
    isHome && !scrolled
  );
}

export function onRouteDidUpdate(): void {
  update();
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", update, { passive: true });
  update();
}
