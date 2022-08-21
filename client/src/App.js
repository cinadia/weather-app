import React from 'react'
import './App.css';

import Weathers from './Weathers';

const WEATHER_API_URL = 'http://localhost:3001/weather'

// // mock JSON returned from API
// const mockWeather = [
//     {location: 'Vancouver, Canada', high: '30'},
//     {location: 'Surrey, Canada', high: '34'},
//     {location: 'London, England', high: '21'},
//     {location: 'Paris, France', high: '29'}
// ]

async function fetchWeather(updateCb) {
    // TODO: data being fetched is not going through fetch.js, it is not filtered
    const res = await fetch(WEATHER_API_URL);
    const json = await res.json();

    updateCb(json); // sets weatherList to json to update it

    console.log({json});
}

function App() {

    // second variable is a function through which we can pass an argument that is the new value of our state
    const [weatherList, updateWeather] = React.useState([]) // initialized to empty list

    // a hook
    React.useEffect(() => {
        fetchWeather(updateWeather); //updateWeather is a call-back to update the weather data
        // updateWeather is created as a constant above
        // then is passed to fetchWeather(updateCb) as a call back

    }, [])
    console.log(weatherList);
  return (
    <div className="App">
        <Weathers weathers={weatherList}/>
    </div>
  );
}

export default App;
