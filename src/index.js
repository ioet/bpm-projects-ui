import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { getAllProjects } from "./actions"
import "./index.css";
import "typeface-roboto";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { RootTheme } from './styles';

store.dispatch(getAllProjects());

ReactDOM.render(
  <Provider store={store}>
      <MuiThemeProvider theme={RootTheme}>
            <App />
      </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

//ReactDOM.render(<App projects={store.getState()} />, document.getElementById("root"));
