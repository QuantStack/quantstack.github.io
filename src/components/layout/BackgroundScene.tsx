import clsx from "clsx";
import styles from "./BackgroundScene.module.css";

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
  { text: "import xarray as xr",           x: 770,  y: 765, angle: -4  },
  { text: "conda install -c conda-forge",  x: 1075, y: 540, angle: -6  },
  { text: "∂L/∂θ = ∇θ L",                 x: 1295, y: 435, angle:  5  },
  { text: "df.groupby('date').sum()",       x: 305,  y: 855, angle:  7  },
  { text: "kernel = rbf(X, X.T)",          x: 920,  y: 115, angle: -3  },
];

type Props = { variant?: "light" | "dark" };

export default function BackgroundScene({ variant = "light" }: Props) {
  const c = variant === "dark" ? "#ffffff" : "#1d1d1b";
  const planetOp  = variant === "dark" ? 0.10 : 0.07;
  const graphOp   = variant === "dark" ? 0.15 : 0.11;
  const snippetOp = variant === "dark" ? 0.13 : 0.09;

  return (
    <div className={clsx(styles.container, styles[variant])} aria-hidden="true">
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Planets ── */}
        <g className={styles.planets} opacity={planetOp}>
          {/* large — bottom-left, partially cropped */}
          <circle cx={-40} cy={875} r={178} fill={c} />
          <ellipse cx={-40} cy={875} rx={285} ry={46}
            fill="none" stroke={c} strokeWidth={2.5}
            transform="rotate(-22,-40,875)" />

          {/* medium — top-right with ring */}
          <circle cx={1382} cy={72} r={64} fill={c} />
          <ellipse cx={1382} cy={72} rx={102} ry={21}
            fill="none" stroke={c} strokeWidth={1.8}
            transform="rotate(-18,1382,72)" />

          {/* small ringed — upper-left area */}
          <circle cx={428} cy={138} r={32} fill={c} />
          <ellipse cx={428} cy={138} rx={54} ry={12}
            fill="none" stroke={c} strokeWidth={1.4}
            transform="rotate(-28,428,138)" />

          {/* small — left edge, mid-height */}
          <circle cx={82} cy={642} r={26} fill={c} />

          {/* tiny moon — top area */}
          <circle cx={215} cy={48} r={21} fill={c} />

          {/* tiny — upper-center */}
          <circle cx={648} cy={36} r={11} fill={c} />

          {/* tiny — lower-right */}
          <circle cx={1052} cy={828} r={9} fill={c} />

          {/* tiny — lower area, partially cropped */}
          <circle cx={582} cy={882} r={14} fill={c} />
        </g>

        {/* ── Computational graph ── */}
        <g className={styles.graph} opacity={graphOp}>
          {EDGES.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a][0]} y1={NODES[a][1]}
              x2={NODES[b][0]} y2={NODES[b][1]}
              stroke={c} strokeWidth={1}
            />
          ))}
          {NODES.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={4} fill={c} />
          ))}
        </g>

        {/* ── Floating code snippets ── */}
        <g
          className={styles.snippets}
          opacity={snippetOp}
          fill={c}
          fontFamily="'Roboto Mono', 'Courier New', monospace"
          fontSize={13}
        >
          {SNIPPETS.map(({ text, x, y, angle }, i) => (
            <text key={i} transform={`translate(${x}, ${y}) rotate(${angle})`}>
              {text}
            </text>
          ))}
        </g>
      </svg>
    </div>
  );
}
