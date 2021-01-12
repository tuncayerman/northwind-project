import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";


export default function orderDetailReducer(state=initialState.orderDetail, action){
    switch (action.type) {
        case actionTypes.SETORDERDETAIL:
            return action.payload;
        case actionTypes.SETORDERDETAILBYSORT:
            console.log(action.payload)
            state = action.payload;
            return state;
        default:
            return state;
    }
}