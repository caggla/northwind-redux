import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/root/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import confStore from "./redux/reducers/confStore";

const store = confStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
