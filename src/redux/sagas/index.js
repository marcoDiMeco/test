import { all } from "redux-saga/effects";

import { usersActionWatcher } from "./UsersSagas";

export default function* rootSaga() {
  yield all([usersActionWatcher()]);
}
