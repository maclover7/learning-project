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
  try {
    const rawCountersResponse = yield call(fetchCounters);
    const rawCountersResponseDecoded = yield call(() => rawCountersResponse.json());
    const parsedCounters: ICounter[] = Object.values(rawCountersResponseDecoded);
    yield put(getCountersSuccess(parsedCounters));
  } catch (e) {
    yield put(getCountersFailure());
  }
}

export function* counterSaga() {
  yield takeLatest(Actions.GetCounters, onGetCounters);
}
