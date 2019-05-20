import { runSaga } from 'redux-saga';
import { onGetCounters } from '../src/sagas';
import { getCounters, getCountersSuccess } from '../src/actions';
import fetchMock from 'fetch-mock';

it('will fetch counters - success', async () => {
  const expectedCounters = [{ count: 6 }, { count: 4 }, { count: 2 }, { count: 1 }];
  fetchMock.mock('https://api.myjson.com/bins/ywmke', expectedCounters);

  const dispatched: any[] = [];
  const result = await runSaga({
    dispatch: (action) => { dispatched.push(action) },
  }, onGetCounters, getCounters()).toPromise();

  expect(dispatched).toEqual([ getCountersSuccess(expectedCounters) ]);

  fetchMock.restore();
});
