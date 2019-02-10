import React from "react";
import "./CategoryList.css";
import "../CategoryItem/";
import CategoryItem from "../CategoryItem/";
import "../LeftMenu/LeftMenu.css";

class CategoryList extends React.Component {
  state = {
    addNewCategory: false,
    newCategory: "",
    newname: ""
  };

  //Change addNewCategory and clean input field
  changeAddNewCategory = () => {
    this.setState({
      addNewCategory: !this.state.addNewCategory,
      newCategory: ""
    });
  };

  validate = () => {
    if (this.state.newCategory.length < 1) {
      return false;
    }
    return true;
  };

  onInputChange = event => {
    this.setState({ newCategory: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.validate()) {
      this.props.addCategory(this.state.newCategory);
      //disable and clean field
      this.changeAddNewCategory();
    }
  };

  renderHelper = () => {
    if (this.state.addNewCategory) {
      return (
        <div className="categorySelector nohover">
          <form onSubmit={this.onFormSubmit}>
            <div className="ui inverted transparent fluid input">
              <input
                type="text"
                placeholder="New Category"
                onChange={this.onInputChange}
                value={this.state.newCategory}
                autoFocus
              />
            </div>
          </form>
          <button onClick={this.onFormSubmit}>Add</button>
          <button onClick={this.changeAddNewCategory}>Cancel</button>
        </div>
      );
    } else {
      return (
        <div className="categorySelector" onClick={this.changeAddNewCategory}>
          <i className="plus square icon" />
          <span>Add new category</span>
        </div>
      );
    }
  };

  render() {
    const renderList = this.props.category.map((c, index) => {
      return (
        <div className="categorySelector" key={index}>
          <CategoryItem
            key={index}
            category={this.props.category[index]}
            selectedOption={this.props.selectedOption}
            changeSelectedOption={this.props.changeSelectedOption}
          />
        </div>
      );
    });

    return (
      <div>
        <div>
          {renderList}

          {this.renderHelper()}
        </div>
      </div>
    );
  }
}
export default CategoryList;
