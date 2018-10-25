import {connect} from 'react-redux';
import DeleteDialog from '../presentational/DeleteDialog';
import {deleteProject, hideDeleteDialog} from '../../actions';

const mapStateToProps = state => ({
    project: state.projectDelete.project,
    open: state.projectDelete.open
});

const mapDispatchToProps = dispatch => ({
    handleClose: (accepted, uid) => {
        if (accepted) dispatch(deleteProject(uid));
        dispatch(hideDeleteDialog());
    }
});

const DeleteDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeleteDialog);

export default DeleteDialogContainer;
