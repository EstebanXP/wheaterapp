import React, { useEffect } from "react";
import { WeatherInterface, data } from "../Custom/CustomInterfaces";
import { kelvinToCelsius, secondsToDate } from "../Functions";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ShowSunData from "./ShowSunData";
import ShowMainWeatherData from "./ShowMainWeatherData.tsx";

interface Props {
  ambient?: WeatherInterface;
}

const WeatherDescription = ({ ambient }: Props) => {
  useEffect(() => {
    console.log(ambient, "COMP");
  }, [ambient]);

  //https://openweathermap.org/img/wn/10d@2x.png kelvinToCelsius ``

  return (
    <div>
      <ShowMainWeatherData
        name={ambient?.name}
        country={ambient?.sys.country}
        actualCelsiusTemperature={kelvinToCelsius(ambient?.main.temp)}
        feelsLike={kelvinToCelsius(ambient?.main.feels_like)}
        minCelsiusTemperature={kelvinToCelsius(ambient?.main.temp_min)}
        maxCelsiusTemperature={kelvinToCelsius(ambient?.main.temp_max)}
        weatherDescription= {ambient?.weather[0]?.description}
        imageUrl={`https://openweathermap.org/img/wn/${ambient?.weather[0]?.icon}@2x.png`}
      >
        <img
          src={`https://openweathermap.org/img/wn/${ambient?.weather[0]?.icon}@2x.png`}
        ></img>
      </ShowMainWeatherData>

      <ShowSunData
        description="Sunrise"
        noon="AM"
        time={secondsToDate(ambient?.sys.sunrise)}
      >
        <ArrowUpwardIcon />
      </ShowSunData>

      <ShowSunData
        description="Sunset"
        noon="PM"
        time={secondsToDate(ambient?.sys.sunset)}
      >
        <ArrowDownwardIcon />
      </ShowSunData>
    </div>
  );
};

export default WeatherDescription;
