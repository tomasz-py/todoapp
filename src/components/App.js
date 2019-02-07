import React from "react";
import NewToDo from "./NewToDo";
import ToDoList from "./ToDoList";
import LeftMenu from "./Menu/LeftMenu/LeftMenu";

class App extends React.Component {
  state = {
    nextId: 1,
    toDoes: [],
    trash: [],
    selectedOption: "main",
    category: []
  };

  //Add new todo item with passed value + change nextID to +1
  addTodo = (toDo, category = "main") => {
    var newToDoValue = {
      id: this.state.nextId,
      value: toDo,
      isDone: false,
      isDeleted: false,
      category: category
    };
    var newId = this.state.nextId + 1;

    this.setState(
      {
        nextId: newId,
        toDoes: [...this.state.toDoes, newToDoValue]
      },
      () => {
        //console.log(this.state);
      }
    );
  };

  addCategory = categoryName => {
    if (this.state.category.indexOf(categoryName) < 0) {
      const newCategory = [...this.state.category, categoryName];
      this.setState({
        category: newCategory
      });
      //change selected category to created category
      this.changeSelectedOption(categoryName);
    }
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

  //Checking if todo is done and not deleted
  isDoneOrNo = value => {
    if (this.state.toDoes.length > 0) {
      return this.state.toDoes.filter(toDo => {
        return toDo.isDone === value && toDo.isDeleted === false;
      });
    } else return [];
  };

  // isDeletedOrNo = value => {
  //   return this.state.toDoes.filter(toDo => {
  //     return toDo.isDeleted === value;
  //   });
  // };

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
  };

  changeSelectedOption = selectedOption => {
    this.setState({
      selectedOption: selectedOption
    });
  };

  toDoesFilter = selectedOption => {
    //Return not done and not deleted
    if (selectedOption === "main") {
      return this.state.toDoes.filter(toDo => {
        return (
          toDo.category === "main" &&
          toDo.isDeleted === false &&
          toDo.isDone === false
        );
      });
    }
    //Only done
    else if (selectedOption === "done") {
      return this.state.toDoes.filter(toDo => {
        return toDo.isDone === true && toDo.isDeleted === false;
      });
    }
    //Only deleted
    else if (selectedOption === "deleted") {
      return this.state.toDoes.filter(toDo => {
        return toDo.isDeleted === true;
      });
      //Only selected category and not done/deleted
    } else {
      return this.state.toDoes.filter(toDo => {
        return (
          toDo.category === selectedOption &&
          toDo.isDone === false &&
          toDo.isDeleted === false
        );
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
              <LeftMenu
                changeSelectedOption={this.changeSelectedOption}
                selectedOption={this.state.selectedOption}
                addCategory={this.addCategory}
                category={this.state.category}
              />
            </div>
            <div className="ten wide column">
              <ToDoList
                toDoes={this.toDoesFilter(this.state.selectedOption)}
                changeIsDone={this.changeIsDone}
                changeIsDeleted={this.changeIsDeleted}
              />
              {this.state.selectedOption !== "done" &&
              this.state.selectedOption !== "deleted" ? (
                <NewToDo
                  addTodo={this.addTodo}
                  category={this.state.selectedOption}
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
