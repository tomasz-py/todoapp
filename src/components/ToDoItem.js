import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({ toDo }) => {
  //return <div style={{ color: "white" }}>{toDo}</div>;
  console.log(toDo);
  return (
    <div className="item">
      <div className="content">
        <i className="check icon" />
        {toDo.value}
        <i className="trash alternate outline icon delete-todo" />
      </div>
    </div>
  );
};

export default ToDoItem;
