import React, { useEffect } from 'react';
import axios from 'axios';
import Headline from '../../components/elements/headline/Headline';
import Offers from './offers/Offers';
import styles from "./LandingPage.module.scss"

const LandingPage = () => {
    useEffect(() => {
        const resizeImagesOnServer = async () => {
            try {
                await axios.post('http://localhost:3001/resize-image', {
                    inputFolder: '../../frontend/src/assets/inputPhotos',
                    outputFolder: '../../frontend/src/assets/photos',
                    width: 500,
                    height: 500
                });
                console.log('Images resized successfully');
            } catch (error) {
                console.error('Error resizing images:', error);
            }
        };

        resizeImagesOnServer();
    }, []);

    return (
        <div className={styles.landingPage}>
            <Headline size={1} character='.'>Discover Your Dream Space</Headline>
            <Offers repeatCard={4} />
        </div>
    );
};

export default LandingPage;
