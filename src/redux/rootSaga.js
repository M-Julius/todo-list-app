import { all, fork } from 'redux-saga/effects';
import { watchGetUsers } from '../features/users/userSaga';

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
  ]);
}
