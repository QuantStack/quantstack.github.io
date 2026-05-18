type Segment = { w: number; dark: boolean };

const VARIANTS: Record<number, Segment[]> = {
  1: [
    { w: 21, dark: true  }, { w:  7, dark: false }, { w: 22, dark: true  },
    { w:  7, dark: false }, { w: 15, dark: true  }, { w:  8, dark: false },
    { w: 14, dark: true  }, { w:  6, dark: false },
  ],
  2: [
    { w:  6, dark: false }, { w: 22, dark: true  }, { w: 19, dark: false },
    { w: 19, dark: true  }, { w:  8, dark: false }, { w: 15, dark: true  },
    { w: 11, dark: false },
  ],
  3: [
    { w: 26, dark: true  }, { w: 17, dark: false }, { w: 24, dark: true  },
    { w: 15, dark: false }, { w: 11, dark: true  }, { w:  7, dark: false },
  ],
  4: [
    { w:  8, dark: true  }, { w:  5, dark: false }, { w: 12, dark: true  },
    { w:  8, dark: false }, { w: 13, dark: true  }, { w:  8, dark: false },
    { w: 10, dark: true  }, { w:  9, dark: false }, { w: 13, dark: true  },
    { w:  7, dark: false }, { w:  7, dark: true  },
  ],
  5: [
    { w: 14, dark: false }, { w:  4, dark: true  }, { w: 17, dark: false },
    { w: 13, dark: true  }, { w:  9, dark: false }, { w: 11, dark: true  },
    { w: 11, dark: false }, { w: 15, dark: true  }, { w:  6, dark: false },
  ],
  6: [
    { w:  7, dark: true  }, { w:  7, dark: false }, { w:  9, dark: true  },
    { w:  7, dark: false }, { w: 11, dark: true  }, { w:  7, dark: false },
    { w: 11, dark: true  }, { w:  7, dark: false }, { w: 10, dark: true  },
    { w:  8, dark: false }, { w:  9, dark: true  }, { w:  7, dark: false },
  ],
  7: [
    { w:  5, dark: true  }, { w:  6, dark: false }, { w:  7, dark: true  },
    { w:  7, dark: false }, { w:  9, dark: true  }, { w:  7, dark: false },
    { w: 10, dark: true  }, { w:  6, dark: false }, { w:  8, dark: true  },
    { w:  7, dark: false }, { w:  9, dark: true  }, { w:  6, dark: false },
    { w:  7, dark: true  }, { w:  6, dark: false },
  ],
  8: [
    { w:  3, dark: true  }, { w:  6, dark: false }, { w: 19, dark: true  },
    { w:  8, dark: false }, { w:  5, dark: true  }, { w: 17, dark: false },
    { w: 11, dark: true  }, { w:  6, dark: false }, { w: 13, dark: true  },
    { w: 12, dark: false },
  ],
};

type Variant = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export default function SectionSeparator({ variant = 1 }: { variant?: Variant }) {
  const segments = VARIANTS[variant];
  return (
    <div style={{ display: "flex", gap: "4px", height: "4px", alignItems: "stretch", width: "100%", backgroundColor: "white" }}>
      {segments.map(({ w, dark }, i) => (
        <div
          key={i}
          style={{
            flex: w,
            backgroundColor: dark ? "#1d1d1b" : "var(--ifm-color-blue-jupyter)",
            clipPath: "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
          }}
        />
      ))}
    </div>
  );
}
