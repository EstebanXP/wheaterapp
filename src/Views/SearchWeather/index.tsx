import React, { useEffect, useState } from "react";
import { WeatherInterface } from "../../Custom/CustomInterfaces";
import { getCityWeatherByName } from "../../Functions";
import { Button, TextField } from "@mui/material";
import { fetchState } from "../../Constants/apiConstants";
import WeatherDescription from "../../Components/WeatherDescription";

const returnSavedData = () => {
  const storedItems = JSON.parse(localStorage.getItem("lastItems") || "[]");
  return storedItems;
  /*if(storedItems?.length !== 0){
    return JSON.parse(storedItems)
  }*/
};

const SearchWeather = () => {
  const [fetchApiState, setFetchApiState] = useState<string>(
    fetchState.DEFAULT
  );
  //var weatherArray = localStorage.getItem("lastItem");
  const [localQueue, setLocalQueue] = useState<WeatherInterface[]>(
    returnSavedData() || []
  );
  const [auxLocalQueue, setAuxLocalQueue] = useState<Array<any>>([]);
  const [searchCityData, setSearchCityData] = useState<
    WeatherInterface | undefined
  >();
  const [city, setCity] = useState<string>("");

  const enqueue = (item: WeatherInterface) => {
    setLocalQueue((prevQueue) => {
      const newQueue = [...prevQueue, item];
      if (newQueue.length > 2) {
        newQueue.shift(); // Remove the oldest item
      }
      return newQueue;
    });
  };

  const callData = async (e: React.FormEvent) => {
    e.preventDefault();
    setFetchApiState(fetchState.LOADING);
    try {
      const weatherData = await getCityWeatherByName(city);
      if (weatherData) {
        setSearchCityData(weatherData);
        enqueue(weatherData);
        setFetchApiState(fetchState.SUCCESS);
      } else {
        setFetchApiState(fetchState.ERROR);
      }
    } catch (error: any) {
      setFetchApiState(fetchState.ERROR);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("lastItems", JSON.stringify(localQueue));
  }, [localQueue]);

  return (
    <div>
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

      {fetchApiState === fetchState.LOADING && <p>LOADING LOCAL DATA</p>}
      {fetchApiState === fetchState.ERROR && searchCityData === undefined && (
        <p>ERROR LOADING SEARCHED CITY DATA</p>
      )}
      {fetchApiState === fetchState.SUCCESS && (
        <WeatherDescription ambient={searchCityData}></WeatherDescription>
      )}
    </div>
  );
};

export default SearchWeather;
//  {/* <WeatherDescription ambient={searchCityData}></WeatherDescription>*/}
