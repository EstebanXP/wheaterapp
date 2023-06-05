import axios from "axios";
import { apiKey, apiWeatherUrl } from "../Constants/apiConstants";

/**
 * Fetches weather data for a city by its name.
 * @param {string} cityName - The name of the city.
 * @returns {Promise} A promise that resolves to the weather data response or undefined if an error occurs.
 */

export async function getCityWeatherByName(cityName) {
  try {
    const response = await axios.get(apiWeatherUrl, {
      params: { q: cityName, appid: apiKey },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

/**
 * Fetches weather data for a city by its coordinates.
 * @param {number} long - The longitude of the city.
 * @param {number} lat - The latitude of the city.
 * @returns {Promise} A promise that resolves to the weather data response or undefined if an error occurs.
 */

export async function getCityWeatherByCoords(long, lat) {
  try {
    const response = await axios.get(apiWeatherUrl, {
      params: { lat: lat, lon: long, appid: apiKey },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

/**
 * Converts temperature in Kelvin to Celsius.
 * @param {number} kelvin - Temperature in Kelvin.
 * @returns {number} Temperature in Celsius.
 */

export function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

export function secondsToDate(seconds) {
  const milliseconds = seconds * 1000;
  const date = new Date(milliseconds);
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return time;
}

/**
 * Converts speed in meters per second to kilometers per hour.
 * @param {number} metersPerSec - Speed in meters per second.
 * @returns {number} Speed in kilometers per hour.
 */

export function metersPerSecondToKilometersPerHour(metersPerSec) {
  return Math.floor(metersPerSec * 3.6);
}
