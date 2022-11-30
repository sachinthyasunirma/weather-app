const formatCurrentWeather = (data) => {
    console.log(data);
    const {
        name,
        weather,
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            humidity
        },
        dt,
        sys: { country, sunrise, sunset },
        wind: { speed },
        timezone
    } = data;

    return {
        name, weather, temp,
        feels_like,
        temp_min,
        temp_max,
        humidity, dt,country, sunrise, sunset ,speed,timezone
    }
}

export default formatCurrentWeather;