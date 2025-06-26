const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');
const fullSizeDir = path.join(__dirname, '../static', 'img', 'blogposts', 'full-size-images');
const reducedSizeDir = path.join(__dirname, '../static', 'img', 'blogposts', 'resized-images');
const containerHeight = 180;
const containerWidth = 273;

if (!fs.existsSync(reducedSizeDir)) {
    fs.mkdirSync(reducedSizeDir, { recursive: true });
}

function calculateImageSize(fullSizePath) {
    if (fs.existsSync(fullSizePath)) {
        const width = sizeOf(fullSizePath).width;
        const height = sizeOf(fullSizePath).height;
        let targetWidth, targetHeight;
        if (width * containerHeight > containerWidth * height) {
            targetWidth = containerWidth * 2;
            targetHeight = Math.round(targetWidth / width * height);
            if (targetHeight > containerHeight) {
                targetHeight = containerHeight;
                targetWidth = Math.round(targetHeight * width / height);
            }
        }
        else {
            targetHeight = containerHeight;
            targetWidth = Math.round(targetHeight * width / height);
        }
        return [targetWidth, targetHeight];
    }
}

fs.readdirSync(fullSizeDir).forEach((file) => {
    const fullSizePath = path.join(fullSizeDir, file);
    const reducedSizePath = path.join(reducedSizeDir, file);
    const [targetWidth, targetHeight] = calculateImageSize(fullSizePath);
    if (/\.(png|jpg)$/i.test(file)) {
        sharp(fullSizePath)
            .resize(targetWidth, targetHeight)
            .toFile(reducedSizePath)
    }
})