import React from "react";
import "../../App.css";
import { Box, Card, CardContent } from "@mui/material";

interface Props {
  name?: string;
  country?: string;
  children: React.ReactNode;
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
  country,
  children,
  actualCelsiusTemperature,
  feelsLike,
  minCelsiusTemperature,
  maxCelsiusTemperature,
  weatherDescription,
}: Props) => {
  return (
    <div>
      <Card className="MainWeatherComponent">
        <Box
          className="MainWeatherDescription"
          sx={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <CardContent >
            <p>
              {name} <b>{` ${country}  `}</b>
            </p>
            <section>
              <p>{weatherDescription}</p>
              {children}
            </section>
            <section> {` ${actualCelsiusTemperature}°, Feels Like ${feelsLike}°  `}</section>
            <section>
              {`  Min ${minCelsiusTemperature}° Max ${maxCelsiusTemperature}° `}
            </section>
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
