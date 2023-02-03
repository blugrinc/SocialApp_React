import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { postApi } from "../../../../api/postApi";
import { selectPage } from "./post.selector";
import { Post } from "../../../model/post";
import {
  startFetchingPost,
  startFetchingComments,
  getAllPost,
  getAllComment,
  setLoading,
  loadingError,
  deletePost,
  addPost,
  editPost,
} from "./post.slice";
import { Comment } from "../../../model/comment";

//LOADER FUNCTION TEST
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//SAGA
function* loadPostListSaga() {
  try {
    yield put(setLoading(true));
    /*     
    const endpoint = `posts`;
    const response: Post[] = yield call(postApi.getAll, endpoint); 
    */
    const page: number = yield select(selectPage);
    const endpoint = `posts?_limit=10&_page=${page}`;
    const response: Post[] = yield call(postApi.getAll, endpoint);

    yield delay(1500); //LOADING TEST

    if (response) {
      console.log("SAGA/LOADING/POST", response);
      yield put(getAllPost(response));
      yield put(setLoading(false));
    }
  } catch (error) {
    console.log(error);
    yield put(loadingError("error"));
    yield put(setLoading(false));
  }
}
function* loadCommentListSaga() {
  try {
    yield put(setLoading(true));
    const page: number = yield select(selectPage);
    const endpoint = `comments?_limit=50&_page=${page}`;
    const response: Comment[] = yield call(postApi.getAll, endpoint);

    if (response) {
      console.log("SAGA/LOADING/COMMENT", response);
      yield put(getAllComment(response));
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
      yield put(setLoading(false));
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
      yield put(setLoading(false));
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
      yield put(setLoading(false));
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
    takeLatest(startFetchingComments, loadCommentListSaga),
    takeLatest(deletePost, deletePostSaga),
    takeLatest(addPost, addPostSaga),
    takeLatest(editPost, patchPostSaga),
  ]);
}
