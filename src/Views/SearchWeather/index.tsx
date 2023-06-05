import React, { useEffect, useState } from "react";
import { WeatherInterface } from "../../Custom/CustomInterfaces";
import { getCityWeatherByName } from "../../Functions";
import { Button, TextField } from "@mui/material";
import { fetchState } from "../../Constants/apiConstants";
import WeatherDescription from "../../Components/WeatherDescription";
import ErrorComponent from "../../Components/ErrorComponet";

/**
 * Returns the saved weather data from local storage.
 * @returns An array of saved weather data.
 */

const returnSavedData = () => {
  const storedItems = JSON.parse(localStorage.getItem("lastItems") || "[]");
  return storedItems;
};

/**
 * Represents the component for searching and displaying weather information for a city.
 * Allows users to search for a city by name and fetches and displays the weather data for that city.
 */

const SearchWeather = () => {
  const [fetchApiState, setFetchApiState] = useState<string>(
    fetchState.DEFAULT
  );
  //var weatherArray = localStorage.getItem("lastItem");
  const [localQueue, setLocalQueue] = useState<WeatherInterface[]>(
    returnSavedData() || []
  );
  const [searchCityData, setSearchCityData] = useState<
    WeatherInterface | undefined
  >();

  const [seeSearch, setSeeSearch] = useState<Boolean>(false);
  const [city, setCity] = useState<string>("");

  /**
   * Toggles the view between the search form and the last searched city's weather.
   */
  const onClickButton = () => {
    setSeeSearch((prev) => !prev);
  };

  /**
   * Enqueues the given weather data to the localQueue state.
   * Removes the oldest item if the queue length exceeds 2.
   * @param item - The weather data to enqueue.
   */

  const enqueue = (item: WeatherInterface) => {
    setLocalQueue((prevQueue) => {
      const newQueue = [...prevQueue, item];
      if (newQueue.length > 2) {
        newQueue.shift(); // Remove the oldest item
      }
      return newQueue;
    });
  };

  /**
   * Calls the API to fetch weather data for the given city.
   * Sets the searchCityData state with the fetched weather data.
   * @param e - The form event.
   */

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

  /**
   * Handles the change event of the city input field.
   * Updates the city state with the new value.
   * @param e - The change event.
   */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  /**
   * Handles the change event of the localQueue data.
   * Updates the localQueue data state with the new value.
   * @param localQueue - The change event.
   */

  useEffect(() => {
    localStorage.setItem("lastItems", JSON.stringify(localQueue));
  }, [localQueue]);

  return (
    <div>
      {localQueue.length > 0 && (
        <Button
          type="button"
          variant="outlined"
          className="searchButton"
          onClick={onClickButton}
        >
          {seeSearch ? " Search New City" : "Watch Last City"}
        </Button>
      )}
      {seeSearch ? (
        <div>
          <br></br>
          <WeatherDescription ambient={localQueue[0]}></WeatherDescription>
        </div>
      ) : (
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
          {fetchApiState === fetchState.ERROR && (
            <ErrorComponent errorText="Error loading the city's data, please try again"></ErrorComponent>
          )}
          {fetchApiState === fetchState.SUCCESS && (
            <div style={{ width: "100%" }}>
              <br></br>
              <WeatherDescription ambient={searchCityData}></WeatherDescription>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWeather;
