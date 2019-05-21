import { call, put, takeLatest } from 'redux-saga/effects';
import fetchCounters from '../api';
import {
  ICounterAction,
  Actions,
  downloadCountersFailure,
  downloadCountersSuccess
} from '../actions';
import { ICounter } from '../types';

export function* onDownloadCounters(action: ICounterAction) {
  try {
    const rawCountersResponse = yield call(fetchCounters);
    const rawCountersResponseDecoded = yield call(() => rawCountersResponse.json());
    const parsedCounters: ICounter[] = Object.values(rawCountersResponseDecoded);
    yield put(downloadCountersSuccess(parsedCounters));
  } catch (e) {
    yield put(downloadCountersFailure());
  }
}

export function* counterSaga() {
  yield takeLatest(Actions.DownloadCounters, onDownloadCounters);
}
