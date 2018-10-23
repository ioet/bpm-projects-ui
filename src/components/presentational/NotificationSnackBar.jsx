import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar/Snackbar';
import PropTypes from 'prop-types';
import { SnackbarHideConst } from '../../constants';
import { SnackbarStyles } from '../../styles';

const NotificationSnackBar = props => {
  const {
    classes,
    open,
    handleClose,
    message
  } = props;

  return (
      <Snackbar
          className={classes.snackbar}
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
          }}
          open={open}
          autoHideDuration={SnackbarHideConst.AUTO_HIDE_DURATION}
          onClose={handleClose}
          ContentProps={{
              'aria-describedby': 'message-id',
          }}
          message={(
              <span id="message-id">
          {message}
        </span>
          )}
      />
  );
};

NotificationSnackBar.defaultProps = {
    message: ""
};

NotificationSnackBar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    message: PropTypes.string,
};

export default withStyles(SnackbarStyles)(NotificationSnackBar);
