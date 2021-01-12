import * as actionTypes from "./actionType"

export function setCurrentPage(data){
    return{
        type:actionTypes.SETCURRENTPAGE,
        payload:data
    }
}

export function setCurrentShowCount(data){
    return{
        type:actionTypes.SETCURRENTSHOWCOUNT,
        payload:data
    }
}