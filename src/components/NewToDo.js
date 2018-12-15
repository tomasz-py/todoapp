import React from "react";

class NewToDo extends React.Component {
  state = { toDo: "", toDoErr: "" };

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

      return false;
    }
    return true;
  };

  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Something to do!"
            onChange={this.onInputChange}
            value={this.state.toDo}
          />
        </form>
        <div>{this.state.toDoErr}</div>
      </div>
    );
  }
}

export default NewToDo;
