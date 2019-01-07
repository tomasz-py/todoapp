import React from "react";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";
import LeftMenu from "./Menu/LeftMenu/LeftMenu";

class App extends React.Component {
  state = {
    nextId: 1,
    toDoes: [],
    trash: []
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
    const afterChange = [...this.state.toDoes];
    afterChange.forEach(toDo => {
      if (toDo.id === id) {
        toDo.isDone = !toDo.isDone;
      }
    });
    this.setState({
      toDoes: afterChange
    });
  };

  isDoneOrNo = value => {
    if (this.state.toDoes.length > 0) {
      return this.state.toDoes.filter(toDo => {
        return toDo.isDone === value;
      });
    } else return [];
  };

  moveToTrash = id => {
    const toMove = this.state.toDoes.filter(toDo => {
      return toDo.id === id;
    });

    const afterMove = this.state.toDoes.filter(toDo => {
      return toDo.id !== id;
    });

    this.setState({
      trash: [...this.state.trash, toMove],
      toDoes: afterMove
    });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui divider" />
        <div className="ui two column grid">
          <div className="ui row">
            <div className="three wide column">
              <LeftMenu />
            </div>
            <div className="ten wide column">
              <ToDoList
                toDoes={this.isDoneOrNo(false)}
                changeIsDone={this.changeIsDone}
                moveToTrash={this.moveToTrash}
              />
              <NewToDo addTodo={this.addTodo} />
              <ToDoList
                toDoes={this.isDoneOrNo(true)}
                changeIsDone={this.changeIsDone}
                moveToTrash={this.moveToTrash}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
