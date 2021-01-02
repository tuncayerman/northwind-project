import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function orderListReducer(state=initialState.order,action){
    switch(action.type){
        case actionTypes.SETORDER:
            return action.payload
        default:
            return state
    }
}