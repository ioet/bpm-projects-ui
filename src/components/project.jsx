import React from "react";

const Project = props => {
    console.log(props);
    const { project } = props;
    return (
        <div>
            <h1>Project</h1>
            <h3>Name: {project.short_name}</h3>
            <h3>Comment: {project.comments}</h3>
        </div>
    );
};

export default Project;
