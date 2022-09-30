const API = "b3294c780a0db97d828ac3111b59a37e";

const makeIconUrl = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormatedWeatherData = async (city, units = "metric", lang = "fr") => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${units}&lang=${lang}`;

    const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

    const {
        weather, 
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        wind : {speed},
        sys : {country},
        name,
    } = data;

    const {description, icon} = weather[0];

    return {
        description, iconUrl : makeIconUrl(icon), temp, feels_like, temp_min, temp_max, pressure, humidity, speed, country, name
    };
};

export {getFormatedWeatherData}