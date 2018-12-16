import React from "react";

const ToDoItem = ({ toDo }) => {
  //return <div style={{ color: "white" }}>{toDo}</div>;
  return (
    <div className="item">
      <div className="content">{toDo}</div>
    </div>
  );
};

export default ToDoItem;
