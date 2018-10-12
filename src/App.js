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
    axios.defaults.baseURL = process.env.BPM_PEOPLE_API_URL;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Token"] =
      process.env.BPM_PEOPLE_ACCESS_TOKEN; // SEE how to fix this

    axios
      .get("projects/")
      .then(res => this.setState({ projectList: res.data }))
      .catch(err => console.log(err));
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
