import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import "./LeftMenu.css";

class LeftMenu extends React.Component {
  state = {};

  onDeletedClickedHandler = () => {
    this.props.changeSelectedOption("Deleted");
  };

  onMainClickedHandler = () => {
    this.props.changeSelectedOption("Main");
  };

  onDoneClickedHandler = () => {
    this.props.changeSelectedOption("Done");
  };

  render() {
    return (
      <div>
        <div
          className={
            this.props.selectedOption === "Main"
              ? "oneSelector current"
              : "oneSelector"
          }
          onClick={this.onMainClickedHandler}
        >
          <i className="inbox icon" />
          <span className="items">Main ToDoes</span>
        </div>
        <div
          className={
            this.props.selectedOption === "Done"
              ? "oneSelector current"
              : "oneSelector"
          }
          onClick={this.onDoneClickedHandler}
        >
          <i className="check icon" />
          <span className="items">Done</span>
        </div>
        <div
          className={
            this.props.selectedOption === "Deleted"
              ? "oneSelector current"
              : "oneSelector"
          }
          onClick={this.onDeletedClickedHandler}
        >
          <i className="trash alternate icon" />
          <span className="items">Deleted</span>
        </div>
        <div className="ui divider" />
        <CategoryList
          addCategory={this.props.addCategory}
          category={this.props.category}
          selectedOption={this.props.selectedOption}
          changeSelectedOption={this.props.changeSelectedOption}
        />
      </div>
    );
  }
}
export default LeftMenu;
