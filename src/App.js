import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './Header';

const api = {
  key: '650398dcf7dcf463b2c433c49bed5580',
  url: 'api.openweathermap.org/data/2.5/'
}

const getWeatherInfo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

function App() {
  
  const [cityWeather, setCityWeather] = useState([]);

  useEffect(() => {
  
  }, [])
  
  return (
    <form className="the-form"> 
      <Header/>
      <div className="App">
        
        <input type="text" name="weather" id="weather-text"/>
        <button className="btn" onClick={getWeatherInfo}>Submit</button>
      </div> 
    </form>
  );
}

export default App;