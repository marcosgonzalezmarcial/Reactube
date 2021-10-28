import React from "react";
import "./Sidebar.css";
import reactTubeLogo from "../../assets/reactTube-logo.jpg";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Sidebar = () => {
  return (
    <nav className="sidebarNav">
      <div className="sidebarNav__logo__container">
        <img
          className="sidebarNav__logo"
          src={reactTubeLogo}
          alt="youtube logo"
        />
        <h1 className="sidebarNav__logo__title">ReactTube</h1>
      </div>
      <div className="sidebarNav__menu">
        <h3>MENU</h3>
        <SidebarRow selected Icon={HomeIcon} title="Home" />
        <SidebarRow Icon={HistoryIcon} title="Historial" />
        <SidebarRow Icon={FavoriteIcon} title="Favoritos" />
      </div>
    </nav>
  );
};

export default Sidebar;
