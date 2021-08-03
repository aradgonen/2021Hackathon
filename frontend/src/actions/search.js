import { SET_SEARCH } from "./types";

export const setSearchTerm = (term) => ({
  type: SET_SEARCH,
  payload: term,
});
