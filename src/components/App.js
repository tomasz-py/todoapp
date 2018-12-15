import React from "react";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = { toDoes: [] };

  addTodo = toDo => {
    this.setState({ toDoes: [...this.state.toDoes, toDo] }, () => {
      console.log(this.state.toDoes);
    });
  };

  render() {
    return (
      <div className="ui container">
        <ToDoList />
        <NewToDo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
