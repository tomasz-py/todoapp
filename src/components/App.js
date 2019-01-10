import React from "react";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";
import LeftMenu from "./Menu/LeftMenu/LeftMenu";

class App extends React.Component {
  state = {
    nextId: 1,
    toDoes: [],
    trash: [],
    category: "",
    selectedOption: "main"
  };

  //Add new todo item with passed value
  addTodo = toDo => {
    var newToDoValue = {
      id: this.state.nextId,
      value: toDo,
      isDone: false,
      isDeleted: false,
      category: "main"
    };
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

  //Change isDone to opposite
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
        return toDo.isDone === value && toDo.isDeleted === false;
      });
    } else return [];
  };

  isDeletedOrNo = value => {
    return this.state.toDoes.filter(toDo => {
      return toDo.isDeleted === value;
    });
  };

  //Change isDeleted to opposite
  changeIsDeleted = id => {
    const afterChange = [...this.state.toDoes];
    afterChange.forEach(toDo => {
      if (toDo.id === id) {
        toDo.isDeleted = !toDo.isDeleted;
      }
    });
    this.setState({
      toDoes: afterChange
    });

    console.log(this.state.toDoes);
  };

  // moveToTrash = id => {
  //   const toMove = this.state.toDoes.filter(toDo => {
  //     return toDo.id === id;
  //   });

  //   const afterMove = this.state.toDoes.filter(toDo => {
  //     return toDo.id !== id;
  //   });

  //   this.setState({
  //     trash: [...this.state.trash, toMove],
  //     toDoes: afterMove
  //   });
  // };

  changeSelectedOption = selectedOption => {
    this.setState({
      selectedOption: selectedOption
    });
  };

  isDeletedOrNo = value => {
    return this.state.toDoes.filter(toDo => {
      return toDo.isDeleted === value;
    });
  };

  toDoesFilter = selectedOption => {
    if (selectedOption === "main") {
      return this.state.toDoes.filter(toDo => {
        return toDo.isDeleted === false && toDo.isDone === false;
      });
    }
    //Only deleted
    else if (selectedOption === "deleted") {
      return this.state.toDoes.filter(toDo => {
        return toDo.isDeleted === true;
      });
    }
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui divider" />
        <div className="ui two column grid">
          <div className="ui row">
            <div className="three wide column">
              <LeftMenu changeSelectedOption={this.changeSelectedOption} />
            </div>
            <div className="ten wide column">
              <ToDoList
                toDoes={this.toDoesFilter(this.state.selectedOption)}
                changeIsDone={this.changeIsDone}
                changeIsDeleted={this.changeIsDeleted}
              />
              <NewToDo addTodo={this.addTodo} />
              {this.state.selectedOption !== "deleted" ? (
                <ToDoList
                  toDoes={this.isDoneOrNo(true)}
                  changeIsDone={this.changeIsDone}
                  changeIsDeleted={this.changeIsDeleted}
                />
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
