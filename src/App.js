import React, { Component } from "react";
import Projects from "./components/projects";
import Project from "./components/project";
import NewProject from "./components/newProject";
import "./App.css";
import Paper from "@material-ui/core/Paper/Paper";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectList: []
    };
  }

  componentDidMount() {
    axios.defaults.baseURL = "https://randomuser.me/api"; // GHANGE FOR REAL API

    axios
      .get("/?results=5")
      .then(response => {
        console.log(response.data.results);
        this.setState({ projectList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleAddProject = projectName => {
    const projectList = [...this.state.projectList];
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
    this.setState({ projectList });
  };

  render() {
    return (
      <Paper className="App" elevation={10}>
        <NewProject onAddProject={this.handleAddProject} />
        <Projects projectList={this.state.projectList} />
      </Paper>
    );
  }
}

export default App;
