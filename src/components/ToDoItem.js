import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({ toDo, changeIsDone, index }) => {
  //return <div style={{ color: "white" }}>{toDo}</div>;

  return (
    <div className="item">
      <div className="content">
        <i className="check icon" onClick={() => changeIsDone(index)} />
        {toDo.isDone ? (
          <label className="toDoDone">{toDo.value}</label>
        ) : (
          <label>{toDo.value}</label>
        )}
        <i className="trash alternate outline icon delete-todo" />
      </div>
    </div>
  );
};

export default ToDoItem;
