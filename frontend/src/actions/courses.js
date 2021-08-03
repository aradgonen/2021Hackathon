import { SET_COURSES } from "./types";

export const setCourses = (courses) => ({
  type: SET_COURSES,
  payload: courses,
});
