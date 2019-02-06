import React from "react";
import "../LeftMenu/LeftMenu.css";

const CategoryItem = ({ category, selectedOption }) => {
  return (
    <div
      className={
        selectedOption === category ? "oneSelector current" : "oneSelector"
      }
    >
      <i className="circle icon" />
      {category}
    </div>
  );
};

export default CategoryItem;
