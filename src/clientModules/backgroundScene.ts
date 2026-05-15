// Injects a fixed full-page background scene (planets, graph, code snippets)
// directly into document.body so it is unaffected by any Docusaurus stacking
// context. Color switches to white when a dark section centres the viewport.

// ─── SVG data ────────────────────────────────────────────────────────────────

const NODES: [number, number][] = [
  [110,  95], [360,  60], [680,  85], [990,  50], [1230, 105],
  [1385, 190], [1350, 410], [1160, 330], [1030, 190], [870,  295],
  [760,  470], [1210, 590], [1030, 740], [800,  830], [570,  775],
  [340,  845], [140,  755], [62,   510],
];

const EDGES: [number, number][] = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[4,8],[8,9],[9,10],
  [7,6],[6,11],[11,12],[12,13],[13,14],[14,15],[15,16],[16,17],
  [2,9],[10,14],[7,11],[3,8],[0,17],
];

const SNIPPETS = [
  { text: "import xarray as xr",          x: 770,  y: 765, angle: -4 },
  { text: "conda install -c conda-forge", x: 1075, y: 540, angle: -6 },
  { text: "∂L/∂θ = ∇θ L",                x: 1295, y: 435, angle:  5 },
  { text: "df.groupby('date').sum()",      x: 305,  y: 855, angle:  7 },
  { text: "kernel = rbf(X, X.T)",         x: 920,  y: 115, angle: -3 },
];

function buildSVG(): string {
  const edges = EDGES.map(([a, b]) =>
    `<line x1="${NODES[a][0]}" y1="${NODES[a][1]}" x2="${NODES[b][0]}" y2="${NODES[b][1]}" stroke="currentColor" stroke-width="1"/>`,
  ).join("");

  const nodes = NODES.map(([x, y]) =>
    `<circle cx="${x}" cy="${y}" r="4" fill="currentColor"/>`,
  ).join("");

  const snippets = SNIPPETS.map(({ text, x, y, angle }) =>
    `<text transform="translate(${x},${y}) rotate(${angle})">${text}</text>`,
  ).join("");

  return `
<svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice"
     width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <style>
    #_pbg_p { animation: pbg-p 58s ease-in-out infinite; }
    #_pbg_g { animation: pbg-g 72s ease-in-out infinite; animation-delay:-18s; }
    #_pbg_s { animation: pbg-s 44s ease-in-out infinite; animation-delay:-9s; }
    @keyframes pbg-p {
      0%,100%{transform:translate(0,0)} 33%{transform:translate(11px,-16px)} 66%{transform:translate(-8px,10px)}
    }
    @keyframes pbg-g {
      0%,100%{transform:translate(0,0)} 50%{transform:translate(-13px,8px)}
    }
    @keyframes pbg-s {
      0%,100%{transform:translate(0,0)} 40%{transform:translate(7px,-11px)} 75%{transform:translate(-5px,13px)}
    }
  </style>

  <g id="_pbg_p" opacity="0.07">
    <circle cx="-40" cy="875" r="178" fill="currentColor"/>
    <ellipse cx="-40" cy="875" rx="285" ry="46" fill="none" stroke="currentColor" stroke-width="2.5" transform="rotate(-22,-40,875)"/>
    <circle cx="1382" cy="72" r="64" fill="currentColor"/>
    <ellipse cx="1382" cy="72" rx="102" ry="21" fill="none" stroke="currentColor" stroke-width="1.8" transform="rotate(-18,1382,72)"/>
    <circle cx="428" cy="138" r="32" fill="currentColor"/>
    <ellipse cx="428" cy="138" rx="54" ry="12" fill="none" stroke="currentColor" stroke-width="1.4" transform="rotate(-28,428,138)"/>
    <circle cx="82" cy="642" r="26" fill="currentColor"/>
    <circle cx="215" cy="48" r="21" fill="currentColor"/>
    <circle cx="648" cy="36" r="11" fill="currentColor"/>
    <circle cx="1052" cy="828" r="9" fill="currentColor"/>
    <circle cx="582" cy="882" r="14" fill="currentColor"/>
  </g>

  <g id="_pbg_g" opacity="0.11">${edges}${nodes}</g>

  <g id="_pbg_s" opacity="0.09" fill="currentColor"
     font-family="'Roboto Mono','Courier New',monospace" font-size="13">${snippets}</g>
</svg>`;
}

// ─── DOM element ─────────────────────────────────────────────────────────────

let bgEl: HTMLDivElement | null = null;

function mount(): void {
  if (bgEl) return;
  bgEl = document.createElement("div");
  bgEl.setAttribute("aria-hidden", "true");
  bgEl.setAttribute("id", "page-background-scene");
  Object.assign(bgEl.style, {
    position: "fixed",
    inset: "0",
    zIndex: "1",
    pointerEvents: "none",
    userSelect: "none",
    overflow: "hidden",
    color: "#1d1d1b",
    transition: "color 0.7s ease",
  });
  bgEl.innerHTML = buildSVG();
  document.body.appendChild(bgEl);
}

function setDark(dark: boolean): void {
  if (!bgEl) return;
  bgEl.style.color = dark ? "#ffffff" : "#1d1d1b";
  const p = bgEl.querySelector<SVGGElement>("#_pbg_p");
  const g = bgEl.querySelector<SVGGElement>("#_pbg_g");
  const s = bgEl.querySelector<SVGGElement>("#_pbg_s");
  if (p) p.setAttribute("opacity", dark ? "0.10" : "0.07");
  if (g) g.setAttribute("opacity", dark ? "0.15" : "0.11");
  if (s) s.setAttribute("opacity", dark ? "0.13" : "0.09");
}

// ─── IntersectionObserver ─────────────────────────────────────────────────────

const intersecting = new Set<Element>();
let currentObserver: IntersectionObserver | null = null;

function observe(): IntersectionObserver {
  const darkSections = Array.from(
    document.querySelectorAll("[data-section-bg='dark']"),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) intersecting.add(e.target);
        else intersecting.delete(e.target);
      }
      setDark(intersecting.size > 0);
    },
    { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
  );
  darkSections.forEach((el) => observer.observe(el));
  return observer;
}

export function onRouteDidUpdate(): void {
  mount();
  intersecting.clear();
  currentObserver?.disconnect();
  currentObserver = observe();
}
