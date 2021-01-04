import * as actionTypes from "./actionType"
import axios from "axios"


export function getOrders(){
    return async (dispacth) => {
        return await axios
        .get("https://northwind.now.sh/api/orders")
        .then((response)=>{dispacth(getOrdersSuccess(response.data))})
    }
}

function getOrdersSuccess(data){
    return{
        type: actionTypes.SETTABLEDATA,
        payload: data
    }
}