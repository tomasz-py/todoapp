import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import "./LeftMenu.css";

class LeftMenu extends React.Component {
  state = {};

  onDeletedClickedHandler = () => {
    this.props.changeSelectedOption("deleted");
  };

  onMainClickedHandler = () => {
    this.props.changeSelectedOption("main");
  };

  onDoneClickedHandler = () => {
    this.props.changeSelectedOption("done");
  };

  render() {
    return (
      <div>
        <div className="oneSelector" onClick={this.onMainClickedHandler}>
          <i className="inbox icon" />
          <span className="items">Main ToDoes</span>
        </div>
        <div className="oneSelector" onClick={this.onDoneClickedHandler}>
          <i className="check icon" />
          <span className="items">Done</span>
        </div>
        <div className="oneSelector" onClick={this.onDeletedClickedHandler}>
          <i className="trash alternate icon" />
          <span className="items">Deleted</span>
        </div>
        <div className="ui divider" />
        <CategoryList />
      </div>
    );
  }
}
export default LeftMenu;
