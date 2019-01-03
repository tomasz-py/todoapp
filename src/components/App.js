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

  changeIsDone = id => {
    var afterChange = [...this.state.toDoes];
    afterChange.forEach(toDo => {
      if (toDo.id === id) {
        toDo.isDone = !toDo.isDone;
      }
    });
    this.setState({
      toDoes: afterChange
    });
  };

  render() {
    var isDoneOrNo = value => {
      if (this.state.toDoes.length > 0) {
        return this.state.toDoes.filter(toDo => {
          return toDo.isDone === value;
        });
      } else return [];
    };

    return (
      <div className="ui container">
        <ToDoList toDoes={isDoneOrNo(false)} changeIsDone={this.changeIsDone} />
        <NewToDo addTodo={this.addTodo} />
        <ToDoList toDoes={isDoneOrNo(true)} changeIsDone={this.changeIsDone} />
      </div>
    );
  }
}

export default App;
