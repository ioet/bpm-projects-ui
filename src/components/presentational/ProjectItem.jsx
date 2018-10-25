import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TextFieldForm from "./common/TextFieldForm"
import Typography from "@material-ui/core/Typography/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import { ProjectListConst } from "../../constants";
import withStyles from "@material-ui/core/styles/withStyles";
import { Clear, Delete, Done, Edit } from "@material-ui/icons";
import { ProjectStyles } from "../../styles";
import FieldButton from "./common/FieldButton";

const ProjectItem = props => {
  const {
    onDeleteProject,
    onEditProject,
    onClearProject,
    onDoneAction,
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
      onMouseOver={e => {
        e.preventDefault();
        onMouseOver(uid);
      }}
      onMouseOut={onMouseOut}
    >
      <TableCell className={classes.tableCell} component="td" scope="row">
        <Typography variant="h6">{counter}</Typography>
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        {editId === uid ? (
          <TextFieldForm
              name="short_name"
              defaultValue={short_name}
              label="Project Name"
              onChange={e => {
                e.preventDefault();
                onChange(e);
              }}
          />
        ) : (
          <Typography variant="subtitle1">{short_name}</Typography>
        )}
      </TableCell>
      <TableCell className={classes.tableCell} component="td" scope="row">
        {editId === uid ? (
            <TextFieldForm
                name="comments"
                defaultValue={comments}
                label="Comments"
                multiline={true}
                onChange={e => {
                    e.preventDefault();
                    onChange(e);
                }}
            />
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
          {editId === uid
            ? <FieldButton
                  title={ProjectListConst.TOOLTIP_UPDATE}
                  icon={<Done />}
                  onClick={e => {
                      e.preventDefault();
                      onDoneAction(project);
                  }}
              />
            : <FieldButton
                  title={ProjectListConst.TOOLTIP_EDIT}
                  icon={<Edit />}
                  onClick={e => {
                      e.preventDefault();
                      onEditProject(project.uid);
                  }}
              />
          }
      </TableCell>
      <TableCell
        className={[classes.tableCell, classes.pointerButton].join(" ")}
        numeric
      >
          {editId === uid
            ? <FieldButton
                  title={ProjectListConst.TOOLTIP_CLEAR}
                  icon={<Clear />}
                  onClick={e => {
                      e.preventDefault();
                      onClearProject(project.uid);
                  }}
              />
              : <FieldButton
                  title={ProjectListConst.TOOLTIP_DELETE}
                  icon={<Delete />}
                  onClick={e => {
                      e.preventDefault();
                      onDeleteProject(project);
                  }}
              />
          }
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
