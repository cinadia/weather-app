import React from 'react'

export default function Weather({weather}) { // create a function that we can import in another file
    const date = weather[0];
    const weatherData = weather[1];
    const popAsPercentage = Number(weatherData['pop'])*100

    return (
        // className should match component name
        <div className={'weather'}>
            {date}
            <br/>
            {weatherData['main.temp']} &#176;C
            <br/>
            Feels like {weatherData['main.feels_like']} &#176;C
            <br/>
            {weatherData['weather.0.description']}
            <br/>
            Min: {weatherData['main.temp_min']} &#176;C
            <br/>
            Max: {weatherData['main.temp_max']} &#176;C
            <br/>
            Chance of rain: {popAsPercentage}%
            <br/>
            Wind speed: {weatherData['wind.speed']} km/h

        </div>
    )
}

