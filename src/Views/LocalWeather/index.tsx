import { useEffect, useState } from "react";
import { useLocalWeather } from "../../Custom/useLocalWeather";
import { fetchState } from "../../Constants/apiConstants";
import WeatherDescription from "../../Components/WeatherDescription";
import { WeatherInterface, Coordinates } from "../../Custom/CustomInterfaces";
import { getCityWeatherByCoords } from "../../Functions";
import ErrorComponent from "../../Components/ErrorComponet";

const LocalWeather = () => {
  const [location, fetchApiState] = useLocalWeather();

  const [localData, setLocalData] = useState<WeatherInterface | undefined>();

  const callLocationData = async (location: Coordinates) => {
    const { lat, lon } = location;
    if (lat !== 0 && lon !== 0) {
      try {
        const locationData = await getCityWeatherByCoords(
          location.lon,
          location.lat
        );
        setLocalData(locationData);
      } catch (error) {
        setLocalData(undefined);
        console.log("BALIO V");
      }
    }
  };

  useEffect(() => {
    callLocationData(location);
  }, [location]);

  return (
    <div>
      {fetchApiState === fetchState.LOADING && <p>LOADING LOCAL DATA</p>}
      {fetchApiState === fetchState.ERROR && (
        <ErrorComponent errorText="Hello, we are having issues loading your local data, please try again! "></ErrorComponent>
      )}
      {fetchApiState === fetchState.SUCCESS && localData && (
        <WeatherDescription ambient={localData}></WeatherDescription>
      )}
    </div>
  );
};

export default LocalWeather;
