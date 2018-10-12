import React from "react";

const Project = props => {
  const { project } = props;
  console.log(project);
  return (
    <div key={project.uid}>
      <h1>Project</h1>
      <h3>Name: {project.short_name}</h3>
      <h3>Comment: {project.comments}</h3>
    </div>
  );
};

export default Project;
