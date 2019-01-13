import React from "react";
import "../LeftMenu/LeftMenu.css";

const CategoryItem = ({ category }) => {
  return (
    <div className="oneSelector">
      <i className="circle icon" />
      {category}
    </div>
  );
};

export default CategoryItem;
