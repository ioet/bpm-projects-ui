import React, { Component } from "react";
import Projects from "./components/projects";
import Project from "./components/project";
import NewProject from "./components/newProject";
import "./App.css";
import Paper from "@material-ui/core/Paper/Paper";
import axios from "axios";
<<<<<<< Updated upstream
import { isObject } from "util";
=======
>>>>>>> Stashed changes

class App extends Component {
  constructor() {
    super();
    this.state = {
      projectList: []
    };
  }

  componentDidMount() {
<<<<<<< Updated upstream
    /*     axios.defaults.baseURL = "https://randomuser.me/api"; // GHANGE FOR REAL API

    axios
      .get("/?results=5")
      .then(response => {
        console.log(response.data.results);
        this.setState({ projectList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      }); */

    fetch("http://13b47657.ngrok.io/projects/", {
      method: "get",
      headers: new Headers({
        "Content-Type": "application/json",
        Token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpb2V0LmNvbSIsInN1YiI6InNlY3JldCIsInJvbGUiOiJhZG1pbiIsImV4cCI6MTUzOTM3ODg4N30.h_hsFrSN-HACNt0s5Aq9WgSpITkEhrVyqFaxncxaLJI"
      })
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ projectList: data });
      })
      .catch(err => {
        console.log(err);
      });
=======
    axios.defaults.baseURL = process.env.BPM_PEOPLE_API_URL;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Token"] =
      process.env.BPM_PEOPLE_ACCESS_TOKEN;

    axios
      .get("projects/")
      .then(res => this.setState({ projectList: res.data }))
      .catch(err => console.log(err));
>>>>>>> Stashed changes
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
