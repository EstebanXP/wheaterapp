import axios from "axios";
import { apiKey, apiWeatherUrl } from "../Constants/apiConstants";

export async function getCityWeatherByName(cityName) {
  try {
    const response = await axios.get(apiWeatherUrl, {
      params: { q: cityName, appid: apiKey },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function getCityWeatherByCoords(long, lat) {
  try {
    const response = await axios.get(apiWeatherUrl, {
      params: { lat: lat, lon: long, appid: apiKey },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
