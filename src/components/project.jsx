import React from "react";

const Project = props => {
  const { project } = props;
  return (
    <div>
<<<<<<< Updated upstream
      <h1>Project {project.id.name}</h1>
      <h3>Name: {project.name.first + " " + project.name.last}</h3>
=======
      <h1>Project</h1>
      <h3>Name: {project.short_name}</h3>
      <h3>Comment: {project.comments}</h3>
>>>>>>> Stashed changes
    </div>
  );
};

export default Project;
