import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_MORE_USERS_REQUEST,
  GET_MORE_USERS_SUCCESS,
} from "./users.types";

const getInitialState = () => {
  return {
    isLoading: false,
    isPaginationLoading: false,
    data: [],
    error: false,
  };
};

const initialState = getInitialState();

const users = (state = initialState, action) => {

  const types = {
    [GET_USERS_REQUEST]: () => ({
      ...state,
      isLoading: true,
      error: false,
    }),
    [GET_USERS_SUCCESS]: () => ({
      ...state,
      isLoading: false,
      error: false,
      data: action.data,
    }),
    [GET_USERS_FAILURE]: () => ({
      ...state,
      isLoading: false,
      isPaginationLoading: false,
      error: true,
      data: [],
    }),
    [GET_MORE_USERS_REQUEST]: () => ({
      ...state,
      isPaginationLoading: true,
      error: false,
    }),
    [GET_MORE_USERS_SUCCESS]: () => ({
      ...state,
      isPaginationLoading: false,
      error: false,
      data: [...state.data, ...action.data],
    }),
  };

  if (!types[action.type]) {
    return state;
  }

  return types[action.type]();
};

export default users;
