import {combineReducers} from "redux";
import customerReducer from "./customerReducer";
import orderListReducer from "./orderListReducer"
import currentShowCountReducer from "./currentShowCountReducer"
import tableDataReducer from "./tableDataReducer"
import currentPageReducer from "./currentPageReducer";

const rootReducer = combineReducers({
    customerReducer,
    orderListReducer,
    currentShowCountReducer,
    tableDataReducer,
    currentPageReducer,
    
})


export default rootReducer;