
import { useEffect } from 'react';
import Select from 'react-select';
import axios from "axios"

const CitySelector = () => {

    const getCitiesList = () => {
        const data = {
            country: "united arab emirates"
        };

        axios.post('https://countriesnow.space/api/v0.1/countries/cities', data)
            .then(response => {
                return response.data.map((city: string, index: number) => console.log(city)
                )
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        getCitiesList()
    }, [])

    return <Select />
}


export default CitySelector