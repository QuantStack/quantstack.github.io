const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');
const inputDir = path.join(__dirname, '../static', 'img', 'blogposts', 'full-size-images');
const outputDir = path.join(__dirname, '../static', 'img', 'blogposts', 'resized-images');
const containerHeight = 180;
const containerWidth = 273;
const containerAspectRatio = containerWidth / containerHeight;
console.log('container Aspect Ratio:', containerAspectRatio);

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
    const inputPath = path.join(inputDir, file);
    if (fs.existsSync(inputPath)) {
        const dimensions = sizeOf(inputPath);

        const aspectRatio = dimensions.width / dimensions.height;
        const outputPath = path.join(outputDir, file);
        let targetWidth, targetHeight
        let width;
        if (aspectRatio <= containerAspectRatio) {
            targetHeight = containerHeight
            targetWidth = Math.round(targetHeight * aspectRatio);
        } else {
            targetWidth = containerWidth*2; /* factor 2 to increase the resolution*/
            targetHeight = Math.round(targetWidth / aspectRatio);
        }

        // Check that the image fits within the container
            if (targetWidth > containerWidth * 2) {
                targetWidth = containerWidth * 2;
                targetHeight = Math.round(targetWidth / aspectRatio);
            }
            if (targetHeight > containerHeight) {
                targetHeight = containerHeight;
                targetWidth = Math.round(targetHeight * aspectRatio);
            }

        if (/\.(png|jpg)$/i.test(file)) {
            sharp(inputPath)
                .resize(targetWidth, targetHeight)
                .toFile(outputPath)
        }
    }
});