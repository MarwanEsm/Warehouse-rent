const express = require('express');
const bodyParser = require('body-parser');
const sharp = require('sharp');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

const mongoUri = 'your-mongo-uri-here';

const connectToMongoDB = async () => {
    try {
        const client = await MongoClient.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

const startServer = async () => {
    try {
        const client = await connectToMongoDB();

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        process.on('SIGINT', async () => {
            await client.close();
            console.log('MongoDB connection closed');
            process.exit(0);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());

app.post('/resize-image', async (req, res) => {
    try {
        const { inputFolder, outputFolder, width, height } = req.body;
        const inputFolderPath = path.join(__dirname, inputFolder);
        const outputFolderPath = path.join(__dirname, outputFolder);

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
