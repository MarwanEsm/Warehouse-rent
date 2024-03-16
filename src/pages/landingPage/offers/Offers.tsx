import React from 'react'
import warehouse1 from '../../../assets/photos/Warehouse1jpg.jpg'
import warehouse2 from '../../../assets/photos/warehouse2.jpg'
import './Offers.css'

//TODO: to be replaced with the one coming from the backend
const offers = [
    { id: 1, photo: warehouse1, size: '1000 sqft', price: 5000 },
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
    <div className='offers_container'>
        {offers.map((offer) => (
            <div className="offer" key={offer.id}>
                <img src={offer.photo} alt={`Warehouse ${offer.id}`} />
                <p>Size: {offer.size}</p>
                <p>Price: ${offer.price}/month</p>
                <button onClick={() => window.location.href = '/login'}>Contact Owner</button>
            </div>
        ))}
    </div>



export default Offers