import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Header';

// web api for city weather
const url = '';

const getWeatherInfo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function App() {
  
   // will be for displaying the city's weather
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
  
  }, [])
  
  return (
    <form className="the-form"> 
      <Header/>
      <div className="App">
        <input type="text" name="weather" id="weather-text"      placeholder="Enter the city name"/>
        <button className="btn" onClick={getWeatherInfo}>Submit</button>
      </div> 
    </form>
  );
}

export default App;