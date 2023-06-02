import React, { useEffect, useState } from "react";
import "./App.css";
import "../src/Css/GeneralCss.css"
import { Switch } from "@mui/material";
import { useThemeContext } from "./Context/ThemeContext";
import Weather from "./Views/Weather";
import { useLocalWeather } from './Custom/useLocalWeather';


function App() {
  const {contextTheme,setContextTheme}=useThemeContext()
  //const [theme, setTheme] = useState<boolean>(false);
  const [location] = useLocalWeather()

  const onChangeTheme = () => {
    setContextTheme((prev:string)=>(prev==="Dark"? "Light": "Dark"))
    //setTheme((prev) => !prev);
  };

  return (
    <div className="App" id={contextTheme}>
      <Switch onClick={onChangeTheme} />
      <h1>Welcome to ultime weather app!</h1>
      <Weather location={location}></Weather>
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