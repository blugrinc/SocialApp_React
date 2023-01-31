import { all, fork } from "redux-saga/effects";
import postSaga from "../app/page/Posts/store/post.saga";


export default function* rootSaga() {
    yield all([
        fork(postSaga)
    ]);
}


