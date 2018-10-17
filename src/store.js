import {applyMiddleware,  compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //To use REDUX extension

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
