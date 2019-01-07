import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import "./LeftMenu.css";

const LeftMenu = () => {
  return (
    <div>
      <div className="oneSelector">
        <i className="inbox icon" />
        <span className="items">Main ToDoes</span>
      </div>
      <div className="ui divider" />
      <CategoryList />
    </div>
  );
};

export default LeftMenu;
