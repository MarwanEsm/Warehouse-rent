const sharp = require('sharp');


export const resizeImages = async ({ inputFolder, outputFolder, width, height }) => {
    const files = fs.readdirSync(inputFolder);
    for (const file of files) {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            await sharp(`${inputFolder}/${file}`)
                .resize({ width, height, fit: 'cover' })
                .toFile(`${outputFolder}/${file}`);
        }
    }
};