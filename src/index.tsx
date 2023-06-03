import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeContextProvider } from "./Context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Views/Layout";
import LocalWeather from "./Views/LocalWeather";
import SearchWeather from "./Views/SearchWeather";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route path="/" element={<LocalWeather></LocalWeather>}></Route>
            <Route path="/search" element={<SearchWeather></SearchWeather>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
