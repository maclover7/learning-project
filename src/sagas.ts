import { call, put, takeLatest } from 'redux-saga/effects';
import fetchCounters from './api';
import {
  ICounterAction,
  Actions,
  getCountersFailure,
  getCountersSuccess
} from './actions';
import { ICounter } from './types';

export function* onGetCounters(action: ICounterAction) {
  const rawCountersResponse = yield call(fetchCounters);
  console.log(rawCountersResponse);
  if (rawCountersResponse.status === 200) {
    const parsedCounters: ICounter[] = Object.values(rawCountersResponse.data);
    yield put(getCountersSuccess(parsedCounters));
  } else {
    yield put(getCountersFailure());
  }
}

export function* counterSaga() {
  yield takeLatest(Actions.GetCounters, onGetCounters);
}
