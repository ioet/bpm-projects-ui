import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { RootTheme } from "./styles";
import { createStore, applyMiddleware } from "redux";
import { func } from "prop-types";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
