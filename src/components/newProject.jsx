import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class NewProject extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Name" id="name" />
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            this.props.onAddProject(document.getElementById("name").value)
          }
        >
          Add Project
        </Button>
      </div>
    );
  }
}

export default NewProject;
