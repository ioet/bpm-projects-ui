import { connect } from 'react-redux';
import Project from "../project";
import { hoverOver, hoverOut } from "../../actions";

const mapStateToProps = (state, ownProps) =>({
     project: ownProps.project
});

const mapDispatchToProps = dispatch => ({
    onMouseOver: id => {
        dispatch(hoverOver(id))
    },
    onMouseOut: () => {
        dispatch(hoverOut());
    }
});

const ProjectItemContainer = connect(
    mapStateToProps(),
    mapDispatchToProps()
)(Project);

export default ProjectItemContainer;
