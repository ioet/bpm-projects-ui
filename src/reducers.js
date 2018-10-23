import { combineReducers } from "redux";
import { UserActions, HoverActions, DeleteActions, SnackBarMessageActions } from "./action-types";
import { newProject } from "./components/utils/utils";

const message = (state = { open: false }, action) => {
    switch (action.type) {
        case SnackBarMessageActions.MESSAGE:
            return ({
                open: action.open,
                message: action.message,
            });
        default:
            return state;
    }
};

const project = (state, action) => {
  switch (action.type) {
    case UserActions.CREATE_START:
      return newProject();
    default:
      return state;
  }
};

const projectList = (state = {}, action) => {
  const clone = {...state};
  switch (action.type) {
    case UserActions.GET_PROJECTS:
      const projectList = {};
      action.projectList.forEach(element => projectList[element.uid] = element);
      return {...projectList};
    case UserActions.UPDATE:
      clone[action.project.uid] = action.project;
      return {...clone};
    case UserActions.CREATE_START:
      const newState = project(undefined, action);
      clone[newState.uid] = newState;
      return {...clone};
    case UserActions.CREATE_END:
        delete clone["tbs"];
      return {...clone};
    case UserActions.ADD_PROJECT:
      clone[action.project.uid] = action.project;
      return {...clone};
    case UserActions.DELETE:
      delete clone[action.uid];
      return {...clone};
    default:
      return state;
  }
};

const projectEdit = (state = { update: false, create: false }, action) => {
  switch (action.type) {
    case UserActions.CREATE_START:
      return {
        uid: newProject().uid,
        create: true,
        update: false
      };
    case UserActions.EDIT_START:
      return {
        uid: action.uid,
        update: true,
        create: false
      };
    case UserActions.EDIT_DATA:
      return {
        ...state,
        [action.field]: action.value
      };
    case UserActions.EDIT_END:
      return {
        short_name: null,
        comments: null,
        active: false,
        update: false,
        create: false
      };
    case UserActions.CREATE_END:
      return {
        short_name: null,
        comments: null,
        active: false,
        update: false,
        create: false
      };
    default:
      return state;
  }
};

/*const projectCreate = (state = { create: false }, action) => {
  switch (action.type) {
    case UserActions.CREATE_START:
      return [project(undefined, action), ...state];
    case UserActions.CREATE_DATA:

    case UserActions.CREATE_END:

    default:
      return state;
  }
};*/

const projectDelete = (state = { open: false, project: {} }, action) => {
  switch (action.type) {
      case DeleteActions.SHOW_MESSAGE:
        return {
          open: action.open,
          project: action.project
        };
      case DeleteActions.HIDE_MESSAGE:
        return {
          open: false,
          project: {}
        };
      default:
        return state;
  }
};

const hover = (state = { hover: false }, action) => {
  switch (action.type) {
    case HoverActions.OVER:
      return {
        hover: true,
        id: action.id
      };
    case HoverActions.OUT:
      return {
        hover: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  projectList,
  /*projectCreate,*/
  projectDelete,
  projectEdit,
  message,
  hover
});

export default rootReducer;
