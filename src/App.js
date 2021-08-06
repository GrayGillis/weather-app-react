import React, { useState } from 'react'
import './App.css';
import Header from './Header';

const api = {
  key: '650398dcf7dcf463b2c433c49bed5580',
  url: 'api.openweathermap.org/data/2.5/'
}

function App() {
  const [temperature, setTemperature] = useState('');
  const [city, setCity] = useState('London');
  const [country, setCountry] = useState('UK');
  const [desc, setDesc] = useState('');
  
  // this needs work
  const getWeatherInfo = async (city, country) => {
  const response = await fetch(api.url + 'weather?q=' + city + ',' + country + '&APPID=' + api.key);
  const dataResult = await response.json();
  console.log(dataResult);

  // Kelvin to Fahrenheit
  // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);

  // Kelvin to Celsius
  setTemperature(response.data.main.temp - 273.15);
  setDesc(response.dataResult.weather[0].main);

  return dataResult;
}
  
  return (
    <form className="the-form"> 
      <Header/>
      <div className="main-div">
        {new Date().toLocaleString()}<br />
        {city} Weather <br />
        {Math.round(temperature * 100) / 100} ℃ - {desc} <br />
      </div>
      <div className="app">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        <button className="btn" onClick={() => { getWeatherInfo(city, country) }}>Submit</button>
      </div> 
    </form>
  );
}

export default App;

//  axios({
//       method: "GET",
//       url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=180941f68139fba12f166dc35d9b688b`,
//     })
//       .then((response) => {
//         console.log(response.data.main.temp);
//         // Kelvin to Fahrenheit
//         // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);

//         // Kelvin to Celsius
//         setTemperature(response.data.main.temp - 273.15);
//         // console.log(response.data);
//         setDesc(response.data.weather[0].main);
//       })
//       .catch((error) => {
//         console.log(error);
//       });