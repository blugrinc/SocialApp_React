import { all, fork } from "redux-saga/effects";
import postSaga from "../app/features/posts/store/post.saga";


export default function* rootSaga() {
    yield all([
        fork(postSaga)
    ]);
}


