import { all } from "redux-saga/effects";
import authSaga from "./authSagas";

export function* rootSaga() {
    yield all ([authSaga()])
}