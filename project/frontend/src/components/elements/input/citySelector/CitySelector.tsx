import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

const CitySelector: React.FC = () => {
    const [cities, setCities] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

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

    return <Select options={options} />;
};

export default CitySelector;
