import React, { useState } from "react";
import "../LeftMenu/LeftMenu.css";
import "./index.css";

const CategoryItem = ({ category, selectedOption, changeSelectedOption }) => {
  //hooks
  //const [showCategoryMenu, showDiv] = useState(false);

  const onClickHanlder = () => {
    changeSelectedOption(category);
  };

  const onDotsClickHandler = () => {
    const displayStyle = document.getElementById(category).style.display;

    if (displayStyle === "inline") {
      document.getElementById(category).style.display = "none";
    } else {
      document.getElementById(category).style.display = "inline";
    }
  };

  return (
    <div
      className={
        selectedOption === category ? "oneSelector current" : "oneSelector"
      }
      onClick={onClickHanlder}
    >
      <i className="circle icon" />
      {category}

      <i
        className="ellipsis horizontal icon categoryDots"
        onClick={onDotsClickHandler}
      />
      <div id={category} className="CategoryMenu">
        Testing menu
      </div>
    </div>
  );
};

export default CategoryItem;
