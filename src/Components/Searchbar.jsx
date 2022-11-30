import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { SlLocationPin } from 'react-icons/sl'
import cities from '../Data/CityIds';

function Searchbar(props) {
    const { setLocation,setUnits } = props
    const handleSearch = (e) => {
        setLocation({ id: e.target.value })
    }
    // const handleUnit = (e) =>{
    //     setUnits({units: e.target.value})
    // }
    return (
        <div className='flex flex-row justify-center my-4'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>

                <select
                    onClick={handleSearch}
                    name="country"
                    autoComplete="country-name"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 
                            px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm lg:text-lg"
                >
                    <option disabled>Select City</option>
                    {cities.map((city) => <option value={city.CityCode} key={city.CityCode} name={city.CityName} id={city.CityCode} className="text-lg">{city.CityName}</option>)}
                </select>
                {/* <select
                onClick={handleUnit}
                    name="unit"
                    className="mt-1 block w-fit rounded-md border border-gray-300 bg-white py-2 
                    px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm lg:text-lg"
                >
                    <option value="metric">°C</option>
                    <option value="imperial">°F</option>
                </select> */}
                <SlLocationPin size={25} className="text-white cursor-pointer transition ease-out hover:scale-75" />
            </div>
        </div>
    )
}

export default Searchbar