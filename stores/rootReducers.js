import { combineReducers } from "redux";
import tabReducer from "./Reducers";

export default combineReducers({
        address: tabReducer,

})