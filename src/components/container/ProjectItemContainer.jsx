import { connect } from "react-redux";
import ProjectItem from "../presentational/ProjectItem";
import {
  editProject,
  setProjectEditData,
  deleteProject,
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
        typeof state.projectEdit.active !== "undefined"
          ? state.projectEdit.active
          : ownProps.project.active
    },
    editId: state.projectEdit.uid === undefined ? "" : state.projectEdit.uid,
    counter: ownProps.counter
  };
};

const mapDispatchToProps = dispatch => ({
  onEditProject: project => {
    dispatch(editProject(project));
  },
  onChange: ({ target }) => {
    dispatch(setProjectEditData(target.name, target.value));
  },
  onToggleActive: checked => {
    dispatch(setProjectEditData("active", checked));
  },
  onDeleteProject: (project, editId) => {
    project.uid === editId
      ? dispatch(clearEdit(project))
      : dispatch(deleteProject(project.uid));
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
