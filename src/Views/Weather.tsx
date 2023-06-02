import React, { useEffect, useState } from "react";
import "../Css/GeneralCss.css";
import { getCityWeatherByCoords, getCityWeatherByName } from "../Functions";
import WeatherDescription from "../Components/WeatherDescription";
import WeatherDescriptionComp from "../Components/WeatherDescriptionComp";
import { Coordinates } from "../Custom/CustomInterfaces";

//import { getCityWeather } from "../functions";

interface Props {
  location: Coordinates;
}

const Weather = ({ location }: Props) => {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<any>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const callData = async () => {
    const weatherData = await getCityWeatherByName(city);
    setData(weatherData);
  };

  const callLocationData = async (location: Coordinates) => {
    const { lat, lon } = location;
    if (lat !== 0 && lon !== 0) {
      try {
        const locationData = await getCityWeatherByCoords(
          location.lon,
          location.lat
        );
        setData(locationData);
      } catch (error) {
        console.log("BALIO V");
      }
    }
  };

  useEffect(() => {
    callLocationData(location);
  }, [location]);

  return (
    <div>
      <h1>Welcome to ultime weather app!</h1>
      <input onChange={(e) => handleChange(e)}></input>
      <button onClick={() => callData()}>sadasd</button>
      <div>
        <p>{data && data?.name}</p>
      </div>
    </div>
  );
};

export default Weather;
