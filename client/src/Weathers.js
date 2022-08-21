import React from 'react'
import Weather from "./Weather";

// a React component
export default function Weathers({weathers}) { // create a function that we can import in another file
    return ( // returns a React element describing what appears on the screen
        <div className={'weathers'}>
            Weather

            {
                weathers.map(
                    weather => <Weather weather={weather} /> // fat arrow function
                )
            }

        </div>
    )
}
