// import React, { useState } from 'react'
// import axios from "axios";
// import './App.css';
// import Header from './Header';

// const api = {
//   key: '650398dcf7dcf463b2c433c49bed5580',
//   url: 'http://api.openweathermap.org/data/2.5/'
// }

// function App() {
//   const [temperatureFah, setTemperatureFah] = useState('');
//   const [temperatureCel, setTemperatureCel] = useState('');
//   const [city, setCity] = useState('London');
//   const [country, setCountry] = useState('UK');
//   const [description, setDescription] = useState('');
  
//   // this needs work
//   const getWeatherInfo = (city, country) => {
//     console.log('hi');
//      axios({
//       method: "GET",
//       url: `${api.url}weather?q=${city},${country}&APPID=${api.key}`,
//     })
//       .then((res) => {
//         console.log(res.data.main.temp);
//         // Kelvin to Fahrenheit
//         setTemperatureFah((res.data.main.temp - 273.15) * 1.8 + 32);

//         // Kelvin to Celsius
//         setTemperatureCel(res.data.main.temp - 273.15);

//         console.log(res.data);
//         setDescription(res.data.weather[0].main);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
  
//   return (
//     <form className="the-form"> 
//       <Header/>
//       <div className="main-div">
//         {new Date().toLocaleString()}<br />
//         {city} Weather <br />
//         {Math.round(temperatureCel * 100) / 100} ℃ {desc} <br />
//         {Math.round(temperatureFah * 100) / 100} ℉ {desc} <br />
//       </div>
//       <div className="app">
//         <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
//         <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
//         <button className="btn" onClick={() => { 
//           getWeatherInfo(city, country); }}>Submit</button>
//       </div> 
//     </form>
//   );
// }

// export default App;