//4.adım :d
import { applyMiddleware, createStore } from "redux"; //createStore depreciated
import rootReducer from "./index";
import thunk from "redux-thunk";

export default function confStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
//5.adım componentler ile redux ı bağlamak yani projenin indexedDB.js ine gidiyoruz.
