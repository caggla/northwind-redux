//4.adım :d
import { createStore } from "redux"; //createStore depreciated
import reducers from "./index";

export default function confStore() {
  return createStore(reducers);
}
//5.adım componentler ile redux ı bağlamak yani projenin indexedDB.js ine gidiyoruz.
