import { connect } from 'react-redux';
import Projects from "../projects";

const mapStateToProps = state => ({
    projectList: state.projectList
});

const ProjectListContainer = connect(
    mapStateToProps,
)(Projects);

export default ProjectListContainer;
