import { connect } from "react-redux";
import NotificationSnackBar from "../presentational/NotificationSnackBar";
import { hideSnackBarMessage } from "../../actions";

const mapStateToProps = state => ({
    open: state.message.open,
    message: state.message.message,
});

const mapDispatchToProps = dispatch => ({
    handleClose: () => {
        dispatch(hideSnackBarMessage());
    },
});

const NotificationSnackBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationSnackBar);

export default NotificationSnackBarContainer;
