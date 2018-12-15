import React from "react";

class NewToDo extends React.Component {
  state = { toDo: "", toDoErr: "", isValid: true };

  onInputChange = event => {
    this.setState({ toDo: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      this.props.addTodo(this.state.toDo);
      this.setState({ toDo: "", toDoErr: "" });
    }
  };

  validate = () => {
    let toDoErr = "";

    if (this.state.toDo.length < 1) {
      toDoErr = "Nothing to add";
      this.setState({ toDoErr: toDoErr });
      this.setState({ isValid: false });
      return false;
    }
    this.setState({ isValid: true });
    return true;
  };

  render() {
    return (
      <div className="ui center aligned segment">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui fluid input">
            <input
              type="text"
              placeholder="Something to do!"
              onChange={this.onInputChange}
              value={this.state.toDo}
            />
            <div className="ui button" onClick={this.onFormSubmit}>
              ToDo!
            </div>
          </div>
        </form>

        <div>
          {this.state.isValid ? (
            <div />
          ) : (
            <div className="ui pointing red basic label">
              {this.state.toDoErr}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default NewToDo;
