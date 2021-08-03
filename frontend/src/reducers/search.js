import { SET_SEARCH } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) { 
    const { type, payload } = action;
    switch (type) {
      case SET_SEARCH:
        return payload;
      default:
        return "";
    }
}