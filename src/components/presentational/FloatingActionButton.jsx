import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button/Button";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import { ProjectListConst } from "../../constants";
import { withStyles } from "@material-ui/core";
import { Add, Clear } from "@material-ui/icons";
import { FabStyles } from "../../styles";

const FloatingActionButton = props => {
  const { classes, create, createProject } = props;

  return (
    <Tooltip
      title={create ? ProjectListConst.TOOLTIP_CANCEL : ProjectListConst.TOOLTIP_NEW}
      placement="left"
      enterDelay={400}
      leaveDelay={200}
    >
      <Button
        variant="fab"
        className={classes.fab}
        color="secondary"
        onClick={e => {
          e.preventDefault();
          createProject(create);
        }}
      >
        {create ? <Clear /> : <Add />}
      </Button>
    </Tooltip>
  );
};

FloatingActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
  create: PropTypes.bool.isRequired,
  createProject: PropTypes.func.isRequired
};

export default withStyles(FabStyles)(FloatingActionButton);
