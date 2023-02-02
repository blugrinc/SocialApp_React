import { all, takeLatest, call, select, put } from "redux-saga/effects";
import { userApi } from "../../../../api/userApi";

import { User } from "../../../model/user";

import { startFetchingUser } from "./user.slice";
import { getAllUser } from "./user.slice";

function* loadUserListSaga() {
  try {
    const endpoint = `users`;
    const response: User[] = yield call(userApi.getAll, endpoint);
    if (response) {
      yield put(getAllUser(response));
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield all([takeLatest(startFetchingUser, loadUserListSaga)]);
}
