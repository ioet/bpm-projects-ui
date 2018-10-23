import React, { Component } from "react";
import {Title} from "./constants"
import ProjectListContainer from "./components/container/ProjectsListContainer";
import FloatingActionButtonContainer from "./components/container/FloatingActionButtonContainer";
import DeleteDialogContainer from "./components/container/DeleteDialogContainer";
import NotificationSnackBarContainer from "./components/container/NotificationSnackBarContainer";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppStyles } from "./styles";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" color="inherit">
                {Title.VALUE}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={this.props.classes.root} elevation={1}>
          <ProjectListContainer />
          <br />
          <FloatingActionButtonContainer />
        </Paper>
          <DeleteDialogContainer />
          <NotificationSnackBarContainer />
      </div>
    );
  }
}

export default withStyles(AppStyles)(App);
