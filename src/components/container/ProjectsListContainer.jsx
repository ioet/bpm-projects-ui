import { connect } from "react-redux";
import ProjectsList from "../presentational/ProjectsList";

const mapStateToProps = state => ({
  projectList: state.projectList
});

const ProjectListContainer = connect(mapStateToProps)(ProjectsList);

export default ProjectListContainer;
