import React, { Component } from "react";
import { connect } from "react-redux";
//artık bu component i connect ile bağlayabiliriz. 6. adım :D

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Categories</h3>
        <h5>Selected Category: {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer, //bu sekılde currentCategory nin props unu almıs olduk kısaca :D
  };
}

export default connect(mapStateToProps)(CategoryList);
