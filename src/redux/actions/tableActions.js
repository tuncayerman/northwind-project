import * as actionTypes from "./actionType";
export function setTableData(data) {
  return {
    type: actionTypes.SETTABLEDATA,
    payload: data,
  };
}
