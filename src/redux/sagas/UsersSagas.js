import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_MORE_USERS_REQUEST,
  GET_MORE_USERS_SUCCESS,
} from "../users/users.types";

export function* usersActionWatcher() {
  yield takeLatest(GET_USERS_REQUEST, fetchUsers);
  yield takeLatest(GET_MORE_USERS_REQUEST, fetchUsers);
}

function* fetchUsers(action) {
  try {
    const response = yield call(
      fetch,
      `https://randomuser.me/api/?results=${action.amount}`,
      {
        mode: "cors",
        crossDomain: true,
        responseType: "json",
      }
    );
    const body = yield call([response, "json"]);
    yield put({
      type: action.moreUsers ? GET_MORE_USERS_SUCCESS : GET_USERS_SUCCESS,
      data: body.results,
    });
  } catch (error) {
    yield put({ type: GET_USERS_FAILURE, error });
  }
}
