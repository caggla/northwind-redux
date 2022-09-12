import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category }; //reducerda bu payload degeri state in degeri olacak :D
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: categories };
}

export function getCategories() {
  return function (dispatch) {
    //debugger;   f12 :D . f5 ile diğer adıma gecırırız.
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
