import * as actionTypes from "./actionType";
import axios from "axios";

export function getCustomers() {
  let url = "";
  return async (dispatch) => {
    return await axios
      .get("https://northwind.now.sh/api/customers")
      .then(function (response) {
        dispatch(getCustomersSuccess(response.data));
      });
  };
}

export function getCustomersSuccess(data) {
  return {
    type: actionTypes.SETCUSTOMER,
    payload: data,
  };
}
