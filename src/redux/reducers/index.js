import {combineReducers} from "redux";
import customerReducer from "./customerReducer";
import orderListReducer from "./orderListReducer"
import currentShowCountReducer from "./currentShowCountReducer"
import tableDataReducer from "./tableDataReducer"

const rootReducer = combineReducers({
    customerReducer,
    orderListReducer,
    currentShowCountReducer,
    tableDataReducer,
    
})


export default rootReducer;