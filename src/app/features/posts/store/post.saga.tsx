import { all, takeLatest, call, put } from "redux-saga/effects";
import { postApi } from "../../../../api/postApi";

import { Post } from "../../../model/post";

import {
  startFetchingPost,
  getAllPost,
  setLoading,
  loadingError,
  deletePost,
  addPost,
  editPost,
} from "./post.slice";

function* loadPostListSaga() {
  try {
    yield put(setLoading(true));
    const endpoint = `posts`;
    const response: Post[] = yield call(postApi.getAll, endpoint);

    if (response) {
      console.log("SAGA/LOADING", response);
      yield put(getAllPost(response));
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingError("error"));
    yield put(setLoading(false));
  }
}

function* deletePostSaga(action: { payload: Post }) {
  try {
    yield put(setLoading(true));
    const endpoint = `posts/${action.payload.id}`;
    const deletePost: Post = yield call(postApi.delete, endpoint);

    if (deletePost) {
      console.log("SAGA/DELETE", action.payload);
    }
  } catch (error) {
    console.log(error);
    yield put(loadingError("error"));
    yield put(setLoading(false));
  }
}

function* addPostSaga(action: { payload: Post }) {
  const dataPost = action.payload;

  try {
    yield put(setLoading(true));
    const endpoint = "posts";
    const addPost: Post = yield call(postApi.add, endpoint, dataPost);

    if (addPost) {
      console.log("SAGA/ADD", action.payload);
    }
  } catch (error) {
    console.log(error);
    yield put(loadingError("error"));
    yield put(setLoading(false));
  }
}

function* patchPostSaga(action: { payload: Post }) {
  const dataPost = action.payload;

  try {
    yield put(setLoading(true));
    const endpoint = `posts/${action.payload.id}`;
    const patchPost: Post = yield call(postApi.patch, endpoint, dataPost);

    if (patchPost) {
      console.log("SAGA/PATCH", action.payload);
    }
  } catch (error) {
    console.log(error);
    yield put(loadingError("error"));
    yield put(setLoading(false));
  }
}

export default function* postSaga() {
  yield all([
    takeLatest(startFetchingPost, loadPostListSaga),
    takeLatest(deletePost, deletePostSaga),
    takeLatest(addPost, addPostSaga),
    takeLatest(editPost, patchPostSaga),
  ]);
}
