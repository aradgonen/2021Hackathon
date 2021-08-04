import { SET_SK } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case SET_SK:
        return payload;
      default:
        return state;
    }
}