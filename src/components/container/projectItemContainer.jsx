import { connect } from "react-redux";
import Project from "../project";
import { deleteProject, hoverOver, hoverOut } from "../../actions";

const mapStateToProps = (state, ownProps) => ({
  project: ownProps.project,
  counter: ownProps.counter
});

const mapDispatchToProps = dispatch => ({
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
