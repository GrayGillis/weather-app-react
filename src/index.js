import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import './index.css';
import Header from "./Header";

const api = {
  key: '650398dcf7dcf463b2c433c49bed5580',
  url: 'https://api.openweathermap.org/data/2.5/'
}

const ReactWeatherApp = () => {
  const [temperatureFah, setTemperatureFah] = useState('');
  const [temperatureCel, setTemperatureCel] = useState('');
  const [city, setCity] = useState('London');
  const [country, setCountry] = useState('UK');
  const [description, setDescription] = useState('');
  
  const getWeatherInfo = (city, country) => {
    axios({
      method: "GET",
      url: `${api.url}weather?q=${city},${country}&APPID=${api.key}`,
    })
      .then((res) => {
        console.log(res.data.main.temp);
        setTemperatureFah((res.data.main.temp - 273.15) * 1.8 + 32);
        setTemperatureCel(res.data.main.temp - 273.15);
        setDescription(res.data.weather[0].main);
      })
      .catch((error) => {
        alert("The destination you entered is not found in the system, please enter a new destination");
      });
  }

  return (
    <>
      <div className="header-div">
        <Header />
      </div>
      <br />
      <div className="main-div">
        <div className="date-weather">
          The current date and time here is: {new Date().toLocaleString()}
          <br />
          The current weather temperature and description for {city}, {country} is:
          <br />
          {Math.round(temperatureCel * 100) / 100} ℃ <br />
          {Math.round(temperatureFah * 100) / 100} ℉ <br />
          {description}
        </div>
        <br />
        
        <table className="finalResult">
          <tr>
            <td>City</td>
            <td>Country</td>
          </tr>
          <tr>
            <td><input type="text" value={city} onChange={(e) => setCity(e.target.value)} /></td>
            <td><input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /></td>
          </tr>
        </table>

        {/* <label>City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <label>Country</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} /> */}
        <button className="btn" onClick={() => { getWeatherInfo(city, country) }}> Submit </button>
      </div>
    </>
  );
};

render(<ReactWeatherApp />, document.querySelector("#root"));