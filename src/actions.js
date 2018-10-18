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

const removeUser = project => ({
  type: UserActions.DELETE,
  project
});

const startEditProject = projectId => ({
  type: UserActions.EDIT_START,
  uid: projectId
});

export const setProjectEditData = (field, value) => ({
  type: UserActions.EDIT_DATA,
  field,
  value
});

/*export const setActiveData = active => ({
  type: UserActions.TOGGLE_ACTIVE,
  active
});*/

const endEditProject = () => ({
  type: UserActions.EDIT_END
});

const setUpdateProject = project => ({
  type: UserActions.UPDATE,
  project
});

const updateProject = project => (dispatch, getState) => {
  console.log(project);
  const { uid } = getState().projectEdit;
  let { short_name, comments, active } = getState().projectEdit;
  if (short_name === undefined) short_name = project.short_name;
  if (comments === undefined) comments = project.comments;
  if (active === undefined) active = project.active;

  return axios
    .put(`${ProjectsAPI.PATH}/${uid}`, {
      short_name,
      comments,
      active
    })
    .then(res => {
      console.log(res);
      dispatch(setUpdateProject(project));
      dispatch(endEditProject());
    })
    .catch(err => console.log(err));
};

export const editProject = project => (dispatch, getState) => {
  const projectEditId = getState().projectEdit.uid;
  if (projectEditId !== undefined) {
    if (projectEditId === project.uid) {
      return dispatch(updateProject(project));
    }
  }
  return dispatch(startEditProject(project.uid));
};

export const deleteProject = project => dispatch =>
  axios
    .delete(`${ProjectsAPI.PATH}/${project.uid}`)
    .then(dispatch(removeUser(project)))
    .catch(err => console.log(err));

export const getAllProjects = () => dispatch =>
  axios
    .get(ProjectsAPI.PATH)
    .then(response => dispatch(addProjects(response.data)))
    .catch(err => console.log(err));

export const hoverOver = id => ({
  type: "HOVER_OVER",
  id
});

export const hoverOut = () => ({
  type: "HOVER_OUT"
});
