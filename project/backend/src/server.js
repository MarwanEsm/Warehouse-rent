const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
import { resizeImages } from './utils/utils';

const app = express();

const port = 3001;

app.use(bodyParser.json({ limit: '10mb' }));



app.post('/resize-image', async (req, res) => {
    try {
        await resizeImages({ inputFolder, outputFolder, width, height });
        res.send('Images resized successfully');
    } catch (error) {
        console.error('Error resizing images:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
