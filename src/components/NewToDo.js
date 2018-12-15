import React from "react";

class NewToDo extends React.Component {
  state = { toDo: "" };

  onInputChange = event => {
    this.setState({ toDo: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.toDo);
    this.setState({ toDo: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Something to do!"
            onChange={this.onInputChange}
            value={this.state.toDo}
          />
        </form>
      </div>
    );
  }
}

export default NewToDo;
