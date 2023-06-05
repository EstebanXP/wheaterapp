import React from "react";
import "../../App.css";
import { Box, Card, CardContent } from "@mui/material";
import { Coordinates } from "../../Custom/CustomInterfaces";
import Map from "../Map";

interface Props {
  name?: string;
  country?: string;
  children: React.ReactNode;
  coords: Coordinates,
  actualCelsiusTemperature?: number;
  feelsLike?: number;
  minCelsiusTemperature?: number;
  maxCelsiusTemperature?: number;
  imageUrl?: string;
  amNoonTime?: string;
  pmNoonTime?: string;
  weatherDescription?: string;
}

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
        <Box
          className="MainWeatherDescription"
        >
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
          <CardContent className="CardSecondContentContainer" /*sx={{flex: 1}}*/>
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
