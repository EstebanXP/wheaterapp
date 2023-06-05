import { useEffect } from "react";
import { WeatherInterface } from "../Custom/CustomInterfaces";
import {
  kelvinToCelsius,
  metersPerSecondToKilometersPerHour,
  secondsToDate,
} from "../Functions";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ShowSunData from "./ShowSunData";
import ShowMainWeatherData from "./ShowMainWeatherData";
import CardContainerChildren from "./CardContainerChildren";
import WavesIcon from "@mui/icons-material/Waves";
import ShowGeneralData from "./ShowGeneralData";
import SpeedIcon from "@mui/icons-material/Speed";
import WindPowerIcon from "@mui/icons-material/WindPower";
import WaterIcon from "@mui/icons-material/Water";

interface Props {
  ambient?: WeatherInterface;
}

const WeatherDescription = ({ ambient }: Props) => {
  useEffect(() => {
    console.log(ambient);
  }, [ambient]);

  if (ambient === undefined) {
    return null; // Return null to avoid rendering the component
  }

  return (
    <div>
      <section className="MainDataContainer">
        <ShowMainWeatherData
          coords = {ambient.coord}
          name={ambient?.name}
          country={ambient?.sys?.country}
          actualCelsiusTemperature={kelvinToCelsius(ambient?.main?.temp)}
          feelsLike={kelvinToCelsius(ambient?.main?.feels_like)}
          minCelsiusTemperature={kelvinToCelsius(ambient?.main?.temp_min)}
          maxCelsiusTemperature={kelvinToCelsius(ambient?.main?.temp_max)}
          weatherDescription={ambient?.weather?.[0]?.description}
          imageUrl={`https://openweathermap.org/img/wn/${ambient?.weather?.[0]?.icon}@2x.png`}
        >
          <img
            src={`https://openweathermap.org/img/wn/${ambient?.weather?.[0]?.icon}@2x.png`}
            alt={`${ambient?.weather?.[0]?.main}`}
          ></img>
        </ShowMainWeatherData>
      </section>
      <br></br>
      <section className="CardsContainer">
        <section className="Row">
          <section className="Column">
            <CardContainerChildren>
              <ShowSunData
                description="Sunrise"
                noon="AM"
                time={secondsToDate(ambient?.sys?.sunrise)}
              >
                <ArrowUpwardIcon />
              </ShowSunData>
            </CardContainerChildren>
          </section>
          <section className="Column">
            <CardContainerChildren>
              <ShowSunData
                description="Sunset"
                noon="PM"
                time={secondsToDate(ambient?.sys?.sunset)}
              >
                <ArrowDownwardIcon />
              </ShowSunData>
            </CardContainerChildren>
          </section>
        </section>
        <section className="Row">
          <section className="Column">
            <CardContainerChildren>
              <ShowGeneralData
                title="Humidity"
                description={` ${ambient?.main.humidity}% `}
              >
                <WavesIcon></WavesIcon>
              </ShowGeneralData>
            </CardContainerChildren>
          </section>
          <section className="Column">
            <CardContainerChildren>
              <ShowGeneralData
                title="Pressure"
                description={` ${ambient?.main.pressure} hPa `}
              >
                <SpeedIcon></SpeedIcon>
              </ShowGeneralData>
            </CardContainerChildren>
          </section>
        </section>

        <section className="Row">
          <section className="Column">
            <CardContainerChildren>
              <ShowGeneralData
                title="Wind Speed"
                description={` ${metersPerSecondToKilometersPerHour(
                  ambient?.wind.speed
                )} Km/Hr `}
              >
                <WindPowerIcon></WindPowerIcon>
              </ShowGeneralData>
            </CardContainerChildren>
          </section>
          <section className="Column">
            <CardContainerChildren>
              <ShowGeneralData
                title="Sea Level"
                description={` ${ambient?.main.sea_level} hPa `}
              >
                <WaterIcon></WaterIcon>
              </ShowGeneralData>
            </CardContainerChildren>
          </section>
        </section>
      </section>
    </div>
  );
};

export default WeatherDescription;