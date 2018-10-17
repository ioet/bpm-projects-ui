import React, { Component } from "react";
import TextField from '@material-ui/core/TextField/TextField';
import Button from "@material-ui/core/Button";

class NewProject extends Component {
  render() {
    return (
      <div>
          <TextField
              name="authentication_identity"
              label="Project Name"
              id="mui-theme-provider-input"
          />
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
