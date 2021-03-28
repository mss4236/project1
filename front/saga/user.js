import { all } from '@redux-saga/core/effects';
import axios from 'axios';

// 로그인 -----------------------------------------------------------------------------------------------------------
function loginAPI() {

}

function* login() {

}

function* watchLogin() {

}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
    ]);
}