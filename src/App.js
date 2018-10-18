import React, { Component } from "react";
import ProjectListContainer from "./components/container/projectsListContainer";
import NewProject from "./components/newProject";
import Typography from "@material-ui/core/Typography/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Paper from "@material-ui/core/Paper/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppStyles } from "./styles";

class App extends Component {
  handleAddProject = projectName => {
    /*const projectList = [...this.state.projectList];
    const nextIndex = this.state.projectList.length;
    let newProject = {
      id: {
        name: projectName,
        value: { nextIndex }
      },
      name: {
        first: "firstName",
        last: "lastName"
      }
    };
    projectList.push(newProject);
    this.setState({ projectList });*/
  };

  render() {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              BPM PROJECTS
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={this.props.classes.root} elevation={1}>
          {/*<NewProject onAddProject={this.handleAddProject} />*/}
          <ProjectListContainer />
        </Paper>
      </div>
    );
  }
}

export default withStyles(AppStyles)(App);
