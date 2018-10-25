import {DeleteActions, UserActions, SnackBarMessageActions, HoverActions} from "./action-types";
import { ProjectsAPI, SnackBarMessageConst } from "./constants";
import { newProject } from "./components/utils/utils";
import axios from "./components/utils/axios";
import { validateField } from "./components/utils/utils";

const displayProjects = projects => ({
  type: UserActions.GET_PROJECTS,
  projectList: projects
});

const addProject = project => ({
  type: UserActions.ADD_PROJECT,
  project
});

const removeProject = uid => ({
  type: UserActions.DELETE,
  uid
});

export const startEditProject = projectId => ({
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

const setUpdateProject = project => ({
    type: UserActions.UPDATE,
    project
});

export const showSnackBarMessage = message => ({
  type: SnackBarMessageActions.MESSAGE,
  open: true,
  message
});

export const hideSnackBarMessage = () => ({
  type: SnackBarMessageActions.MESSAGE,
  open: false,
  message: ""
});

export const showDeleteDialog = project => ({
  type: DeleteActions.SHOW_MESSAGE,
  open: true,
  project
});

export const hideDeleteDialog = () => ({
  type: DeleteActions.HIDE_MESSAGE,
  open: false
});

export const hoverOver = id => ({
    type: HoverActions.OVER,
    id
});

export const hoverOut = () => ({
    type: HoverActions.OUT
});

export const clearEdit = uid => (dispatch, getState) => {
  dispatch(showSnackBarMessage(`${SnackBarMessageConst.DISCARDED}`));
  const editId = getState().projectEdit.uid;
  if (editId === newProject().uid) return dispatch(endCreateProject());
  if (editId === uid) return dispatch(endEditProject());
};



export const handleDoneButton = project => (dispatch, getState) => {
  const projectEditId = getState().projectEdit.uid;
  if (projectEditId !== undefined) {
    if (projectEditId === newProject().uid) return dispatch(createProject());
    if (projectEditId === project.uid) return dispatch(updateProject(project));
  }
};

export const getAllProjects = () => dispatch =>
  axios
    .get(ProjectsAPI.PATH)
    .then(response => dispatch(displayProjects(response.data)))
    .catch(err => dispatch(showSnackBarMessage(`${SnackBarMessageConst.FAIL_LOAD_PROJECTS}: ${err}`)));

export const createProject = () => (dispatch, getState) => {
  let { short_name, comments, active } = getState().projectEdit;
  if (comments === undefined) comments = "";
  if (active === undefined) active = false;

  if(validateField(short_name)) {
      return axios
          .post(`${ProjectsAPI.PATH}/`, {
              short_name,
              comments,
              active
          })
          .then(res => {
              dispatch(endCreateProject());
              dispatch(addProject(res.data));
              dispatch(showSnackBarMessage(`${SnackBarMessageConst.PROJECT_CREATED}`));
          })
          .catch(err => {
              const {message} = err.response.data;
              message ?
                  dispatch(showSnackBarMessage(`${SnackBarMessageConst.FAIL_CREATE_PROJECT}: ${message}`)) :
                  dispatch(showSnackBarMessage(`${SnackBarMessageConst.FAIL_CREATE_PROJECT}: ${err}`));
          });
  } else {
      dispatch(showSnackBarMessage(`${SnackBarMessageConst.INVALID_DATA}`))
  }
};

const updateProject = project => (dispatch, getState) => {
  const { uid } = getState().projectEdit;
  let { short_name, comments, active } = getState().projectEdit;
  if (short_name === undefined) short_name = project.short_name;
  if (comments === undefined) comments = project.comments;
  if (active === undefined) active = project.active;

  if(validateField(short_name)) {
    return axios
      .put(`${ProjectsAPI.PATH}/${uid}`, {
        short_name,
        comments,
        active
      })
      .then(res => {
        dispatch(setUpdateProject(res.data));
        dispatch(endEditProject());
        dispatch(showSnackBarMessage(`${SnackBarMessageConst.PROJECT_UPDATED}: ${short_name}`));
      })
      .catch(err => dispatch(showSnackBarMessage(`${SnackBarMessageConst.FAIL_UPDATE_PROJECT}: ${err}`)));
  } else {
      dispatch(showSnackBarMessage(`${SnackBarMessageConst.INVALID_DATA}`))
  }
};

export const deleteProject = uid => (dispatch =>
  axios
    .delete(`${ProjectsAPI.PATH}/${uid}`)
    /*.then(() => dispatch(removeProject(uid)))*/ //CHECK THIS PART
    .catch(err => dispatch(showSnackBarMessage(`${SnackBarMessageConst.FAIL_DELETE_PROJECT}: ${err}`)))
    .then(() => {
      dispatch(removeProject(uid));
        dispatch(showSnackBarMessage(`${SnackBarMessageConst.PROJECT_DELETED}`));
    })
);
