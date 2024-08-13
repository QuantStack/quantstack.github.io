const Jimp = require("jimp");

async function resize(inputPath, outputPath) {
    // Reading Image
    const image = await Jimp.read(inputPath);
    // Used RESIZE_BEZIER as cb for finer images
    image
      .resize(1024, 768, Jimp.RESIZE_BEZIER, function (err) {
        if (err) throw err;
      })
      .write(outputPath);
  }
  
  resize();
  console.log("Image is processed successfully");
  