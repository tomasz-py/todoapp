import React from "react";

const ToDoItem = ({ toDo }) => {
  //return <div style={{ color: "white" }}>{toDo}</div>;
  console.log(toDo);
  return (
    <div className="item">
      <div className="content">{toDo.value}</div>
    </div>
  );
};

export default ToDoItem;
