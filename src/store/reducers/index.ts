import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";

const rootReducer: any = combineReducers({
  AuthReducer,
});

export default rootReducer;
