import React, { useState } from "react";

//API
import { WEATHER_API_KEY, WEATHER_API_URL } from "./API";

//styles
import { GlobalStyle } from "./GlobalStyles";

//components
import Search from "./components/search/searchBar";
import CurrentWeather from "./components/current-weather";
import Forecast from "./components/forecast";


const App = () => {
    const [ currentWeather, setCurrentWeather ] = useState(null);
    const [ forecast, setForecast ] = useState(null);
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch ]).then(async (response) => {
            const WeatherResponse = await response[0].json();
            const ForeCastResponse = await response[1].json();
            setCurrentWeather({city: searchData.label, ...WeatherResponse});
            setForecast({city: searchData.label, ...ForeCastResponse});
        })
        .catch((err) => console.log(err));
    }  
    console.log(currentWeather);
    console.log(forecast);
    return (
        <div>
            <GlobalStyle />
            <Search onSearchChange={handleOnSearchChange}/>
            { currentWeather && <CurrentWeather data={currentWeather} />}
            { forecast && <Forecast data={forecast}/>}
        </div>
    )
}

export default App;