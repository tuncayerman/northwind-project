import * as actionTypes from "./actionType";
import axios from "axios";
import { addLineNumber } from "../../utils/editData";

export function getOrders() {
  return async (dispacth) => {
    return await axios
      .get("https://northwind.now.sh/api/orders")
      .then((response) => {
        dispacth(getOrdersSuccess(response.data));
      });
  };
}

function getOrdersSuccess(data) {
  return {
    type: actionTypes.SETGENERALDATA,
    payload: addLineNumber(data),
  };
}

export function getBaseOrders() {
  return async (dispatch) => {
    return await axios
      .get("https://northwind.now.sh/api/orders")
      .then(function (response) {
        dispatch(getBaseOrdersSuccess(response.data));
      });
  };
}

function getBaseOrdersSuccess(data) {
  return {
    type: actionTypes.SETORDER,
    payload: data,
  };
}

export function getOrderDetail(id) {
  return async (dispatch) => {
    return await axios
      .get("https://northwind.now.sh/api/orders/" + id, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then(function (response) {
        dispatch(getOrderDetailSuccess(response.data));
      });
  };
}

function getOrderDetailSuccess(data) {
  return {
    type: actionTypes.SETORDERDETAIL,
    payload: data,
  };
}

export function setOrderDetail(data) {
  return {
    type: actionTypes.SETORDERDETAILBYSORT,
    payload: data,
  };
}
