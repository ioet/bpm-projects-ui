import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import ProjectItemContainer from "./container/projectItemContainer";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withWidth } from "@material-ui/core";
import { ProjectListStyles } from "../styles";
import { ProjectListHeaders } from "../constants";

const Projects = ({ projectList, classes }) => {
  let counter = 0;
  const projects = projectList.map(project => {
    counter++;
    return (
      <ProjectItemContainer
        key={project.uid}
        project={project}
        counter={counter}
      />
    );
  });
  return (
    <div className={classes.root}>
      {projects.length !== 0 ? (
        <div>
          <Typography variant="caption" gutterBottom align="left">
            {`Results: ${projects.length} projects found.`}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHead}>
                  {ProjectListHeaders.COL_1}
                </TableCell>
                <TableCell className={classes.tableHead}>
                  {ProjectListHeaders.COL_2}
                </TableCell>
                <TableCell className={classes.tableHead}>
                  {ProjectListHeaders.COL_3}
                </TableCell>
                <TableCell className={classes.tableHead}>
                  {ProjectListHeaders.COL_4}
                </TableCell>
                <TableCell
                  className={[classes.tableHead, classes.tableHeadIcon].join(
                    " "
                  )}
                >
                  {ProjectListHeaders.COL_5}
                </TableCell>
                <TableCell
                  className={[classes.tableHead, classes.tableHeadIcon].join(
                    " "
                  )}
                >
                  {ProjectListHeaders.COL_6}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{projects}</TableBody>
          </Table>
        </div>
      ) : (
        <Typography variant="subtitle1">
          {ProjectListHeaders.LOADING}
        </Typography>
      )}
    </div>
  );
};

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  projectList: PropTypes.array.isRequired
};

export default compose(
  withStyles(ProjectListStyles),
  withWidth()
)(Projects);
