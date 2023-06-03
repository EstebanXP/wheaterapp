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
      </nav>
      <br></br>
      <Switch onClick={onChangeTheme} />

      <br></br>
      <h1>Welcome to ultime weather app!</h1>

      <section>
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Layout;
