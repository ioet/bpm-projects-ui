import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TextField from "@material-ui/core/TextField/TextField";
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
    onEditProject,
    onMouseOver,
    onMouseOut,
    onChange,
    project,
    editId,
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
        <Typography variant="h6">{counter}</Typography>
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        {editId === uid ? (
          <form>
            <TextField
              name="short_name"
              defaultValue={short_name}
              label="Project Name"
              id="mui-theme-provider-input"
              onChange={e => {
                e.preventDefault();
                onChange(e);
              }}
            />
          </form>
        ) : (
          <Typography variant="subtitle1">{short_name}</Typography>
        )}
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        {editId === uid ? (
          <form>
            <TextField
              name="comments"
              defaultValue={comments}
              label="Comments"
              id="mui-theme-provider-input"
              multiline={true}
              onChange={e => {
                e.preventDefault();
                onChange(e);
              }}
            />
          </form>
        ) : (
          <Typography variant="subtitle1">{comments}</Typography>
        )}
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        <Checkbox
          name="active"
          checked={active}
          disabled={editId !== uid}
          color={"primary"}
          onClick={e => {
            e.preventDefault();
            onChange(e);
          }}
        />
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
              onEditProject(project);
            }}
            className={"show"}
          >
            {editId === uid ? <Done /> : <Edit />}
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
            {editId === uid ? <Clear /> : <Delete />}
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  editId: PropTypes.string.isRequired,
  classes: PropTypes.any.isRequired,
  width: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onEditProject: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onDeleteProject: PropTypes.func.isRequired
};

export default compose(
  withStyles(ProjectStyles),
  withWidth()
)(Project);
