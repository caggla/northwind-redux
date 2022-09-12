//3.adım reducer ları kombinlemek . index.js i olusturduk.
import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
});

export default rootReducer;
//4.adım da configure store :D
