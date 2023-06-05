import { useThemeContext } from "../../Context/ThemeContext";
import { Button, IconButton } from "@mui/material";
import "../../App.css";
import { Link, Outlet } from "react-router-dom";
import "../../../src/Css/GeneralCss.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";

const Layout = () => {
  const { contextTheme, setContextTheme } = useThemeContext();

  const onChangeTheme = () => {
    setContextTheme((prev: string) => (prev === "Dark" ? "Light" : "Dark"));
  };
  return (
    <div className="App" id={contextTheme}>
      <nav>
        <Button variant="text" component={Link} to={"/"} className="searchButton" id={contextTheme}>
          Home
        </Button>
        <Button component={Link} to={"/search"} className="searchButton" id={contextTheme} >
          Search
        </Button>

        <IconButton onClick={onChangeTheme}>
          {contextTheme === "Dark" ? <WbSunnyIcon /> : <Brightness2Icon />}
        </IconButton>
      </nav>
      <h1>Welcome to Ultimate Weather App!</h1>

      <section
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          justifyContent: "space-between",
        }}
      >
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Layout;
