import { all, takeLatest, call, select, put } from "redux-saga/effects";
import { getFetch } from "../../../../api/fetchData";

import { Post } from "../../../model/post";

import {
  startFetchingPost,
  getAllPost,
  setLoading,
  loadingError,
} from "./post.slice";

function* handlePostLoading() {
  try {
    yield put(setLoading(true));
    const endpoint = `posts`;
    const response: Post[] = yield call(getFetch, endpoint);

    if (response) {
      yield put(getAllPost(response));
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingError("error"));
    yield put(setLoading(false));
  }
}

export default function* postSaga() {
  yield all([takeLatest(startFetchingPost, handlePostLoading)]);
}
