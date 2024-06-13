


const DEFAULT_IMAGE_WIDTH = "270px";
const yaml = require("js-yaml");
const fs = require("fs");
let yamlFile = fs.readFileSync("_config.yml", "utf8");
let obj = yaml.load(yamlFile);
const blogpostsDetails = obj["blog"];
const NUMBER_OF_BLOGS = blogpostsDetails.length;
const imagesToBeReduced = [1, 9, 26, 30, 44, 48, 67, 68, 75, 101, 110];
const imagesToBeSlightlyReduced = [3, 42, 53, 61, 62, 80, 104, 107];
const imagesToBeExpanded = [6, 56, 66, 112];

const containerWidth= 305;
const containerHeight=180;

blogpostsDetails.map((blogpost, index) => {
  const timeIndex = NUMBER_OF_BLOGS - index; /* starting at 1*/
  blogpost.imageID = "blogpost-image-"+timeIndex
  if (timeIndex === 114) {
    blogpost.url = "/blogs/Fanny";
    blogpost.title = "In memoriam: Fanny Loustau-Chartez";
    blogpost.image="/img/avatars/Fanny.png";
    blogpost.imageWidth = "180px";
    (blogpost.summary =
      "It is with great sadness that we announce the passing of our colleague and friend, Fanny Loustau Chartez, who served as the Chief Financial Officer of QuantStack since 2021."),
      (blogpost.date = "May 16, 2024");
    blogpost.authors = "Sylvain Corlay";
  }
  else if(timeIndex===73){
    blogpost.image= "/img/logos/EcolePolytechnique.png";
    blogpost.imageWidth = "180px";
  }
  else if (imagesToBeReduced.includes(timeIndex)) {
    blogpost.imageWidth = "180px";
  } else if (imagesToBeSlightlyReduced.includes(timeIndex)) {
    blogpost.imageWidth = "200px";
  } else if (imagesToBeExpanded.includes(timeIndex)) {
    console.log("time index:", timeIndex);
    blogpost.imageWidth = "300px";
  } else {
    blogpost.imageWidth = DEFAULT_IMAGE_WIDTH;
  }
});

const JSONToFile = (blogpostsDetails, filename) =>
  fs.writeFileSync(
    `${filename}.json`,
    JSON.stringify(blogpostsDetails, null, 2)
  );

JSONToFile(blogpostsDetails, "blogpostsDetails");
