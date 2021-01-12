import {combineReducers} from "redux";
import customerReducer from "./customerReducer";
import orderListReducer from "./orderListReducer";
import currentShowCountReducer from "./currentShowCountReducer";
import tableDataReducer from "./tableDataReducer";
import currentPageReducer from "./currentPageReducer";
import genralDataReducer from "./generalDataReducer";
import customerDetailReducer from "./customerDetailReducer";
import orderDetailReducer from "./orderDetailReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    customerReducer,
    orderListReducer,
    currentShowCountReducer,
    tableDataReducer,
    currentPageReducer,
    genralDataReducer,
    customerDetailReducer,
    orderDetailReducer,
    productReducer,
})


export default rootReducer;