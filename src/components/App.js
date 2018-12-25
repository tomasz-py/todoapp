import React from "react";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = {
    nextId: 1,
    toDoes: []
  };

  addTodo = toDo => {
    var newToDoValue = { id: this.state.nextId, value: toDo, isDone: false };
    var newId = this.state.nextId + 1;

    this.setState(
      {
        nextId: newId,
        toDoes: [...this.state.toDoes, newToDoValue]
      },
      () => {
        //console.log(this.state.toDoes);
      }
    );
  };

  changeIsDone = index => {
    //console.log(index);

    var toDoesArray = [...this.state.toDoes];
    var toDoObject = toDoesArray[index];
    toDoObject.isDone = !toDoObject.isDone;
    toDoesArray.splice(index, 1, toDoObject);

    this.setState({
      toDoes: toDoesArray
    });

    //console.log(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <ToDoList toDoes={this.state.toDoes} changeIsDone={this.changeIsDone} />
        <NewToDo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
