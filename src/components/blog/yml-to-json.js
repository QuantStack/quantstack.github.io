const imagesDirectory = "../../../static/img/blogposts/";
const yaml = require("js-yaml");
const fs = require("fs");
const https = require("https");
const ymlFileName = "_config.yml";
const jsonFileName = "blogpostsDetails";
let yamlFile = fs.readFileSync(ymlFileName, "utf8");
let obj = yaml.load(yamlFile);
const blogpostsDetailsYml = obj["blog"];
const NUMBER_OF_BLOGS = blogpostsDetailsYml.length;
const sizeOf = require("image-size");
const imageContainerDimensions = [305, 180];

function JSONToFile(data, filename) {
  fs.writeFileSync(`${filename}.json`, JSON.stringify(data, null, 2));
}

function defineImagesNames(data) {
  const imageUrls = [];
  const imagePaths = [];
  let fileExtension = "";
  data.map((blogpost, index) => {
    imageUrls.push(blogpost.image);

    if (blogpost.image.includes(".png")) {
      fileExtension = ".png";
    } else if (blogpost.image.includes(".jpg" || ".jpeg")) {
      fileExtension = ".jpg";
    } else if (blogpost.image.includes(".webp")) {
      fileExtension = ".webp";
    } else if (blogpost.image.includes(".gif")) {
      fileExtension = ".gif";
    } else if (blogpost.image.includes(".svg")) {
      fileExtension = ".svg";
    }
    let name = blogpost.title;
    name = name.split("!").join("");
    name = name.split(" - ").join("-");
    name = name.split(",").join("");
    name = name.split("🎉 ").join("");
    name = name.split(" 🎉").join("");
    name = name.split(" ❤️ ").join("-");
    name = name.split(": ").join("-");
    name = name.split(".").join("-");
    name = name.split("(").join("");
    name = name.split(")").join("");
    name = name.replace('à', 'a');
    name = name.substring(0, 80).split(" ").join("-") + fileExtension;
    imagePaths.push(imagesDirectory + name);
  });

  return [imageUrls, imagePaths];
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (res) => {
      const protocol = "https";
      const hostname = res.socket._host;

      if (res.statusCode === 200) {
        res
          .pipe(fs.createWriteStream(filepath))
          .on("error", reject)
          .once("close", () => resolve(filepath));
      } else if (res.statusCode === 301 && res.headers.location) {
        // Handle 301 redirect
        const newUrl = protocol + "://" + hostname + res.headers.location;
        // Close the current response and retry with the new URL
        res.resume();
        downloadImage(newUrl, filepath).then(resolve).catch(reject);
      } else {
        res.resume(); // Consume response data to free up memory
        reject(new Error(`Request failed with status code: ${res.statusCode}`));
      }
    });
    request.on("error", (err) => {
      reject(err);
    });
  });
}

function getImageDimensions(blogpost) {
  const pathPrefix = "../../../static";
  const completePath = pathPrefix + blogpost.image;
  const dimensions = sizeOf(completePath);
  return [dimensions.width, dimensions.height];
}

function changeBlogpostsDetails(
  blogpostsDetailsYml,
  paths,
  imageContainerDimensions
) {
  const data = [...blogpostsDetailsYml];

  data.map((blogpost, index) => {
    const timeIndex = NUMBER_OF_BLOGS - index; /* starting at 1*/

    blogpost.imageID = "blogpost-image-" + timeIndex;
    blogpost.image = paths[index].replace("../../../static", "");
    const [width, height] = getImageDimensions(blogpost);
    blogpost.imageNaturalWidth = width;
    blogpost.imageNaturalHeight = height;

    const imageAspectRatio = width / height;
    const containerWidth = imageContainerDimensions[0];
    const containerHeight = imageContainerDimensions[1];
  

    if (imageAspectRatio<=1.4 ) {
      blogpost.imageRenderedWidth = containerHeight * imageAspectRatio;
      blogpost.imageRenderedHeight = containerHeight;
    } else {
      blogpost.imageRenderedWidth = containerWidth;
      blogpost.imageRenderedHeight = containerWidth / imageAspectRatio;
    }

    if (timeIndex === 114) {
      blogpost.url = "/blogs/Fanny";
    }
  });
  return data;
}

function downloadLastImage(urls, paths) {
  downloadImage(urls[NUMBER_OF_BLOGS], paths[NUMBER_OF_BLOGS]);
}

/**step 1: load .yml file and convert data to an object called blogpostsDetails *********** */
/**step 2: define path of images from the name of blog posts and their chronological index */
const [urls, paths] = defineImagesNames(blogpostsDetailsYml);
console.log(paths);
/**step 3: download last image of last blogpost */
//downloadLastImage(urls, paths);
/** step 4: change the path to images in blogpostsDetails,
 * add their natural dimensions and the rendered ones********** */
const modifiedBlogpostsDetails = changeBlogpostsDetails(
  blogpostsDetailsYml,
  paths,
  imageContainerDimensions
);

/** step 5: save modified blogposts details in a .json file
 * these data are the one used for building the react blogposts cards */
JSONToFile(modifiedBlogpostsDetails, jsonFileName);
