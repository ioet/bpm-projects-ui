import React, { Component } from "react";

class NewProject extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Name" id="name" />
        <button
          onClick={() =>
            this.props.onAddProject(document.getElementById("name").value)
          }
        >
          Add Project
        </button>
      </div>
    );
  }
}

export default NewProject;
