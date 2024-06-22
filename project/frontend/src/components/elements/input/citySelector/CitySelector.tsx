import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSelectedLocation } from '../../../../redux/offerSlice';

const CitySelector: React.FC = () => {
    const [cities, setCities] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const dispatch = useDispatch()

    const getCitiesList = () => {
        const data = { country: "united arab emirates" };

        axios.post('https://countriesnow.space/api/v0.1/countries/cities', data)
            .then(response => {
                if (Array.isArray(response.data.data)) {
                    setCities(response.data.data);
                } else {
                    throw new Error('Data is not an array');
                }
            })
            .catch(error => {
                setError(error.message);
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        getCitiesList();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const options = cities.map(city => ({ value: city, label: city }));

    const onLocationChange = (value: any) => {
        if (value.value !== undefined) {
            dispatch(setSelectedLocation(value.value))
        }
    }

    return <Select options={options} onChange={onLocationChange} />;
};

export default CitySelector;
