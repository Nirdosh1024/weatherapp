import React from "react";

//API
import { WEATHER_API_KEY, WEATHER_API_URL } from "./API";

//styles
import { GlobalStyle } from "./GlobalStyles";

//components
import Search from "./components/search/searchBar";
import CurrentWeather from "./components/current-weather";


const App = () => {
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`);
        
        const foreCastFetch = fetch(`/forecast?lat={lat}&lon={lon}&appid={API key}`)

        Promise.all([currentWeatherFetch, foreCastFetch ]).then(async(response) => {
            const WeatherResponse = await response[0].json();
            const ForeCastResponse = await response[1].json();
        })

    }
    return (
        <div>
            <GlobalStyle />
            <Search onSearchChange={handleOnSearchChange}/>
            <CurrentWeather />
        </div>
    )
}

export default App;