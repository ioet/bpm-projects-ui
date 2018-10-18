import { combineReducers } from "redux";
import { UserActions } from "./action-types";

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
    default:
      return state;
  }
};

const anotherReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const hover = (state = { hover: false }, action) => {
  switch (action.type) {
    case "HOVER_OVER":
      return {
        hover: true,
        id: action.id
      };
    case "HOVER_OUT":
      return {
        hover: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  projectList,
  anotherReducer,
  hover
});

export default rootReducer;
