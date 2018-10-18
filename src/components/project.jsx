import React from "react";
import { compose } from "redux";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Typography from "@material-ui/core/Typography/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import withStyles from "@material-ui/core/styles/withStyles";
import { withWidth } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import { Clear, Delete, Done, Edit } from "@material-ui/icons";
import { ProjectStyles } from "../styles";

const Project = props => {
  const {
    onDeleteProject,
    onMouseOver,
    onMouseOut,
    project,
    classes,
    counter
  } = props;
  const { uid, short_name, comments, active } = project;
  return (
    <TableRow
      hover
      onFocus={e => {
        e.preventDefault();
        onMouseOver(uid);
      }}
      onMouseOver={e => {
        e.preventDefault();
        onMouseOver(uid);
      }}
      onMouseOut={onMouseOut}
      onBlur={onMouseOut}
    >
      <TableCell className={classes.tableCell} component="td" scope="row">
        <Typography variant="subtitle1">{counter}</Typography>
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        <Typography variant="subtitle1">{short_name}</Typography>
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        <Typography variant="subtitle1">{comments}</Typography>
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        <Checkbox checked={active} disabled color={"primary"} />
      </TableCell>
      <TableCell
        className={[classes.tableCell, classes.pointerButton].join(" ")}
        numeric
      >
        <Tooltip
          title={"Edit"}
          placement="top"
          enterDelay={400}
          leaveDelay={200}
        >
          <IconButton
            color="primary"
            onClick={e => {
              e.preventDefault();
            }}
            className={"show"}
          >
            <Edit />
          </IconButton>
        </Tooltip>
      </TableCell>
      <TableCell
        className={[classes.tableCell, classes.pointerButton].join(" ")}
        numeric
      >
        <Tooltip
          title={"Delete"}
          placement="top"
          enterDelay={400}
          leaveDelay={200}
        >
          <IconButton
            color="primary"
            onClick={e => {
              e.preventDefault();
              onDeleteProject(project);
            }}
            className={"show"}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

export default compose(
  withStyles(ProjectStyles),
  withWidth()
)(Project);
