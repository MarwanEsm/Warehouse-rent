import warehouse1 from '../../../assets/photos/warehouse1.jpg';
import warehouse2 from '../../../assets/photos/warehouse2.jpg';
import styles from "./OfferCard.module.scss"
import Button from '../../../components/elements/button/Button';
import { IOffersProps } from '../../../types/components';
import { useSelector } from 'react-redux';
import { IState } from '../../../types/reduxState';
import LoadingAnimation from '../../animation/LoadingAnimation';

const OFFERS = [
    { id: 1, photo: warehouse1, size: '1000 sqft', location: "Dubai", price: 5000 },
    { id: 2, photo: warehouse1, size: '2000 sqft', location: "Sharjah", price: 8000 },
    { id: 3, photo: warehouse2, size: '2000 sqft', location: "Abu Dhabi", price: 8000 },
    { id: 4, photo: warehouse1, size: '1000 sqft', location: "Dubai", price: 5000 },
    { id: 5, photo: warehouse1, size: '2000 sqft', location: "Sharjah", price: 8000 },
    { id: 6, photo: warehouse2, size: '2000 sqft', location: "Abu Dhabi", price: 8000 },
];

const OfferCard = (props: IOffersProps) => {

    const selectedCity = useSelector((state: IState) => state?.offer.selectedLocation)

    const offers = selectedCity ? OFFERS.filter(offer => offer.location === selectedCity) : OFFERS

    const renderOffers = () => {
        if (offers.length > 0) {
            const rows = [];
            for (let i = 0; i < offers.length; i += 4) {
                const rowOffers = offers.slice(i, i + 4);
                rows.push(
                    <div className={styles.offers_row} key={i}>
                        {rowOffers.map((offer) => (
                            <div className={styles.offer} key={offer.id}>
                                <img src={offer.photo} alt={`Warehouse ${offer.id}`} />
                                <label>Size: {offer.size}</label>
                                <strong>Location: {offer.location}</strong>
                                <label>Price: ${offer.price}/month</label>
                                <Button onClick={() => console.log("clicked")}>Contact Owner</Button>
                            </div>
                        ))}
                    </div>
                );
            }
            return <div className={styles.offers_container_wrapper}>{rows}</div>;
        } else {
            return (
                <div className={styles.noProperty}>
                    <label>No properties are currently available in the selected city
                        <strong>&nbsp;check back later</strong> or explore options in <strong>other nearby cities</strong>
                    </label>
                    <LoadingAnimation />
                </div>
            );
        }
    }



    return <>
        {renderOffers()}
    </>

};

export default OfferCard;
