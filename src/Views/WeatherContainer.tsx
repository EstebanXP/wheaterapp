import React, { useEffect, useState } from "react";
import "../Css/GeneralCss.css";
import { getCityWeatherByCoords, getCityWeatherByName } from "../Functions";
import WeatherDescription from "../Components/WeatherDescription";
import { Coordinates, WeatherInterface } from "../Custom/CustomInterfaces";
import { useLocalWeather } from "../Custom/useLocalWeather";
import { fetchState } from "../Constants/apiConstants";
import { TextField, Button } from "@mui/material";
import SearchWeatherForm from "../Components/SearchWeatherForm";

//import { getCityWeather } from "../functions";

const Weather = () => {
  const [location, fetchApiState] = useLocalWeather();
  const [city, setCity] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);

  const [localData, setLocalData] = useState<WeatherInterface | undefined>();
  const [searchCityData, setSearchCityData] = useState<
    WeatherInterface | undefined
  >();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const callData = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const weatherData = await getCityWeatherByName(city);
      setSearchCityData(weatherData);
    } catch (err) {
      console.log("BALIO V");
    }
  };

  const callLocationData = async (location: Coordinates) => {
    setFlag(false);
    const { lat, lon } = location;
    if (lat !== 0 && lon !== 0) {
      try {
        const locationData = await getCityWeatherByCoords(
          location.lon,
          location.lat
        );
        setLocalData(locationData);
      } catch (error) {
        console.log("BALIO V");
      }
    }
  };

  useEffect(() => {
    callLocationData(location);
    console.log(localData);
  }, [location]);

  return (
    <div>
      {fetchApiState === fetchState.LOADING && <p>LOADING LOCAL DATA</p>}
      {fetchApiState === fetchState.ERROR && <p>ERROR LOADING LOCAL DATA</p>}
      {fetchApiState === fetchState.SUCCESS && (
        <WeatherDescription ambient={localData}></WeatherDescription>
      )}

      <form className="searchCityForm" onSubmit={(e) => callData(e)}>
        <TextField
          id="searchField"
          label="City Name"
          variant="standard"
          onChange={handleChange}
          InputLabelProps={{ className: "input__label" }}
          InputProps={{ className: "input__style" }}
        />

        <Button type="submit" variant="outlined" className="searchButton">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Weather;
