import React, { useEffect, useState } from 'react'
import getFormatedWeatherData from '../API/WeatherAPI'
import Location from '../Components/Location'
import Searchbar from '../Components/Searchbar'
import TempratureAndStatus from '../Components/TempratureAndStatus'
import TempratureDetails from '../Components/TempratureDetails'
import TopNavbar from '../Components/TopNavbar'
import { getWeatherDataFromLocalstorage, removeExpireDataInLocalStorage, saveWeatherDataInLocalStorage } from '../Services/LocalStorage'


function WeatherPage() {

    const [location, setLocation] = useState({ id: 1248991 });
    const [units, setUnits] = useState({ units: "metric" });

    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        removeExpireDataInLocalStorage();
        const fetchWeather = async () => {
            const data = await getFormatedWeatherData({ ...location, ...units })
            console.log(data);
            setWeatherData(data);
            saveWeatherDataInLocalStorage(location.id,data);
        }
        if(localStorage.getItem(location.id) === null){
            fetchWeather();
        }else{
            let data = getWeatherDataFromLocalstorage(location.id);
            setWeatherData(data.value);
        }
    }, [location, units])

    return (
        <div>
            <TopNavbar/>
            <Searchbar setLocation={setLocation}/>
            {weatherData && (
                <>
                    <Location weatherData={weatherData}/>
                    <TempratureAndStatus weatherData={weatherData}/>
                    <TempratureDetails weatherData={weatherData}/>
                </>
            )}
        </div>
    )
}

export default WeatherPage