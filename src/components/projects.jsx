import React from "react";
import Project from "./project";

const Projects = ({ projectList }) => {
  return projectList.map(project => <Project project={project} />);
};

export default Projects;
