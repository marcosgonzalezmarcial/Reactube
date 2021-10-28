import React from "react";
import "./SidebarRow.css";

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
