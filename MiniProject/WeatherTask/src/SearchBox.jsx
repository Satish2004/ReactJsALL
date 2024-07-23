import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const SearchBox = ({ UpdateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1031e82180981b48e6b9fba105594774";
  let getWeatherInfo = async () => {
    try {
      let responseAPI = await fetch(
        `${API_URL}?q =${city}&appid=${API_KEY}&units = metric`
      );
      let responseAPIJson = await responseAPI.json();
      // console.log(responseAPIJson);
      let result = {
        city: city,
        temp: responseAPIJson.main.temp,
        tempMin: responseAPIJson.main.temp_min,
        tempMax: responseAPIJson.main.temp_max,
        humidity: responseAPIJson.main.humidity,
        feelsLike: responseAPIJson.main.feels_like,
        weather: responseAPIJson.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleOnChange = (e) => {
    setCity(e.target.value);
  };
  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setCity("");
      // console.log(city);
      let info = await getWeatherInfo();
      UpdateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="SearchBox">
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleOnChange}
          />
          <br /> <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
          {error && (
            <p style={{ color: "red" }}>
              Sorry This city doesn't exist in the API
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBox;
