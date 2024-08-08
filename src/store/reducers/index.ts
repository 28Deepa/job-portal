import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import FreelancerReducer from "./FreelancerReducer";

const rootReducer: any = combineReducers({
  AuthReducer,
  FreelancerReducer,
});

export default rootReducer;
