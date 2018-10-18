import { connect } from "react-redux";
import Project from "../project";
import {
  editProject,
  setProjectEditData,
  deleteProject,
  hoverOver,
  hoverOut
} from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  project: ownProps.project,
  editId: state.projectEdit.uid === undefined ? "" : state.projectEdit.uid,
  counter: ownProps.counter
});

const mapDispatchToProps = dispatch => ({
  onEditProject: project => {
    dispatch(editProject(project));
  },
  onChange: ({ target }) => {
    const field = target.name;
    const value = target.value || target.checked;
    dispatch(setProjectEditData(field, value));
  },
  onDeleteProject: project => {
    dispatch(deleteProject(project));
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
)(Project);

export default ProjectItemContainer;
