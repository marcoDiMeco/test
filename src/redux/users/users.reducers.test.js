import reducer from "./users.reducer";

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_MORE_USERS_REQUEST,
  GET_MORE_USERS_SUCCESS,
} from "./users.types";

const initialState = {
  isLoading: false,
  isPaginationLoading: false,
  data: [],
  error: false,
};

describe("users reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_USERS_REQUEST", () => {
    const action = {
      type: GET_USERS_REQUEST,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it("should handle GET_USERS_SUCCESS", () => {
    const action = {
      type: GET_USERS_SUCCESS,
      data: [],
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      data: action.data,
    });
  });

  it("should handle GET_USERS_FAILURE", () => {
    const action = {
      type: GET_USERS_FAILURE,
      error: true,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      isPaginationLoading: false,
      error: action.error,
      data: [],
    });
  });

  it("should handle GET_MORE_USERS_REQUEST", () => {
    const action = {
      type: GET_MORE_USERS_REQUEST,
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isPaginationLoading: true,
    });
  });

  it("should handle GET_MORE_USERS_SUCCESS", () => {
    const action = {
      type: GET_MORE_USERS_SUCCESS,
      data: [],
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isPaginationLoading: false,
      data: action.data,
    });
  });
});
