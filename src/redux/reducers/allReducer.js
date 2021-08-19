import { combineReducers } from "redux";
import mailSelectRed from "./mailSelect";
import searchReducer from "./searchReducer";
import sentReducer from "./sentReducer";
import showMessage from "./showMessageReducer";
import snoozeReducer from "./snoozeReducer";
import starredReducer from "./starredReducer";

const allReducers = combineReducers({
  searchReducer,
  starredReducer,
  snoozeReducer,
  sentReducer,
  showMessage,
  mailSelectRed
});

export default allReducers;
