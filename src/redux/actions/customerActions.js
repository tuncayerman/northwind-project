import * as actionTypes from "./actionType";
import axios from "axios";
import {addLineNumber} from "../../utils/editData";

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

export function getBaseCustomers() {
  let url = "";
  return async (dispatch) => {
    return await axios
      .get("https://northwind.now.sh/api/customers")
      .then(function (response) {
        dispatch(getBaseCustomersSuccess(response.data));
      });
  };
}

export function getCustomerDetail(id){
  return async (dispatch) =>{
    return await axios
      .get("https://northwind.now.sh/api/customers/"+id,{
        headers: {"Access-Control-Allow-Origin": "*"}

      })
      .then(function (response){
        dispatch(getCustomerDetailSuccess(response.data))
      });
  }
}




export function getCustomersSuccess(data) {
  return {
    type: actionTypes.SETGENERALDATA,
    payload: addLineNumber(data),
  };
}


export function getBaseCustomersSuccess(data) {
  return {
    type: actionTypes.SETCUSTOMER,
    payload: data
  };
}



export function getCustomerDetailSuccess(data){
  return {
    type: actionTypes.SETCUSTOMERDETAIL,
    payload: data,
  };
}

export function setCustomerDetail(data){
  return {
    type: actionTypes.SETCUSTOMERDETAILBYSORT,
    payload: data,
  };
}
