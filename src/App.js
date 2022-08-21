import React from 'react'
import './App.css';

import Weathers from './Weathers';

// mock JSON returned from API
const mockWeather = [
    {location: 'Vancouver, Canada', high: '30'},
    {location: 'Surrey, Canada', high: '34'},
    {location: 'London, England', high: '21'},
    {location: 'Paris, France', high: '29'}
]

function App() {
  return (
    <div className="App">
        <Weathers weathers={mockWeather}/>
    </div>
  );
}

export default App;

// changed here

