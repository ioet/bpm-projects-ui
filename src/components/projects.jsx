import React from "react";
import Project from "./project";

const Projects = ({ projectList }) => {
  return projectList.map(project => (
    <Project key={project.uid} project={project} />
  ));
};

export default Projects;
