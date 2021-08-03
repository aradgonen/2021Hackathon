import { SET_COURSES } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case SET_COURSES:
        return payload;
      default:
        return state;
    }
}