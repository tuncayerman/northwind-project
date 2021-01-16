import * as actionTypes from "./actionType";
import axios from "axios";

export function getProductById(id) {
  return async (dispacth) => {
    return await axios
      .get("https://northwind.now.sh/api/products/" + id)
      .then((response) => {
        dispacth(getProductByIdSuccess(response.data));
      });
  };
}

function getProductByIdSuccess(data) {
  return {
    type: actionTypes.SETPRODUCT,
    payload: data,
  };
}
