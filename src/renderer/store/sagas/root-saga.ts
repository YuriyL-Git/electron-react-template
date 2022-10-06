import { all } from 'redux-saga/effects';
import { randomNumberWatcher } from './random-number';

export function* rootSaga(): Generator {
  yield all([
    randomNumberWatcher(),
    // add the rest of the watchers here
  ]);
}
