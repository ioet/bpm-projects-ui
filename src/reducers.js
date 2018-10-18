import { combineReducers } from "redux";
import { UserActions, HoverActions } from "./action-types";

const projectList = (state = [], action) => {
  const clone = [...state];
  switch (action.type) {
    case UserActions.GET_PROJECTS:
      return [...state, ...action.projectList];
    case UserActions.DELETE:
      for (let i = 0; i < clone.length; i++) {
        if (clone[i].uid === action.project.uid) {
          clone.splice(i, 1);
          break;
        }
      }
      return [...clone];
    case UserActions.UPDATE:
      console.log(action);
      for (let i = 0; i < clone.length; i++) {
        if (clone[i].uid === action.project.uid) {
          clone[i] = action.project;
          break;
        }
      }
      return [...clone];
    default:
      return state;
  }
};

const projectEdit = (state = { create: false, update: false }, action) => {
  switch (action.type) {
    case UserActions.EDIT_START:
      return {
        uid: action.uid,
        create: false,
        update: true
      };
    case UserActions.EDIT_DATA:
      console.log(action);
      return {
        ...state,
        [action.field]: action.value
      };
    /*case UserActions.TOGGLE_ACTIVE:
      return {
        ...state,
        active: !action.active
      };*/
    case UserActions.EDIT_END:
      return {
        create: false,
        update: false,
        short_name: null,
        comments: null,
        active: null
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
  projectEdit,
  hover
});

export default rootReducer;
