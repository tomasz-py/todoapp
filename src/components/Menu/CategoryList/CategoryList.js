import React from "react";
import "./CategoryList.css";
import "../CategoryItem/";
import CategoryItem from "../CategoryItem/";

class CategoryList extends React.Component {
  state = {
    addNewCategory: false,
    newCategory: ""
  };

  changeAddNewCategory = () => {
    this.setState({ addNewCategory: !this.state.addNewCategory });
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
    this.props.addCategory(this.state.newCategory);
    this.setState({
      addNewCategory: false,
      newCategory: ""
    });
  };

  renderHelper = () => {
    if (this.state.addNewCategory) {
      return (
        <div className="categorySelector">
          <form onSubmit={this.onFormSubmit}>
            <div className="ui inverted transparent fluid input">
              <input
                type="text"
                placeholder="New Category"
                onChange={this.onInputChange}
                value={this.state.newCategory}
              />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <div className="categorySelector" onClick={this.changeAddNewCategory}>
            <i className="plus square icon" />
            <span>Add new category</span>
          </div>
        </div>
      );
    }
  };

  render() {
    const renderList = this.props.category.map((c, index) => {
      return <CategoryItem key={index} category={this.props.category[index]} />;
    });

    return (
      <div>
        <div>{renderList}</div>
        <div className="categorySelector">
          <div>{this.renderHelper()}</div>
        </div>
      </div>
    );
  }
}
export default CategoryList;
