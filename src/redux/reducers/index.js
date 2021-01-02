import {combineReducers} from "redux";
import customerReducer from "./customerReducer";
import orderListReducer from "./orderListReducer"
import currentShowCountReducer from "./currentShowCountReducer"

const rootReducer = combineReducers({
    customerReducer,
    orderListReducer,
    currentShowCountReducer
})


export default rootReducer;