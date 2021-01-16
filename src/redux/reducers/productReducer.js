import initialState from "./initialState";
import * as actionTypes from "../actions/actionType";
export default function tableDataReducer(state = initialState.product, action) {
  switch (action.type) {
    case actionTypes.SETPRODUCT:
      return action.payload;
    default:
      return state;
  }
}
