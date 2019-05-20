import { call, put, takeLatest } from 'redux-saga/effects';
import { onGetCounters, counterSaga } from '../src/sagas';
import {
  Actions,
  getCounters,
  getCountersFailure,
  getCountersSuccess,
} from '../src/actions';
import fetchCounters from '../src/api';

it('will fetch counters on action', () => {
  const generator = counterSaga();
  put(getCounters());
  const actualNext = generator.next().value;

  expect(actualNext).toEqual(takeLatest(Actions.GetCounters, onGetCounters));
  expect(generator.next().done).toEqual(true);
});

it('will fetch counters - failure', () => {
  const generator = onGetCounters(getCounters());

  expect(generator.next().value).toEqual(call(fetchCounters));
  // TODO: Fix this test
  //expect(generator.next().value).toEqual(put(getCountersFailure()));
  //expect(generator.next().done).toEqual(true);
});

it('will fetch counters - success', () => {
  const generator = onGetCounters(getCounters());

  expect(generator.next().value).toEqual(call(fetchCounters));
  // TODO: Fix this test
  //expect(generator.next().value).toEqual(put(getCountersFailure()));
  //expect(generator.next().done).toEqual(true);
});
