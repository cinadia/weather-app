import React from 'react'

export default function Weather({weather}) { // create a function that we can import in another file
    return (
        // className should match component name
        <div className={'weather'}>
            {weather.location}
            <br/>
            {weather.high}
        </div>
    )
}