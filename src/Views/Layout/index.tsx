import { useThemeContext } from "../../Context/ThemeContext";
import { Switch } from "@mui/material";
import "../../App.css";
import { Outlet, Link } from "react-router-dom";
import "../../../src/Css/GeneralCss.css";

const Layout = () => {
  const { contextTheme, setContextTheme } = useThemeContext();

  const onChangeTheme = () => {
    setContextTheme((prev: string) => (prev === "Dark" ? "Light" : "Dark"));
  };
  return (
    <div className="App" id={contextTheme}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Switch onClick={onChangeTheme} />
      </nav>
      <br></br>
     

      <br></br>
      <h1>Welcome to Ultimate Weather App!</h1>

      <section style={{ marginLeft: "15%", marginRight: "15%", justifyContent: "space-between"}}>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Layout;
