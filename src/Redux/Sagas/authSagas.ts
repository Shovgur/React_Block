import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, all, call } from "redux-saga/effects";
import { registerUser } from "../Reducer/authReducer";
import { registerUserPayload } from "../Types/auth";
import API from "../utls/api"
function* registerUserWorker(action: PayloadAction<registerUserPayload>) {
const { data: registerData, callback} = action.payload


const {ok,problem} = yield call (API.registerUser, registerData)
if(ok){
  callback()
}else{
console.warn('Error while register user:', problem)
}
}


export default function* authSaga() {
  yield all([
    takeLatest(registerUser, registerUserWorker)
]);
}
