import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from "../constants/userConstants";

export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true, error: null, data: [] };
    case GET_USERS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case GET_USERS_FAIL:
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
