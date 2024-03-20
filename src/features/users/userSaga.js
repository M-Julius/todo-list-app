import { put, takeLatest } from "redux-saga/effects";
import { getUsersAction, getUsersErrorAction, getUsersSuccessAction } from "./userSlice";
import axios from 'axios';

export function* getUsersSagas() {
    try {
      const response = yield axios.get('https://jsonplaceholder.typicode.com/users');
      yield put(getUsersSuccessAction(response.data));
    } catch (error) {
      yield put(getUsersErrorAction(error.message));
    }
  }
  
  export function* watchGetUsers() {
    yield takeLatest(getUsersAction.type, getUsersSagas);
  }
  