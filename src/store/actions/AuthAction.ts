import {
  UPDATE_LOGGED_IN_STATUS,
  UPDATE_LOGGED_IN_USER_DATA,
} from "../constants";

export const updateLoggedInStatus = (payload: boolean) => (dispatch: any) => {
  dispatch({
    type: UPDATE_LOGGED_IN_STATUS,
    payload,
  });
};

export const updateLoggedInUserData = (payload: any) => (dispatch: any) => {
  dispatch({
    type: UPDATE_LOGGED_IN_USER_DATA,
    payload,
  });
};
