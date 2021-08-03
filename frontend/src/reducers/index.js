import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import courses from "./courses";
import search from "./search";
export default combineReducers({
  auth,
  message,
  courses,
  search,
});
