import { connect } from "react-redux";
import ProjectItem from "../presentational/ProjectItem";
import {
    startEditProject,
    handleDoneButton,
    setProjectEditData,
    showDeleteDialog,
    clearEdit,
    hoverOver,
    hoverOut
} from "../../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    project: {
      ...ownProps.project,
      active:
        ownProps.project.uid === state.projectEdit.uid &&
        state.projectEdit.active !== undefined
          ? state.projectEdit.active
          : ownProps.project.active
    },
    editId: state.projectEdit.uid === undefined ? "" : state.projectEdit.uid,
    counter: ownProps.counter
  };
};

const mapDispatchToProps = dispatch => ({
  onEditProject: uid => {
    dispatch(startEditProject(uid));
  },
  onDoneAction: project => {
    dispatch(handleDoneButton(project));
  },
  onChange: ({ target }) => {
    dispatch(setProjectEditData(target.name, target.value));
  },
  onToggleActive: checked => {
    dispatch(setProjectEditData("active", checked));
  },
  onClearProject: uid => {
      dispatch(clearEdit(uid))
  },
  onDeleteProject: (project) => {dispatch(showDeleteDialog(project));
  },
  onMouseOver: id => {
    dispatch(hoverOver(id));
  },
  onMouseOut: () => {
    dispatch(hoverOut());
  }
});

const ProjectItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectItem);

export default ProjectItemContainer;
