import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { eventsReducer } from "./reducers/eventsReducer";
import thunk from "redux-thunk";

export const store = createStore(
  combineReducers({
    events: eventsReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
