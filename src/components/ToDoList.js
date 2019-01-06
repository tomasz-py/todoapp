import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoes, changeIsDone, moveToTrash }) => {
  const renderedList = toDoes.map((toDo, index) => {
    return (
      <ToDoItem
        key={toDo.id}
        toDo={toDo}
        changeIsDone={changeIsDone}
        index={index}
        moveToTrash={moveToTrash}
      />
    );
  });

  return (
    <div className="ui inverted segment">
      <div className="ui inverted relaxed divided list">{renderedList}</div>
    </div>
  );
};
export default ToDoList;
