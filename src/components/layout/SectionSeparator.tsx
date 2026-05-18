type Color = "dark" | "blue" | "red" | "white";
type Segment = { w: number; c: Color };

const D = (w: number): Segment => ({ w, c: "dark" });
const B = (w: number): Segment => ({ w, c: "blue" });
const R = (w: number): Segment => ({ w, c: "red"  });
const W = (w: number): Segment => ({ w, c: "white" });

const VARIANTS: Record<number, Segment[]> = {
  // home: after hero | blog: after header
  1: [ D(21), B(7), D(22), B(7), D(15), B(8), D(14), B(6) ],

  // home: after "Who we work with" | careers: after header
  2: [ B(6), D(22), B(19), D(19), B(8), D(15), B(11) ],

  // home: after "How we work with you" | sponsor: after header
  3: [ D(26), B(17), D(24), B(15), D(11), B(7) ],

  // services: after header  — no accent, dense rhythm
  4: [ D(8), B(5), D(12), B(8), D(13), B(8), D(10), B(9), D(13), B(7), D(7) ],

  // (unused)  — pure blue/dark
  5: [ B(14), D(4), B(17), D(13), B(9), D(11), B(11), D(15), B(6) ],

  // home: before blog
  6: [ D(7), B(7), D(9), B(7), D(11), B(7), D(11), B(7), D(10), B(8), D(9), B(7) ],

  7: [ D(5), B(6), D(7), B(7), D(9), B(7), D(10), B(6), D(8), B(7), D(9), B(6), D(7), B(6) ],

  8: [ D(3), B(6), D(19), B(8), D(5), B(17), D(11), B(6), D(13), B(12) ],
};

const COLOR_MAP: Record<Color, string> = {
  dark:  "#1d1d1b",
  blue:  "var(--ifm-color-blue-jupyter)",
  red:   "var(--ifm-color-accent-red)",
  white: "#ffffff",
};

type Variant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function SectionSeparator({ variant = 1 }: { variant?: Variant }) {
  const segments = VARIANTS[variant];
  return (
    <div style={{ display: "flex", gap: "2px", height: "2px", alignItems: "stretch", width: "100%", backgroundColor: "white" }}>
      {segments.map(({ w, c }, i) => (
        <div
          key={i}
          style={{
            flex: w,
            backgroundColor: COLOR_MAP[c],
            clipPath: "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
          }}
        />
      ))}
    </div>
  );
}
