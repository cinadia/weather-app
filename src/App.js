import React from 'react'
import './App.css';

import Weathers from './Weathers';
//import City from './City';

const WEATHER_API_URL = 'http://localhost:3001/weather'
//const CITY_API_URL = 'http://localhost:3001/city'

async function fetchWeather(updateCb) {
    const res = await fetch(WEATHER_API_URL);
    const json = await res.json();

    updateCb(json); // sets weatherList to json to update it

    console.log({json});
}

/*
async function fetchCity(updateCb) {
    const res = await fetch(CITY_API_URL);
    const json = await res.json();

    updateCb(json); // sets cityList to json to update it

    console.log({json});
}

 */


function App() {

    // second variable is a function through which we can pass an argument that is the new value of our state
    const [weatherList, updateWeather] = React.useState([]) // initialized to empty list
    //const [cityList, updateCity] = React.useState([])

    // a hook for fetching weather
    React.useEffect(() => {
        fetchWeather(updateWeather); //updateWeather is a call-back to update the weather data
        // updateWeather is created as a constant above
        // then is passed to fetchWeather(updateCb) as a call back

    }, [])
    console.log(weatherList);

    /*
    // a hook for fetching city data
    React.useEffect(() => {
        fetchCity(updateCity);

    }, [])
    console.log(cityList);

     */

    return (
    <div className="App">
        {/*<City city={cityList}/>*/}
        <Weathers weathers={weatherList}/>
    </div>
  );
}

export default App;
