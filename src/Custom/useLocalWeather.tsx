import axios from "axios";
import { useEffect, useState } from "react";
import { apiLocationUrl, fetchState } from "../Constants/apiConstants";
import { Coordinates } from "./CustomInterfaces";

export const useLocalWeather = () => {
  const [fetchApiState, setFetchApiState] = useState<string>(fetchState.DEFAULT)
  const [location, setLocation] = useState<Coordinates>({
    lat: 0,
    lon: 0
  });

  const getUserLocation = async () => {
    try {
      setFetchApiState(fetchState.LOADING)
      const {
        data: { latitude, longitude },
      } = await axios.get(apiLocationUrl);
      setFetchApiState(fetchState.SUCCESS);
      setLocation({ lon: longitude, lat: latitude });
    } catch (error) {
      setFetchApiState(fetchState.ERROR);
      console.error(error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return [location,fetchApiState] as const;
};
