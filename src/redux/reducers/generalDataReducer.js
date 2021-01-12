import * as actionTypes from "../actions/actionType";
import initialState from "./initialState";

export default function generalDataReducer(state=initialState.generalData,action){
    switch(action.type){
        case actionTypes.SETGENERALDATA:
            return action.payload;
        default:
            return state;
        }
}