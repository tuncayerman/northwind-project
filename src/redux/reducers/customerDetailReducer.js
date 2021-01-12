import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";


export default function customerDetailReducer(state=initialState.customerDetail, action){
    switch (action.type) {
        case actionTypes.SETCUSTOMERDETAIL:
            return action.payload;
        case actionTypes.SETCUSTOMERDETAILBYSORT:
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}