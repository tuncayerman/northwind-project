import initialState from "./initialState";
import * as actionTypes from "../actions/actionType";
export default function tableDataReducer(
  state = initialState.tableData,
  action
) {
  switch (action.type) {
    case actionTypes.SETTABLEDATA:
      return action.payload;
    default:
      return state;
  }
}
