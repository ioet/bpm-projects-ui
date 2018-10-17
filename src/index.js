import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { getAllProjects } from "./actions"
import "./index.css";
import "typeface-roboto";

store.dispatch(getAllProjects());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//ReactDOM.render(<App projects={store.getState()} />, document.getElementById("root"));
