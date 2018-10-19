import { combineReducers } from "redux";
import { UserActions, HoverActions } from "./action-types";
import { newProject } from "./components/utils/utils";

const project = (state, action) => {
  switch (action.type) {
    case UserActions.CREATE_START:
      return newProject();
    default:
      return state;
  }
};

const projectList = (state = [], action) => {
  const clone = [...state];
  switch (action.type) {
    case UserActions.GET_PROJECTS:
      /*const projectList = {};
      action.projectList.forEach(element => {
        projectList[element.uid] = element;
      });*/
      return [...state, ...action.projectList];
    case UserActions.UPDATE:
      for (let i = 0; i < clone.length; i++) {
        if (clone[i].uid === action.project.uid) {
          clone[i] = action.project;
          break;
        }
      }
      return [...clone];
    case UserActions.CREATE_START:
      return [project(undefined, action), ...state];
    case UserActions.CREATE_END:
      clone.shift();
      return [...clone];
    case UserActions.ADD_PROJECT:
      return [...action.project, ...clone];
    case UserActions.DELETE:
      console.log("delete", action.project);
      for (let i = 0; i < clone.length; i++) {
        if (clone[i].uid === action.project.uid) {
          clone.splice(i, 1);
          break;
        }
      }
      return [...clone];
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
  projectEdit,
  hover
});

export default rootReducer;
