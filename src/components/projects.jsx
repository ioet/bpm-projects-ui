import React from "react";
import { compose } from 'redux';
//import ProjectItemContainer from "./container/projectItemContainer";
import Project from "./project";
import Table from '@material-ui/core/Table/Table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import TableBody from '@material-ui/core/TableBody/TableBody';
import Typography from '@material-ui/core/Typography/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withWidth } from '@material-ui/core';
import { ProjectListStyles } from "../styles";

const Projects = ({ projectList = [], classes }) => {
    const projects = projectList.map(project => <Project key={project.uid} project={project} />);
    return (
        <div className={classes.root}>
            {projects.length !== 0 ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>
                                Project Name
                            </TableCell>
                            <TableCell className={classes.tableHead}>
                                Comment
                            </TableCell>
                            <TableCell className={classes.tableHead}>
                                Active
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects}
                    </TableBody>
                </Table>
            ) : (
                <Typography variant="subtitle1">
                    Loading...
                </Typography>
            )}
        </div>
    );
};

export default compose(
    withStyles(ProjectListStyles),
    withWidth()
)(Projects);
