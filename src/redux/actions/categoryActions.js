import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category }; //reducerda bu payload degeri state in degeri olacak :D
}
