import React from "react";
import "../LeftMenu/LeftMenu.css";

const CategoryItem = ({ category, selectedOption, changeSelectedOption }) => {
  const onClickHanlder = () => {
    changeSelectedOption(category);
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
    </div>
  );
};

export default CategoryItem;
