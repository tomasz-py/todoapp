import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoes }) => {
  const renderedList = toDoes.map((toDo, index) => {
    return <ToDoItem key={index} toDo={toDo} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default ToDoList;
