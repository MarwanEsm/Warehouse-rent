import React from 'react';
import { useNavigate } from 'react-router-dom';
import warehouse1 from '../../../assets/photos/warehouse1.jpg';
import warehouse2 from '../../../assets/photos/warehouse2.jpg';
import styles from "./Offers.module.scss"
import Button from '../../../components/elements/button/Button';

const offers = [
    { id: 1, photo: warehouse1, size: '1000 sqft', location: "Dubai", price: 5000 },
    { id: 2, photo: warehouse1, size: '2000 sqft', location: "Sharjah", price: 8000 },
    { id: 3, photo: warehouse2, size: '2000 sqft', location: "Abu Dhabi", price: 8000 },
];

const Offers = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.offers_container} style={{ display: 'grid', gridTemplateColumns: `repeat(${offers.length}, 1fr)` }}>
            {offers.map((offer) => (
                <div className={styles.offer} key={offer.id}>
                    <img src={offer.photo} alt={`Warehouse ${offer.id}`} />
                    <label>Size: {offer.size}</label>
                    <strong>Location:{offer.location}</strong>
                    <label>Price: ${offer.price}/month</label>
                    <Button onClick={() => console.log("clicked")
                    }>Contact Owner</Button>
                </div>
            ))}
        </div>
    );
};

export default Offers;
