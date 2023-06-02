import axios from "axios";
import { useEffect, useState } from "react";
import { apiLocationUrl } from "../Constants/apiConstants";
import { Coordinates } from "./CustomInterfaces";

export const useLocalWeather = () => {
  const [location, setLocation] = useState<Coordinates>({
    lat: 0,
    lon: 0
  });

  const getUserLocation = async () => {
    try {
      const {
        data: { latitude, longitude },
      } = await axios.get(apiLocationUrl);
      setLocation({ lon: longitude, lat: latitude });
      console.log(latitude, longitude);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return [location];
};
