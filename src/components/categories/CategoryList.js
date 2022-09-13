import React, { Component } from "react";
import { connect } from "react-redux";
//artık bu component i connect ile bağlayabiliriz. 6. adım :D
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  render() {
    return (
      <div>
        <h3>Categories</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem key={category.id}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h5>Selected Category: {this.props.currentCategory[1].categoryName}</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer, //bu sekılde currentCategory nin props unu almıs olduk kısaca :D
    categories: state.categoryListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  //burada da action ları props a bağlıyoruz. dispatch action demek.
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch,
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
