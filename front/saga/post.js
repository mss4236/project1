import { all, fork } from '@redux-saga/core/effects';
import axios from 'axios';

// 로그인 -----------------------------------------------------------------------------------------------------------
function loadMainPostsAPI() {

}

function* loadMainPosts() {

}

function* watchLoadMainPosts() {

}

export default function* postSaga() {
    yield all([
        fork(watchLoadMainPosts),
    ]);
}