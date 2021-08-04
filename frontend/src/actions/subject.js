import { SET_SUBJECT } from "./types";

export const setSubjects = (subjects) => ({
  type: SET_SUBJECT,
  payload: subjects,
});
