import axios from "axios";
import { UserActions } from "./action-types";
import { ProjectsAPI } from "./constants";

axios.defaults.baseURL = process.env.REACT_APP_BPM_PROJECTS_API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Token"] =
    process.env.REACT_APP_BPM_PROJECTS_ACCESS_TOKEN;

const addProjects = projects => ({
    type: UserActions.GET_PROJECTS,
    projectList: projects
});

export const getAllProjects = () => (
    dispatch =>
    axios
        .get(ProjectsAPI.PATH)
        .then(response => dispatch(addProjects(response.data)))
        .catch(err => console.log(err))
);

export const hoverOver = id => ({
    type: "HOVER_OVER",
    id,
});

export const hoverOut = () => ({
    type: "HOVER_OUT",
});
