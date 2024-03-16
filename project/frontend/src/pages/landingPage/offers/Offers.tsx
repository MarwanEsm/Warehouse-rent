import React, { useEffect } from 'react'
import warehouse2 from '../../../assets/inputPhotos/warehouse2.jpg'
import { resizeImages } from '../../../utils/utils';
import './Offers.css'


//TODO: to be replaced with the one coming from the backend
const offers = [
    { id: 1, photo: warehouse2, size: '1000 sqft', price: 5000 },
    { id: 2, photo: warehouse2, size: '2000 sqft', price: 8000 },
    { id: 2, photo: warehouse2, size: '2000 sqft', price: 8000 },
];



// interface Offer {
//     id: number;
//     photo: string;
//     size: string;
//     price: number;
// }

// interface OffersProps {
//     offers: Offer[]
// }


const Offers = () =>
    <div className='offers_container' style={{ display: 'grid', gridTemplateColumns: `repeat(${offers.length}, 1fr)` }}>
        {offers.map((offer) => (
            <div className="offer" key={offer.id}>
                <img src={offer.photo} alt={`Warehouse ${offer.id}`} />
                <label>Size: {offer.size}</label>
                <label>Price: ${offer.price}/month</label>
                <button onClick={() => window.location.href = '/login'}>Contact Owner</button>
            </div>
        ))}
    </div>




export default Offers