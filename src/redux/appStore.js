import { createStore, combineReducers } from "redux";
import library from "./library";
import playlist from "./playlist";
import playerReducer from "./player";

const allReducer = combineReducers({
  Library: library,
  PlayList: playlist,
  Player: playerReducer,
});

const appstore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default appstore;
