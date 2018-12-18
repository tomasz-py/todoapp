import React from "react";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = {
    lastId: 1,
    toDoes: []
  };

  addTodo = toDo => {
    var newToDoValue = { id: this.state.lastId, value: toDo, isDone: false };
    var newId = this.state.lastId + 1;

    this.setState(
      {
        lastId: newId,
        toDoes: [...this.state.toDoes, newToDoValue]
      },
      () => {
        //console.log(this.state.toDoes);
      }
    );
  };

  render() {
    return (
      <div className="ui container">
        <ToDoList toDoes={this.state.toDoes} />
        <NewToDo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
