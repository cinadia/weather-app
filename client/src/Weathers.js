import React from 'react'
import Weather from "./Weather";

// a React component
export default function Weathers({weathers}) { // create a function that we can import in another file
    console.log('UNMODIFIED WEATHERS HERE--------------------')
    console.log(weathers);

    console.log('OBJECT ENTRIES---------------')
    console.log(Object.entries(weathers));


    console.log('ARRAY.FROM HERE--------------------')
    // for some reason, this is empty
    console.log(Array.from(Object.entries(weathers)));

    return ( // returns a React element describing what appears on the screen
        <div className={'weathers'}>
            Five Day Forecast

            {
                Object.entries(weathers).map(weather => <Weather weather={weather} />)
            }


        </div>
    )
}

/*
Example response from Objects.entries(weathers)
[
    [
        "2022-08-22 00:00:00",
        {
            "dt": 1661126400,
            "main.temp": 24.32,
            "main.feels_like": 24.56,
            "main.temp_min": 22.46,
            "main.temp_max": 24.32,
            "main.pressure": 1016,
            "main.sea_level": 1016,
            "main.grnd_level": 1012,
            "main.humidity": 67,
            "main.temp_kf": 1.86,
            "weather.0.id": 803,
            "weather.0.main": "Clouds",
            "weather.0.description": "broken clouds",
            "weather.0.icon": "04d",
            "clouds.all": 76,
            "wind.speed": 1.97,
            "wind.deg": 235,
            "wind.gust": 1.43,
            "visibility": 10000,
            "pop": 0,
            "sys.pod": "d",
            "dt_txt": "2022-08-22 00:00:00"
        }
    ]
]
 */
