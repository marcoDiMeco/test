import { GET_USERS_REQUEST, GET_MORE_USERS_REQUEST } from "./users.types";

export const requestUsers = (amount) => {
  return {
    type: GET_USERS_REQUEST,
    amount,
  };
};

export const requestMoreUsers = (amount) => {
  return {
    type: GET_MORE_USERS_REQUEST,
    amount,
    moreUsers: true,
  };
};
