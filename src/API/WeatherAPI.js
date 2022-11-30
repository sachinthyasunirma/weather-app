import axios from 'axios';
import formatCurrentWeather from '../Services/Weather';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = "83c9678e70a74d8268266476cb2e35f9";

const getWeatherDetails = (searchParams) => {
    const url = new URL(BASE_URL + "/weather");
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })

    return fetch(url).then((res) => res.json())
}

const getFormatedWeatherData = async (searchParams) => {
    const weatherData = await getWeatherDetails(searchParams).then(formatCurrentWeather)
    return weatherData;
}

export default getFormatedWeatherData;