import OpennessPicture from "@site/static/img/values/openness.svg";
import SciencePicture from "@site/static/img/values/science.svg";
import OptimismPicture from "@site/static/img/values/optimism.svg";
import IntegrityPicture from "@site/static/img/values/integrity.svg";
import React from "react";

export const valuesDetails = [
  {
    name: "Science",
    alt: "Icon representing science, displaying an atom",
    DescriptionMD: () => React.createElement("p", null, "We come from research. Most of us have PhDs. We approach every problem rigorously — whether it's a SAT solver for package resolution or a CRDT algorithm for collaborative CAD. Good science makes good software."),
    pictureComponent: SciencePicture,
  },
  {
    name: "Openness",
    alt: "Icon representing openness, four people connected together.",
    DescriptionMD: () => React.createElement("p", null, "We build in the open, not because it's fashionable, but because it's right. Open-source removes the barriers that keep good tools from the people who need them most. Our work belongs to the community."),
    pictureComponent: OpennessPicture,
  },
  {
    name: "Integrity",
    alt: "Icon representing integrity, with an heart inside a hand",
    DescriptionMD: () => React.createElement("p", null, "We say what we mean in code reviews, in client conversations, and in our roadmaps. We don't oversell. We don't hide complexity. If we don't know, we say so. Trust is built slowly and lost quickly."),
    pictureComponent: IntegrityPicture,
  },
  {
    name: "Optimism",
    alt: "Icon representing optimism, with a smiling face ",
    DescriptionMD: () => React.createElement("p", null, "Running Python in a browser with no server — on 2 servers for 400,000 students — sounded impossible until it wasn't. We take on the hard problems because we believe they're worth solving. The best open-source tools are still ahead of us."),
    pictureComponent: OptimismPicture,
  },
];
