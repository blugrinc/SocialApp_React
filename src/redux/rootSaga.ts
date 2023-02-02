import { all, fork } from "redux-saga/effects";
import postSaga from "../app/features/posts/store/post.saga";
import userSaga from "../app/features/users/store/user.saga";


export default function* rootSaga() {
    yield all([
        fork(postSaga), fork(userSaga)
    ]);
}


