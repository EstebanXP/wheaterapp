import axios from "axios";
import { apiKey, apiWeatherUrl } from "../Constants/apiConstants";

export async function getCityWeatherByName(cityName) {
  try {
    const response = await axios.get(apiWeatherUrl, {
      params: { q: cityName, appid: apiKey },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    return undefined;
  }
}

export async function getCityWeatherByCoords(long, lat) {
  try {
    const response = await axios.get(apiWeatherUrl, {
      params: { lat: lat, lon: long, appid: apiKey },
    });
    return response.data;
  } catch (error) {
    console.log(error)
    return undefined;
  }
}

export function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}


export function secondsToDate(seconds) {
  const milliseconds = seconds * 1000;
  const date = new Date(milliseconds);
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  return time;
}