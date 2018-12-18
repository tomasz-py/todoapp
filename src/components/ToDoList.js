import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoes }) => {
  const renderedList = toDoes.map(toDo => {
    return <ToDoItem key={toDo.id} toDo={toDo} />;
  });
  //const renderedList = toDoes.value;
  //console.log(toDoes);
  return (
    <div className="ui inverted segment">
      <div className="ui inverted relaxed divided list">{renderedList}</div>
    </div>
  );
};
export default ToDoList;
