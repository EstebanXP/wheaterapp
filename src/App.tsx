import React, { useEffect, useState } from "react";
import "./App.css";
import "../src/Css/GeneralCss.css";
import { Switch } from "@mui/material";
import { useThemeContext } from "./Context/ThemeContext";
import WeatherContainer from "./Views/WeatherContainer";

function App() {
  const { contextTheme, setContextTheme } = useThemeContext();

  const onChangeTheme = () => {
    setContextTheme((prev: string) => (prev === "Dark" ? "Light" : "Dark"));
  };

  return (
    <div className="App" id={contextTheme}>
      <Switch onClick={onChangeTheme} />
      <h1>Welcome to ultime weather app!</h1>
      <WeatherContainer></WeatherContainer>
    </div>
  );
}

export default App;

/*
{
    lat: 0,
    lon: 0
  }


*/
