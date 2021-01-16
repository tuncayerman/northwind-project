import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function currentShowCountReducer(
  state = initialState.currentShowCount,
  action
) {
  switch (action.type) {
    case actionTypes.SETCURRENTSHOWCOUNT:
      return action.payload;
    default:
      return state;
  }
}
