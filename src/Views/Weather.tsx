import React, { useEffect, useState } from "react";
import "../Css/GeneralCss.css";
import { getCityWeatherByCoords, getCityWeatherByName } from "../Functions";
import WeatherDescription from "../Components/WeatherDescription";
import WeatherDescriptionComp from "../Components/WeatherDescriptionComp";
import { Coordinates, WeatherInterface } from "../Custom/CustomInterfaces";

//import { getCityWeather } from "../functions";

interface Props {
  location: Coordinates;
}

const Weather = ({ location }: Props) => {
  const [city, setCity] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [localData, setLocalData] = useState<WeatherInterface>();
  const [searchCityData, setSearchCityData] = useState<WeatherInterface>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const callData = async () => {
    setLoading(true);
    setFlag(false);
    try {
      const weatherData = await getCityWeatherByName(city);
      setLoading(false);
      setSearchCityData(weatherData);
    } catch (err) {
      setLoading(false);
      console.log("BALIO V");
    }
  };

  const callLocationData = async (location: Coordinates) => {
    setFlag(false);
    setLoading(true);
    const { lat, lon } = location;
    if (lat !== 0 && lon !== 0) {
      try {
        const locationData = await getCityWeatherByCoords(
          location.lon,
          location.lat
        );
        setLoading(false);
        setLocalData(locationData);
      } catch (error) {
        setLoading(false);
        console.log("BALIO V");
      }
    }
  };

  useEffect(() => {
    callLocationData(location);
  }, [location]);

  return (
    <div>
      <input onChange={(e) => handleChange(e)}></input>
      {/*<button onClick={() => callData()}>sadasd</button>*/}
      <div>
        <p>{localData && localData.name}</p>
      </div>
    </div>
  );
};

export default Weather;
