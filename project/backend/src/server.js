const express = require('express');
const bodyParser = require('body-parser');
const sharp = require('sharp');
const cors = require('cors');
const fs = require('fs'); // Import the fs module
const path = require('path'); // Import the path module
const app = express();
const port = 3001;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());

app.post('/resize-image', async (req, res) => {
    try {
        const { inputFolder, outputFolder, width, height } = req.body;
        const inputFolderPath = path.join(__dirname, inputFolder);
        const outputFolderPath = path.join(__dirname, outputFolder);

        // Check if input/output folders exist
        if (!fs.existsSync(inputFolderPath) || !fs.existsSync(outputFolderPath)) {
            throw new Error('Input/output folder does not exist');
        }

        const files = fs.readdirSync(inputFolderPath);
        for (const file of files) {
            if (file.endsWith('.jpg') || file.endsWith('.png')) {
                await sharp(path.join(inputFolderPath, file))
                    .resize({ width, height, fit: 'cover' })
                    .toFile(path.join(outputFolderPath, file));
            }
        }
        res.send('Images resized successfully');
    } catch (error) {
        console.error('Error resizing images:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
