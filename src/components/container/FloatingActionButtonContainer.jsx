import { connect } from "react-redux";
import { startCreateProject, endCreateProject } from "../../actions";
import FloatingActionButton from "../presentational/FloatingActionButton";

const mapStateToProps = state => ({
  create: state.projectEdit.create
});

const mapDispatchToProps = dispatch => ({
  createProject: create => {
    document.documentElement.scrollTop = 0;
    dispatch(!create ? startCreateProject() : endCreateProject());
  }
});

const FloatingActionButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FloatingActionButton);

export default FloatingActionButtonContainer;
