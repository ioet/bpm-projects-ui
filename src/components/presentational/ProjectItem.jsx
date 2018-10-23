import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { ProjectListConst } from "../../constants";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import { Clear, Delete, Done, Edit } from "@material-ui/icons";
import { ProjectStyles } from "../../styles";

const ProjectItem = props => {
  const {
    onDeleteProject,
    onEditProject,
    onToggleActive,
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
            onToggleActive(!active);
          }}
        />
      </TableCell>
      <TableCell
        className={[classes.tableCell, classes.pointerButton].join(" ")}
        numeric
      >
        <Tooltip
          title={editId !== uid ? ProjectListConst.TOOLTIP_EDIT : ProjectListConst.TOOLTIP_UPDATE}
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
          title={editId !== uid ? ProjectListConst.TOOLTIP_DELETE : ProjectListConst.TOOLTIP_CLEAR}
          placement="top"
          enterDelay={400}
          leaveDelay={200}
        >
          <IconButton
            color="primary"
            onClick={e => {
              e.preventDefault();
              onDeleteProject(project, editId);
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

ProjectItem.propTypes = {
  project: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    short_name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    comments: PropTypes.string
  }).isRequired,
  counter: PropTypes.number.isRequired,
  editId: PropTypes.string.isRequired,
  classes: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  onEditProject: PropTypes.func.isRequired,
  onToggleActive: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onDeleteProject: PropTypes.func.isRequired
};

export default withStyles(ProjectStyles)(ProjectItem);
