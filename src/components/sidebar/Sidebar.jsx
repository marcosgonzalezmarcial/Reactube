import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import reactTubeLogo from "../../assets/reactTube-logo.jpg";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useHistory, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [homeSelected, setHomeSelected] = useState(false);
  const [historySelected, setHistorySelected] = useState(false);
  const [favouritesSelected, setFavouritesSelected] = useState(false);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/home" ||
      location.pathname === "/home/search"
    ) {
      setFavouritesSelected(false);
      setHomeSelected(true);
      setHistorySelected(false);
    }
    if (location.pathname === "history") {
      setFavouritesSelected(false);
      setHomeSelected(false);
      setHistorySelected(true);
    }
    if (location.pathname === "favourites") {
      setFavouritesSelected(true);
      setHomeSelected(false);
      setHistorySelected(false);
    }
  }, [location]);
  return (
    <nav className="sidebarNav">
      <div
        onClick={() => history.push("/home")}
        className="sidebarNav__logo__container"
      >
        <img
          className="sidebarNav__logo"
          src={reactTubeLogo}
          alt="youtube logo"
        />
        <h1 className="sidebarNav__logo__title">ReactTube</h1>
      </div>
      <div className="sidebarNav__menu">
        <h3>MENU</h3>
        <Link
          to="/home"
          onClick={() => {
            setFavouritesSelected(false);
            setHomeSelected(true);
            setHistorySelected(false);
          }}
          className="sidebarNav__link"
        >
          <SidebarRow selected={homeSelected} Icon={HomeIcon} title="Home" />
        </Link>
        <Link
          to="/historial"
          onClick={() => {
            setFavouritesSelected(false);
            setHomeSelected(false);
            setHistorySelected(true);
          }}
          className="sidebarNav__link"
        >
          <SidebarRow
            selected={historySelected}
            Icon={HistoryIcon}
            title="Historial"
          />
        </Link>
        <Link
          to="/favoritos"
          onClick={() => {
            setFavouritesSelected(true);
            setHomeSelected(false);
            setHistorySelected(false);
          }}
          className="sidebarNav__link"
        >
          <SidebarRow
            selected={favouritesSelected}
            Icon={FavoriteIcon}
            title="Favoritos"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
