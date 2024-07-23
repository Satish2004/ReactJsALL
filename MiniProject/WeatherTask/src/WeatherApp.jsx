import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 26.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humadity: "haze",
  });
  let UpdateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherContainer">
      <h2>Weather Checking App</h2>
      <SearchBox UpdateInfo={UpdateInfo}></SearchBox>
      <InfoBox info={weatherInfo}></InfoBox>
    </div>
  );
};

export default WeatherApp;
