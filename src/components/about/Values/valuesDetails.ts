import OpennessMD from "@site/src/components/about/Values/openness.md";
import ScienceMD from "@site/src/components/about/Values/science.md";
import IntegrityMD from "@site/src/components/about/Values/integrity.md";
import OptimismMD from "@site/src/components/about/Values/optimism.md";
import OpennessPicture from "@site/static/img/values/openness.svg";
import SciencePicture from "@site/static/img/values/science.svg";
import OptimismPicture from "@site/static/img/values/optimism.svg";
import IntegrityPicture from "@site/static/img/values/integrity.svg";

export const valuesDetails = [
  {
    name: "Science",
    alt: "Icon representing the science value, displaying an atom",
    DescriptionMD: ScienceMD,
    pictureComponent: SciencePicture,
  },
  {
    name: "Openness",
    alt: "Icon representing the openness value, four people connected together.",
    DescriptionMD: OpennessMD,
    pictureComponent: OpennessPicture,
  },
  {
    name: "Integrity",
    alt: "Icon representing the integrity value, with an heart inside a hand",
    DescriptionMD: IntegrityMD,
    pictureComponent: IntegrityPicture,
  },
  {
    name: "Optimism",
    alt: "Icon representing the optimism value, with a smiling face ",
    DescriptionMD: OptimismMD,
    pictureComponent: OptimismPicture,
  },
];
