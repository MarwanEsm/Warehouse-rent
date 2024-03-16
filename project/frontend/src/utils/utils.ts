import sharp from "sharp";
const fs = require('fs')

interface IResizeImages {
    inputFolder: string,
    outputFolder: string,
    width: number,
    height: number
}

export const resizeImages = async ({ inputFolder, outputFolder, width, height }: IResizeImages) => {
    const files = fs.readdirSync(inputFolder);
    for (const file in files) {
        if (file.endsWith('.jpg') || file.endsWith('.png')) {
            await sharp(`${inputFolder}/${files}`)
                .resize({ width, height, fit: 'cover' })
                .toFile(`${outputFolder}/${files}`)

        }
    }
}


