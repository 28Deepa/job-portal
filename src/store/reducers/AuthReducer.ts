import {
  UPDATE_LOGGED_IN_STATUS,
  UPDATE_LOGGED_IN_USER_DATA,
} from "../constants";
import { createReducer } from "./ReducerUtil";

const initialState = {
  isLoggedIn: false,
  loggedInUserData: null,
};

const updateLoggedInStatus = (state: any, payload: boolean) => {
  return {
    ...state,
    isLoggedIn: payload,
  };
};

const updateLoggedInUserData = (state: any, payload: any) => {
  return {
    ...state,
    loggedInUserData: payload,
  };
};

export default createReducer(initialState, {
  [UPDATE_LOGGED_IN_STATUS]: updateLoggedInStatus,
  [UPDATE_LOGGED_IN_USER_DATA]: updateLoggedInUserData,
});
