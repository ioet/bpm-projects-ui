import React from "react";

const Project = props => {
  const { project } = props;
  return (
    <div>
      <h1>Project {project.id.name}</h1>
      <h3>Name: {project.name.first + " " + project.name.last}</h3>
    </div>
  );
};

export default Project;
