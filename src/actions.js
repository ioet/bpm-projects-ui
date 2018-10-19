import axios from "axios";
import { UserActions } from "./action-types";
import { ProjectsAPI } from "./constants";
import { newProject } from "./components/utils/utils";

axios.defaults.baseURL = process.env.REACT_APP_BPM_PROJECTS_API_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Token"] =
  process.env.REACT_APP_BPM_PROJECTS_ACCESS_TOKEN;

const displayProjects = projects => ({
  type: UserActions.GET_PROJECTS,
  projectList: projects
});

const addProject = project => ({
  type: UserActions.ADD_PROJECT,
  project
});

const removeUser = project => ({
  type: UserActions.DELETE,
  project
});

const startEditProject = projectId => ({
  type: UserActions.EDIT_START,
  uid: projectId
});

const endEditProject = () => ({
  type: UserActions.EDIT_END
});

export const startCreateProject = () => ({
  type: UserActions.CREATE_START
});

export const endCreateProject = () => ({
  type: UserActions.CREATE_END
});

export const setProjectEditData = (field, value) => ({
  type: UserActions.EDIT_DATA,
  field,
  value
});

export const clearEdit = project => (dispatch, getState) => {
  const editId = getState().projectEdit.uid;
  if (editId === newProject().uid) return dispatch(endCreateProject());
  if (editId === project.uid) return dispatch(endEditProject());
};

const setUpdateProject = project => ({
  type: UserActions.UPDATE,
  project
});

export const editProject = project => (dispatch, getState) => {
  const projectEditId = getState().projectEdit.uid;
  if (projectEditId !== undefined) {
    if (projectEditId === project.uid) {
      if (projectEditId === newProject().uid) return dispatch(createProject());
      return dispatch(updateProject(project));
    }
  }
  return dispatch(startEditProject(project.uid));
};

export const getAllProjects = () => dispatch =>
  axios
    .get(ProjectsAPI.PATH)
    .then(response => dispatch(displayProjects(response.data)))
    .catch(err => console.log(err));

const createProject = () => (dispatch, getState) => {
  let { short_name, comments, active } = getState().projectEdit;
  if (comments === undefined) comments = "";
  if (active === undefined) active = false;
  return axios
    .post(`${ProjectsAPI.PATH}/`, {
      short_name,
      comments,
      active
    })
    .then(res => {
      console.log(res);
      dispatch(endCreateProject());
      dispatch(addProject(res.data));
    })
    .catch(err => console.log(err));
};

const updateProject = project => (dispatch, getState) => {
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
      dispatch(setUpdateProject(res.data));
      dispatch(endEditProject());
    })
    .catch(err => console.log(err));
};

export const deleteProject = project => dispatch =>
  axios
    .delete(`${ProjectsAPI.PATH}/${project.uid}`)
    .then(() => {
      dispatch(removeUser(project));
    })
    .catch(err => console.log(err));

export const hoverOver = id => ({
  type: "HOVER_OVER",
  id
});

export const hoverOut = () => ({
  type: "HOVER_OUT"
});
