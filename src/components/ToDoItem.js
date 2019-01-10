import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({ toDo, changeIsDone, changeIsDeleted }) => {
  return (
    <div className="item">
      <div className="content">
        {toDo.isDone ? (
          <i
            className="x icon red icon"
            onClick={() => changeIsDone(toDo.id)}
          />
        ) : (
          <i className="check icon" onClick={() => changeIsDone(toDo.id)} />
        )}

        {toDo.isDone ? (
          <label className="toDoDone">{toDo.value}</label>
        ) : (
          <label>{toDo.value}</label>
        )}
        <i
          className="trash alternate outline icon delete-todo"
          onClick={() => changeIsDeleted(toDo.id)}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
