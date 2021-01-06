import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function currentPageReducer(state=initialState.currentPage,action){
    switch(action.type){
        case actionTypes.SETCURRENTPAGE:
            return action.payload;
        default:
            return state;
    }
}