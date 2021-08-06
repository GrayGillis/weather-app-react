import React, { useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import './index.css';
import Header from "./Header";

const api = {
  key: '650398dcf7dcf463b2c433c49bed5580',
  url: 'http://api.openweathermap.org/data/2.5/'
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
        console.log(error);
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
          {new Date().toLocaleString()}
          <br />
          {city} Weather
          <br />
          {Math.round(temperatureCel * 100) / 100} ℃ <br />
          {Math.round(temperatureFah * 100) / 100} ℉ <br />
          {description}
        </div>
        <br />
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        <button className="btn" onClick={() => { getWeatherInfo(city, country) }}> Submit </button>
      </div>
    </>
  );
};

render(<ReactWeatherApp />, document.querySelector("#root"));