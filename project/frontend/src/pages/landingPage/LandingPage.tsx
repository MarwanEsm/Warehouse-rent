import React from 'react';
import Headline from '../../components/elements/headline/Headline';
import Offers from './offers/Offers';
import './LandingPage.css'



// Landing page component
const LandingPage = () => {
    return (
        <div className="landing-page">
            <Headline size={1} character='.'>Discover Your Dream Space</Headline>
            <Offers />
        </div>
    );
}

export default LandingPage