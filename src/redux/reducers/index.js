//3.adım reducer ları kombinlemek . index.js i olusturduk.
import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
});

export default rootReducer;
//4.adım da configure store :D
