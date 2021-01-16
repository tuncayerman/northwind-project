import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function customerReducer(
  state = initialState.customers,
  action
) {
  switch (action.type) {
    case actionTypes.SETCUSTOMER:
      return action.payload;
    default:
      return state;
  }
}
