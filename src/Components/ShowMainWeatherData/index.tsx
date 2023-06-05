import React from "react";
import "../../App.css";
import { Box, Card, CardContent } from "@mui/material";
import { Coordinates } from "../../Custom/CustomInterfaces";
import Map from "../Map";

interface Props {
  /**
   * The city's name.
   */
  name?: string;
  /**
   * The country.
   */
  country?: string;
  /**
   * The children components to be rendered inside the component.
   */
  children: React.ReactNode;
  /**
   * The coordinates of the location.
   */
  coords: Coordinates;
  /**
   * The actual temperature in Celsius.
   */
  actualCelsiusTemperature?: number;
  /**
   * The temperature that feels like in Celsius.
   */
  feelsLike?: number;
  /**
   * The minimum temperature in Celsius.
   */
  minCelsiusTemperature?: number;
  /**
   * The maximum temperature in Celsius.
   */
  maxCelsiusTemperature?: number;
  /**
   * The URL of the weather icon image.
   */
  imageUrl?: string;
  /**
   * The time of AM noon.
   */
  amNoonTime?: string;
  /**
   * The time of PM noon.
   */
  pmNoonTime?: string;
  /**
   * The description of the weather.
   */
  weatherDescription?: string;
}

/**
 * Component that displays the main weather data.
 */

const ShowMainWeatherData = ({
  name,
  coords,
  country,
  children,
  actualCelsiusTemperature,
  feelsLike,
  minCelsiusTemperature,
  maxCelsiusTemperature,
  weatherDescription,
}: Props) => {
  return (
    <div className="MainWeatherComponentContainer">
      <Card className="MainWeatherComponent">
        <Box className="MainWeatherDescription">
          <CardContent className="CardContentContainer" id="MainData">
            <p>
              {name} <b>{` ${country}  `}</b>
            </p>
            <section>
              <p>{weatherDescription}</p>
              {children}
            </section>
            <section>
              {" "}
              {` ${actualCelsiusTemperature}°, Feels Like ${feelsLike}°  `}
            </section>
            <section>
              {`  Min ${minCelsiusTemperature}° Max ${maxCelsiusTemperature}° `}
            </section>
          </CardContent>
          <CardContent
            className="CardSecondContentContainer" /*sx={{flex: 1}}*/
          >
            <Map coords={coords}></Map>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default ShowMainWeatherData;

/*
 <p>
                {name} <b>{` ${country}  `}</b>
            </p>

            <section>{`  ${actualCelsiusTemperature}°  `}</section>
            <section> {`  Feels Like ${feelsLike}°  `}</section>
            <section>
            {" "}
            {`  Min ${minCelsiusTemperature}° Max ${maxCelsiusTemperature}° `}
            </section>




*/
